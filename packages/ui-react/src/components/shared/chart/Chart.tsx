import type { ChartData, ChartEvent, LegendItem } from 'chart.js'
import { Chart as ChartJS, registerables } from 'chart.js'
import 'chartjs-adapter-moment'
import { useState } from 'react'
import { Chart } from 'react-chartjs-2'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config'
import chartOptions from './options'

ChartJS.register(...registerables)

// Make Tailwind classes accessible inside JS objects of the recharts library
const fullConfig = resolveConfig(tailwindConfig)

type ColorObject = {
	[key: string]: string
}

const singleColors = ['teal', 'mustard', 'yellow', 'orange', 'purple', 'blue']
const indigoColors = fullConfig.theme?.colors?.indigo as ColorObject
const colorValues = ['300', '500']

const singleColorValues = singleColors
	.map((colorName) => fullConfig.theme?.colors?.[colorName] as string)
	.filter(Boolean)

const colors = colorValues
	.flatMap((value) => [indigoColors?.[value]].filter(Boolean))
	.concat(singleColorValues)

const gray = (fullConfig.theme?.colors?.gray as ColorObject)[800]

export type DataPoint = {
	date: string
	count: number
}

export type ChartProps = {
	datasets: {
		id: string
		name: string
		data: DataPoint[]
	}[]
}

/**
 * Linechart with one or more datasets
 */
const ChartComponent = ({ datasets }: ChartProps) => {
	const [activeDatasetIndex, setActiveDatasetIndex] = useState<number>()

	const chartData: ChartData<'line'> = {
		datasets: datasets.map(({ name, data }, index) => {
			const isActive =
				index === activeDatasetIndex || activeDatasetIndex === undefined
			const baseColor = colors[index % colors.length]
			const backgroundColor = `${isActive ? baseColor : gray}30`
			const borderColor = isActive ? baseColor : gray

			return {
				data: data?.map(({ date, count }) => ({
					x: new Date(date).getTime(),
					y: count
				})),
				backgroundColor,
				borderColor,
				label: name
			}
		})
	}

	const handleLegendItemHover = (_e: ChartEvent, legendItem: LegendItem) => {
		setActiveDatasetIndex(legendItem.datasetIndex)
	}

	const handleLegendItemLeave = () => {
		setActiveDatasetIndex(undefined)
	}

	return (
		<div className="mt-6 h-96 w-full">
			<Chart
				type="line"
				data={chartData}
				options={{
					...chartOptions,
					plugins: {
						...chartOptions.plugins,
						legend: {
							display: chartData.datasets.length > 1,
							...chartOptions.plugins?.legend,
							onHover: handleLegendItemHover,
							onLeave: handleLegendItemLeave
						}
					}
				}}
				className="!w-full"
			/>
		</div>
	)
}

export default ChartComponent
