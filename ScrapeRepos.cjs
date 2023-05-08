const axios = require('axios');
const cheerio = require('cheerio');
const { time } = require('console');
const { pathToArray } = require('graphql/jsutils/Path');
const showdown = require('showdown');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const gitHubGraphQL = 'https://api.github.com/graphql';

/** Fetches the repo owner and name for each repo on the GitHub trending page
 * @param userInput 0: daily; 1: weekly; 2: monthly
 * @returns an array that stores alternatingly the owner and the name of each repo
 */
async function fetchRepos(userInput) {
  try {
    const timeModes = ['?since=daily', '?since=weekly', '?since=monthly'];
    const pathGitHubTrending = 'https://github.com/trending';
    const response = await axios.get(pathGitHubTrending + timeModes[userInput]);
    const $ = cheerio.load(response.data);
    const repos = [];

    $('h2 a').each((i, el) => {
      const repoName = $(el).text().trim();
      repos.push(repoName);
    });
    
    var trendingSplit = [];
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
* @param owner - owner of the repo
* @param name - name of the repo
* @returns a string containing the text of the repo
*           returns null if the repo can't be located
*/
async function getReadme(owner, name) {
  // the following paths are used to try out various possible locations where the readMe files
  // could be located at. If a readMe file of a repository is found at a different path
  // it can be added here to find an even higher percentage of read me files
  const readmePaths = [`https://raw.githubusercontent.com/${owner}/${name}/release/readme.md`,
                         `https://raw.githubusercontent.com/${owner}/${name}/dev/README.rst`,
                        `https://raw.githubusercontent.com/${owner}/${name}/main/README.md`,
                        `https://raw.githubusercontent.com/${owner}/${name}/master/README.md`];
 
  for(i = 0; i < readmePaths.length; i++){
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
      console.log(error)
    }
  }
  return null
}

/** Gets the repo's information via GitHub's GraphQL API
 * @param query GraphQL query for the repo (including owner and name)
 * @param authToken personal authorization token
 * @returns the json data for the requested repo as by the graphql query
 */
async function getRepoInfo(query, authToken){
  try{
    const response = await  axios.post(gitHubGraphQL, {
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
    console.log(error);
    return null
  }
}

//TODO needs documentation, returns and revision!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
/** Creates the ELI5 of the repository by passing the readme to chatgpt
 * @param readME readMe file of the repository
 * @returns SHOULD return the summary of the repo
 */
async function openAIRequestTurbo(readME) {
  const OPENAI_API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const question =
    "The following text describes a prorgamming project that is current in development. Explain to me what the project is trying to archieve without telling me" +
    "how they are doing so. Please use arround 50 words and don't get too technical" +
    readME;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_API_KEY,
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
  console.log(data)
}

/** Get trending developers (and their repos) from the github page
 * @param userInput describes the timeframe; 0: daily, 1: weekly; 2: monthly
 * @returns   list of {name: 'NAME', username: 'USERNAME', repo: 'REPO'}
 */
async function fetchDevelopers(userInput){
  const timeModes = ['?since=daily', '?since=weekly', '?since=monthly'];
  axios.get('https://github.com/trending/developers' + timeModes[userInput]).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const developers = [];
    const developerRepos = []

    // get the developer names and usernames
    $('h1.h3.lh-condensed a').each((i, el) => {
      const name = $(el).text().trim();
      const username = $(el).attr('href').substr(1);
      developers.push({ name, username });
    });

    // get the repo name
    $('h1.h4.lh-condensed a').each((i, el) =>{
      var repo = $(el).attr('href').substr(1);
      const split = repo.split("/")
      var repo = split[1]
      var username = split[0]
      developerRepos.push({username, repo})
    });

    // correctly merge the two arrays
    const repo = "";
    const developersWithRepos = developers.map(developer => {
      const matchingRepo = developerRepos.find(repo => repo.username === developer.username);
      return { ...developer, ...(matchingRepo || {repo}) };
    });

    return developersWithRepos
  }).catch((error) => {
    console.log(error);
  });
}

async function main() {
  // 0: daily; 1: weekly; 2: monthly
  const trendingSplit = await fetchRepos(0);
  
  // your personal GitHub authToken
  const authToken = `Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`;

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
      const answer = await openAIRequestTurbo(readme)
      console.log(answer)
    }

  }
  // get the developers
  const developers = await fetchDevelopers(userInput)
  console.log(developers)
  
}
main()

