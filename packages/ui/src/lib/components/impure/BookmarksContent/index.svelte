<script lang="ts">
	import FilterHeader from '$lib/components/impure/FilterHeader/index.svelte';
	import UserIcon from 'lucide-svelte/icons/user';
	import UsersRoundIcon from 'lucide-svelte/icons/users-round';
	import GitPullRequestArrow from 'lucide-svelte/icons/git-pull-request-arrow';
	import CircleDotIcon from 'lucide-svelte/icons/circle-dot';
	import GitForkIcon from 'lucide-svelte/icons/git-fork';
	import StarIcon from 'lucide-svelte/icons/star';
	import FolderGit2Icon from 'lucide-svelte/icons/folder-git-2';
	import DataTable from '$lib/components/impure/DataTable/index.svelte';
	const columns = [
		{ title: 'Owner Login', icon1: UserIcon, type: 'text', sortDisabled: false, sortAsc: false },
		{ title: 'Repo Name', icon1: FolderGit2Icon, type: 'text', sortDisabled: true, sortAsc: false },
		{
			title: 'Stars',
			icon1: StarIcon,
			type: 'number',
			sortDisabled: true,
			sortAsc: false,
			filters: [
				{ operator: '>', value: 1000 },
				{ operator: '<', value: 500 },
				{ operator: '!=', value: 1000 }
			]
		},
		{ title: 'Issues', icon1: CircleDotIcon, type: 'number', sortDisabled: true, sortAsc: false },
		{
			title: 'Forks',
			icon1: GitForkIcon,
			type: 'number',
			sortDisabled: true,
			sortAsc: false,
			filters: [{ operator: '!=', value: 2000 }],
			disabled: true
		},
		{
			title: 'Contributors',
			icon1: UsersRoundIcon,
			type: 'number',
			sortDisabled: true,
			sortAsc: false
		},
		{
			title: 'Pull Requests',
			icon1: GitPullRequestArrow,
			type: 'number',
			sortDisabled: true,
			sortAsc: false
		},
		{
			title: 'Issues/Contr.',
			icon1: CircleDotIcon,
			icon2: UsersRoundIcon,
			type: 'number',
			sortDisabled: true,
			sortAsc: false
		},
		{
			title: 'Forks/Contr.',
			icon1: GitForkIcon,
			icon2: UsersRoundIcon,
			type: 'number',
			sortDisabled: true,
			sortAsc: false
		}
	].sort((a, b) => a.title.localeCompare(b.title));

	let data = {
		maxStars: 100,
		maxIssues: 100,
		maxForks: 100,
		maxContributors: 100,
		maxForksPerContributor: 100,
		maxIssuesPerContributor: 100,
		maxOpenPullRequests: 100,
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 0
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
				openPullRequests: 54
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
				openPullRequests: 432434
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
				openPullRequests: 5345
			}
		]
	};
</script>

<FilterHeader {columns} />
<DataTable {data} />
