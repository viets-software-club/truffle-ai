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

	const types = [
		{
			value: 'forks',
			label: 'Forks',
			icon: GitForkIcon
		},
		{
			value: 'issues',
			label: 'Issues',
			icon: CircleDotIcon
		},
		{
			value: 'stars',
			label: 'Stars',
			icon: StarIcon
		}
	];
	const ranges = [
		{
			value: 'month',
			label: '1 Month'
		},
		{
			value: 'three_months',
			label: '3 Months'
		},
		{
			value: 'six_months',
			label: '6 Months'
		},
		{
			value: 'one_year',
			label: '1 Year'
		},
		{
			value: 'all_time',
			label: 'All time'
		}
	];
	let selectedType: Selected<any> = $state({
		value: 'stars',
		label: 'Stars'
	});
	let TypeIcon = $state(types[0].icon);
	const handleTypeChange = (val: any) => {
		TypeIcon = types.filter((type) => type.value === val.value)[0].icon;
	};

	let chartData: ChartData<'line', Point[], string> = {
		datasets: [
			{
				label: 'sveltejs',
				data: [
					{
						y: 400,
						x: DateTime.now().plus({ days: 1 }).toISO()
					},
					{
						y: 300,
						x: DateTime.now().plus({ days: 5 }).toISO()
					},
					{
						y: 200,
						x: DateTime.now().plus({ days: 20 }).toISO()
					},
					{
						y: 100,
						x: DateTime.now().plus({ days: 100 }).toISO()
					}
				],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}
		]
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
	<Select.Root portal={null}>
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
</div>
<div class="p-4 md:h-96 xl:h-[37rem] relative w-full">
	<Chart {chartData} showLegend={true} />
</div>
<!-- <section class="border-t w-full md:h-96 xl:h-[37rem] relative p-4">
	<Chart />
</section> -->
