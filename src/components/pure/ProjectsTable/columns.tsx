import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import formatNumber from '@/util/formatNumber'
import Image from 'next/image'

const columnHelper = createColumnHelper<Project>()

// @TODO Make columns sortable, filterable, dynamic
// Define column definitions for a Project table
const columns = [
 
  // Logo column definition
  columnHelper.accessor(
    ({ organization, associatedPerson }) => organization?.avatarUrl || associatedPerson?.avatarUrl,
    {
      header: 'Logo',
      cell: (info) => (
        <div className="relative ml-2 h-6 w-6 overflow-hidden rounded-[5px]">
          <Image src={info.getValue() as string} alt="logo" fill sizes="24px" />
        </div>
      )
    }
  ),

  // @TODO Adjust for user owners
  // Name column definition
  columnHelper.accessor(
    ({ organization, associatedPerson, name }) =>
      `${(organization?.login || associatedPerson?.login) as string} / ${name as string}`,
    {
      id: 'nameWithOwner',
      header: 'Name',
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
  // @TODO Add tags column
  // Stars column definition
  columnHelper.accessor('starCount', {
    header: 'Stars',
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
  // Issues column definition
  columnHelper.accessor('issueCount', {
    header: 'Issues',
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
  // Forks column definition
  columnHelper.accessor('forkCount', {
    header: 'Forks',
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
  // Contributors column definition
  columnHelper.accessor('contributorCount', {
    header: 'Contrib.',
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
  // Forks per Contributor column definition
  columnHelper.accessor((project) => (project.forkCount || 0) / (project.contributorCount || 1), {
    id: 'forksPerContributor',
    header: 'Forks/ Contr.',
    cell: (info) => <p className="text-14">{formatNumber(info.getValue())}</p>
  }),
  // Issues per Contributor column definition
  columnHelper.accessor((project) => (project.issueCount || 0) / (project.contributorCount || 1), {
    id: 'issuesPerContributor',
    header: 'Issues/ Contr.',
    cell: (info) => <p className="text-14">{formatNumber(info.getValue())}</p>
  })
]

export default columns
