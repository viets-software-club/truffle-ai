<script lang="ts">
	import HnSentiment from '$lib/components/impure/HnSentiment/index.svelte';
	import Notes from '$lib/components/impure/Notes/index.svelte';
	import RepoSidebar from '$lib/components/impure/RepoSidebar/index.svelte';
	import ChartView from '$lib/components/impure/ChartView/index.svelte';
	import DataTable from '$lib/components/impure/DataTable/index.svelte';
	import GitCompareIcon from 'lucide-svelte/icons/git-compare';
	type Props = {
		title: string;
	};
	let { title = 'web tech' }: Props = $props();

	let data2 = $state({
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
		avatarSort: 'none',
		nameSort: 'asc',
		starSort: 'desc',
		issueSort: 'none',
		forkSort: 'none',
		starsPerContributorSort: 'none',
		contributorSort: 'none',
		forksPerContributorSort: 'none',
		issuesPerContributorSort: 'none',
		pullRequestSort: 'none',
		pullRequestsPerContributorSort: 'none',
		rows: [
			{
				id: '1',
				avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
				githubOwnerLogin: 'mojombo',
				githubRepositoryName: 'grit',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequests: 0,
				pullRequestsPerContributor: 54354,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 2,
				avatarUrl: 'https://avatars.githubusercontent.com/u/69631?s=48&v=4',
				githubOwnerLogin: 'ant-design',
				githubRepositoryName: 'ant-design',
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
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 3,
				avatarUrl: 'https://avatars.githubusercontent.com/u/69634?s=48&v=4',
				githubOwnerLogin: 'mojombo',
				githubRepositoryName: 'grit',
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
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 4,
				avatarUrl: 'https://avatars.githubusercontent.com/u/65651?s=48&v=4',
				githubOwnerLogin: 'storybookjs',
				githubRepositoryName: 'storybook',
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
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 5,
				avatarUrl: 'https://avatars.githubusercontent.com/u/61631?s=48&v=4',
				githubOwnerLogin: 'mojombo',
				githubRepositoryName: 'grit',
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
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 6,
				avatarUrl: 'https://avatars.githubusercontent.com/u/62631?s=48&v=4',
				githubOwnerLogin: 'oven-sh',
				githubRepositoryName: 'bun',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 7,
				avatarUrl: 'https://avatars.githubusercontent.com/u/64631?s=48&v=4',
				githubOwnerLogin: 'enaqx',
				githubRepositoryName: 'awesome-react',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 8,
				avatarUrl: 'https://avatars.githubusercontent.com/u/69531?s=48&v=4',
				githubOwnerLogin: 'leonardomso',
				githubRepositoryName: '33-js-concepts',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 9,
				avatarUrl: 'https://avatars.githubusercontent.com/u/6961?s=48&v=4',
				githubOwnerLogin: 'apache',
				githubRepositoryName: 'superset',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 10,
				avatarUrl: 'https://avatars.githubusercontent.com/u/6441?s=48&v=4',
				githubOwnerLogin: 'frain-dev',
				githubRepositoryName: 'convoy',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 11,
				avatarUrl: 'https://avatars.githubusercontent.com/u/6441?s=48&v=4',
				githubOwnerLogin: 'apache',
				githubRepositoryName: 'airavata',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 12,
				avatarUrl: 'https://avatars.githubusercontent.com/u/64412?s=48&v=4',
				githubOwnerLogin: 'nebo15',
				githubRepositoryName: 'multiverse',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 13,
				avatarUrl: 'https://avatars.githubusercontent.com/u/6432?s=48&v=4',
				githubOwnerLogin: 'wp-sms',
				githubRepositoryName: 'wp-sms',
				stars: 18400,
				issues: 0,
				forks: 0,
				contributors: 0,
				forksPerContributor: 0,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 14,
				avatarUrl: 'https://avatars.githubusercontent.com/u/6221?s=48&v=4',
				githubOwnerLogin: 'flant',
				githubRepositoryName: 'netgwm',
				stars: 18400,
				issues: 0,
				forks: 5,
				contributors: 543,
				forksPerContributor: 0,
				issuesPerContributor: 45,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 15,
				avatarUrl: 'https://avatars.githubusercontent.com/u/4441?s=48&v=4',
				githubOwnerLogin: 'twbs',
				githubRepositoryName: 'bootstrap',
				stars: 18400,
				issues: 0,
				forks: 5345,
				contributors: 0,
				forksPerContributor: 5345,
				issuesPerContributor: 0,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 16,
				avatarUrl: 'https://avatars.githubusercontent.com/u/5441?s=48&v=4',
				githubOwnerLogin: 'electron',
				githubRepositoryName: 'electron',
				stars: 18400,
				issues: 543,
				forks: 543,
				contributors: 543,
				forksPerContributor: 6546,
				issuesPerContributor: 4335535,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 17,
				avatarUrl: 'https://avatars.githubusercontent.com/u/5221?s=48&v=4',
				githubOwnerLogin: 'rails',
				githubRepositoryName: 'rail',
				stars: 18400,
				issues: 43,
				forks: 432,
				contributors: 34,
				forksPerContributor: 34,
				issuesPerContributor: 45,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				id: 17,
				avatarUrl: 'https://avatars.githubusercontent.com/u/3421?s=48&v=4',
				githubOwnerLogin: 'parcel-bundler',
				githubRepositoryName: 'parcel',
				stars: 18400,
				issues: 435,
				forks: 34,
				contributors: 5435,
				forksPerContributor: 5435,
				issuesPerContributor: 5435,
				pullRequestsPerContributor: 54354,
				pullRequests: 43544,
				starsPerContributor: 54354,
				eli5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		]
	});
</script>

<section class="h-[3.75rem]"></section>

<div class="md:flex h-full">
	<div class="w-full">
		<section class="border-t px-8 py-6">
			<div class="flex items-center gap-4 mb-5">
				<GitCompareIcon class="w-8 h-8 text-foreground/50" />
				<h1 class="text-2xl font-bold">{title}</h1>
			</div>
		</section>
		<section class="border-t"><ChartView /></section>

		<section class="border-t">
			<DataTable data={data2} />
		</section>
	</div>
</div>
