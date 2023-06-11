import Image from 'next/image'
import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import formatNumber from '@/util/formatNumber'
import Logo from '@/assets/logo.svg'

const columnHelper = createColumnHelper<Project>()

// @TODO Format large numbers
// @TODO Make columns sortable, filterable, dynamic
// Define column definitions for a Project table
const columns = [
  // Logo column definition
  columnHelper.accessor(() => '', {
    header: 'Logo',
    // @TODO Add real logo
    // @TODO Fix next image types
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cell: () => <Image src={Logo} alt="logo" className="ml-2 h-5 w-5" />
  }),
  // @TODO Adjust for user owners
  // Name column definition
  columnHelper.accessor(
    ({ organization, name }) => `${organization?.login || 'user'} / ${name as string}`.slice(0, 32),
    {
      id: 'nameWithOwner',
      header: 'Name',
      cell: (info) => <p className="text-14 font-bold">{info.getValue()}</p>
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
