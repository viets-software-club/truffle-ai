<script lang="ts">
	import ListFilterIcon from 'lucide-svelte/icons/list-filter';
	import ArrowUpDownIcon from 'lucide-svelte/icons/arrow-up-down';

	import XIcon from 'lucide-svelte/icons/x';
	import AddRepo from '$lib/components/impure/AddRepo/index.svelte';

	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import PlusIcon from 'lucide-svelte/icons/plus';

	import Columns3Icon from 'lucide-svelte/icons/columns-3';
	import { Button } from '$lib/components/pure/ui/button';
	import * as DropdownMenu from '$lib/components/pure/ui/dropdown-menu';
	import SplitIcon from '$lib/components/pure/SplitIcon.svelte';
	import * as Tabs from '$lib/components/pure/ui/tabs';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import * as Select from '$lib/components/pure/ui/select';
	import { Input } from '$lib/components/pure/ui/input';

	type ID = string | number;
	type Filter = { id: ID; operator: string; value: number };
	type Props = {
		options?: {
			disableAddRepo?: boolean;
			addRepoProps: any;
		}
		data: {
			time?: string;
			onTimeChange?: (value: string) => void;
			onSortUpdate: (oldIndex: number, newIndex: number) => void;
			onFilterAdd: (id: ID) => void;
			onFilterChange: (id: ID, filter: Filter) => void;
			onFilterRemove: (id: ID, filter: Filter) => void;
			onColumnCheckChange: (id: ID) => void;
			sortableItems: {
				id: ID;
				title: string;
				icon1: any;
				icon2?: any;
				disabled: boolean;
				isAsc: boolean;
				onClick: (id: ID) => void;
				onSortOrderChange: (id: ID) => void;
			}[];
			filterableItems: {
				id: ID;
				title: string;
				icon1: any;
				icon2?: any;
				filters: Filter[];
			}[];
			columns: {
				id: ID;
				title: string;
				icon1: any;
				icon2?: any;
				checked?: boolean;
			}[];
		};
	};
	let { options, data = $bindable() }: Props = $props();
	let {
		time,
		columns,
		filterableItems,
		sortableItems,
		onTimeChange,
		onSortUpdate,
		onFilterAdd,
		onFilterChange,
		onFilterRemove,
		onColumnCheckChange
	} = $state(data);
	const sortItems = columns;

	const handleSortableListUpdate = (event: any) => {
		onSortUpdate(event.oldIndex, event.newIndex);
	};
	const getHandleSortItemClickFunc = (id: ID) => () => {
		const sortableItem = sortableItems.find((col) => col.id === id);
		sortableItem?.onClick(id);
	};
	const getHandleOnSortOrderChange = (id: ID) => () => {
		const sortableItem = sortableItems.find((col) => col.id === id);
		if (sortableItem) sortableItem?.onSortOrderChange(id);
		else console.error('error configuration');
	};
	const handleTimeChange = (value: string | undefined) => {
		onTimeChange(value || '');
	};
	const getFilterAddClickHandler = (id: ID) => () => {
		onFilterAdd(id);
	};
	const getFilterOnSelectedChangeFunc = (id: ID, filter: Filter) => (obj: any) => {
		onFilterChange(id, { ...filter, operator: (obj as { value: string }).value });
	};
	const operatorValueToOperatorLabel = (value: string) => {
		switch (value) {
			case 'gt':
				return '>';
			case 'lt':
				return '<';
			case 'eq':
				return '=';
			case 'ne':
				return '!=';
			default:
				return '';
		}
	};
	const getFilterInputChangeFunc = (id: ID, filter: Filter) => (event: any) => {
		onFilterChange(id, { ...filter, value: event.target.value });
	};
	const getHandleColumnCheckedChangeFunc = (id: ID) => () => {
		const column = columns.find((col) => col.id === id);
		onColumnCheckChange(id);
	};
</script>

<div class=" flex py-2 px-4 pl-0 md:pl-4 h-[3.8125rem] w-full border-b">
	<div class="flex gap-4 items-center">
		<slot name="left" />
	</div>
	<div class="ml-auto md:ml-0 flex gap-4 items-center">
		{#if time}<DropdownMenu.Root closeOnItemClick={false}>
				<DropdownMenu.Trigger asChild let:builder class="w-40">
					<Button variant="outline" builders={[builder]} size="sm">
						<CalendarIcon class="h-4 w-4 md:mr-2" />
						<span class="hidden md:inline">{time}</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.RadioGroup bind:value={time} onValueChange={handleTimeChange}>
						<DropdownMenu.RadioItem value="Day" class="text-sm">Day</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="Week" class="text-sm">Week</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem value="Month" class="text-sm">Month</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
		<DropdownMenu.Root closeOnItemClick={false}>
			<DropdownMenu.Trigger asChild let:builder class="w-40">
				<Button variant="outline" builders={[builder]} size="sm">
					<ArrowUpDownIcon class="h-4 w-4 md:mr-2" />
					<span class="hidden md:inline">Sorting</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<SortableList class="" onUpdate={handleSortableListUpdate}>
					{#each sortableItems as { id, title, icon1: Icon1, icon2: Icon2, disabled, isAsc }, i}
						{#key id}
							{#key disabled}
								<div
									on:click={getHandleSortItemClickFunc(id)}
									role="menuitem"
									tabindex={null}
									on:keydown={null}
								>
									<DropdownMenu.Item class="text-xs grid grid-cols-2 gap-2 py-1" {disabled}
										><div class="flex items-center gap-2">
											{#if Icon2}<SplitIcon
													icon1={Icon1}
													icon2={Icon2}
													class="w-4 h-4"
													iconProps={{ class: 'text-foreground/50 w-2 h-2' }}
												/>{:else}<Icon1 class="text-foreground/50 w-4 h-4" />{/if}{title}
										</div>
										<div
											on:click={(e) => {
												e.stopPropagation();
												e.preventDefault();
											}}
										>
											<Tabs.Root
												value={isAsc ? 'asc' : 'desc'}
												class="text-xs"
												onValueChange={getHandleOnSortOrderChange(id)}
											>
												<Tabs.List class="ml-auto py-0 h-7">
													<Tabs.Trigger
														value="asc"
														class="text-zinc-600 dark:text-zinc-200 py-1 text-xs"
													>
														Asc
													</Tabs.Trigger>
													<Tabs.Trigger
														value="desc"
														class="text-zinc-600 dark:text-zinc-200 py-1 text-xs"
													>
														Desc
													</Tabs.Trigger>
												</Tabs.List>
											</Tabs.Root>
										</div>
									</DropdownMenu.Item>
								</div>
							{/key}
						{/key}
					{/each}
				</SortableList>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" builders={[builder]} size="sm">
					<ListFilterIcon class="h-4 w-4 md:mr-2" />
					<span class="hidden md:inline">Filtering</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each filterableItems as { id, title, icon1: Icon1, icon2: Icon2 }, i}
					<div on:click={getFilterAddClickHandler(id)}>
						<DropdownMenu.Item class="text-sm flex gap-2"
							>{#if Icon2}<SplitIcon
									icon1={Icon1}
									icon2={Icon2}
									class="w-4 h-4"
									iconProps={{ class: 'text-foreground/50 w-2 h-2' }}
								/>
							{:else}<Icon1 class="text-foreground/50 w-4 h-4" />{/if}{title}</DropdownMenu.Item
						>
					</div>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<div class="flex gap-4 items-center ml-4 md:ml-auto">
		<DropdownMenu.Root closeOnItemClick={false}>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" builders={[builder]} size="sm" class="ml-auto">
					<Columns3Icon class="h-4 w-4 md:mr-2" />
					<span class="hidden md:inline">Columns</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each columns as { title, icon1: Icon1, icon2: Icon2, checked, id }, i}
					<DropdownMenu.CheckboxItem
						class="text-sm flex gap-2"
						{checked}
						onCheckedChange={getHandleColumnCheckedChangeFunc(id)}
						>{#if Icon2}<SplitIcon
								icon1={Icon1}
								icon2={Icon2}
								class="w-4 h-4"
								iconProps={{ class: 'text-foreground/50 w-2 h-2' }}
							/>{:else}<Icon1 class="text-foreground/50 w-4 h-4" />{/if}<span
							class={checked ? 'text-foreground' : 'text-foreground/50'}
						>
							{title}</span
						></DropdownMenu.CheckboxItem
					>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		{#if !options?.disableAddRepo}
			<AddRepo {...options?.addRepoProps}
				><Button variant="accent" size="sm">
					<PlusIcon class="h-4 w-4 md:mr-2" /><span class="hidden md:inline">Repository</span>
				</Button></AddRepo
			>
		{/if}
	</div>
</div>
{#if filterableItems.filter((filterableItem) => filterableItem?.filters?.length > 0).length > 0}
	<div
		class="py-2.5 md:py-2 px-4 border-b flex-nowrap whitespace-nowrap h-9 box-content overflow-x-auto"
	>
		{#each filterableItems as filterableItem}
			{#if filterableItem.filters}
				{#each filterableItem.filters as filter}
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button variant="outline" builders={[builder]} size="sm" class="mr-2 text-[0.8rem]">
								{filterableItem.title}
								{#key filter.operator}
									{#if filter.operator === 'gt'}
										{'>'}
									{:else if filter.operator === 'lt'}
										{'<'}
									{:else if filter.operator === 'eq'}
										=
									{:else if filter.operator === 'ne'}
										!=
									{/if}
								{/key}
								{filter.value}
								<div
									class="relative h-4 w-4 ml-2 z-50"
									on:click={(e) => {
										e.stopPropagation();
										e.stopImmediatePropagation();
										e.preventDefault();
										onFilterRemove(filterableItem.id, filter);
									}}
								>
									<XIcon class="h-4 w-4" />
								</div>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="p-6">
							<Select.Root
								onSelectedChange={getFilterOnSelectedChangeFunc(filterableItem.id, filter)}
							>
								<Select.Trigger class="w-[9rem] mb-4 shadow-none focus:shadow-none focus:ring-0">
									{#key filter.operator}
										{#if filter.operator === 'gt'}
											greater ({'>'})
										{:else if filter.operator === 'lt'}
											less ({'<'})
										{:else if filter.operator === 'eq'}
											equal (=)
										{:else if filter.operator === 'ne'}
											not equal (&ne;)
										{/if}
									{/key}
								</Select.Trigger>
								<Select.Content class="w-[4rem]">
									<Select.Item value="gt">greater ({'>'})</Select.Item>
									<Select.Item value="lt">less ({'<'})</Select.Item>
									<Select.Item value="eq">equal (=)</Select.Item>
									<Select.Item value="ne">not equal (&ne;)</Select.Item>
								</Select.Content>
							</Select.Root>
							<Input
								placeholder="0"
								type="number"
								class="w-[9rem]"
								value={filter.value}
								on:change={getFilterInputChangeFunc(filterableItem.id, filter)}
							/>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{/each}
			{/if}
		{/each}
	</div>
{/if}
