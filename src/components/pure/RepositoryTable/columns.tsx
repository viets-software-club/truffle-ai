import Image from 'next/image'
import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { VscIssues } from 'react-icons/vsc'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import { Project } from '@/generated/gql'
import Logo from '@/assets/logo.svg'

const columnHelper = createColumnHelper<Project>()

// TODO: Format large numbers
// TODO: Make columns sortable, filterable, dynamic
const columns = [
  columnHelper.accessor(() => '', {
    header: 'Logo',
    // TODO: Add real logo
    // TODO: Fix next image types
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    cell: () => <Image src={Logo} alt="logo" className="h-6 w-6" />
  }),
  columnHelper.accessor(({ organization, name }) => `${organization?.login || ''} / ${name}`, {
    id: 'nameWithOwner',
    header: () => 'Name',
    cell: (info) => <p className="text-14 font-bold">{info.getValue()}</p>
  }),
  // TODO: Add tags column
  columnHelper.accessor('star_count', {
    header: () => 'Stars',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineStar}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue()?.toString() || ''}
      />
    )
  }),
  columnHelper.accessor('issue_count', {
    header: 'Issues',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={VscIssues}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue()?.toString() || ''}
      />
    )
  }),
  columnHelper.accessor('fork_count', {
    header: () => 'Forks',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineFork}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue()?.toString() || ''}
      />
    )
  }),
  columnHelper.accessor('contributor_count', {
    header: 'Contributors',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={BsPeople}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        value={info.getValue()?.toString() || ''}
      />
    )
  }),
  columnHelper.accessor((project) => (project.fork_count || 0) / (project.contributor_count || 1), {
    id: 'forksPerContributor',
    header: () => 'Forks/ Contributor',
    cell: (info) => <p className="text-14 font-bold">{info.getValue()}</p>
  }),
  columnHelper.accessor(
    (project) => (project.issue_count || 0) / (project.contributor_count || 1),
    {
      id: 'issuesPerContributor',
      header: () => 'Issues/ Contributor',
      cell: (info) => <p className="text-14 font-bold">{info.getValue()}</p>
    }
  )
]

export default columns
