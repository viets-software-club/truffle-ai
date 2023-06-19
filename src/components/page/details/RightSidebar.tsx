/* eslint-disable react/jsx-props-no-spreading */
import { FaSlack } from 'react-icons/fa'
import {
  IssueOpenedIcon,
  PeopleIcon,
  PersonIcon,
  RepoForkedIcon,
  StarIcon,
  LinkIcon,
  GitPullRequestIcon
} from '@primer/octicons-react'
import { Project } from '@/graphql/generated/gql'
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
      {/* // link to repo */}
      <Sidebar.Box.GithubStatItem Icon={StarIcon} value={project?.starCount as number} />
      <Sidebar.Box.GithubStatItem Icon={IssueOpenedIcon} value={project?.issueCount as number} />
      <Sidebar.Box.GithubStatItem Icon={RepoForkedIcon} value={project?.forkCount as number} />
      <Sidebar.Box.GithubStatItem
        IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
        value={(project?.forkCount || 0) / (project?.contributorCount || 1)}
      />
      <Sidebar.Box.GithubStatItem
        IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
        value={(project?.issueCount || 0) / (project?.contributorCount || 1)}
      />
      <Sidebar.Box.GithubStatItem Icon={PeopleIcon} value={project?.contributorCount as number} />
      <Sidebar.Box.GithubStatItem
        Icon={GitPullRequestIcon}
        value={project?.pullRequestCount as number}
      />
      <Sidebar.Box.GithubStatItem Icon={LinkIcon} link={project.githubUrl as string} />
    </Sidebar.Box>

    {/* @TODO Add real data for social media + founders */}
    {(project?.organization?.twitterUsername || project?.organization?.websiteUrl) && (
      <Sidebar.Box title="Company">
        <Sidebar.Box.CompanyItem
          twitterLink={project?.organization?.twitterUsername as string}
          websiteLink={project?.websiteUrl as string}
        />
      </Sidebar.Box>
    )}

    {(project?.organization?.name ||
      project?.associatedPerson?.name ||
      project?.associatedPerson?.githubUrl ||
      project?.associatedPerson?.email ||
      project?.associatedPerson?.repositoryCount ||
      project?.associatedPerson?.twitterUsername ||
      project?.associatedPerson?.websiteUrl) && (
      <Sidebar.Box title="Founder">
        <Sidebar.Box.FounderItem
          company={project?.organization?.name as string}
          name={project?.associatedPerson?.name as string}
          github={project?.associatedPerson?.githubUrl as string}
          mail={project?.associatedPerson?.email as string}
          repositoryCount={project?.associatedPerson?.repositoryCount as number}
          twitter={project?.associatedPerson?.twitterUsername as string}
          website={project?.associatedPerson?.websiteUrl as string}
        />
      </Sidebar.Box>
    )}

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
