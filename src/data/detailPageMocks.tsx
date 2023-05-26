/* eslint-disable sonarjs/no-duplicate-string */
import GitHubMetricIcon from '@/components/page/details/GitHubMetricIcon'
import Sidebar from '@/components/pure/Sidebar'
import {
  IssueOpenedIcon,
  PeopleIcon,
  PersonIcon,
  RepoForkedIcon,
  StarIcon
} from '@primer/octicons-react'
import { ComponentProps } from 'react'

export const companyListMock = [
  { id: '0', name: 'Total Funding', value: '$1.2M', growth: '+$0.2M' },
  { id: '1', name: 'Contributions / Employee', value: '1.3', growth: '+0.2' }
]

export const founderListMock = [
  {
    id: '0',
    name: 'John Doe',
    linkedin: 'https://linkedin.com',
    mail: 'mailto:john.doe@gmail'
  },
  {
    id: '1',
    name: 'Jane Doe',
    linkedin: 'https://linkedin.com',
    mail: 'mailto:jane.doe@gmail'
  }
]

export const socialMediaListMock: ({ id: ID } & ComponentProps<
  typeof Sidebar.Box.SocialMediaItem
>)[] = [
  {
    id: '0',
    icon: 'discord',
    name: 'Discord ',
    text: 'Followers',
    value: '101k',
    growth: '+2k',
    onClick: () => {
      window.open('https://discord.com', '_blank')
    }
  },
  {
    id: '1',
    icon: 'twitter',
    name: 'Twitter ',
    text: 'Followers',
    value: '200k',
    growth: '+1k',
    onClick: () => {
      window.open('https://twitter.com', '_blank')
    }
  }
]

export const tweetListMock = [
  {
    id: '0',
    content:
      'Lorem1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
  },
  {
    id: '1',
    content:
      'Lorem2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
  },
  {
    id: '2',
    content:
      'Lorem 3ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
  }
]

export const githubStatListMock: ({ id: ID } & ComponentProps<
  typeof Sidebar.Box.GithubStatItem
>)[] = [
  { id: '0', Icon: StarIcon, value: '105k', growth: '+450' },
  { id: '1', Icon: IssueOpenedIcon, value: '1.6k', growth: '+121' },
  { id: '2', Icon: RepoForkedIcon, value: '23.7k', growth: '+1.1k' },
  {
    id: '3',
    IconMetric: <GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />,
    value: '3.2',
    growth: '-0.2'
  },
  {
    id: '4',
    IconMetric: <GitHubMetricIcon Icon={RepoForkedIcon} Icon2={IssueOpenedIcon} />,
    value: '1.6',
    growth: '+0.1'
  },
  { id: '5', Icon: PeopleIcon, value: '23', growth: '+2' }
]

export const githubStatListMockWithId: ({ id: ID } & ComponentProps<
  typeof Sidebar.Box.GithubStatItem
>)[] = [
  { id: '0', Icon: StarIcon, value: '105k', growth: '+450' },
  { id: '1', Icon: IssueOpenedIcon, value: '1.6k', growth: '+121' },
  { id: '2', Icon: RepoForkedIcon, value: '23.7k', growth: '+1.1k' },
  {
    id: '3',
    IconMetric: <GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />,
    value: '3.2',
    growth: '-0.2'
  },
  {
    id: '4',
    IconMetric: <GitHubMetricIcon Icon={RepoForkedIcon} Icon2={IssueOpenedIcon} />,
    value: '1.6',
    growth: '+0.1'
  },
  { id: '5', Icon: PeopleIcon, value: '23', growth: '+2' }
]
export const tagsMock = [
  { id: '1', name: 'tag1' },
  { id: '2', name: 'tag2' },
  { id: '3', name: 'tag3' }
]

export const hackerNewsListMock = [
  {
    id: '0',
    content:
      'Lorem1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: ELI5'
  },
  {
    id: '1',
    content:
      'Lorem2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: Hackernews'
  }
]

export const stars = [
  { name: '01/01/2023', value: 4000, value2: 1000 },
  { name: '01/02/2023', value: 3000, value2: 2000 },
  { name: '01/03/2023', value: 2000, value2: 3000 },
  { name: '01/04/2023', value: 2780, value2: 4000 },
  { name: '01/05/2023', value: 1890, value2: 5000 },
  { name: '01/06/2023', value: 2390, value2: 6000 },
  { name: '01/07/2023', value: 3490, value2: 7000 }
]

export const forks = [
  { name: '01/01/2023', value: 1000, value2: 4000 },
  { name: '01/02/2023', value: 2000, value2: 3000 },
  { name: '01/03/2023', value: 3000, value2: 2000 },
  { name: '01/04/2023', value: 4000, value2: 2780 },
  { name: '01/05/2023', value: 5000, value2: 1890 },
  { name: '01/06/2023', value: 6000, value2: 2390 },
  { name: '01/07/2023', value: 7000, value2: 3490 }
]

export const issues = [
  { name: '01/01/2023', value: 4800, value2: 1000 },
  { name: '01/02/2023', value: 4200, value2: 2000 },
  { name: '01/03/2023', value: 3600, value2: 3000 },
  { name: '01/04/2023', value: 3000, value2: 4000 },
  { name: '01/05/2023', value: 2400, value2: 5000 },
  { name: '01/06/2023', value: 1800, value2: 6000 },
  { name: '01/07/2023', value: 1200, value2: 7000 }
]

export const data = [
  { name: 'Stars', data: stars },
  { name: 'Forks', data: forks },
  { name: 'Issues', data: issues }
]
