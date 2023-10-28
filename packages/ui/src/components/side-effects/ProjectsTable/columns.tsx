import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import { GoGitPullRequest } from 'react-icons/go'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import Image from 'next/image'
import { IssueOpenedIcon, PersonIcon, RepoForkedIcon } from '@primer/octicons-react'
import GitHubMetricIcon from '@/components/page/details/GitHubMetricIcon'

type TenPercent = { [key in keyof Project]?: number | null }

const createColumns = (
  topTenPercent: TenPercent,
  bottomTenPercent: TenPercent,
  topTwentyPercent: TenPercent,
  bottomTwentyPercent: TenPercent
) => {
  const columnHelper = createColumnHelper<Project>()
  return [
    // Logo column definition
    columnHelper.accessor(
      ({ organization, associatedPerson }) =>
        organization?.avatarUrl || associatedPerson?.avatarUrl,
      {
        header: 'Logo',
        enableColumnFilter: false,
        cell: (info) => (
          <div className="relative ml-2 h-6 w-6 overflow-hidden rounded-md">
            <Image src={info.getValue() as string} alt="logo" fill sizes="24px" />
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
        cell: (info) => {
          const [owner, name] = info.getValue().split(' / ')
          return (
            <div>
              <span className="text-sm font-medium text-gray-500">
                {owner.slice(0, 15)} /&nbsp;
              </span>
              {owner.length > 16 && <span className="text-sm text-gray-500">...</span>}
              <span className="text-sm font-bold">{name.slice(0, 31)}</span>
              {name.length > 32 && <span className="text-sm">...</span>}
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
      cell: (info) => (
        <GitHubStatisticItem
          Icon={AiOutlineStar}
          paddingOn={false}
          outerPaddingOn={false}
          value={info.getValue() as number}
          greenValue={bottomTenPercent.starCount as number}
          lightGreenValue={topTwentyPercent.starCount as number}
          redValue={topTenPercent.starCount as number}
          lightRedValue={bottomTwentyPercent.starCount as number}
        />
      )
    }),
    // Issues column definition
    columnHelper.accessor('issueCount', {
      id: 'Issues',
      header: 'Issues',
      enableColumnFilter: true,
      cell: (info) => (
        <GitHubStatisticItem
          Icon={VscIssues}
          paddingOn={false}
          outerPaddingOn={false}
          value={info.getValue() as number}
          greenValue={bottomTenPercent.issueCount as number}
          lightGreenValue={topTwentyPercent.issueCount as number}
          redValue={topTenPercent.issueCount as number}
          lightRedValue={bottomTwentyPercent.issueCount as number}
        />
      )
    }),
    // Forks column definition
    columnHelper.accessor('forkCount', {
      id: 'Forks',
      header: 'Forks',
      enableColumnFilter: true,
      cell: (info) => (
        <GitHubStatisticItem
          Icon={AiOutlineFork}
          paddingOn={false}
          outerPaddingOn={false}
          value={info.getValue() as number}
          greenValue={bottomTenPercent.forkCount as number}
          lightGreenValue={topTwentyPercent.forkCount as number}
          redValue={topTenPercent.forkCount as number}
          lightRedValue={bottomTwentyPercent.forkCount as number}
        />
      )
    }),
    // Contributors column definition
    columnHelper.accessor('contributorCount', {
      id: 'Contrib.',
      header: 'Contrib.',
      enableColumnFilter: true,
      cell: (info) => (
        <GitHubStatisticItem
          Icon={BsPeople}
          paddingOn={false}
          outerPaddingOn={false}
          value={(info.getValue() as number) || 0}
          greenValue={bottomTenPercent.contributorCount as number}
          lightGreenValue={topTwentyPercent.contributorCount as number}
          redValue={topTenPercent.contributorCount as number}
          lightRedValue={bottomTwentyPercent.contributorCount as number}
        />
      )
    }),

    // Forks per Contributor column definition
    columnHelper.accessor('forksPerContributor', {
      id: 'Forks/Contrib.',
      header: 'Forks/Contrib.',
      enableColumnFilter: true,
      cell: (info) => (
        <GitHubStatisticItem
          IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
          paddingOn={false}
          outerPaddingOn={false}
          value={info.getValue() as number}
        />
      )
    }),
    // Issues per Contributor column definition
    columnHelper.accessor('issuesPerContributor', {
      id: 'Issues/Contrib.',
      header: 'Issues/Contrib.',
      enableColumnFilter: true,
      cell: (info) => (
        <GitHubStatisticItem
          IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
          paddingOn={false}
          outerPaddingOn={false}
          value={info.getValue() as number}
        />
      )
    }),
    // PR column definition
    columnHelper.accessor('pullRequestCount', {
      id: 'PR',
      header: 'Open PRs',
      enableColumnFilter: true,
      cell: (info) => (
        <GitHubStatisticItem
          Icon={GoGitPullRequest}
          paddingOn={false}
          outerPaddingOn={false}
          value={(info.getValue() as number) || 0}
          greenValue={bottomTenPercent.pullRequestCount as number}
          lightGreenValue={topTwentyPercent.pullRequestCount as number}
          redValue={topTenPercent.pullRequestCount as number}
          lightRedValue={bottomTwentyPercent.pullRequestCount as number}
        />
      )
    })
  ]
}

export default createColumns
