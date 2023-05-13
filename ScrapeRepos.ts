const axios = require('axios');
const cheerio = require('cheerio');
const time = require('console');
const showdown = require('showdown');


/** Fetches the repo owner and name for each repo on the GitHub trending page
 * @param {number} timeMode 0: daily; 1: weekly; 2: monthly
 * @returns {string[]} an array that stores alternatingly the owner and the name of each repo
 */
async function fetchRepos( timeMode: number) {
  try {
    const timeModes = ['daily', 'weekly', 'monthly'];
    const response = await axios.get('https://github.com/trending?since=' + timeModes[timeMode]);
    const $ = cheerio.load(response.data);
    const repos: string[] = [];

    $('h2 a').each((i: number, el: cheerio.Element) => {
      const repoName = $(el).text().trim();
      repos.push(repoName);
    });
    
    var trendingSplit: string[] = [];
    // trim the repos to be correctly formatted
    repos.forEach((repo) => {
      let trimmedName = repo.replace(/\n\s+/g, '');
      trimmedName = trimmedName.replace(/\//g, "");
      const stringSplit = trimmedName.split(" ");
      trendingSplit.push(stringSplit[0]);
      trendingSplit.push(stringSplit[1]);
    });

    return trendingSplit;
  } catch (error) {
    console.error(error);
  }
}


/**  This function imports the ReadMe.md file for a repository (if it can be located)
* @param {string} owner - owner of the repo
* @param {string} name - name of the repo
* @returns {string} a string containing the text of the repo. Returns null if the repo can't be located
*/
async function getReadme(owner: String, name: String) {
  // these paths exists to check in multiple locations for the readme files
  // these can be constantly expanded if new paths are being found
  const readmePaths = [`https://raw.githubusercontent.com/${owner}/${name}/release/readme.md`,
                          `https://raw.githubusercontent.com/${owner}/${name}/dev/README.rst`,
                        `https://raw.githubusercontent.com/${owner}/${name}/main/README.md`,
                        `https://raw.githubusercontent.com/${owner}/${name}/master/README.md`];
  
  for(let i = 0; i < readmePaths.length; i++){
    try{
      const response = await axios.get(readmePaths[i])
      const content = response.data
      const converter = new showdown.Converter();

      // Use the converter object to convert Markdown to HTML to String:
      const html = converter.makeHtml(content);
      const html2 = html.toString();
      const text = html2.replace(/<[^>]*>/g, '');
      const text2 = text.replace(/\n\s+/g, '');
      const text3 = text2.replace(/\//g, "");
      return text3;
    }
    catch(error){
      
    }
  }
  console.log("ReadMe couldn't be found")
  return null
}
  

/** Gets the repo's information via GitHub's GraphQL API
 * @param {string} query GraphQL query for the repo (including owner and name)
 * @param {string} authToken personal authorization token
 * @returns {any[]} the json data for the requested repo as by the graphql query; null on error
 */
async function getRepoInfo(query: String, authToken: String){
  try{
    const response = await  axios.post('https://api.github.com/graphql', {
      query: query
    }, {
      headers: {
        'Authorization': authToken 
      }
    });
    const output = response.data.data.repository;
    return output;
  }
  catch(error){
    console.log('Error2: ' + error);
    return null
  }
}

  
/** Creates the ELI5 of the repository by passing the readme to chatgpt
 * @param {string} readME readMe file of the repository as a string
 * @param {string} OPENAI_API_KEY api key for OpenAI
 * @returns {string} the summary by ChatGPT of the repo
 */
async function openAIRequestTurbo(readME: String, OPENAI_API_KEY: string) {
  const question =
    "The following text describes a prorgamming project that is current in development. Explain to me what the project is trying to archieve without telling me" +
    "how they are doing so. Please use arround 50 words and don't get too technical" +
    readME;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPENAI_API_KEY
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a Computer Science Teacher to his students without tehcnical knowledge",
        },
        {
          role: "user",
          content: question,
        },
      ],
    }),
  });
  const data = await response.json();
  const content = data.choices[0].message.content;
  return content
}


/** Method to scrape the star history from a repo
 * @param {string} owner Owner of the repository
 * @param {string} repo Repository name
 * @param {string} authToken AuthToken for GitHub API
 * @returns {[date: 'DATE', count: 'COUNT']}: { date: '2023-05-10', count: 1549 } 
 * => on error empty array and error message
 */
async function fetchRepositoryStars(owner: string, repo: string, authToken: string) {
  const query = `
    query ($owner: String!, $repo: String!, $cursor: String) {
      repository(owner: $owner, name: $repo) {
        stargazers(first: 100, orderBy: { field: STARRED_AT, direction: DESC }, after: $cursor) {
          totalCount
          edges {
            starredAt
            node {
              login
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `;

  const headers = {
    'Authorization': authToken
  };

  let hasNextPage = true;
  let endCursor: string | null = null;

  let starHistoryList: any[] = []

  try {
    while (hasNextPage) {
      const variables: any = {
        owner,
        repo,
        cursor: endCursor
      };

      const response = await axios.post(
        'https://api.github.com/graphql',
        { query, variables },
        { headers }
      );
      const starsData = response.data.data.repository.stargazers.edges;
      starHistoryList.push(starsData)

      const pageInfo = response.data.data.repository.stargazers.pageInfo;
      hasNextPage = pageInfo.hasNextPage;
      endCursor = pageInfo.endCursor || null;

      variables.cursor = endCursor;
    }
  } catch (error) {
    console.error('Error:', error);
    return []
  }

  // get the real star history
  const mergedArray = [].concat(...starHistoryList);
  const result = await starHistory(mergedArray);
  return result
}
  

/** Transforms an array of all the logged stars timestamps into a merged array with the star History
 * @param {[starredAt: 'TIME', node: {Object} ]} starsData Array with the timestamps of the star history
 * @returns {[date: 'DATE', count: 'COUNT']}:  { date: '2023-05-13', count: 515 }
 */
async function starHistory(starsData: any[]) {
  const dateCounts: { [date: string]: number } = {};
  starsData.forEach((item) => {
    const date = item.starredAt.split('T')[0]; // Extract date portion
    dateCounts[date] = (dateCounts[date] || 0) + 1; // Increment count for the date
  });

  // Convert dateCounts object into an array of objects
  const result = Object.keys(dateCounts).map((date) => ({
    date,
    count: dateCounts[date]
  }));

  return result;
}  


/** Get trending developers (and their trending repos) from the github page
 * @param {number} userInput describes the timeframe; 0: daily, 1: weekly; 2: monthly
 * @returns   list of {name: 'NAME', username: 'USERNAME', repo: 'REPO'}
 */
async function fetchDevelopers(userInput: number){
  const timeModes = ['daily', 'weekly', 'monthly'];

  interface Developer {
    name: string;
    username: string |undefined;
  }

  interface DeveloperRepo {
    username: string |undefined;
    repo: string;
  }

  axios.get('https://github.com/trending/developers?since=' + timeModes[userInput]).then((response: { data: any; }) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const developers: Developer[] = [];
    const developerRepos: DeveloperRepo[] = []

    // get the developer names and usernames
    $('h1.h3.lh-condensed a').each((i: number, el: cheerio.Element) => {
      const name: string = $(el).text().trim();
      const username: string | undefined = $(el).attr('href')?.substr(1);
      developers.push({ name, username });
    });

    // get the repo name
    $('h1.h4.lh-condensed a').each((i: number, el: cheerio.Element) => {
      const repo: string | undefined = $(el).attr('href')?.substr(1);
      // check if the repo exists
      if (repo) {
        const split = repo.split("/");
        const username = split[0];
        const repoName = split[1];
        developerRepos.push({ username, repo: repoName });
      }
    });

    // correctly merge the two arrays
    const repo = "";
    const developersWithRepos = developers.map(developer => {
      const matchingRepo = developerRepos.find(repo => repo.username === developer.username);
      return { ...developer, ...(matchingRepo || {repo}) };
    });

    return developersWithRepos
  }).catch((error: any) => {
    console.log(error);
  });
}


/** Main function to test the functionality of the different methods
 * and how to correctly call them and what the intended workflow is about
 * @param Github and OpenAI token still have to be added manually
 */ 
async function main() {
  // Choose whether to scrape daily, weekly or monthly information
  const timeMode = 0
  console.log("TimeMode: " + timeMode)

  const trendingSplit: string[] | undefined= await fetchRepos(timeMode);
  
  // your personal GitHub authToken
  const authToken = `Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`;
  // //Authorization: "Bearer " + process.env.OPENAI_API_KEY,
  const OPENAI_API_KEY = "sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  
  // check if any repos were actually found
  if(!trendingSplit){
      console.log("Repos couldn't be scraped")
      process.exit()
  }

  for(let i = 0; i < trendingSplit.length / 2; i++){
    const owner = trendingSplit[2*i];
    const name = trendingSplit[2*i+1];
    const query = `query {
      repository(owner: "${owner}", name: "${name}") {
        name    
        description
        url
        createdAt
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        primaryLanguage {
          name
        }
      }
    }`;

    const output = await getRepoInfo(query, authToken)
    console.log(output)

    // check if the repo has more than a 1k stars
    const stars = output.stargazers.totalCount
    if(stars < 1000){
      console.log("Wouldn't provide this entity to the frontend")
    }

    const readme = await getReadme(owner, name)

    if(readme != null){
      // call openai api
      const answer = await openAIRequestTurbo(readme, OPENAI_API_KEY)
      console.log(answer)
    }

    // get the star history of the repo
    // await fetchRepositoryStars(owner, name, authToken)
    const result = await fetchRepositoryStars(owner, name, authToken)
    console.log(result)
  }
  // get the developers
  const developers = await fetchDevelopers(timeMode)
  console.log(developers)
  
}
main()
  