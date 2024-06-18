<script lang="ts">
import { goto } from "$app/navigation";
import { Button } from "$lib/components/pure/ui/button";
import * as Table from "$lib/components/pure/ui/table";
import CircleDotIcon from "lucide-svelte/icons/circle-dot";
import GitForkIcon from "lucide-svelte/icons/git-fork";
import GitPullRequestArrow from "lucide-svelte/icons/git-pull-request-arrow";
import StarIcon from "lucide-svelte/icons/star";
import UsersIcon from "lucide-svelte/icons/users";
import {
	Render,
	Subscribe,
	createRender,
	createTable,
} from "svelte-headless-table";
import { addHiddenColumns, addPagination } from "svelte-headless-table/plugins";
import { readable } from "svelte/store";
import Avatar from "./Avatar.svelte";
import OwnerRepoNameText from "./OwnerRepoNameText.svelte";
import SortIcon from "./SortIcon.svelte";
import TextIcon from "./TextIcon.svelte";

type Sort = "none" | "asc" | "desc";
type Data = {
	rows: RowData[];
	maxStars: number;
	maxIssues: number;
	maxForks: number;
	maxContributors: number;
	maxStarsPerContributor: number;
	maxForksPerContributor: number;
	maxIssuesPerContributor: number;
	maxPullRequests: number;
	maxPullRequestsPerContributor: number;
	avatarSort: string;
	nameSort: string;
	starSort: string;
	issueSort: string;
	forkSort: string;
	contributorSort: string;
	forksPerContributorSort: string;
	issuesPerContributorSort: string;
	pullRequestsPerContributorSort: string;
	pullRequestSort: string;
	starsPerContributorSort: string;
	hiddenColumnIdArr: string[];
	rowClickDataParam: any;
};

type RowData = {
	id: string | number;
	avatarUrl: string;
	githubOwnerLogin: string;
	githubRepositoryName: string;
	stars: number;
	issues: number;
	forks: number;
	contributors: number;
	starsPerContributor: number;
	forksPerContributor: number;
	issuesPerContributor: number;
	pullRequests: number;
	pullRequestsPerContributor: number;
	eli5: string;
	cursor: string;
};
export let data: Data;

const { hiddenColumnIdArr } = data;
const dataStore = readable(data.rows);
const table = createTable(dataStore, {
	page: addPagination({ initialPageSize: 20 }),
	hide: addHiddenColumns({
		initialHiddenColumnIds: hiddenColumnIdArr,
	}),
});

const columns = table.createColumns([
	table.column({
		id: "avatar",
		accessor: ({ avatarUrl, eli5 }) => `${avatarUrl}////${eli5}`,
		header: "Logo",
		cell: ({ value }) => {
			const [src, description] = value.split("////");
			return createRender(Avatar, { src, description });
		},
	}),
	table.column({
		id: "name",
		accessor: ({ githubOwnerLogin, githubRepositoryName }) =>
			`${githubOwnerLogin}/${githubRepositoryName}`,
		header: "Name",
		cell: ({ value }) => {
			const [owner, repo] = value.split("/");
			return createRender(OwnerRepoNameText, {
				owner,
				repo,
			});
		},
	}),
	table.column({
		accessor: "stars",
		header: "Stars",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: StarIcon,
				value: value,
				max: data.maxStars,
			}).slot(value),
	}),
	table.column({
		accessor: "issues",
		header: "Issues",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: CircleDotIcon,
				value: value,
				max: data.maxIssues,
			}).slot(value),
	}),
	table.column({
		accessor: "forks",
		header: "Forks",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: GitForkIcon,
				value: value,
				max: data.maxForks,
			}).slot(value),
	}),
	table.column({
		accessor: "pullRequests",
		header: "PRs",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: GitPullRequestArrow,
				value: value,
				max: data.maxPullRequests,
			}).slot(value),
	}),
	table.column({
		accessor: "contributors",
		header: "Contrib.",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: UsersIcon,
				value: value,
				max: data.maxContributors,
			}).slot(value),
	}),
	table.column({
		accessor: "starsPerContributor",
		header: "Stars/Contrib.",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: StarIcon,
				icon2: UsersIcon,
				value: value,
				max: data.maxStarsPerContributor,
			}).slot(value),
	}),
	table.column({
		accessor: "issuesPerContributor",
		header: "Issues/Contrib.",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: CircleDotIcon,
				icon2: UsersIcon,
				value: value,
				max: data.maxIssuesPerContributor,
			}).slot(value),
	}),
	table.column({
		accessor: "forksPerContributor",
		header: "Forks/Contrib.",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: GitForkIcon,
				icon2: UsersIcon,
				value: value,
				max: data.maxForksPerContributor,
			}).slot(value),
	}),
	table.column({
		accessor: "pullRequestsPerContributor",
		header: "PRs/Contrib.",
		cell: ({ value }) =>
			createRender(TextIcon, {
				icon1: GitPullRequestArrow,
				icon2: UsersIcon,
				value: value,
				max: data.maxPullRequestsPerContributor,
			}).slot(value),
	}),
]);

const {
	headerRows,
	pageRows,
	tableAttrs,
	tableBodyAttrs,
	pluginStates,
	flatColumns,
} = table.createViewModel(columns);
const { hiddenColumnIds } = pluginStates.hide;

// let hideForId = Object.fromEntries(hiddenColumnIdArr.map((id) => [id, false]));
// $: $hiddenColumnIds = Object.entries(hideForId)
// 	.filter(([, hide]) => !hide)
// 	.map(([id]) => id);
$: $hiddenColumnIds = hiddenColumnIdArr;

const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;

const handleTableRowClick = (row: any, rowAttrs: any) => () => {
	const [owner, repo] = row.cellForId.name.value.split("/");
	const paramData = JSON.stringify({
		...data.rowClickDataParam,
		cursor: row.original?.cursor,
	});
	goto(`/repo/${owner}/${repo}?data=${encodeURIComponent(paramData)}`);
};

const numberSortableColumns = [
	"stars",
	"issues",
	"forks",
	"contributors",
	"openPullRequests",
	"starsPerContributor",
	"forksPerContributor",
	"issuesPerContributor",
	"openPullRequestsPerContributor",
];
const stringSortableColumns = ["name"];
const getSortValue = (id: string) => {
	switch (id) {
		case "stars":
			return data.starSort;
		case "issues":
			return data.issueSort;
		case "forks":
			return data.forkSort;
		case "contributors":
			return data.contributorSort;
		case "openPullRequests":
			return data.pullRequestSort;
		case "starsPerContributor":
			return data.starsPerContributorSort;
		case "forksPerContributor":
			return data.forksPerContributorSort;
		case "issuesPerContributor":
			return data.issuesPerContributorSort;
		case "openPullRequestsPerContributor":
			return data.pullRequestsPerContributorSort;
		case "name":
			return data.nameSort;
		default:
			return null;
	}
};
</script>

{#key data}
	<div class="h-full w-full">
		<div class="rounded-md w-full overflow-x-auto">
			<Table.Root {...$tableAttrs}
			>
				<Table.Header>
					{#each $headerRows as headerRow}
						<Subscribe rowAttrs={headerRow.attrs()} rowProps={headerRow.props()} let:rowProps>
							<Table.Row>
								{#each headerRow.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
										<Table.Head {...attrs} class="px-[1rem] md:px-[1.125rem]">
											<div class="flex gap-1.5 items-center">
												<Render of={cell.render()} />
												{#if numberSortableColumns.includes(cell.id)}
													<SortIcon sort={getSortValue(cell.id)} type="number" />
												{/if}
												{#if stringSortableColumns.includes(cell.id)}
													<SortIcon sort={getSortValue(cell.id)} type="string" />
												{/if}
											</div></Table.Head
										>
									</Subscribe>
								{/each}
							</Table.Row>
						</Subscribe>
					{/each}
				</Table.Header>
				<Table.Body {...$tableBodyAttrs}>
					{#each $pageRows as row (row.id)}
						<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
							<Table.Row
								{...rowAttrs}
								class="px-[1.125rem] cursor-pointer"
								on:click={handleTableRowClick(row, rowAttrs)}
							>
							
								{#each row.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs>
										<Table.Cell {...attrs}>
											{#if cell.id === 'avatar'}
												<div class="flex items-center">
													<Render of={cell.render()} />
												</div>
											{:else}
											<Render of={cell.render()} />
											{/if}
										</Table.Cell>
									</Subscribe>
								{/each}
							</Table.Row>
						</Subscribe>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<div class="flex items-center space-x-4 py-4 ml-4 pb-20 md:pb-4">
			<Button
				variant="outline"
				size="sm"
				on:click={() => ($pageIndex = $pageIndex - 1)}
				disabled={!$hasPreviousPage}>Previous</Button
			>
			<Button
				variant="outline"
				size="sm"
				disabled={!$hasNextPage}
				on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
			>
		</div>
	</div>
{/key}
