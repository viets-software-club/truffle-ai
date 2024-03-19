import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
// import { BsPeople } from 'react-icons/bs'
import { GoGitPullRequest } from 'react-icons/go'
import { VscIssues } from 'react-icons/vsc'
import Image from 'next/image'
// import { IssueOpenedIcon, PersonIcon, RepoForkedIcon } from '@primer/octicons-react'
import { createColumnHelper } from '@tanstack/react-table'
import clsx from 'clsx'
import GitHubStatisticItem from '@/components/shared/GithubStatItem'
import { GthbRepo } from '@/graphql/generated/gql'
import Pin from './Pin'

type TenPercent = { [key in keyof GthbRepo]?: number | null }

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
  const columnHelper = createColumnHelper<GthbRepo>()

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
    columnHelper.accessor(({ gthbOwner }) => gthbOwner.avatarUrl, {
      header: 'Logo',
      enableColumnFilter: false,
      cell: info => (
        <div className={clsx('relative h-6 w-6 overflow-hidden rounded-md', !showPinned && 'ml-3')}>
          {info.getValue() ? (
            <Image src={info.getValue()} alt='logo' fill sizes='24px' />
          ) : (
            <div className='h-6 w-6 rounded-md bg-white/20' />
          )}
        </div>
      )
    }),
    // Name column definition
    columnHelper.accessor(
      ({ gthbOwner, gthbRepoName }) => `${gthbOwner.gthbOwnerLogin} / ${gthbRepoName}`,
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
    columnHelper.accessor(({ stargazerCount }) => stargazerCount as number, {
      id: 'Stars',
      header: 'Stars',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={AiOutlineStar}
          value={info.getValue()}
          greenValue={topTenPercent.stargazerCount}
          lightGreenValue={topTwentyPercent.stargazerCount}
          redValue={bottomTwentyPercent.stargazerCount}
          lightRedValue={bottomTenPercent.stargazerCount}
          reverseStats
        />
      )
    }),
    // Issues column definition
    columnHelper.accessor(({ issuesTotalCount }) => issuesTotalCount as number, {
      id: 'Issues',
      header: 'Issues',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={VscIssues}
          value={info.getValue()}
          greenValue={topTenPercent.issuesTotalCount}
          lightGreenValue={topTwentyPercent.issuesTotalCount}
          redValue={bottomTwentyPercent.issuesTotalCount}
          lightRedValue={bottomTenPercent.issuesTotalCount}
          reverseStats
        />
      )
    }),
    // Forks column definition
    columnHelper.accessor(({ forkCount }) => forkCount as number, {
      id: 'Forks',
      header: 'Forks',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={AiOutlineFork}
          value={info.getValue()}
          greenValue={topTenPercent.forkCount}
          lightGreenValue={topTwentyPercent.forkCount}
          redValue={bottomTwentyPercent.forkCount}
          lightRedValue={bottomTenPercent.forkCount}
        />
      )
    }),
    // @TODO
    // // Contributors column definition
    // columnHelper.accessor(({  issuesTotalCount  }) => issuesTotalCount as number, {
    //   id: 'Contrib.',
    //   header: 'Contrib.',
    //   enableColumnFilter: true,
    //   cell: info => (
    //     <GitHubStatisticItem
    //       Icon={BsPeople}
    //       value={(info.getValue() as number) || 0}
    //       greenValue={topTenPercent.contributorCount}
    //       lightGreenValue={topTwentyPercent.contributorCount}
    //       redValue={bottomTwentyPercent.contributorCount}
    //       lightRedValue={bottomTenPercent.contributorCount}
    //     />
    //   )
    // }),
    // // Forks per Contributor column definition
    // columnHelper.accessor('forksPerContributor', {
    //   id: 'Forks/Contrib.',
    //   header: 'Forks/Contrib.',
    //   enableColumnFilter: true,
    //   cell: info => (
    //     <GitHubStatisticItem
    //       IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
    //       value={info.getValue() as number}
    //       greenValue={topTenPercent.forksPerContributor}
    //       lightGreenValue={topTwentyPercent.forksPerContributor}
    //       redValue={bottomTwentyPercent.forksPerContributor}
    //       lightRedValue={bottomTenPercent.forksPerContributor}
    //     />
    //   )
    // }),
    // // Issues per Contributor column definition
    // columnHelper.accessor('issuesPerContributor', {
    //   id: 'Issues/Contrib.',
    //   header: 'Issues/Contrib.',
    //   enableColumnFilter: true,
    //   cell: info => (
    //     <GitHubStatisticItem
    //       IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
    //       value={info.getValue() as number}
    //       greenValue={topTenPercent.issuesPerContributor}
    //       lightGreenValue={topTwentyPercent.issuesPerContributor}
    //       redValue={bottomTwentyPercent.issuesPerContributor}
    //       lightRedValue={bottomTenPercent.issuesPerContributor}
    //     />
    //   )
    // }),
    // PR column definition
    columnHelper.accessor(({ pullRequestsTotalCount }) => pullRequestsTotalCount as number, {
      id: 'PR',
      header: 'Open PRs',
      enableColumnFilter: true,
      cell: info => (
        <GitHubStatisticItem
          Icon={GoGitPullRequest}
          value={info.getValue() || 0}
          greenValue={topTenPercent.pullRequestsTotalCount}
          lightGreenValue={topTwentyPercent.pullRequestsTotalCount}
          redValue={bottomTwentyPercent.pullRequestsTotalCount}
          lightRedValue={bottomTenPercent.pullRequestsTotalCount}
          reverseStats
        />
      )
    })
  ]
}

export default createColumns
