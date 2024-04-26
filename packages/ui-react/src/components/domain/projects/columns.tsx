import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { GoGitPullRequest } from 'react-icons/go'
import { VscIssues } from 'react-icons/vsc'
import Image from 'next/image'
import { IssueOpenedIcon, PersonIcon, RepoForkedIcon } from '@primer/octicons-react'
import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import GitHubMetricIcon from '@/components/shared/GitHubMetricIcon'
import GitHubStatisticItem from '@/components/shared/GithubStatItem'
import Pin from './Pin'

type TenPercent = { [key in keyof Project]?: number | null }

export type PercentileStats = {
  topTenPercent: TenPercent
  topTwentyPercent: TenPercent
  bottomTenPercent: TenPercent
  bottomTwentyPercent: TenPercent
}

// eslint-disable-next-line max-lines-per-function
const createColumns = (
  { topTenPercent, topTwentyPercent, bottomTenPercent, bottomTwentyPercent }: PercentileStats,
  showPinned?: boolean
) => {
  const columnHelper = createColumnHelper<Project>()

  return [
    // Pin column definition
    columnHelper.accessor(project => project, {
      id: 'Pin',
      header: '',
      enableColumnFilter: false,
      cell: ({ row }) => (
        <Pin isPinned={row.getIsPinned()} pin={() => row.pin('top')} unpin={() => row.pin(false)} />
      )
    }),
    // Logo column definition
    columnHelper.accessor(
      ({ organization, associatedPerson }) =>
        organization?.avatarUrl || associatedPerson?.avatarUrl,
      {
        header: 'Logo',
        enableColumnFilter: false,
        cell: info => (
          <div
            className={clsx('relative h-6 w-6 overflow-hidden rounded-md', !showPinned && 'ml-3')}>
            <Image src={info.getValue() as string} alt='logo' fill sizes='24px' />
          </div>
        )
      }
    ),
    // Name column definition
    columnHelper.accessor(
      ({ organization, associatedPerson, name }) =>
        `${(organization?.login || associatedPerson?.login) as string} / ${name as string}`,
      {
        id: 'Name',
        header: 'Name',
        enableColumnFilter: true,
        cell: info => {
          const [owner, name] = info.getValue().split(' / ')
          return (
            <div>
              <span className='text-sm font-medium text-white/50'>
                {owner.slice(0, 15)} /&nbsp;
              </span>
              {owner.length > 16 && <span className='text-sm text-white/50'>...</span>}
              <span className='text-sm font-bold'>{name.slice(0, 31)}</span>
              {name.length > 32 && <span className='text-sm'>...</span>}
            </div>
          )
        }
      }
    ),
    // Stars column definition
    columnHelper.accessor('starCount', {
      id: 'Stars',
      header: 'Stars',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={AiOutlineStar}
          value={info.getValue() as number}
          greenValue={topTenPercent.starCount}
          lightGreenValue={topTwentyPercent.starCount}
          redValue={bottomTwentyPercent.starCount}
          lightRedValue={bottomTenPercent.starCount}
          reverseStats
        />
      )
    }),
    // Issues column definition
    columnHelper.accessor('issueCount', {
      id: 'Issues',
      header: 'Issues',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={VscIssues}
          value={info.getValue() as number}
          greenValue={topTenPercent.issueCount}
          lightGreenValue={topTwentyPercent.issueCount}
          redValue={bottomTwentyPercent.issueCount}
          lightRedValue={bottomTenPercent.issueCount}
          reverseStats
        />
      )
    }),
    // Forks column definition
    columnHelper.accessor('forkCount', {
      id: 'Forks',
      header: 'Forks',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={AiOutlineFork}
          value={info.getValue() as number}
          greenValue={topTenPercent.forkCount}
          lightGreenValue={topTwentyPercent.forkCount}
          redValue={bottomTwentyPercent.forkCount}
          lightRedValue={bottomTenPercent.forkCount}
        />
      )
    }),
    // Contributors column definition
    columnHelper.accessor('contributorCount', {
      id: 'Contrib.',
      header: 'Contrib.',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={BsPeople}
          value={(info.getValue() as number) || 0}
          greenValue={topTenPercent.contributorCount}
          lightGreenValue={topTwentyPercent.contributorCount}
          redValue={bottomTwentyPercent.contributorCount}
          lightRedValue={bottomTenPercent.contributorCount}
        />
      )
    }),
    // Forks per Contributor column definition
    columnHelper.accessor('forksPerContributor', {
      id: 'Forks/Contrib.',
      header: 'Forks/Contrib.',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
          value={info.getValue() as number}
          greenValue={topTenPercent.forksPerContributor}
          lightGreenValue={topTwentyPercent.forksPerContributor}
          redValue={bottomTwentyPercent.forksPerContributor}
          lightRedValue={bottomTenPercent.forksPerContributor}
        />
      )
    }),
    // Issues per Contributor column definition
    columnHelper.accessor('issuesPerContributor', {
      id: 'Issues/Contrib.',
      header: 'Issues/Contrib.',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
          value={info.getValue() as number}
          greenValue={topTenPercent.issuesPerContributor}
          lightGreenValue={topTwentyPercent.issuesPerContributor}
          redValue={bottomTwentyPercent.issuesPerContributor}
          lightRedValue={bottomTenPercent.issuesPerContributor}
        />
      )
    }),
    // PR column definition
    columnHelper.accessor('pullRequestCount', {
      id: 'PR',
      header: 'Open PRs',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={GoGitPullRequest}
          value={(info.getValue() as number) || 0}
          greenValue={topTenPercent.pullRequestCount}
          lightGreenValue={topTwentyPercent.pullRequestCount}
          redValue={bottomTwentyPercent.pullRequestCount}
          lightRedValue={bottomTenPercent.pullRequestCount}
          reverseStats
        />
      )
    })
  ]
}

export default createColumns
