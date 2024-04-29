import { p as push, k as copy_payload, l as assign_payload, b as pop } from "../../../../chunks/index3.js";
import { v as validate_component } from "../../../../chunks/validate.js";
import { F as Folder_git_2, U as Users_round, G as Git_pull_request_arrow, a as User_round, b as FilterHeader, D as DataTable } from "../../../../chunks/index8.js";
import { S as Star, C as Circle_dot, G as Git_fork, B as BookmarkTableDocument, O as OrderByDirection } from "../../../../chunks/dropdown-menu-checkbox-item.js";
import { c as client } from "../../../../chunks/index6.js";
import "clsx";
import { v4 } from "uuid";
function BookmarksContent($$payload, $$props) {
  push();
  let data = {
    hiddenColumnIdArr: [],
    avatarSort: "none",
    nameSort: "none",
    starSort: "none",
    issueSort: "none",
    forkSort: "none",
    contributorSort: "none",
    forksPerContributorSort: "none",
    issuesPerContributorSort: "none",
    openPullRequestsSort: "none"
  };
  function query() {
    client.query({
      query: BookmarkTableDocument,
      variables: {
        filter: {
          and: filterData.filterableItems.filter((item) => item.filters && item.filters.length > 0).flatMap((item) => {
            return item.filters.map((filter) => {
              return {
                [item.id]: { [filter.operator]: filter.value }
              };
            });
          })
        },
        orderBy: filterData.sortableItems.filter((item) => !item.disabled).map((item) => {
          return {
            [item.id]: item.isAsc ? OrderByDirection.AscNullsLast : OrderByDirection.DescNullsLast
          };
        })
      }
    }).then((res) => {
      data = {
        ...data,
        time: void 0,
        hiddenColumnIdArr: filterData.columns.filter((col) => !col.checked).map((col) => col.id),
        maxStars: res.data.queryStargazerMax?.edges[0]?.node.stargazerCount,
        minStars: res.data.queryStargazerMin?.edges[0]?.node.stargazerCount,
        maxForks: res.data.queryForkMax?.edges[0]?.node.forkCount,
        minForks: res.data.queryForkMin?.edges[0]?.node.forkCount,
        maxContributors: res.data.queryContributorMax?.edges[0]?.node.contributorCount,
        minContributors: res.data.queryContributorMin?.edges[0]?.node.contributorCount,
        maxForksPerContributor: res.data.queryForksPerContributorMax?.edges[0]?.node.forksPerContributor,
        minForksPerContributor: res.data.queryForksPerContributorMin?.edges[0]?.node.forksPerContributor,
        maxIssuesPerContributor: res.data.queryIssuesPerContributorMax?.edges[0]?.node.issuesPerContributor,
        minIssuesPerContributor: res.data.queryIssuesPerContributorMin?.edges[0]?.node.issuesPerContributor,
        maxOpenPullRequests: res.data.queryPullRequestsMax?.edges[0]?.node.pullRequestsTotalCount,
        minOpenPullRequests: res.data.queryPullRequestsMin?.edges[0]?.node.pullRequestsTotalCount,
        maxStarsPerContributor: res.data.queryStargazersPerContributorMax?.edges[0]?.node.stargazersPerContributor,
        minStarsPerContributor: res.data.queryStargazersPerContributorMin?.edges[0]?.node.stargazersPerContributor,
        rows: res.data.queryTrending?.edges.map(({ node }) => ({
          id: `${node.gthbOwner.gthbOwnerLogin}-${node.gthbRepoName}`,
          avatarUrl: node.gthbOwner.avatarUrl,
          githubOwnerLogin: node.gthbOwner.gthbOwnerLogin,
          githubRepositoryName: node.gthbRepoName,
          stars: parseInt(node.stargazerCount),
          issues: parseInt(node.issuesTotalCount),
          forks: parseInt(node.forkCount),
          starsPerContributor: parseInt(node.stargazersPerContributor),
          pullRequestsPerContributor: parseInt(node.pullRequestsPerContributor),
          contributors: parseInt(node.contributorCount),
          forksPerContributor: parseInt(node.forksPerContributor),
          issuesPerContributor: parseInt(node.issuesPerContributor),
          pullRequests: parseInt(node.pullRequestsTotalCount),
          eli5: node.gthbRepoDescription
        }))
      };
    });
  }
  let filterData = {
    onSortUpdate: (oldIndex, newIndex) => {
      const copy = filterData.sortableItems[newIndex];
      filterData.sortableItems[newIndex] = filterData.sortableItems[oldIndex];
      filterData.sortableItems[oldIndex] = copy;
      query();
    },
    onFilterAdd: (id) => {
      const index = filterData.filterableItems.findIndex((item) => item.id === id);
      filterData.filterableItems[index].filters.push({ id: v4(), operator: "gt", value: 0 });
      query();
    },
    onFilterChange: (id, newFilter) => {
      const index = filterData.filterableItems.findIndex((item) => item.id === id);
      const filterIndex = filterData.filterableItems[index].filters.findIndex((f) => f.id === newFilter.id);
      filterData.filterableItems[index].filters[filterIndex] = newFilter;
      query();
    },
    onFilterRemove: (id, filter) => {
      const index = filterData.filterableItems.findIndex((item) => item.id === id);
      filterData.filterableItems[index].filters = filterData.filterableItems[index].filters.filter((item) => item.id !== filter.id);
      query();
    },
    onColumnCheckChange: (id) => {
      const index = filterData.columns.findIndex((item) => item.id === id);
      filterData.columns[index].checked = !filterData.columns[index].checked;
      data = {
        ...data,
        hiddenColumnIdArr: filterData.columns.filter((col) => !col.checked).map((col) => col.id)
      };
    },
    sortableItems: [
      {
        id: "gthbRepoName",
        title: "Repo Name",
        icon1: Folder_git_2
      },
      {
        id: "stargazerCount",
        title: "Stars",
        icon1: Star
      },
      {
        id: "issuesTotalCount",
        title: "Issues",
        icon1: Circle_dot
      },
      {
        id: "forkCount",
        title: "Forks",
        icon1: Git_fork
      },
      {
        id: "contributorCount",
        title: "Contributors",
        icon1: Users_round
      },
      {
        id: "pullRequestTotalCount",
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
        id: "stargazersPerContributor",
        title: "Stars/Contr.",
        icon1: Star,
        icon2: Users_round
      },
      {
        id: "forksPerContributor",
        title: "Forks/Contr.",
        icon1: Git_fork,
        icon2: Users_round
      },
      {
        id: "pullRequestsPerContributor",
        title: "PRs/Contr.",
        icon1: Git_pull_request_arrow,
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
          query();
        }
      };
    }),
    filterableItems: [
      {
        id: "stargazerCount",
        title: "Stars",
        icon1: Star,
        filters: []
      },
      {
        id: "issuesTotalCount",
        title: "Issues",
        icon1: Circle_dot,
        filters: []
      },
      {
        id: "forkCount",
        title: "Forks",
        icon1: Git_fork,
        filters: []
      },
      {
        id: "contributorCount",
        title: "Contributors",
        icon1: Users_round,
        filters: []
      },
      {
        id: "pullRequestsTotalCount",
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
    if (data.rows) {
      $$payload2.out += `<!--[-->`;
      {
        $$payload2.out += `<!--[-->`;
        validate_component(DataTable)($$payload2, { data });
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
      $$payload2.out += "<!--]-->";
    } else {
      $$payload2.out += "<!--]!-->";
    }
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
BookmarksContent.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push();
  $$payload.out += `<!--[-->`;
  validate_component(BookmarksContent)($$payload, {});
  $$payload.out += `<!--]-->`;
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
