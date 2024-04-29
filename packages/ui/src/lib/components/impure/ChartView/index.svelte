<script lang="ts">
	import * as DropdownMenu from '$lib/components/pure/ui/dropdown-menu';
	import { DateTime } from 'luxon';

	import Chart from '$lib/components/impure/Chart/index.svelte';
	import * as Select from '$lib/components/pure/ui/select';
	import { Button } from '$lib/components/pure/ui/button';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import CircleDotIcon from 'lucide-svelte/icons/circle-dot';
	import GitForkIcon from 'lucide-svelte/icons/git-fork';
	import StarIcon from 'lucide-svelte/icons/star';
	import type { Selected } from 'bits-ui';
	import type { ChartData, Point } from 'chart.js';
	import {
		ChartDataByGthbRepoFilterDocument,
		ChartDataForksByGthbRepoFilterDocument,
		ChartDataIssuesByGthbRepoFilterDocument,
		ChartDataStarsByGthbRepoFilterDocument,
		OrderByDirection
	} from '$lib/graphql/supabase/generated-codegen';
	import client from '$lib/graphql/supabase/client';
	import { toast } from 'svelte-sonner';
	type Props = {
		githubRepoIds: number[];
		isNormalizable: boolean;
	};
	let { githubRepoIds, isNormalizable }: Props = $props();
	let data: any;
	function getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	const TYPE_FORKS = 'forks';
	const TYPE_ISSUES = 'issues';
	const TYPE_STARS = 'stars';
	const types = [
		{
			value: TYPE_FORKS,
			label: 'Forks',
			icon: GitForkIcon
		},
		{
			value: TYPE_ISSUES,
			label: 'Issues',
			icon: CircleDotIcon
		},
		{
			value: TYPE_STARS,
			label: 'Stars',
			icon: StarIcon
		}
	];
	const RANGE_ONE_MONTH = 'month';
	const RANGE_THREE_MONTHS = 'three_months';
	const RANGE_SIX_MONTHS = 'six_months';
	const RANGE_ONE_YEAR = 'one_year';
	const RANGE_ALL_YEAR = 'all_time';
	const calcPrevDateByRange = () => {
		let now = DateTime.now();
		let start: any;
		if (selectedRange.value === RANGE_ONE_MONTH) {
			start = now.minus({ month: 1 });
		} else if (selectedRange.value === RANGE_THREE_MONTHS) {
			start = now.minus({ month: 3 });
		} else if (selectedRange.value === RANGE_SIX_MONTHS) {
			start = now.minus({ month: 6 });
		} else if (selectedRange.value === RANGE_ONE_YEAR) {
			start = now.minus({ year: 1 });
		}

		return start;
	};
	const isDateTimeInRange = (x: DateTime) => {
		let now = DateTime.now();

		let start: any;
		if (selectedRange.value === RANGE_ONE_MONTH) {
			start = now.minus({ month: 1 });
		} else if (selectedRange.value === RANGE_THREE_MONTHS) {
			start = now.minus({ month: 3 });
		} else if (selectedRange.value === RANGE_SIX_MONTHS) {
			start = now.minus({ month: 6 });
		} else if (selectedRange.value === RANGE_ONE_YEAR) {
			start = now.minus({ year: 1 });
		}

		return start ? x >= start && x <= now : x <= now;
	};
	const getChartData = () => {
		if (data) {
			let datasets = data.map((repo: any) => {
				let chartData = repo.xyData; // e.g. forks, issues, stars array
				// let chartDataFiltered = chartData.filter((xyEntry: { x: DateTime; y: number }) =>
				// 	isDateTimeInRange(xyEntry.x)
				// );
				return {
					label: repo.label,
					data: chartData,
					borderColor: repo.color,
					tension: 0.1
				};
			});

			if (isNormalized) {
				const earliestDate = Math.min(
					...datasets.flatMap((dataset: any) => {
						return dataset.data.map((point: { x: DateTime; y: number }) => point.x.toMillis());
					})
				);
				datasets = datasets.map((dataset: any) => ({
					...dataset,
					data: dataset.data.map((point: { x: DateTime; y: number }) => ({
						...point,
						x: DateTime.fromMillis(
							point.x.toMillis() -
								(Math.min(...dataset.data.map((p: any) => p.x.toMillis())) - earliestDate)
						)
					}))
				}));
			}

			return { datasets };
		}
		return {
			labels: [],
			datasets: [
				{
					label: '',
					data: [],
					backgroundColor: '',
					borderColor: '',
					borderWidth: 1
				}
			]
		};
	};

	function parseAndAccumulateDate(data: { edges: any }, field: string) {
		return [...data.edges]
			.sort((a, b) => {
				const date1 = DateTime.fromISO(a.node[field]);
				const date2 = DateTime.fromISO(b.node[field]);
				return date1.toUnixInteger() - date2.toUnixInteger();
			})
			.map((forkEdge, index, array) => {
				if (index != 0 && array[index - 1].node.amount > parseInt(forkEdge.node.amount)) {
					return {
						y: parseInt(array[index - 1].node.amount) as number,
						x: DateTime.fromISO(forkEdge.node[field])
					};
				} else {
					return {
						y: parseInt(forkEdge.node.amount) as number,
						x: DateTime.fromISO(forkEdge.node[field])
					};
				}
			});
		// .reduce((acc: any, forkEdge, index): any[] => {
		// 	if (index > 0) {
		// 		acc.push({
		// 			y: (acc[index - 1].y + parseInt(forkEdge.node.amount)) as number,
		// 			x: DateTime.fromISO(forkEdge.node[field])
		// 		});
		// 	} else {
		// 		acc.push({
		// 			y: parseInt(forkEdge.node.amount) as number,
		// 			x: DateTime.fromISO(forkEdge.node[field])
		// 		});
		// 	}
		// 	return acc;
		// }, []);
	}

	const ranges = [
		{
			value: RANGE_ONE_MONTH,
			label: '1 Month'
		},
		{
			value: RANGE_THREE_MONTHS,
			label: '3 Months'
		},
		{
			value: RANGE_SIX_MONTHS,
			label: '6 Months'
		},
		{
			value: RANGE_ONE_YEAR,
			label: '1 Year'
		},
		{
			value: RANGE_ALL_YEAR,
			label: 'All time'
		}
	];
	let selectedType: Selected<any> = $state(types[2]);
	let selectedRange: Selected<any> = $state(ranges[3]);
	let TypeIcon = $state(types[0].icon);

	// const colors = githubRepoIds.map(() => getRandomColor());

	// const updateChartData = () => {
	//   let data: any;
	//   if (selectedType.value === 'stars') {
	// 			client
	// 				.query({
	// 					query: ChartStarHistCollectionDocument,
	// 					variables: {
	// 						filter: {
	// 							and: [
	// 								{
	// 									or: githubRepoIds.map((id) => ({ gthbRepoId: { eq: id } })),
	// 									gthbStarHistDate: { gte: '', lte: '' }
	// 								}
	// 							]
	// 						}
	// 					}
	// 				})
	// 				.then((res) => {
	// 					data = res.data.gthbStarHistCollection?.edges.map(({ node }, i) => parseAndAccumulateDate(node.gthbStarHistCollection, 'gthbStarHistDate'),
	// 						};
	// 					});
	// 				});
	// 		} else if (selectedType.value === 'forks') {
	// 		} else if (selectedType.value === 'issues') {
	// 		}
	// }

	let colors: any;

	const update = () => {
		if (githubRepoIds) {
			if (!colors) {
				colors = githubRepoIds.map(() => getRandomColor());
			}
			chartData = null;
			if (selectedType.value === TYPE_STARS) {
				client
					.query({
						query: ChartDataStarsByGthbRepoFilterDocument,
						variables: {
							gthbRepoFilter: {
								or: githubRepoIds.map((id) => ({ gthbRepoId: { eq: id } }))
							},
							starFilter:
								selectedRange.value === RANGE_ALL_YEAR
									? undefined
									: {
											gthbStarHistDate: { gte: calcPrevDateByRange().toString() }
										},
							starOrderBy:
								selectedRange.value === RANGE_ALL_YEAR
									? undefined
									: {
											gthbStarHistDate: OrderByDirection.DescNullsLast
										}
						}
					})
					.then((res) => {
						data = res.data.gthbRepoCollection?.edges.map(({ node }, i) => {
							return {
								id: node.gthbRepoId,
								label: `${node.gthbOwner.gthbOwnerLogin}/${node.gthbRepoName}`,
								xyData: parseAndAccumulateDate(node.gthbStarHistCollection, 'gthbStarHistDate'),
								color: colors[i]
							};
						});
						chartData = getChartData();
					})
					.catch((e) => {
						console.error(e);
						toast('Error', {
							description:
								'An error occurred while loading the chart data. Please try again later.',
							action: {
								label: 'ok',
								onClick: () => {}
							}
						});
					});
			} else if (selectedType.value === TYPE_FORKS) {
				client
					.query({
						query: ChartDataForksByGthbRepoFilterDocument,
						variables: {
							gthbRepoFilter: {
								or: githubRepoIds.map((id) => ({ gthbRepoId: { eq: id } }))
							},
							forkFilter:
								selectedRange.value === RANGE_ALL_YEAR
									? undefined
									: {
											gthbForkHistDate: { gte: calcPrevDateByRange().toString() }
										},
							forkOrderBy:
								selectedRange.value === RANGE_ALL_YEAR
									? undefined
									: {
											gthbForkHistDate: OrderByDirection.DescNullsLast
										}
						}
					})
					.then((res) => {
						data = res.data.gthbRepoCollection?.edges.map(({ node }, i) => {
							return {
								id: node.gthbRepoId,
								label: `${node.gthbOwner.gthbOwnerLogin}/${node.gthbRepoName}`,
								xyData: parseAndAccumulateDate(node.gthbForkHistCollection, 'gthbForkHistDate'),
								color: colors[i]
							};
						});
						chartData = getChartData();
					})
					.catch(() => {
						toast('Error', {
							description:
								'An error occurred while loading the chart data. Please try again later.',
							action: {
								label: 'ok',
								onClick: () => {}
							}
						});
					});
			} else if (selectedType.value === TYPE_ISSUES) {
				client
					.query({
						query: ChartDataIssuesByGthbRepoFilterDocument,
						variables: {
							gthbRepoFilter: {
								or: githubRepoIds.map((id) => ({ gthbRepoId: { eq: id } }))
							},
							issueFilter:
								selectedRange.value === RANGE_ALL_YEAR
									? undefined
									: {
											gthbIssueHistDate: { gte: calcPrevDateByRange().toString() }
										},
							issueOrderBy:
								selectedRange.value === RANGE_ALL_YEAR
									? undefined
									: {
											gthbIssueHistDate: OrderByDirection.DescNullsLast
										}
						}
					})
					.then((res) => {
						data = res.data.gthbRepoCollection?.edges.map(({ node }, i) => {
							return {
								id: node.gthbRepoId,
								label: `${node.gthbOwner.gthbOwnerLogin}/${node.gthbRepoName}`,
								xyData: parseAndAccumulateDate(node.gthbIssueHistCollection, 'gthbIssueHistDate'),
								color: colors[i]
							};
						});
						chartData = getChartData();
					})
					.catch(() => {
						toast('Error', {
							description:
								'An error occurred while loading the chart data. Please try again later.',
							action: {
								label: 'ok',
								onClick: () => {}
							}
						});
					});
			}
		}
	};
	$effect(() => {
		update();
	});
	let chartData: any = $state(getChartData());
	const handleTypeChange = (val: any) => {
		selectedType = val;
		TypeIcon = types.filter((type) => type.value === val.value)[0].icon;
		// chartData = getChartData();
		update();
	};
	const handleRangeChange = (value: any) => {
		selectedRange = value;
		update();
		// chartData = getChartData();
	};
	// const normalizedData = chartData.map((dataset) => ({
	// 	...dataset,
	// 	data: dataset.data.map((point) => ({
	// 		...point,
	// 		date: new Date(
	// 			new Date(point.date).getTime() -
	// 				(Math.min(...dataset.data.map((p) => new Date(p.date).getTime())) -
	// 					earliestDate)
	// 		).toISOString()
	// 	}))
	// }))

	let isNormalized = $state(false);

	const handleNormalize = () => {
		isNormalized = !isNormalized;
		update();
		// chartData = getChartData(isNormalized);
	};
</script>

<div class="ml-auto md:ml-0 flex gap-4 items-center mb-2 w-full border-b p-4">
	<Select.Root portal={null} bind:selected={selectedType} onSelectedChange={handleTypeChange}>
		<Select.Trigger class="w-[180px]">
			<div class="flex gap-2 items-center">
				<TypeIcon class="h-4 w-4 -mt-0.5" />
				<Select.Value>{ranges[0].label}</Select.Value>
			</div>
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Type</Select.Label>
				{#each types as { value, label, icon: Icon }}
					<Select.Item {value} {label}>
						<div class="flex gap-2 items-center">
							<Icon class="h-4 w-4 -mt-0.5" />
							{label}
						</div></Select.Item
					>
				{/each}
			</Select.Group>
		</Select.Content>
		<Select.Input name="type" />
	</Select.Root>
	<Select.Root portal={null} bind:selected={selectedRange} onSelectedChange={handleRangeChange}>
		<Select.Trigger class="w-[180px]">
			<div class="flex gap-2 items-center">
				<CalendarIcon class="h-4 w-4 -mt-0.5" />
				<Select.Value>{ranges[0].label}</Select.Value>
			</div>
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Range</Select.Label>
				{#each ranges as range}
					<Select.Item value={range.value} label={range.label}>{range.label}</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
		<Select.Input name="range" />
	</Select.Root>
	{#if isNormalizable}<Button bind:value={isNormalized} on:click={handleNormalize}
			>{#if isNormalized}Unnormalize{:else}Normalize{/if}</Button
		>{/if}
</div>
<div class="p-4 md:h-96 xl:h-[37rem] relative w-full">
	{#if chartData}
		{#key chartData}
			<Chart {chartData} showLegend={true} />
		{/key}
	{/if}
</div>
<!-- <section class="border-t w-full md:h-96 xl:h-[37rem] relative p-4">
	<Chart />
</section> -->
