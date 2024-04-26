import { p as push, l as spread_props, b as pop, m as sanitize_props, c as slot, n as copy_payload, o as assign_payload } from "../../../chunks/index3.js";
import { v as validate_component, a as add_snippet_symbol } from "../../../chunks/validate.js";
import "../../../chunks/index7.js";
import { U as User, a as Users_round, F as FilterHeader } from "../../../chunks/index8.js";
import { F as Folder_git_2, S as Star, C as Circle_dot, G as Git_fork, a as Git_pull_request_arrow } from "../../../chunks/dropdown-menu-checkbox-item.js";
import "../../../chunks/client2.js";
import { D as DataTable } from "../../../chunks/index9.js";
import "clsx";
import { v4 } from "uuid";
import { I as Icon } from "../../../chunks/select-trigger.js";
function User_round($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "8", "r": "5" }
    ],
    ["path", { "d": "M20 21a8 8 0 0 0-16 0" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "user-round" },
    $$sanitized_props,
    {
      iconNode,
      children: add_snippet_symbol(($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `<!--]-->`;
      })
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
User_round.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function TrendingContent($$payload, $$props) {
  push();
  let filterData = {
    time: "Day",
    onTimeChange: (value) => {
      console.log(value);
      filterData.time = value;
    },
    onSortUpdate: (oldIndex, newIndex) => {
      console.log(newIndex, oldIndex);
      const copy = filterData.sortableItems[newIndex];
      filterData.sortableItems[newIndex] = filterData.sortableItems[oldIndex];
      filterData.sortableItems[oldIndex] = copy;
    },
    onFilterAdd: (id) => {
      const index = filterData.filterableItems.findIndex((item) => item.id === id);
      filterData.filterableItems[index].filters.push({ id: v4(), operator: "gt", value: 0 });
    },
    onFilterChange: (id, newFilter) => {
      console.log(id, newFilter);
      const index = filterData.filterableItems.findIndex((item) => item.id === id);
      const filterIndex = filterData.filterableItems[index].filters.findIndex((f) => f.id === newFilter.id);
      filterData.filterableItems[index].filters[filterIndex] = newFilter;
    },
    onFilterRemove: (id, filter) => {
      const index = filterData.filterableItems.findIndex((item) => item.id === id);
      filterData.filterableItems[index].filters = filterData.filterableItems[index].filters.filter((item) => item.id !== filter.id);
    },
    onColumnCheckChange: (id) => {
      console.log(id);
      const index = filterData.columns.findIndex((item) => item.id === id);
      filterData.columns[index].checked = !filterData.columns[index].checked;
      data2 = {
        ...data2,
        hiddenColumnIdArr: filterData.columns.filter((col) => !col.checked).map((col) => col.id)
      };
    },
    sortableItems: [
      {
        id: "ownerLogin",
        title: "Owner Login",
        icon1: User
      },
      {
        id: "repoName",
        title: "Repo Name",
        icon1: Folder_git_2
      },
      { id: "stars", title: "Stars", icon1: Star },
      {
        id: "issues",
        title: "Issues",
        icon1: Circle_dot
      },
      {
        id: "forks",
        title: "Forks",
        icon1: Git_fork
      },
      {
        id: "contributors",
        title: "Contributors",
        icon1: Users_round
      },
      {
        id: "pullRequests",
        title: "Pull Requests",
        icon1: Git_pull_request_arrow
      },
      {
        id: "issuesPerContributor",
        title: "Issues/Contr.",
        icon1: Circle_dot,
        icon2: Users_round
      },
      {
        id: "starsPerContributor",
        title: "Stars/Contr.",
        icon1: Star,
        icon2: Users_round
      },
      {
        id: "forksPerContributor",
        title: "Forks/Contr.",
        icon1: Git_fork,
        icon2: Users_round
      }
    ].sort((a, b) => a.title.localeCompare(b.title)).map((item, index) => {
      return {
        ...item,
        disabled: true,
        isAsc: false,
        onClick: (id) => {
          const index2 = filterData.sortableItems.findIndex((item2) => item2.id === id);
          filterData.sortableItems[index2].disabled = !filterData.sortableItems[index2].disabled;
        },
        onSortOrderChange: (id) => () => {
          const index2 = filterData.sortableItems.findIndex((item2) => item2.id === id);
          filterData.sortableItems[index2].isAsc = !filterData.sortableItems[index2].isAsc;
        }
      };
    }),
    filterableItems: [
      {
        id: "stars",
        title: "Stars",
        icon1: Star,
        filters: []
      },
      {
        id: "issues",
        title: "Issues",
        icon1: Circle_dot,
        filters: []
      },
      {
        id: "forks",
        title: "Forks",
        icon1: Git_fork,
        filters: []
      },
      {
        id: "contributors",
        title: "Contributors",
        icon1: Users_round,
        filters: []
      },
      {
        id: "pullRequests",
        title: "Pull Requests",
        icon1: Git_pull_request_arrow,
        filters: []
      },
      {
        id: "issuesPerContributor",
        title: "Issues/Contr.",
        icon1: Circle_dot,
        icon2: Users_round,
        filters: []
      },
      {
        id: "starsPerContributor",
        title: "Stars/Contr.",
        icon1: Star,
        icon2: Users_round,
        filters: []
      },
      {
        id: "forksPerContributor",
        title: "Forks/Contr.",
        icon1: Git_fork,
        icon2: Users_round,
        filters: []
      }
    ].sort((a, b) => a.title.localeCompare(b.title)),
    columns: [
      {
        id: "avatar",
        title: "Avatar",
        checked: true,
        icon1: User_round
      },
      {
        id: "name",
        title: "Name",
        checked: true,
        icon1: Folder_git_2
      },
      {
        id: "stars",
        title: "Stars",
        checked: true,
        icon1: Star
      },
      {
        id: "issues",
        title: "Issues",
        checked: true,
        icon1: Circle_dot
      },
      {
        id: "forks",
        title: "Forks",
        checked: true,
        icon1: Git_fork
      },
      {
        id: "contributors",
        title: "Contributors",
        checked: true,
        icon1: Users_round
      },
      {
        id: "pullRequests",
        title: "Pull Requests",
        checked: true,
        icon1: Git_pull_request_arrow
      },
      {
        id: "issuesPerContributor",
        title: "Issues/Contr.",
        checked: true,
        icon1: Circle_dot,
        icon2: Users_round
      },
      {
        id: "forksPerContributor",
        title: "Forks/Contr.",
        checked: true,
        icon1: Git_fork,
        icon2: Users_round
      },
      {
        id: "starsPerContributor",
        title: "Stars/Contr.",
        checked: true,
        icon1: Star,
        icon2: Users_round
      },
      {
        id: "pullRequestsPerContributor",
        title: "PRs/Contr.",
        checked: true,
        icon1: Git_pull_request_arrow,
        icon2: Users_round
      }
    ].sort((a, b) => a.title.localeCompare(b.title))
  };
  let data2 = {
    hiddenColumnIdArr: filterData.columns.filter((col) => !col.checked).map((col) => col.id),
    maxStars: 100,
    maxIssues: 100,
    maxForks: 100,
    maxContributors: 100,
    maxForksPerContributor: 100,
    maxIssuesPerContributor: 100,
    maxPullRequests: 100,
    maxStarsPerContributor: 100,
    maxPullRequestsPerContributor: 100,
    avatarSort: "none",
    nameSort: "asc",
    starSort: "desc",
    issueSort: "none",
    forkSort: "none",
    starsPerContributorSort: "none",
    contributorSort: "none",
    forksPerContributorSort: "none",
    issuesPerContributorSort: "none",
    pullRequestSort: "none",
    pullRequestsPerContributorSort: "none",
    rows: [
      {
        id: "1",
        avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
        githubOwnerLogin: "mojombo",
        githubRepositoryName: "grit",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequests: 0,
        pullRequestsPerContributor: 54354,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 2,
        avatarUrl: "https://avatars.githubusercontent.com/u/69631?s=48&v=4",
        githubOwnerLogin: "ant-design",
        githubRepositoryName: "ant-design",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        openPullRequests: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 3,
        avatarUrl: "https://avatars.githubusercontent.com/u/69634?s=48&v=4",
        githubOwnerLogin: "mojombo",
        githubRepositoryName: "grit",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        openPullRequests: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 4,
        avatarUrl: "https://avatars.githubusercontent.com/u/65651?s=48&v=4",
        githubOwnerLogin: "storybookjs",
        githubRepositoryName: "storybook",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        openPullRequests: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 5,
        avatarUrl: "https://avatars.githubusercontent.com/u/61631?s=48&v=4",
        githubOwnerLogin: "mojombo",
        githubRepositoryName: "grit",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        openPullRequests: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 6,
        avatarUrl: "https://avatars.githubusercontent.com/u/62631?s=48&v=4",
        githubOwnerLogin: "oven-sh",
        githubRepositoryName: "bun",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 7,
        avatarUrl: "https://avatars.githubusercontent.com/u/64631?s=48&v=4",
        githubOwnerLogin: "enaqx",
        githubRepositoryName: "awesome-react",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 8,
        avatarUrl: "https://avatars.githubusercontent.com/u/69531?s=48&v=4",
        githubOwnerLogin: "leonardomso",
        githubRepositoryName: "33-js-concepts",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 9,
        avatarUrl: "https://avatars.githubusercontent.com/u/6961?s=48&v=4",
        githubOwnerLogin: "apache",
        githubRepositoryName: "superset",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 10,
        avatarUrl: "https://avatars.githubusercontent.com/u/6441?s=48&v=4",
        githubOwnerLogin: "frain-dev",
        githubRepositoryName: "convoy",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 11,
        avatarUrl: "https://avatars.githubusercontent.com/u/6441?s=48&v=4",
        githubOwnerLogin: "apache",
        githubRepositoryName: "airavata",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 12,
        avatarUrl: "https://avatars.githubusercontent.com/u/64412?s=48&v=4",
        githubOwnerLogin: "nebo15",
        githubRepositoryName: "multiverse",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 13,
        avatarUrl: "https://avatars.githubusercontent.com/u/6432?s=48&v=4",
        githubOwnerLogin: "wp-sms",
        githubRepositoryName: "wp-sms",
        stars: 18400,
        issues: 0,
        forks: 0,
        contributors: 0,
        forksPerContributor: 0,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 14,
        avatarUrl: "https://avatars.githubusercontent.com/u/6221?s=48&v=4",
        githubOwnerLogin: "flant",
        githubRepositoryName: "netgwm",
        stars: 18400,
        issues: 0,
        forks: 5,
        contributors: 543,
        forksPerContributor: 0,
        issuesPerContributor: 45,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 15,
        avatarUrl: "https://avatars.githubusercontent.com/u/4441?s=48&v=4",
        githubOwnerLogin: "twbs",
        githubRepositoryName: "bootstrap",
        stars: 18400,
        issues: 0,
        forks: 5345,
        contributors: 0,
        forksPerContributor: 5345,
        issuesPerContributor: 0,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 16,
        avatarUrl: "https://avatars.githubusercontent.com/u/5441?s=48&v=4",
        githubOwnerLogin: "electron",
        githubRepositoryName: "electron",
        stars: 18400,
        issues: 543,
        forks: 543,
        contributors: 543,
        forksPerContributor: 6546,
        issuesPerContributor: 4335535,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 17,
        avatarUrl: "https://avatars.githubusercontent.com/u/5221?s=48&v=4",
        githubOwnerLogin: "rails",
        githubRepositoryName: "rail",
        stars: 18400,
        issues: 43,
        forks: 432,
        contributors: 34,
        forksPerContributor: 34,
        issuesPerContributor: 45,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 17,
        avatarUrl: "https://avatars.githubusercontent.com/u/3421?s=48&v=4",
        githubOwnerLogin: "parcel-bundler",
        githubRepositoryName: "parcel",
        stars: 18400,
        issues: 435,
        forks: 34,
        contributors: 5435,
        forksPerContributor: 5435,
        issuesPerContributor: 5435,
        pullRequestsPerContributor: 54354,
        pullRequests: 43544,
        starsPerContributor: 54354,
        eli5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    validate_component(FilterHeader)($$payload2, {
      get data() {
        return filterData;
      },
      set data($$value) {
        filterData = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]--> <!--[-->`;
    validate_component(DataTable)($$payload2, {
      get data() {
        return data2;
      },
      set data($$value) {
        data2 = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
TrendingContent.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push();
  $$payload.out += `<!--[-->`;
  validate_component(TrendingContent)($$payload, {});
  $$payload.out += `<!--]-->`;
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
