import GitHubStatisticItem from '@/components/shared/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineStar } from 'react-icons/ai'
import { PercentileStats } from './columns'

type ProjectListItemProps = {
	project: Project
	percentileStats: PercentileStats
}

const ProjectListItem = ({
	project: { id, organization, associatedPerson, name, starCount },
	percentileStats: {
		topTenPercent,
		topTwentyPercent,
		bottomTwentyPercent,
		bottomTenPercent
	}
}: ProjectListItemProps) => {
	const owner = organization || associatedPerson

	return (
		<Link
			href={`/details/${id as string}`}
			className="flex w-full items-center gap-4 rounded-md px-3 py-2 transition-colors duration-75 hover:bg-white/5"
		>
			<Image
				src={owner?.avatarUrl as string}
				alt={name as string}
				width={0}
				height={0}
				sizes="24px"
				className="relative h-6 w-6 rounded-md"
			/>

			<div className="mr-auto line-clamp-1 text-sm font-bold">
				<span className="font-medium text-white/50">{owner?.login} /</span>{' '}
				{name}
			</div>

			<GitHubStatisticItem
				Icon={AiOutlineStar}
				value={starCount as number}
				greenValue={topTenPercent.starCount}
				lightGreenValue={topTwentyPercent.starCount}
				redValue={bottomTwentyPercent.starCount}
				lightRedValue={bottomTenPercent.starCount}
				reverseStats
			/>
		</Link>
	)
}

export default ProjectListItem
