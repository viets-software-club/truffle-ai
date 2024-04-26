import { Dispatch, SetStateAction } from 'react'
import { VisibilityState } from '@tanstack/react-table'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import defaultFilters from '@/components/domain/projects/filters/defaultFilters'
import { defaultSort } from '@/components/domain/projects/types'
import { ProjectFilter, ProjectOrderBy } from '@/graphql/generated/gql'

interface ProjectTableVisibilityState {
	columnVisibility: VisibilityState
	setColumnVisibility: Dispatch<SetStateAction<VisibilityState>>
}

export const useProjectTableVisibilityState =
	create<ProjectTableVisibilityState>()(
		persist(
			(set) => ({
				columnVisibility: {},
				setColumnVisibility: (
					columnVisibility:
						| VisibilityState
						| ((prevState: VisibilityState) => VisibilityState)
				) => {
					set((old) => ({
						columnVisibility:
							typeof columnVisibility === 'function'
								? columnVisibility(old.columnVisibility)
								: columnVisibility
					}))
				}
			}),
			{
				storage: createJSONStorage(() => localStorage),
				name: 'ProjectTableVisibilityState'
			}
		)
	)

interface ProjectTableState {
	filters: ProjectFilter
	setFilters: (filters: ProjectFilter) => void
	sorting: ProjectOrderBy | null
	setSorting: (sort: ProjectOrderBy | null) => void
}

export const useTrendingProjectsState = create<ProjectTableState>()(
	persist(
		(set) => ({
			filters: defaultFilters,
			setFilters: (filters: ProjectFilter) => set({ filters }),
			sorting: defaultSort,
			setSorting: (sorting: ProjectOrderBy | null) => {
				set({ sorting })
			}
		}),
		{
			storage: createJSONStorage(() => localStorage),
			name: 'TrendingProjectsState'
		}
	)
)

export const useBookmarkedProjectsState = create<ProjectTableState>()(
	persist(
		(set) => ({
			filters: {},
			setFilters: (filters: ProjectFilter) => {
				set({ filters })
			},
			sorting: defaultSort,
			setSorting: (sorting: ProjectOrderBy | null) => {
				set({ sorting })
			}
		}),
		{
			storage: createJSONStorage(() => localStorage),
			name: 'BookmarkedProjectsState'
		}
	)
)

export const useCategoryProjectsState = create<ProjectTableState>()(
	persist(
		(set) => ({
			filters: {},
			setFilters: (filters: ProjectFilter) => {
				set({ filters })
			},
			sorting: defaultSort,
			setSorting: (sorting: ProjectOrderBy | null) => {
				set({ sorting })
			}
		}),
		{
			storage: createJSONStorage(() => localStorage),
			name: 'CategoryProjectsState'
		}
	)
)

interface LastViewedPageState {
	lastViewedPage: string // 'trending' | 'bookmarked' | '<category-name>'
	setLastViewedPage: (lastViewedPage: string) => void
	bookmarkIds: string[] | null
	setBookmarkIds: (bookmarkIds: string[] | null) => void
}

export const useLastViewedPageState = create<LastViewedPageState>()(
	persist(
		(set) => ({
			lastViewedPage: 'trending',
			setLastViewedPage: (lastViewedPage: string) => {
				set({ lastViewedPage })
			},
			bookmarkIds: null,
			setBookmarkIds: (bookmarkIds: string[] | null) => {
				set({ bookmarkIds })
			}
		}),
		{
			storage: createJSONStorage(() => localStorage),
			name: 'LastViewedPageState'
		}
	)
)

interface ComparePageRowPinningState {
	rowPinning: {
		[categoryId: string]: string[]
	}
	setRowPinning: (rowPinning: { [categoryId: string]: string[] }) => void
}

export const useComparePageRowPinningState =
	create<ComparePageRowPinningState>()(
		persist(
			(set) => ({
				rowPinning: {},
				setRowPinning: (rowPinning: { [categoryId: string]: string[] }) => {
					set({ rowPinning })
				}
			}),
			{
				storage: createJSONStorage(() => localStorage),
				name: 'ComparePageRowPinningState'
			}
		)
	)
