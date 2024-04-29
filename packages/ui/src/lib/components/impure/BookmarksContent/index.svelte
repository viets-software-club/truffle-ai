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
		BookmarkTableDocument,
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
				query: BookmarkTableDocument,
				variables: {
					filter: {
						and: filterData.filterableItems
							.filter((item) => item.filters && item.filters.length > 0)
							.flatMap((item) => {
								return item.filters.map((filter: any) => {
									return {
										[item.id]: {
											[filter.operator]: filter.value
										}
									};
								});
								// return {
								// 	[item.id]: item.filters.map((filter: any) => {
								// 		const f = filter as { operator: string; value: string };
								// 		return {
								// 			[f.operator]: parseInt(f.value)
								// 		};
								// 	})
								// };
							})
					},
					orderBy: filterData.sortableItems
						.filter((item) => !item.disabled)
						.map((item) => {
							return {
								[item.id]: item.isAsc
									? OrderByDirection.AscNullsLast
									: OrderByDirection.DescNullsLast
							};
						})
				}
			})
			.then((res: ApolloQueryResult<TrendingTableQueryType>) => {
				data = {
					...data,
					time: undefined,
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
		onSortUpdate: (oldIndex: number, newIndex: number) => {
			const copy = filterData.sortableItems[newIndex];
			filterData.sortableItems[newIndex] = filterData.sortableItems[oldIndex];
			filterData.sortableItems[oldIndex] = copy;
			query();
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
			query();
		},
		onFilterChange: (
			id: string | number,
			newFilter: { id: string | number; operator: string; value: number }
		) => {
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
			query();
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
			query();
		},
		onColumnCheckChange: (id: string | number) => {
			const index = filterData.columns.findIndex((item) => item.id === id);
			filterData.columns[index].checked = !filterData.columns[index].checked;
			data = {
				...data,
				hiddenColumnIdArr: filterData.columns.filter((col) => !col.checked).map((col) => col.id)
			};
		},
		sortableItems: [
			{
				id: 'gthbRepoName',
				title: 'Repo Name',
				icon1: FolderGit2Icon
			},
			{
				id: 'stargazerCount',
				title: 'Stars',
				icon1: StarIcon
			},
			{
				id: 'issuesTotalCount',
				title: 'Issues',
				icon1: CircleDotIcon
			},
			{
				id: 'forkCount',
				title: 'Forks',
				icon1: GitForkIcon
			},
			{
				id: 'contributorCount',
				title: 'Contributors',
				icon1: UsersRoundIcon
			},
			{
				id: 'pullRequestTotalCount',
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
				id: 'stargazersPerContributor',
				title: 'Stars/Contr.',
				icon1: StarIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'forksPerContributor',
				title: 'Forks/Contr.',
				icon1: GitForkIcon,
				icon2: UsersRoundIcon
			},
			{
				id: 'pullRequestsPerContributor',
				title: 'PRs/Contr.',
				icon1: GitPullRequestArrow,
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
						query();
					}
				};
			}),
		filterableItems: [
			{
				id: 'stargazerCount',
				title: 'Stars',
				icon1: StarIcon,
				filters: []
			},
			{
				id: 'issuesTotalCount',
				title: 'Issues',
				icon1: CircleDotIcon,
				filters: []
			},
			{
				id: 'forkCount',
				title: 'Forks',
				icon1: GitForkIcon,
				filters: []
			},
			{
				id: 'contributorCount',
				title: 'Contributors',
				icon1: UsersRoundIcon,
				filters: []
			},
			{
				id: 'pullRequestsTotalCount',
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
</script>

<FilterHeader bind:data={filterData} />
<!-- <DataTable bind:data={data2} /> -->

{#if data.rows}
	{#key data}
		<DataTable {data} />
	{/key}
{/if}
