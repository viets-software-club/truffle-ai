import { ReactNode } from 'react'
import clsx from 'clsx'
import formatNumber from '@/util/formatNumber'

enum Color {
	DEFAULT = 'text-white/75',
	GREEN = 'text-green-500',
	LIGHT_GREEN = 'text-green-300',
	RED = 'text-red-400',
	LIGHT_RED = 'text-red-300'
}

const getColor = (
	value?: number,
	greenValue?: number | null,
	lightGreenValue?: number | null,
	redValue?: number | null,
	lightRedValue?: number | null,
	reverseStats?: boolean
) => {
	if (!value || !greenValue || !lightGreenValue || !redValue || !lightRedValue)
		return Color.DEFAULT

	if (!reverseStats) {
		if (value >= greenValue) return Color.LIGHT_GREEN
		if (value >= lightGreenValue) return Color.GREEN
		if (value <= lightRedValue) return Color.LIGHT_RED
		if (value <= redValue) return Color.RED
	}

	if (value >= greenValue) return Color.LIGHT_RED
	if (value >= lightGreenValue) return Color.RED
	if (value <= lightRedValue) return Color.LIGHT_GREEN
	if (value <= redValue) return Color.GREEN

	return Color.DEFAULT
}

type GithubStatItemProps = {
	id?: string
	Icon?: IconComponentType
	IconMetric?: ReactNode
	value?: number
	growth?: string
	greenValue?: number | null
	lightGreenValue?: number | null
	redValue?: number | null
	lightRedValue?: number | null
	largeGap?: boolean
	link?: string
	reverseStats?: boolean
}

const GithubStatItem = ({
	id,
	Icon,
	value,
	growth,
	IconMetric,
	greenValue,
	lightGreenValue,
	redValue,
	lightRedValue,
	largeGap,
	link,
	reverseStats
}: GithubStatItemProps) => {
	const color = getColor(
		value,
		greenValue,
		lightGreenValue,
		redValue,
		lightRedValue,
		reverseStats
	)

	const gap = largeGap ? 'gap-[10px]' : 'gap-[5px]'

	return (
		<div
			className={clsx('flex flex-row items-center py-2.5 text-xs', gap, color)}
			data-tooltip-id="tooltip"
			data-tooltip-content={id}
		>
			{Icon && <Icon className={clsx('h-[14px] w-[14px]', color)} />}

			{IconMetric}

			{value && (
				<span className={clsx('font-medium not-italic leading-3', color)}>
					{formatNumber(value)}
				</span>
			)}

			{link && (
				<a href={link} target="_blank" rel="noreferrer">
					GitHub
				</a>
			)}

			{growth && (
				<span className="not-italic leading-3 text-white/50">{growth}</span>
			)}
		</div>
	)
}

export default GithubStatItem
