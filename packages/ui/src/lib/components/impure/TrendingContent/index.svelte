<script lang="ts">
	import FilterHeader from '$lib/components/impure/FilterHeader/index.svelte';
	import UserIcon from 'lucide-svelte/icons/user';
	import UsersRoundIcon from 'lucide-svelte/icons/users-round';
	import GitPullRequestArrow from 'lucide-svelte/icons/git-pull-request-arrow';
	import CircleDotIcon from 'lucide-svelte/icons/circle-dot';
	import GitForkIcon from 'lucide-svelte/icons/git-fork';
	import StarIcon from 'lucide-svelte/icons/star';
	import FolderGit2Icon from 'lucide-svelte/icons/folder-git-2';
	import client from '$lib/graphql/supabase/client';
	import DataTable from '$lib/components/impure/DataTable/index.svelte';
	import {
		OrderByDirection,
		TrendingTableDocument,
		type TrendingTableQuery as TrendingTableQueryType
	} from '$lib/graphql/supabase/generated-codegen';
	import type { ApolloQueryResult } from '@apollo/client';
	import { NonableSortOrder } from '$lib/utils';
	import { UserRoundIcon } from 'lucide-svelte';
	import { v4 as uuidv4 } from 'uuid';
	let data: any = $state({
		hiddenColumnIdArr: [],
		avatarSort: 'none',
		nameSort: 'none',
		starSort: 'none',
		issueSort: 'none',
		forkSort: 'none',
		contributorSort: 'none',
		forksPerContributorSort: 'none',
		issuesPerContributorSort: 'none',
		openPullRequestsSort: 'none'
	});

	function query() {
		client
			.query({
				query: TrendingTableDocument,
				variables: {
					filter: {
						and: filterData.filterableItems.map((item) => {
							return {
								[item.id]: item.filters.map((filter) => {
									const f = filter as { operator: string; value: number };
									return {
										[f.operator]: f.value
									};
								})
							};
						})
					},
					orderBy: filterData.sortableItems.map((item) => {
						return {
							[item.id]: item.isAsc ? OrderByDirection.AscNullsLast : OrderByDirection.DescNullsLast
						};
					})
				}
			})
			.then((res: ApolloQueryResult<TrendingTableQueryType>) => {
				data = {
					...data,
					hiddenColumnIdArr: filterData.columns.filter((col) => !col.checked).map((col) => col.id),
					maxStars: res.data.queryStargazerMax?.edges[0]?.node.stargazerCount,
					minStars: res.data.queryStargazerMin?.edges[0]?.node.stargazerCount,
					maxForks: res.data.queryForkMax?.edges[0]?.node.forkCount,
					minForks: res.data.queryForkMin?.edges[0]?.node.forkCount,
					maxContributors: res.data.queryContributorMax?.edges[0]?.node.contributorCount,
					minContributors: res.data.queryContributorMin?.edges[0]?.node.contributorCount,
					maxForksPerContributor:
						res.data.queryForksPerContributorMax?.edges[0]?.node.forksPerContributor,
					minForksPerContributor:
						res.data.queryForksPerContributorMin?.edges[0]?.node.forksPerContributor,
					maxIssuesPerContributor:
						res.data.queryIssuesPerContributorMax?.edges[0]?.node.issuesPerContributor,
					minIssuesPerContributor:
						res.data.queryIssuesPerContributorMin?.edges[0]?.node.issuesPerContributor,
					maxOpenPullRequests: res.data.queryPullRequestsMax?.edges[0]?.node.pullRequestsTotalCount,
					minOpenPullRequests: res.data.queryPullRequestsMin?.edges[0]?.node.pullRequestsTotalCount,
					maxStarsPerContributor:
						res.data.queryStargazersPerContributorMax?.edges[0]?.node.stargazersPerContributor,
					minStarsPerContributor:
						res.data.queryStargazersPerContributorMin?.edges[0]?.node.stargazersPerContributor,
					rows: res.data.queryTrending?.edges.map(({ node }) => ({
						id: `${node.gthbOwner.gthbOwnerLogin}-${node.gthbRepoName}`,
						avatarUrl: node.gthbOwner.avatarUrl,
						githubOwnerLogin: node.gthbOwner.gthbOwnerLogin,
						githubRepositoryName: node.gthbRepoName,
						stars: node.stargazerCount,
						issues: node.issuesTotalCount,
						forks: node.forkCount,
						contributors: node.contributorCount,
						forksPerContributor: node.forksPerContributor,
						issuesPerContributor: node.issuesPerContributor,
						openPullRequests: node.pullRequestsTotalCount,
						eli5: node.gthbRepoDescription
					}))
				};
			});
	}
	$effect(() => {
		query();
	});

	// id: string | number;
	// 	title: string;
	// 	icon1: any;
	// 	icon2?: any;
	// 	type: string;
	// 	sortOptions: {
	// 		sortable: boolean;
	// 		disabled: boolean;
	// 		isAsc: boolean;
	// 		onToggle: (value: boolean) => void;
	// 	};
	// 	filters?: Filter[];
	// 	disabled?: boolean;

	let filterData = $state({
		time: 'Day',
		onTimeChange: (value: string) => {
			console.log(value);
			filterData.time = value;
		},
		onSortUpdate: (oldIndex: number, newIndex: number) => {
			console.log(newIndex, oldIndex);
			const copy = filterData.sortableItems[newIndex];
			filterData.sortableItems[newIndex] = filterData.sortableItems[oldIndex];
			filterData.sortableItems[oldIndex] = copy;
		},
		onFilterAdd: (id: string | number) => {
			const index = filterData.filterableItems.findIndex((item) => item.id === id);
			(
				filterData.filterableItems[index].filters as {
					id: string | number;
					operator: string;
					value: number;
				}[]
			).push({
				id: uuidv4(),
				operator: 'gt',
				value: 0
			});
		},
		onFilterChange: (
			id: string | number,
			newFilter: { id: string | number; operator: string; value: number }
		) => {
			console.log(id, newFilter);
			const index = filterData.filterableItems.findIndex((item) => item.id === id);
			const filterIndex = (
				filterData.filterableItems[index].filters as {
					id: string | number;
					operator: string;
					value: number;
				}[]
			).findIndex((f) => f.id === newFilter.id);
			(
				filterData.filterableItems[index].filters as {
					id: string | number;
					operator: string;
					value: number;
				}[]
			)[filterIndex] = newFilter;
		},
		onFilterRemove: (
			id: string | number,
			filter: { id: string | number; operator: string; value: number }
		) => {
			const index = filterData.filterableItems.findIndex((item) => item.id === id);
			(filterData.filterableItems[index].filters as {
				id: string | number;
				operator: string;
				value: number;
			}[]) = (
				filterData.filterableItems[index].filters as {
					id: string | number;
					operator: string;
					value: number;
				}[]
			).filter((item) => item.id !== filter.id);
		},
		onColumnCheckChange: (id: string | number) => {
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
				id: 'ownerLogin',
				title: 'Owner Login',
				icon1: UserIcon
			},
			{
				id: 'repoName',
				title: 'Repo Name',
				icon1: FolderGit2Icon
			},
			{
				id: 'stars',
				title: 'Stars',
				icon1: StarIcon
			},
			{
				id: 'issues',
				title: 'Issues',
				icon1: CircleDotIcon
			},
			{
				id: 'forks',
				title: 'Forks',
				icon1: GitForkIcon
			},
			{
				id: 'contributors',
				title: 'Contributors',
				icon1: UsersRoundIcon
			},
			{
				id: 'pullRequests',
				title: 'Pull Requests',
				icon1: GitPullRequestArrow
			},
			{
				id: 'issuesPerContributor',
				title: 'Issues/Contr.',
				icon1: CircleDotIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'starsPerContributor',
				title: 'Stars/Contr.',
				icon1: StarIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'forksPerContributor',
				title: 'Forks/Contr.',
				icon1: GitForkIcon,
				icon2: UsersRoundIcon
			}
		]
			.sort((a, b) => a.title.localeCompare(b.title))
			.map((item, index) => {
				return {
					...item,
					disabled: true,
					isAsc: false,
					onClick: (id: string | number) => {
						const index = filterData.sortableItems.findIndex((item) => item.id === id);
						filterData.sortableItems[index].disabled = !filterData.sortableItems[index].disabled;
					},
					onSortOrderChange: (id: string | number) => () => {
						const index = filterData.sortableItems.findIndex((item) => item.id === id);
						filterData.sortableItems[index].isAsc = !filterData.sortableItems[index].isAsc;
					}
				};
			}),
		filterableItems: [
			{
				id: 'stars',
				title: 'Stars',
				icon1: StarIcon,
				filters: []
			},
			{
				id: 'issues',
				title: 'Issues',
				icon1: CircleDotIcon,
				filters: []
			},
			{
				id: 'forks',
				title: 'Forks',
				icon1: GitForkIcon,
				filters: []
			},
			{
				id: 'contributors',
				title: 'Contributors',
				icon1: UsersRoundIcon,
				filters: []
			},
			{
				id: 'pullRequests',
				title: 'Pull Requests',
				icon1: GitPullRequestArrow,
				filters: []
			},
			{
				id: 'issuesPerContributor',
				title: 'Issues/Contr.',
				icon1: CircleDotIcon,
				icon2: UsersRoundIcon,
				filters: []
			},
			{
				id: 'starsPerContributor',
				title: 'Stars/Contr.',
				icon1: StarIcon,
				icon2: UsersRoundIcon,
				filters: []
			},
			{
				id: 'forksPerContributor',
				title: 'Forks/Contr.',
				icon1: GitForkIcon,
				icon2: UsersRoundIcon,
				filters: []
			}
		].sort((a, b) => a.title.localeCompare(b.title)),

		columns: [
			{
				id: 'avatar',
				title: 'Avatar',
				checked: true,
				icon1: UserRoundIcon
			},
			{
				id: 'name',
				title: 'Name',
				checked: true,
				icon1: FolderGit2Icon
			},
			{
				id: 'stars',
				title: 'Stars',
				checked: true,
				icon1: StarIcon
			},
			{
				id: 'issues',
				title: 'Issues',
				checked: true,
				icon1: CircleDotIcon
			},
			{
				id: 'forks',
				title: 'Forks',
				checked: true,
				icon1: GitForkIcon
			},
			{
				id: 'contributors',
				title: 'Contributors',
				checked: true,
				icon1: UsersRoundIcon
			},
			{
				id: 'pullRequests',
				title: 'Pull Requests',
				checked: true,
				icon1: GitPullRequestArrow
			},
			{
				id: 'issuesPerContributor',
				title: 'Issues/Contr.',
				checked: true,
				icon1: CircleDotIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'forksPerContributor',
				title: 'Forks/Contr.',
				checked: true,
				icon1: GitForkIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'starsPerContributor',
				title: 'Stars/Contr.',
				checked: true,
				icon1: StarIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'pullRequestsPerContributor',
				title: 'PRs/Contr.',
				checked: true,
				icon1: GitPullRequestArrow,
				icon2: UsersRoundIcon
			}
		].sort((a, b) => a.title.localeCompare(b.title))
	});

	// const columns = [
	// 	{
	// 		id: 'ownerLogin',
	// 		title: 'Owner Login',
	// 		icon1: UserIcon,
	// 		type: 'text',
	// 		sortOptions: {
	// 			disabled: false,
	// 			isAsc: false
	// 		},
	// 		disabled: false
	// 	},
	// 	{
	// 		id: 'repoName',
	// 		title: 'Repo Name',
	// 		icon1: FolderGit2Icon,
	// 		type: 'text',
	// 		sortOptions: {
	// 			disabled: false,
	// 			isAsc: false
	// 		},
	// 		disabled: false
	// 	},
	// 	{
	// 		id: 'stars',
	// 		title: 'Stars',
	// 		icon1: StarIcon,
	// 		type: 'number',
	// 		sortOptions: {
	// 			disabled: false,
	// 			isAsc: false
	// 		},
	// 		disabled: false,
	// 		filters: [
	// 			{ operator: '>', value: 1000 },
	// 			{ operator: '<', value: 500 },
	// 			{ operator: '!=', value: 1000 }
	// 		]
	// 	},
	// 	{
	// 		id: 'issues',
	// 		title: 'Issues',
	// 		icon1: CircleDotIcon,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false
	// 	},
	// 	{
	// 		id: 'forks',
	// 		title: 'Forks',
	// 		icon1: GitForkIcon,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false,
	// 		filters: [{ operator: '!=', value: 2000 }],
	// 		disabled: true
	// 	},
	// 	{
	// 		id: 'contributors',
	// 		title: 'Contributors',
	// 		icon1: UsersRoundIcon,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false
	// 	},
	// 	{
	// 		id: 'pullRequests',
	// 		title: 'Pull Requests',
	// 		icon1: GitPullRequestArrow,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false
	// 	},
	// 	{
	// 		id: 'issuesPerContributor',
	// 		title: 'Issues/Contr.',
	// 		icon1: CircleDotIcon,
	// 		icon2: UsersRoundIcon,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false
	// 	},
	// 	{
	// 		id: 'forksPerContributor',
	// 		title: 'Forks/Contr.',
	// 		icon1: GitForkIcon,
	// 		icon2: UsersRoundIcon,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false
	// 	},
	// 	{
	// 		id: 'starsPerContributor',
	// 		title: 'Stars/Contr.',
	// 		icon1: StarIcon,
	// 		icon2: UsersRoundIcon,
	// 		type: 'number',
	// 		sortDisabled: true,
	// 		sortAsc: false
	// 	}
	// ].sort((a, b) => a.title.localeCompare(b.title));

	let data2 = $state({
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

<FilterHeader bind:data={filterData} />
<DataTable bind:data={data2} />
<!-- <DataTable {data} /> -->
