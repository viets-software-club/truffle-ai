/* eslint-disable react/jsx-props-no-spreading */
import { FaSlack } from 'react-icons/fa'
import {
  IssueOpenedIcon,
  PeopleIcon,
  PersonIcon,
  RepoForkedIcon,
  StarIcon
} from '@primer/octicons-react'
import { founderListMock, socialMediaListMock } from '@/data/detailPageMocks'
import { Project } from '@/generated/gql'
import Button from '@/components/pure/Button'
import Sidebar from '@/components/pure/Sidebar'
import GitHubMetricIcon from './GitHubMetricIcon'

type Props = {
  project: Project
}

/**
 * Right sidebar for project details page
 */
const RightSidebar = ({ project }: Props) => (
  // @TODO Add historical data for showing growth
  <Sidebar.Small>
    <Sidebar.Box title="GitHub Stats">
      <Sidebar.Box.GithubStatItem Icon={StarIcon} value={project?.star_count as number} />
      <Sidebar.Box.GithubStatItem Icon={IssueOpenedIcon} value={project?.issue_count as number} />
      <Sidebar.Box.GithubStatItem Icon={RepoForkedIcon} value={project?.fork_count as number} />
      <Sidebar.Box.GithubStatItem
        IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
        value={(project?.fork_count || 0) / (project?.contributor_count || 1)}
      />
      <Sidebar.Box.GithubStatItem
        IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
        value={(project?.issue_count || 0) / (project?.contributor_count || 1)}
      />
      <Sidebar.Box.GithubStatItem Icon={PeopleIcon} value={project?.contributor_count as number} />
    </Sidebar.Box>

    {/* @TODO Add real data for social media + founders */}
    <Sidebar.Box title="SocialMedia">
      {socialMediaListMock.map(({ id, ...data }) => (
        <Sidebar.Box.SocialMediaItem key={id} {...data} />
      ))}
    </Sidebar.Box>

    <Sidebar.Box title="Founder">
      {founderListMock.map(({ id, ...data }) => (
        <Sidebar.Box.FounderItem key={id} {...data} />
      ))}
    </Sidebar.Box>

    <Sidebar.Box title="Integrations">
      <div className="flex flex-col justify-between">
        <div className="inline-flex px-7 py-2.5">
          <div className="flex flex-row items-center justify-center gap-[15px]">
            <Button variant="normal" onClick={() => null} text="Add to CRM" />

            <button type="button" onClick={() => null}>
              <FaSlack className=" h-[14px] w-[14px]" />
            </button>
          </div>
        </div>
      </div>
    </Sidebar.Box>
  </Sidebar.Small>
)

export default RightSidebar
