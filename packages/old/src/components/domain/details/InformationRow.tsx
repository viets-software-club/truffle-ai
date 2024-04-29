import GithubStatItem from '@/components/shared/GithubStatItem'
import { ComponentProps } from 'react'

type InformationRowProps = {
	githubStats: ({ id: ID } & ComponentProps<typeof GithubStatItem>)[]
	name: string
	tags: { id: ID; name: string }[]
}

/**
 * Single row of a projects table, displaying a name, tags, and Github statistics
 *
 * @param {InformationRowProps} props - The properties for this component.
 * @returns {React.Element} The information row element.
 */
const InformationRow = ({ githubStats, name, tags }: InformationRowProps) => (
	<div className="flex flex-row items-center p-2 text-sm font-normal transition-colors duration-100 hover:bg-white/5">
		<h4 className="text-sm">{name}</h4>

		{tags.map(({ id, name: tagName }) => (
			<span
				key={id}
				className="mx-1 block rounded-md bg-white/5 px-2 py-0.5 text-xs font-light text-white/75"
			>
				{tagName}
			</span>
		))}

		{githubStats.map((data) => (
			<GithubStatItem
				key={data.id}
				Icon={data.Icon}
				IconMetric={data.IconMetric}
				value={data.value}
				growth={data.growth}
			/>
		))}
	</div>
)

export default InformationRow
