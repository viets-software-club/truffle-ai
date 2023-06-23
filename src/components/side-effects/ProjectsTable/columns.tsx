import Image from 'next/image'
import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import { GoGitPullRequest } from 'react-icons/go'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import formatNumber from '@/util/formatNumber'

const columnHelper = createColumnHelper<Project>()

const columns = [
  // Logo column definition
  columnHelper.accessor(
    ({ organization, associatedPerson }) => organization?.avatarUrl || associatedPerson?.avatarUrl,
    {
      header: 'Logo',
      enableColumnFilter: false,
      cell: (info) => (
        <div className="relative ml-2 h-6 w-6 overflow-hidden rounded-[5px]">
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
            <span className="text-14 font-medium text-gray-500">{owner.slice(0, 15)} /&nbsp;</span>
            {owner.length > 16 && <span className="text-14 text-gray-500">...</span>}
            <span className="text-14 font-bold">{name.slice(0, 31)}</span>
            {name.length > 32 && <span className="text-14">...</span>}
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
        value={info.getValue() as number}
      />
    )
  }),
  // Forks per Contributor column definition
  columnHelper.accessor((project) => (project.forkCount || 0) / (project.contributorCount || 1), {
    id: 'Forks/Contrib.',
    header: 'Forks/Contrib.',
    enableColumnFilter: true,
    cell: (info) => <p className="text-14">{formatNumber(info.getValue())}</p>
  }),
  // Issues per Contributor column definition
  columnHelper.accessor((project) => (project.issueCount || 0) / (project.contributorCount || 1), {
    id: 'Issues/Contrib.',
    header: 'Issues/Contrib.',
    enableColumnFilter: true,
    cell: (info) => <p className="text-14">{formatNumber(info.getValue())}</p>
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
        value={info.getValue() as number}
      />
    )
  })
]

export default columns
