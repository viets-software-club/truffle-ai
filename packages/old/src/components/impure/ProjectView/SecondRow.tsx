import FilterItemModal from '@/components/domain/projects/filters/FilterItemModal'
import SortModal from '@/components/domain/projects/filters/SortModal'
import Button from '@/components/pure/Button'
import Skeleton from '@/components/pure/LoadingBar'
import {
	PageInfo,
	ProjectFilter,
	ProjectOrderBy
} from '@/graphql/generated/gql'
import { Dispatch, SetStateAction, useMemo } from 'react'
import {
	FiChevronLeft as ChevronLeft,
	FiChevronRight as ChevronRight
} from 'react-icons/fi'
import {
	FilterOption,
	PaginationParameters,
	TimeFilterOption
} from '../../domain/projects/types'

type FilterBarProps = {
	loading?: boolean
	filters: ProjectFilter
	currentEntries: number
	totalEntries: number
	sorting: ProjectOrderBy | null
	pageInfo?: PageInfo
	pageSize: number
	updateFilters: (filter: ProjectFilter) => void
	setSorting: (sorting: ProjectOrderBy | null) => void
	setPagination: Dispatch<SetStateAction<PaginationParameters>>
}

const FilterBar = ({
	loading,
	filters,
	currentEntries,
	totalEntries,
	sorting,
	pageInfo,
	pageSize,
	setSorting,
	updateFilters,
	setPagination
}: FilterBarProps) => {
	const handleClickLeft = () => {
		setPagination({
			last: pageSize,
			before: pageInfo?.startCursor,
			first: null,
			after: null
		})
	}

	const handleClickRight = () => {
		setPagination({
			first: pageSize,
			after: pageInfo?.endCursor,
			last: null,
			before: null
		})
	}

	// Filters (exclude time filter options + id)
	const filterItemModals = useMemo(
		() =>
			Object.keys(filters)
				.filter(
					(key) =>
						!Object.values(TimeFilterOption).includes(key as TimeFilterOption)
				)
				.filter((key) => key !== 'id')
				.map((key) => (
					<FilterItemModal
						key={key}
						currentKey={key as FilterOption['key']}
						filters={filters}
						updateFilters={updateFilters}
					/>
				)),
		[filters, updateFilters]
	)

	return (
		<div className="flex flex-row justify-between border-b border-white/5 px-6 py-2.5">
			<div className="hidden flex-row gap-3 md:flex">
				{loading ? (
					<Skeleton className="h-8 !w-24" />
				) : (
					<>
						{/* Sorting */}
						{sorting && <SortModal sorting={sorting} setSorting={setSorting} />}
						{/* Separator - only show when at least 1 filter is active
            (> 1 because isTrendingDaily/Weekly/Monthly is not displayed in filter bar) */}
						{sorting && Object.keys(filters).length > 1 && (
							<div className="my-auto h-4/5 border-l border-white/5" />
						)}

						{filterItemModals}
					</>
				)}
			</div>

			{/* Row count */}
			{loading ? (
				<Skeleton className="h-8 !w-36" />
			) : (
				<div className="flex items-center py-2 md:py-0">
					{totalEntries > 1 &&
						(pageInfo?.hasNextPage || pageInfo?.hasPreviousPage) && (
							<div className="mr-2 flex gap-3">
								<Button
									disabled={!pageInfo.hasPreviousPage}
									onClick={handleClickLeft}
								>
									<ChevronLeft />
								</Button>
								<Button
									disabled={!pageInfo.hasNextPage}
									onClick={handleClickRight}
								>
									<ChevronRight />
								</Button>
							</div>
						)}
					<p className="text-sm">Showing {currentEntries}&nbsp;</p>
					<p className="text-sm text-white/50">/&nbsp;{totalEntries} entries</p>
				</div>
			)}
		</div>
	)
}
export default FilterBar
