import { p as push, l as spread_props, b as pop, m as sanitize_props, c as slot, d as push_element, e as pop_element, g as escape, t as bind_props } from "../../../../../chunks/index3.js";
import { C as ChartView } from "../../../../../chunks/index10.js";
import { D as DataTable } from "../../../../../chunks/index9.js";
import { I as Icon } from "../../../../../chunks/select-trigger.js";
import { v as validate_component, a as add_snippet_symbol } from "../../../../../chunks/validate.js";
function Git_compare($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "18", "cy": "18", "r": "3" }
    ],
    [
      "circle",
      { "cx": "6", "cy": "6", "r": "3" }
    ],
    ["path", { "d": "M13 6h3a2 2 0 0 1 2 2v7" }],
    ["path", { "d": "M11 18H8a2 2 0 0 1-2-2V9" }]
  ];
  $$payload.out += `<!--[-->`;
  validate_component(Icon)($$payload, spread_props([
    { name: "git-compare" },
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
Git_compare.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function CompareContent($$payload, $$props) {
  push();
  let { title = "web tech" } = $$props;
  let data2 = {
    hiddenColumnIdArr: [],
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
  $$payload.out += `<section class="h-[3.75rem]">`;
  push_element("section", $$payload);
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <div class="md:flex h-full">`;
  push_element("div", $$payload);
  $$payload.out += `<div class="w-full">`;
  push_element("div", $$payload);
  $$payload.out += `<section class="border-t px-8 py-6">`;
  push_element("section", $$payload);
  $$payload.out += `<div class="flex items-center gap-4 mb-5">`;
  push_element("div", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(Git_compare)($$payload, { class: "w-8 h-8 text-foreground/50" });
  $$payload.out += `<!--]--> <h1 class="text-2xl font-bold">`;
  push_element("h1", $$payload);
  $$payload.out += `${escape(title)}</h1>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</section>`;
  pop_element();
  $$payload.out += ` <section class="border-t">`;
  push_element("section", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(ChartView)($$payload, {});
  $$payload.out += `<!--]--></section>`;
  pop_element();
  $$payload.out += ` <section class="border-t">`;
  push_element("section", $$payload);
  $$payload.out += `<!--[-->`;
  validate_component(DataTable)($$payload, { data: data2 });
  $$payload.out += `<!--]--></section>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  $$payload.out += `</div>`;
  pop_element();
  pop();
}
CompareContent.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push();
  const prerender = false;
  $$payload.out += `<!--[-->`;
  validate_component(CompareContent)($$payload, { title: "web technologies" });
  $$payload.out += `<!--]-->`;
  bind_props($$props, { prerender });
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
