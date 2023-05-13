var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var axios = require('axios');
var cheerio = require('cheerio');
var time = require('console');
var showdown = require('showdown');
/** Fetches the repo owner and name for each repo on the GitHub trending page
 * @param {number} timeMode 0: daily; 1: weekly; 2: monthly
 * @returns {string[]} an array that stores alternatingly the owner and the name of each repo
 */
function fetchRepos(timeMode) {
    return __awaiter(this, void 0, void 0, function () {
        var timeModes, response, $_1, repos_1, trendingSplit, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    timeModes = ['daily', 'weekly', 'monthly'];
                    return [4 /*yield*/, axios.get('https://github.com/trending?since=' + timeModes[timeMode])];
                case 1:
                    response = _a.sent();
                    $_1 = cheerio.load(response.data);
                    repos_1 = [];
                    $_1('h2 a').each(function (i, el) {
                        var repoName = $_1(el).text().trim();
                        repos_1.push(repoName);
                    });
                    trendingSplit = [];
                    // trim the repos to be correctly formatted
                    repos_1.forEach(function (repo) {
                        var trimmedName = repo.replace(/\n\s+/g, '');
                        trimmedName = trimmedName.replace(/\//g, "");
                        var stringSplit = trimmedName.split(" ");
                        trendingSplit.push(stringSplit[0]);
                        trendingSplit.push(stringSplit[1]);
                    });
                    return [2 /*return*/, trendingSplit];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**  This function imports the ReadMe.md file for a repository (if it can be located)
* @param {string} owner - owner of the repo
* @param {string} name - name of the repo
* @returns {string} a string containing the text of the repo. Returns null if the repo can't be located
*/
function getReadme(owner, name) {
    return __awaiter(this, void 0, void 0, function () {
        var readmePaths, i, response, content, converter, html, html2, text, text2, text3, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    readmePaths = ["https://raw.githubusercontent.com/".concat(owner, "/").concat(name, "/release/readme.md"), "https://raw.githubusercontent.com/".concat(owner, "/").concat(name, "/dev/README.rst"), "https://raw.githubusercontent.com/".concat(owner, "/").concat(name, "/main/README.md"), "https://raw.githubusercontent.com/".concat(owner, "/").concat(name, "/master/README.md")];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < readmePaths.length)) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, axios.get(readmePaths[i])];
                case 3:
                    response = _a.sent();
                    content = response.data;
                    converter = new showdown.Converter();
                    html = converter.makeHtml(content);
                    html2 = html.toString();
                    text = html2.replace(/<[^>]*>/g, '');
                    text2 = text.replace(/\n\s+/g, '');
                    text3 = text2.replace(/\//g, "");
                    return [2 /*return*/, text3];
                case 4:
                    error_2 = _a.sent();
                    return [3 /*break*/, 5];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    console.log("ReadMe couldn't be found");
                    return [2 /*return*/, null];
            }
        });
    });
}
/** Gets the repo's information via GitHub's GraphQL API
 * @param {string} query GraphQL query for the repo (including owner and name)
 * @param {string} authToken personal authorization token
 * @returns {any[]} the json data for the requested repo as by the graphql query; null on error
 */
function getRepoInfo(query, authToken) {
    return __awaiter(this, void 0, void 0, function () {
        var response, output, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('https://api.github.com/graphql', {
                            query: query
                        }, {
                            headers: {
                                'Authorization': authToken
                            }
                        })];
                case 1:
                    response = _a.sent();
                    output = response.data.data.repository;
                    return [2 /*return*/, output];
                case 2:
                    error_3 = _a.sent();
                    console.log('Error2: ' + error_3);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/** Creates the ELI5 of the repository by passing the readme to chatgpt
 * @param {string} readME readMe file of the repository as a string
 * @param {string} OPENAI_API_KEY api key for OpenAI
 * @returns {string} the summary by ChatGPT of the repo
 */
function openAIRequestTurbo(readME, OPENAI_API_KEY) {
    return __awaiter(this, void 0, void 0, function () {
        var question, response, data, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    question = "The following text describes a prorgamming project that is current in development. Explain to me what the project is trying to archieve without telling me" +
                        "how they are doing so. Please use arround 50 words and don't get too technical" +
                        readME;
                    return [4 /*yield*/, fetch("https://api.openai.com/v1/chat/completions", {
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
                                        content: "You are a Computer Science Teacher to his students without tehcnical knowledge",
                                    },
                                    {
                                        role: "user",
                                        content: question,
                                    },
                                ],
                            }),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    content = data.choices[0].message.content;
                    return [2 /*return*/, content];
            }
        });
    });
}
/** Method to scrape the star history from a repo
 * @param {string} owner Owner of the repository
 * @param {string} repo Repository name
 * @param {string} authToken AuthToken for GitHub API
 * @returns {[date: 'DATE', count: 'COUNT']}: { date: '2023-05-10', count: 1549 }
 * => on error empty array and error message
 */
function fetchRepositoryStars(owner, repo, authToken) {
    return __awaiter(this, void 0, void 0, function () {
        var query, headers, hasNextPage, endCursor, starHistoryList, variables, response, starsData, pageInfo, error_4, mergedArray, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "\n    query ($owner: String!, $repo: String!, $cursor: String) {\n      repository(owner: $owner, name: $repo) {\n        stargazers(first: 100, orderBy: { field: STARRED_AT, direction: DESC }, after: $cursor) {\n          totalCount\n          edges {\n            starredAt\n            node {\n              login\n            }\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n    }\n  ";
                    headers = {
                        'Authorization': authToken
                    };
                    hasNextPage = true;
                    endCursor = null;
                    starHistoryList = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    _a.label = 2;
                case 2:
                    if (!hasNextPage) return [3 /*break*/, 4];
                    variables = {
                        owner: owner,
                        repo: repo,
                        cursor: endCursor
                    };
                    return [4 /*yield*/, axios.post('https://api.github.com/graphql', { query: query, variables: variables }, { headers: headers })];
                case 3:
                    response = _a.sent();
                    starsData = response.data.data.repository.stargazers.edges;
                    starHistoryList.push(starsData);
                    pageInfo = response.data.data.repository.stargazers.pageInfo;
                    hasNextPage = pageInfo.hasNextPage;
                    endCursor = pageInfo.endCursor || null;
                    variables.cursor = endCursor;
                    return [3 /*break*/, 2];
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    console.error('Error:', error_4);
                    return [2 /*return*/, []];
                case 6:
                    mergedArray = [].concat.apply([], starHistoryList);
                    return [4 /*yield*/, starHistory(mergedArray)];
                case 7:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    });
}
/** Transforms an array of all the logged stars timestamps into a merged array with the star History
 * @param {[starredAt: 'TIME', node: {Object} ]} starsData Array with the timestamps of the star history
 * @returns {[date: 'DATE', count: 'COUNT']}:  { date: '2023-05-13', count: 515 }
 */
function starHistory(starsData) {
    return __awaiter(this, void 0, void 0, function () {
        var dateCounts, result;
        return __generator(this, function (_a) {
            dateCounts = {};
            starsData.forEach(function (item) {
                var date = item.starredAt.split('T')[0]; // Extract date portion
                dateCounts[date] = (dateCounts[date] || 0) + 1; // Increment count for the date
            });
            result = Object.keys(dateCounts).map(function (date) { return ({
                date: date,
                count: dateCounts[date]
            }); });
            return [2 /*return*/, result];
        });
    });
}
/** Get trending developers (and their trending repos) from the github page
 * @param {number} userInput describes the timeframe; 0: daily, 1: weekly; 2: monthly
 * @returns   list of {name: 'NAME', username: 'USERNAME', repo: 'REPO'}
 */
function fetchDevelopers(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var timeModes;
        return __generator(this, function (_a) {
            timeModes = ['daily', 'weekly', 'monthly'];
            axios.get('https://github.com/trending/developers?since=' + timeModes[userInput]).then(function (response) {
                var html = response.data;
                var $ = cheerio.load(html);
                var developers = [];
                var developerRepos = [];
                // get the developer names and usernames
                $('h1.h3.lh-condensed a').each(function (i, el) {
                    var _a;
                    var name = $(el).text().trim();
                    var username = (_a = $(el).attr('href')) === null || _a === void 0 ? void 0 : _a.substr(1);
                    developers.push({ name: name, username: username });
                });
                // get the repo name
                $('h1.h4.lh-condensed a').each(function (i, el) {
                    var _a;
                    var repo = (_a = $(el).attr('href')) === null || _a === void 0 ? void 0 : _a.substr(1);
                    // check if the repo exists
                    if (repo) {
                        var split = repo.split("/");
                        var username = split[0];
                        var repoName = split[1];
                        developerRepos.push({ username: username, repo: repoName });
                    }
                });
                // correctly merge the two arrays
                var repo = "";
                var developersWithRepos = developers.map(function (developer) {
                    var matchingRepo = developerRepos.find(function (repo) { return repo.username === developer.username; });
                    return __assign(__assign({}, developer), (matchingRepo || { repo: repo }));
                });
                return developersWithRepos;
            }).catch(function (error) {
                console.log(error);
            });
            return [2 /*return*/];
        });
    });
}
/** Main function to test the functionality of the different methods
 * and how to correctly call them and what the intended workflow is about
 * @param Github and OpenAI token still have to be added manually
 */
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var timeMode, trendingSplit, authToken, OPENAI_API_KEY, i, owner, name_1, query, output, stars, readme, answer, result, developers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timeMode = 0;
                    console.log("TimeMode: " + timeMode);
                    return [4 /*yield*/, fetchRepos(timeMode)];
                case 1:
                    trendingSplit = _a.sent();
                    authToken = "Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
                    OPENAI_API_KEY = "sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
                    // check if any repos were actually found
                    if (!trendingSplit) {
                        console.log("Repos couldn't be scraped");
                        process.exit();
                    }
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < trendingSplit.length / 2)) return [3 /*break*/, 9];
                    owner = trendingSplit[2 * i];
                    name_1 = trendingSplit[2 * i + 1];
                    query = "query {\n      repository(owner: \"".concat(owner, "\", name: \"").concat(name_1, "\") {\n        name    \n        description\n        url\n        createdAt\n        stargazers {\n          totalCount\n        }\n        forks {\n          totalCount\n        }\n        primaryLanguage {\n          name\n        }\n      }\n    }");
                    return [4 /*yield*/, getRepoInfo(query, authToken)];
                case 3:
                    output = _a.sent();
                    console.log(output);
                    stars = output.stargazers.totalCount;
                    if (stars < 1000) {
                        console.log("Wouldn't provide this entity to the frontend");
                    }
                    return [4 /*yield*/, getReadme(owner, name_1)];
                case 4:
                    readme = _a.sent();
                    if (!(readme != null)) return [3 /*break*/, 6];
                    return [4 /*yield*/, openAIRequestTurbo(readme, OPENAI_API_KEY)];
                case 5:
                    answer = _a.sent();
                    console.log(answer);
                    _a.label = 6;
                case 6: return [4 /*yield*/, fetchRepositoryStars(owner, name_1, authToken)];
                case 7:
                    result = _a.sent();
                    console.log(result);
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [4 /*yield*/, fetchDevelopers(timeMode)];
                case 10:
                    developers = _a.sent();
                    console.log(developers);
                    return [2 /*return*/];
            }
        });
    });
}
main();
