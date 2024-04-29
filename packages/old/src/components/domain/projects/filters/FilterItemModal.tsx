import Button from '@/components/pure/Button'
import { IntFilter, ProjectFilter, StringFilter } from '@/graphql/generated/gql'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import { TbRefresh, TbTrash } from 'react-icons/tb'
import MenuItemsTransition from '../../../shared/MenuItemsTransition'
import {
	FilterOption,
	IntFilterOperator,
	StringFilterOperator,
	filterOptions
} from '../types'
import FilterItemModalTrigger from './FilterItemModalTrigger'
import FilterMenuItem from './FilterMenuItem'
import OperatorSelector from './OperatorSelector'

const isIntFilter = (filter: StringFilter | IntFilter) =>
	(filter as IntFilter).gt !== undefined

type FilterItemModalProps = {
	currentKey: FilterOption['key']
	filters: ProjectFilter
	updateFilters: (filter: ProjectFilter) => void
}

const FilterItemModal = ({
	filters,
	currentKey,
	updateFilters
}: FilterItemModalProps) => {
	const type = filterOptions.find((option) => option.key === currentKey)?.type
	const column = filterOptions.find(
		(option) => option.key === currentKey
	)?.column
	const currentOperator = Object.keys(filters[currentKey] || {})[0] as
		| StringFilterOperator
		| IntFilterOperator

	const filter = filters?.[currentKey]
	const defFilterNumber =
		filter && isIntFilter(filter)
			? filter[currentOperator as IntFilterOperator]
			: undefined

	const [value, setValue] = useState<string | number>(defFilterNumber || '')

	const [operator, setOperator] = useState<
		IntFilterOperator | StringFilterOperator
	>(currentOperator)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newFilters = { ...filters }
		newFilters[currentKey] = {
			[operator]: type === 'string' ? value : parseFloat(value as string)
		}
		updateFilters(newFilters)
	}

	const removeFilter = () => {
		const newFilters = { ...filters }
		delete newFilters[currentKey]
		updateFilters(newFilters)
	}

	const intFilterOperators: JSX.Element[] = Object.entries(
		IntFilterOperator
	).map(([label, op]) => (
		<FilterMenuItem
			key={op}
			label={label}
			handleClick={() => setOperator(op)}
		/>
	))

	const stringFilterOperators = Object.entries(StringFilterOperator).map(
		([label, op]) => (
			<FilterMenuItem
				key={op}
				label={label}
				handleClick={() => setOperator(op)}
			/>
		)
	)

	return (
		<Popover as="div" className="relative">
			{({ open, close }) => (
				<>
					{/* Filterbar button (greyed out when no filter value has been selected) */}
					<Popover.Button as="div">
						<FilterItemModalTrigger
							value={value}
							type={type}
							column={column}
							open={open}
						/>
					</Popover.Button>

					{/* Filterbar dropdown */}
					<MenuItemsTransition>
						<Popover.Panel
							className={clsx(
								'absolute left-0 z-40 mt-2 w-44 rounded-md border border-white/5 bg-white/5 shadow-sm shadow-white/5 outline-none backdrop-blur-xl transition-all duration-75',
								{
									block: open,
									hidden: !open
								}
							)}
						>
							{/* Whole expanded dropdown */}
							<div className="p-2">
								<div className="flex justify-between">
									<div className="flex space-x-2">
										{/* Filter/ column title */}
										<p className="text-sm text-white">{column}</p>

										<OperatorSelector
											operator={operator}
											type={type}
											stringFilterOperators={stringFilterOperators}
											intFilterOperators={intFilterOperators}
										/>
									</div>

									{/* Remove icon */}
									<Button onClick={removeFilter} variant="unstyled">
										<TbTrash />
									</Button>
								</div>

								{/* Input */}
								<form
									className="mt-2 flex gap-1"
									onSubmit={(e) => {
										handleSubmit(e)
										close()
									}}
								>
									<input
										placeholder="Type a value..."
										type={type === 'string' ? 'text' : 'number'}
										className="w-full rounded bg-white/5 px-2 py-1 text-sm text-white outline-none placeholder:text-white/50"
										value={value}
										onChange={handleChange}
									/>
									<Button type="submit">
										<TbRefresh />
									</Button>
								</form>
							</div>
						</Popover.Panel>
					</MenuItemsTransition>
				</>
			)}
		</Popover>
	)
}

export default FilterItemModal
