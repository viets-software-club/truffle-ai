import { AiOutlineStar } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import GitHubStatisticItem from '@/components/shared/GithubStatItem'
import { GthbRepo } from '@/graphql/generated/gql'
import { PercentileStats } from './columns'

type ProjectListItemProps = { project: GthbRepo; percentileStats: PercentileStats }

const ProjectListItem = ({
  project: { gthbRepoId, gthbOwner, gthbRepoName, stargazerCount },
  percentileStats: { topTenPercent, topTwentyPercent, bottomTwentyPercent, bottomTenPercent }
}: ProjectListItemProps) => (
  <Link
    href={`/details/${gthbRepoId as string}`}
    className='flex w-full items-center gap-4 rounded-md px-3 py-2 transition-colors duration-75 hover:bg-white/5'>
    {gthbOwner.avatarUrl ? (
      <Image
        src={gthbOwner.avatarUrl}
        alt={gthbRepoName}
        width={0}
        height={0}
        sizes='24px'
        className='relative h-6 w-6 rounded-md'
      />
    ) : (
      <div className='h-6 w-6 rounded-md bg-white/20' />
    )}

    <div className='mr-auto line-clamp-1 text-sm font-bold'>
      <span className='font-medium text-white/50'>{gthbOwner.gthbOwnerLogin} /</span> {gthbRepoName}
    </div>

    <GitHubStatisticItem
      Icon={AiOutlineStar}
      value={stargazerCount as number}
      greenValue={topTenPercent.stargazerCount}
      lightGreenValue={topTwentyPercent.stargazerCount}
      redValue={bottomTwentyPercent.stargazerCount}
      lightRedValue={bottomTenPercent.stargazerCount}
      reverseStats
    />
  </Link>
)

export default ProjectListItem
