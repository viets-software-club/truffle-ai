<script lang="ts">
    import {
      Render,
      Subscribe,
      createRender,
      createTable
    } from "svelte-headless-table";
    import {
      addHiddenColumns,
      addPagination,
      addSelectedRows,
      addSortBy,
      addTableFilter
    } from "svelte-headless-table/plugins";
    import { readable } from "svelte/store";
    import ArrowUpDown from "lucide-svelte/icons/arrow-up-down";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import Actions from "./TableActions.svelte";
    import * as Table from "$lib/components/pure/ui/table/index.js";
    import { Button } from "$lib/components/pure/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/pure/ui/dropdown-menu/index.js";
    import { cn } from "$lib/utils/index";
    import { Input } from "$lib/components/pure/ui/input/index.js";
   
    type Data = {
      id: string;
      email: string;
    }[];

    export let data: Data;
   
    const table = createTable(readable(data), {
      sort: addSortBy({ disableMultiSort: true }),
      page: addPagination({initialPageSize: 6}),
      filter: addTableFilter({
        fn: ({ filterValue, value }) => value.includes(filterValue)
      }),
      select: addSelectedRows(),
      hide: addHiddenColumns()
    });
   
    const columns = table.createColumns([
      table.column({
        header: "ID",
        accessor: "id",
        plugins: {
          sort: {
            disable: true
          },
          filter: {
            exclude: true
          }
        }
      }),
      table.column({
        header: "Email",
        accessor: "email",
        cell: ({ value }) => value.toLowerCase(),
        plugins: {
          filter: {
            getFilterValue(value) {
              return value.toLowerCase();
            }
          }
        }
      }),
      table.column({
        header: 'Actions',

        id: "actions",
        // header: "Actions",
        accessor: ({ id }: any) => id,
        cell: (item) => {
          return createRender(Actions, { id: item.value });
        },
        plugins: {
          sort: {
            disable: true
          }
        }
      })
    ]);
   
    const {
      headerRows,
      pageRows,
      tableAttrs,
      tableBodyAttrs,
      flatColumns,
      pluginStates,
      rows
    } = table.createViewModel(columns);
   
    const { sortKeys } = pluginStates.sort;
   
    const { hiddenColumnIds } = pluginStates.hide;
    const ids = flatColumns.map((c) => c.id);
    let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
   
    $: $hiddenColumnIds = Object.entries(hideForId)
      .filter(([, hide]) => !hide)
      .map(([id]) => id);
   
    const { hasNextPage, hasPreviousPage, pageIndex, pageSize } = pluginStates.page;
    const { filterValue } = pluginStates.filter;
   
    const { selectedDataIds } = pluginStates.select;

    const getCurrentPageLength = () => {
      if($hasNextPage)
        return 6;
      else
        if($rows.length % 6 == 0)
          return 6
        else
          return $rows.length % 6;
    }
   
    const hideableCols = ["id", "email", "actions"];
  </script>
   
  <div class="w-full">
    <div class="flex flex-col md:flex-row md:items-center py-4 gap-2">
      <Input
        class="max-w-sm"
        placeholder="Filter emails..."
        type="text"
        bind:value={$filterValue}
      />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button variant="outline" class="ml-auto" builders={[builder]}>
            Columns <ChevronDown class="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {#each flatColumns as col}
            {#if hideableCols.includes(col.id)}
              <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
                {col.header}
              </DropdownMenu.CheckboxItem>
            {/if}
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
    <div class="rounded-md border overflow-auto">
      <Table.Root {...$tableAttrs} >
        <Table.Header>
          {#each $headerRows as headerRow}
            <Subscribe rowAttrs={headerRow.attrs()}>
              <Table.Row>
                {#each headerRow.cells as cell (cell.id)}
                  <Subscribe
                    attrs={cell.attrs()}
                    let:attrs
                    props={cell.props()}
                    let:props
                  >

                    <Table.Head
                      {...attrs}
                      
                      class={cn(cell.id === 'actions' && 'max-w-[70px]')}
                    >
                    {#if cell.id === "actions"}
                    <div class="max-w-[70px] ml-auto"><Render of={cell.render()} /></div>
                    {:else if cell.id === "email"}
                        <Button variant="ghost" on:click={props.sort.toggle}>
                          <Render of={cell.render()} />
                          <ArrowUpDown
                            class={cn(
                              $sortKeys[0]?.id === cell.id && "text-foreground",
                              "ml-2 h-4 w-4"
                            )}
                          />
                        </Button>
                      
                      {:else}
                        <Render of={cell.render()} />
                      {/if}
                    </Table.Head>
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
              >
                {#each row.cells as cell (cell.id)}
                  <Subscribe attrs={cell.attrs()} let:attrs>
                    <Table.Cell {...attrs} class={cn(cell.id === 'actions' && 'max-w-[70px]')}>
                      {#if cell.id === "actions"}
                        <div class="max-w-[70px]  ml-auto"><Render of={cell.render()} /></div>
                      {:else if cell.id === 'id'}
                        <div class="text-ellipsis truncate max-w-[100px] md:max-w-none"><Render of={cell.render()} /></div>
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
    <div class="flex items-center justify-end space-x-2 py-4">
      <div class="flex-1 text-sm text-muted-foreground">
        {getCurrentPageLength()} of {$rows.length} rows shown.
      </div>
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