import Image from 'next/image'
import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import formatNumber from '@/util/formatNumber'

const columnHelper = createColumnHelper<Project>()

// @TODO Make columns sortable, filterable
const columns = [
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
  // @TODO Adjust for user owners
  columnHelper.accessor(
    ({ organization, associatedPerson, name }) =>
      `${(organization?.login || associatedPerson?.login) as string} / ${name as string}`.slice(
        0,
        32
      ),
    {
      id: 'nameWithOwner',
      header: 'Name',
      enableColumnFilter: true,
      cell: (info) => <p className="text-14 font-bold">{info.getValue()}</p>
    }
  ),
  // @TODO Add tags column
  columnHelper.accessor('starCount', {
    header: 'Stars',
    enableColumnFilter: true,
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineStar}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue() as number}
      />
    )
  }),
  columnHelper.accessor('issueCount', {
    header: 'Issues',
    enableColumnFilter: true,
    cell: (info) => (
      <GitHubStatisticItem
        Icon={VscIssues}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue() as number}
      />
    )
  }),
  columnHelper.accessor('forkCount', {
    header: 'Forks',
    enableColumnFilter: true,
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineFork}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue() as number}
      />
    )
  }),
  columnHelper.accessor('contributorCount', {
    header: 'Contrib.',
    enableColumnFilter: true,
    cell: (info) => (
      <GitHubStatisticItem
        Icon={BsPeople}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue() as number}
      />
    )
  }),
  columnHelper.accessor((project) => (project.forkCount || 0) / (project.contributorCount || 1), {
    id: 'forksPerContributor',
    header: 'Forks/Contrib.',
    enableColumnFilter: true,
    cell: (info) => <p className="text-14">{formatNumber(info.getValue())}</p>
  }),
  columnHelper.accessor((project) => (project.issueCount || 0) / (project.contributorCount || 1), {
    id: 'issuesPerContributor',
    header: 'Issues/Contrib.',
    enableColumnFilter: true,
    cell: (info) => <p className="text-14">{formatNumber(info.getValue())}</p>
  })
]

export default columns
