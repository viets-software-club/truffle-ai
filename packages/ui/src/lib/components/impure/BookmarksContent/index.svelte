<script lang="ts">
import DataTable from "$lib/components/impure/DataTable/index.svelte";
import FilterHeader from "$lib/components/impure/FilterHeader/index.svelte";
import SidebarIcon from "$lib/components/impure/SidebarIcon/index.svelte";
import client from "$lib/graphql/supabase/client";
import {
	BookmarkTableDocument,
	OrderByDirection,
	TrendingTableDocument,
	type TrendingTableQuery as TrendingTableQueryType,
} from "$lib/graphql/supabase/generated-codegen";
import { NonableSortOrder } from "$lib/utils";
import type { ApolloQueryResult } from "@apollo/client";
import { UserRoundIcon } from "lucide-svelte";
import CircleDotIcon from "lucide-svelte/icons/circle-dot";
import FolderGit2Icon from "lucide-svelte/icons/folder-git-2";
import GitForkIcon from "lucide-svelte/icons/git-fork";
import GitPullRequestArrow from "lucide-svelte/icons/git-pull-request-arrow";
import StarIcon from "lucide-svelte/icons/star";
import UserIcon from "lucide-svelte/icons/user";
import UsersRoundIcon from "lucide-svelte/icons/users-round";
import { v4 as uuidv4 } from "uuid";
let data: any = $state({
	hiddenColumnIdArr: [],
	avatarSort: "none",
	nameSort: "none",
	starSort: "none",
	issueSort: "none",
	forkSort: "none",
	contributorSort: "none",
	forksPerContributorSort: "none",
	issuesPerContributorSort: "none",
	openPullRequestsSort: "none",
});

const createGraphQLVariables = () => ({
	filter: {
		and: filterData.filterableItems
			.filter((item) => item.filters && item.filters.length > 0)
			.flatMap((item) => {
				return item.filters.map((filter: any) => {
					return {
						[item.id]: {
							[filter.operator]: filter.value,
						},
					};
				});
			}),
	},
	orderBy: filterData.sortableItems
		.filter((item) => !item.disabled)
		.map((item) => {
			return {
				[item.id]: item.isAsc
					? OrderByDirection.AscNullsLast
					: OrderByDirection.DescNullsLast,
			};
		}),
});

const COLUMNS = [
	{
		id: "avatar",
		title: "Logo",
		checked: true,
		icon1: UserRoundIcon,
	},
	{
		id: "name",
		title: "Name",
		checked: true,
		icon1: FolderGit2Icon,
	},
	{
		id: "stars",
		title: "Stars",
		checked: true,
		icon1: StarIcon,
	},
	{
		id: "issues",
		title: "Issues",
		checked: true,
		icon1: CircleDotIcon,
	},
	{
		id: "forks",
		title: "Forks",
		checked: true,
		icon1: GitForkIcon,
	},
	{
		id: "pullRequests",
		title: "Pull Requests",
		checked: true,
		icon1: GitPullRequestArrow,
	},
	{
		id: "contributors",
		title: "Contributors",
		checked: true,
		icon1: UsersRoundIcon,
	},
	{
		id: "issuesPerContributor",
		title: "Issues/Contr.",
		checked: true,
		icon1: CircleDotIcon,
		icon2: UsersRoundIcon,
	},
	{
		id: "starsPerContributor",
		title: "Stars/Contr.",
		checked: true,
		icon1: StarIcon,
		icon2: UsersRoundIcon,
	},
	{
		id: "forksPerContributor",
		title: "Forks/Contr.",
		checked: true,
		icon1: GitForkIcon,
		icon2: UsersRoundIcon,
	},
	{
		id: "pullRequestsPerContributor",
		title: "PRs/Contr.",
		checked: true,
		icon1: GitPullRequestArrow,
		icon2: UsersRoundIcon,
	},
];

const SORTABLE_ITEMS = [
	{
		id: "gthbRepoName",
		title: "Repo Name",
		icon1: FolderGit2Icon,
	},
	{
		id: "stargazerCount",
		title: "Stars",
		icon1: StarIcon,
	},
	{
		id: "issuesTotalCount",
		title: "Issues",
		icon1: CircleDotIcon,
	},
	{
		id: "forkCount",
		title: "Forks",
		icon1: GitForkIcon,
	},
	{
		id: "pullRequestsTotalCount",
		title: "Pull Requests",
		icon1: GitPullRequestArrow,
	},
	{
		id: "contributorCount",
		title: "Contributors",
		icon1: UsersRoundIcon,
	},
	{
		id: "stargazersPerContributor",
		title: "Stars/Contr.",
		icon1: StarIcon,
		icon2: UsersRoundIcon,
	},
	{
		id: "issuesPerContributor",
		title: "Issues/Contr.",
		icon1: CircleDotIcon,
		icon2: UsersRoundIcon,
	},
	{
		id: "forksPerContributor",
		title: "Forks/Contr.",
		icon1: GitForkIcon,
		icon2: UsersRoundIcon,
	},
	{
		id: "pullRequestsPerContributor",
		title: "PRs/Contr.",
		icon1: GitPullRequestArrow,
		icon2: UsersRoundIcon,
	},
].map((item, index) => {
	return {
		...item,
		disabled: true,
		isAsc: false,
		onClick: (id: string | number) => {
			const index = filterData.sortableItems.findIndex(
				(item) => item.id === id,
			);
			filterData.sortableItems[index].disabled =
				!filterData.sortableItems[index].disabled;
			updateStorage();
		},
		onSortOrderChange: (id: string | number) => {
			const index = filterData.sortableItems.findIndex(
				(item) => item.id === id,
			);
			filterData.sortableItems[index].isAsc =
				!filterData.sortableItems[index].isAsc;
			query();
			updateStorage();
		},
	};
});
const FILTERABLE_ITEMS = [
	{
		id: "gthbRepoName",
		title: "Repo Name",
		icon1: FolderGit2Icon,
		type: "string",
		filters: [],
	},
	{
		id: "stargazerCount",
		title: "Stars",
		icon1: StarIcon,
		filters: [],
		type: "number",
	},
	{
		id: "issuesTotalCount",
		title: "Issues",
		icon1: CircleDotIcon,
		filters: [],
		type: "number",
	},
	{
		id: "forkCount",
		title: "Forks",
		icon1: GitForkIcon,
		filters: [],
		type: "number",
	},
	{
		id: "contributorCount",
		title: "Contributors",
		icon1: UsersRoundIcon,
		filters: [],
		type: "number",
	},
	{
		id: "pullRequestsTotalCount",
		title: "Pull Requests",
		icon1: GitPullRequestArrow,
		filters: [],
		type: "number",
	},
	{
		id: "stargazersPerContributor",
		title: "Stars/Contr.",
		icon1: StarIcon,
		icon2: UsersRoundIcon,
		filters: [],
		type: "number",
	},
	{
		id: "issuesPerContributor",
		title: "Issues/Contr.",
		icon1: CircleDotIcon,
		icon2: UsersRoundIcon,
		filters: [],
		type: "number",
	},
	{
		id: "forksPerContributor",
		title: "Forks/Contr.",
		icon1: GitForkIcon,
		icon2: UsersRoundIcon,
		filters: [],
		type: "number",
	},
	{
		id: "pullRequestsPerContributor",
		title: "PRs/Contr.",
		icon1: GitPullRequestArrow,
		icon2: UsersRoundIcon,
		filters: [],
		type: "number",
	},
];

function query() {
	client
		.query({
			query: BookmarkTableDocument,
			variables: createGraphQLVariables(),
		})
		.then((res: ApolloQueryResult<TrendingTableQueryType>) => {
			data = {
				...data,
				time: undefined,
				hiddenColumnIdArr: filterData.columns
					.filter((col) => !col.checked)
					.map((col) => col.id),
				maxStars: res.data.queryStargazerMax?.edges[0]?.node.stargazerCount,
				minStars: res.data.queryStargazerMin?.edges[0]?.node.stargazerCount,
				maxForks: res.data.queryForkMax?.edges[0]?.node.forkCount,
				minForks: res.data.queryForkMin?.edges[0]?.node.forkCount,
				maxContributors:
					res.data.queryContributorMax?.edges[0]?.node.contributorCount,
				minContributors:
					res.data.queryContributorMin?.edges[0]?.node.contributorCount,
				maxForksPerContributor:
					res.data.queryForksPerContributorMax?.edges[0]?.node
						.forksPerContributor,
				minForksPerContributor:
					res.data.queryForksPerContributorMin?.edges[0]?.node
						.forksPerContributor,
				maxIssuesPerContributor:
					res.data.queryIssuesPerContributorMax?.edges[0]?.node
						.issuesPerContributor,
				minIssuesPerContributor:
					res.data.queryIssuesPerContributorMin?.edges[0]?.node
						.issuesPerContributor,
				maxOpenPullRequests:
					res.data.queryPullRequestsMax?.edges[0]?.node.pullRequestsTotalCount,
				minOpenPullRequests:
					res.data.queryPullRequestsMin?.edges[0]?.node.pullRequestsTotalCount,
				maxStarsPerContributor:
					res.data.queryStargazersPerContributorMax?.edges[0]?.node
						.stargazersPerContributor,
				minStarsPerContributor:
					res.data.queryStargazersPerContributorMin?.edges[0]?.node
						.stargazersPerContributor,
				rowClickDataParam: {
					page: "bookmarks",
					variables: createGraphQLVariables(),
				},
				rows: res.data.queryTrending?.edges.map(({ node, cursor }) => ({
					id: `${node.gthbOwner.gthbOwnerLogin}-${node.gthbRepoName}`,
					avatarUrl: node.gthbOwner.avatarUrl,
					githubOwnerLogin: node.gthbOwner.gthbOwnerLogin,
					githubRepositoryName: node.gthbRepoName,
					stars: Number.parseInt(node.stargazerCount),
					issues: Number.parseInt(node.issuesTotalCount),
					forks: Number.parseInt(node.forkCount),
					starsPerContributor: Number.parseInt(node.stargazersPerContributor),
					pullRequestsPerContributor: Number.parseInt(
						node.pullRequestsPerContributor,
					),
					contributors: Number.parseInt(node.contributorCount),
					forksPerContributor: Number.parseInt(node.forksPerContributor),
					issuesPerContributor: Number.parseInt(node.issuesPerContributor),
					pullRequests: Number.parseInt(node.pullRequestsTotalCount),
					eli5: node.gthbRepoDescription,
					cursor: cursor,
				})),
			};
		});
}

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
		updateStorage();
	},
	onFilterAdd: (id: string | number) => {
		const index = filterData.filterableItems.findIndex(
			(item) => item.id === id,
		);
		(
			filterData.filterableItems[index].filters as {
				id: string | number;
				operator: string;
				value: number;
			}[]
		).push({
			id: uuidv4(),
			operator:
				filterData.filterableItems[index].type === "string" ? "ilike" : "gt",
			value: filterData.filterableItems[index].type === "string" ? "" : 0,
		});
		query();
		updateStorage();
	},
	onFilterChange: (
		id: string | number,
		newFilter: { id: string | number; operator: string; value: any },
	) => {
		const index = filterData.filterableItems.findIndex(
			(item) => item.id === id,
		);
		const filterIndex = (
			filterData.filterableItems[index].filters as {
				id: string | number;
				operator: string;
				value: any;
			}[]
		).findIndex((f) => f.id === newFilter.id);
		(
			filterData.filterableItems[index].filters as {
				id: string | number;
				operator: string;
				value: any;
			}[]
		)[filterIndex] = newFilter;
		query();
		updateStorage();
	},
	onFilterOpenChange: (
		id: string | number,
		filter: { id: string | number; operator: string; value: any },
		isOpen: boolean,
	) => {
		if (!isOpen) {
			const index = filterData.filterableItems.findIndex(
				(item) => item.id === id,
			);
			const filterIndex = (
				filterData.filterableItems[index].filters as {
					id: string | number;
					operator: string;
					value: any;
				}[]
			).findIndex((f) => f.id === filter.id);

			if (filterData.filterableItems[index].type === "number") {
				if (
					!(
						filterData.filterableItems[index].filters[filterIndex] as {
							id: string | number;
							operator: string;
							value: any;
						}
					).value ||
					(
						filterData.filterableItems[index].filters[filterIndex] as {
							id: string | number;
							operator: string;
							value: any;
						}
					).value.trim() === ""
				)
					filterData.filterableItems[index].filters =
						filterData.filterableItems[index].filters.filter((f: any) => {
							f.id === filter.id;
						});
			}
			query();
			updateStorage();
		}
	},
	onFilterRemove: (
		id: string | number,
		filter: { id: string | number; operator: string; value: any },
	) => {
		const index = filterData.filterableItems.findIndex(
			(item) => item.id === id,
		);
		(filterData.filterableItems[index].filters as {
			id: string | number;
			operator: string;
			value: any;
		}[]) = (
			filterData.filterableItems[index].filters as {
				id: string | number;
				operator: string;
				value: any;
			}[]
		).filter((item) => item.id !== filter.id);
		query();
		updateStorage();
	},
	onColumnCheckChange: (id: string | number) => {
		const index = filterData.columns.findIndex((item) => item.id === id);
		filterData.columns[index].checked = !filterData.columns[index].checked;
		data = {
			...data,
			hiddenColumnIdArr: filterData.columns
				.filter((col) => !col.checked)
				.map((col) => col.id),
		};
		updateStorage();
	},
	sortableItems: SORTABLE_ITEMS,
	filterableItems: FILTERABLE_ITEMS,

	columns: COLUMNS,
});
query();
const loadStorage = () => {
	if (localStorage.getItem("bookmarksFilter")) {
		const trendingLocalStore = localStorage.getItem("bookmarksFilter");
		if (trendingLocalStore) {
			const trending = JSON.parse(trendingLocalStore);
			filterData.columns = trending.columns.map((col: any) => {
				const column = COLUMNS.find((c: any) => c.id === col.id);
				return {
					...column,
					checked: col.checked,
				};
			});
			filterData.filterableItems = trending.filterableItems.map((item: any) => {
				const filterableItem = FILTERABLE_ITEMS.find((f) => f.id === item.id);
				return {
					...filterableItem,
					filters: item.filters,
				};
			});
			filterData.sortableItems = trending.sortableItems.map((item: any) => {
				const sortableItem = SORTABLE_ITEMS.find((s: any) => s.id === item.id);
				return {
					...sortableItem,
					disabled: item.disabled,
					isAsc: item.isAsc,
				};
			});
		}
	}
};

const updateStorage = async () => {
	return new Promise((resolve) => {
		localStorage.setItem(
			"bookmarksFilter",
			JSON.stringify({
				columns: filterData.columns.map((col) => ({
					id: col.id,
					checked: col.checked,
				})),
				filterableItems: filterData.filterableItems.map((item) => ({
					id: item.id,
					filters: item.filters,
				})),
				sortableItems: filterData.sortableItems.map((item) => ({
					id: item.id,
					disabled: item.disabled,
					isAsc: item.isAsc,
				})),
			}),
		);
		resolve(true);
	});
};

loadStorage();
</script>

<FilterHeader bind:data={filterData}>
	{#snippet left()}
		<SidebarIcon />
	{/snippet}
</FilterHeader>
<!-- <DataTable bind:data={data2} /> -->

{#if data.rows}
	{#key data}
		<DataTable {data} />
	{/key}
{/if}
