import { useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import Button from '@/components/pure/Button'
import DropdownMenu from '../../../../old/DropdownMenu'
import Skeleton from '../../pure/LoadingBar'
import Chart, { ChartProps } from './Chart'

const timeframeOptions = [
	{ label: '1 Month', value: 1 },
	{ label: '3 Months', value: 3 },
	{ label: '6 Months', value: 6 },
	{ label: '1 Year', value: 12 },
	{ label: 'All Time', value: -1 }
]

const dataOptions = [
	{ label: 'Stars', value: 'stars' },
	{ label: 'Forks', value: 'forks' }
]

export type DataPoint = {
	date: string
	count: number
}

type ChartWrapperProps = ChartProps & {
	loading?: boolean
	multipleLines?: boolean
	selectedMetric: string
	setSelectedMetric: (metric: string) => void
}

/**
 * Reduce chart data to given number of months
 * @param data chart data
 * @param months number of months to reduce to (-1 = all time)
 */
const filterDataByTimeframe = (data: DataPoint[], months: number) => {
	if (months === -1) return data
	const now = new Date()
	const pastDate = now.setMonth(now.getMonth() - months)
	return data.filter((d) => new Date(d.date).getTime() >= pastDate)
}

/**
 * Linechart with one or more datasets
 */
const ChartWrapper = ({
	loading,
	datasets,
	multipleLines,
	selectedMetric,
	setSelectedMetric
}: ChartWrapperProps) => {
	const [timeframe, setTimeframe] = useState<number>(-1)
	const [chartDataOriginal, setChartDataOriginal] = useState<
		ChartWrapperProps['datasets']
	>([...datasets])
	const [chartData, setChartData] = useState(chartDataOriginal)
	const [isDataNormalized, setIsDataNormalized] = useState(false)

	// Mehtod to handle the click on the "Normalize data" button
	const handleDataNormalization = () => {
		if (isDataNormalized) {
			setChartData(chartDataOriginal)
			setIsDataNormalized(false)
			return
		}

		setIsDataNormalized(true)

		const earliestDate = Math.min(
			...datasets.flatMap((dataset) =>
				dataset.data.map((point) => new Date(point.date).getTime())
			)
		)

		const normalizedData = chartData.map((dataset) => ({
			...dataset,
			data: dataset.data.map((point) => ({
				...point,
				date: new Date(
					new Date(point.date).getTime() -
						(Math.min(...dataset.data.map((p) => new Date(p.date).getTime())) -
							earliestDate)
				).toISOString()
			}))
		}))

		setChartData(normalizedData)
	}

	const handleTimeframeChange = (value: number) => {
		setTimeframe(value)

		const filteredData = chartDataOriginal.map((dataset) => ({
			...dataset,
			data: filterDataByTimeframe(dataset.data, value)
		}))

		setChartData(filteredData)
	}

	useEffect(() => {
		setChartData([...datasets])
		setChartDataOriginal([...datasets])
	}, [datasets])

	return (
		<div className="w-full px-4 py-6 lg:p-6">
			{loading ? (
				<Skeleton className="h-96" />
			) : datasets.length === 0 ? (
				<p className="py-16 text-center text-sm text-white/75">
					No data to display
				</p>
			) : (
				<div className="flex w-full flex-col gap-3">
					<div className="flex flex-row gap-3 ">
						<DropdownMenu<string>
							value={selectedMetric}
							setValue={setSelectedMetric}
							options={dataOptions}
							Icon={FiChevronDown}
						/>

						<DropdownMenu<number>
							value={timeframe}
							setValue={handleTimeframeChange}
							options={timeframeOptions}
							Icon={AiOutlineCalendar}
						/>

						{multipleLines && (
							<Button onClick={handleDataNormalization}>Normalize Data</Button>
						)}
					</div>

					<Chart datasets={chartData} />
				</div>
			)}
		</div>
	)
}

export default ChartWrapper
