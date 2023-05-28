import { createColumnHelper } from '@tanstack/react-table'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { BiGitPullRequest } from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import GitHubStatisticItem from '@/components/pure/Sidebar/Box/GithubStatItem'
import ProgrammingLanguages from '@/constants/programmingLanguages'
import RepositoryCategories from '@/constants/repositoryCategories'

export type Repository = {
  logo?: string // TODO: Change when data is there
  name: string
  ownerName: string
  starCount: number
  forkCount: number
  issueCount: number
  contributorCount: number
  pullRequestCount: number
  programmingLanguage: ProgrammingLanguages
  category: RepositoryCategories
}

const columnHelper = createColumnHelper<Repository>()

const columns = [
  columnHelper.accessor('logo', {
    header: 'Logo',
    cell: () => (
      <div className="h-[20px] w-[20px] rounded-[5px] bg-gray-700" />
      // <img
      //   className="w-8 h-8 rounded-full"
      //   src={``}
      //   alt="logo"
      // />
    )
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => (
      <div className="flex items-center">
        <p className="text-14 ">{info.row.original.ownerName}</p>
        <p className="ml-1 text-14 font-bold">{`/ ${info.row.original.name}`}</p>
      </div>
    )
  }),
  columnHelper.accessor('starCount', {
    header: 'Stars',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineStar}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        redValue={20000}
        greenValue={40000}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('forkCount', {
    header: 'Forks',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={AiOutlineFork}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        redValue={5000}
        greenValue={10000}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('issueCount', {
    header: 'Issues',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={VscIssues}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        redValue={500}
        greenValue={1000}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('contributorCount', {
    header: 'Contributors',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={BsPeople}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        redValue={120}
        greenValue={500}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('pullRequestCount', {
    header: 'Pull Requests',
    cell: (info) => (
      <GitHubStatisticItem
        Icon={BiGitPullRequest}
        paddingOn={false}
        outerPaddingOn={false}
        hoverOn={false}
        redValue={100}
        greenValue={500}
        value={info.getValue().toString()}
      />
    )
  }),
  columnHelper.accessor('programmingLanguage', {
    header: 'Language',
    cell: (info) => (
      <p className="inline-block rounded-lg bg-gray-850 px-2 py-0.5 text-12 font-light text-gray-300">
        {info.getValue()}
      </p>
    )
  }),
  columnHelper.accessor('category', {
    header: 'Category',
    cell: (info) => (
      <p className="inline-block rounded-lg bg-gray-850 px-2 py-0.5 text-12 font-light text-gray-300">
        {info.getValue()}
      </p>
    )
  })
]

export default columns
