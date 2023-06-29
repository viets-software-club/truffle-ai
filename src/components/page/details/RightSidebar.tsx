import {
  IssueOpenedIcon,
  PeopleIcon,
  PersonIcon,
  RepoForkedIcon,
  StarIcon,
  GitPullRequestIcon
} from '@primer/octicons-react'
import { FaGithub } from 'react-icons/fa'
import { Project } from '@/graphql/generated/gql'
import Sidebar from '@/components/pure/Sidebar'
import GitHubMetricIcon from './GitHubMetricIcon'
import SendToAffinity, { SendToAffinityProps } from '../settings/SendData/SendToAffinity'

type Props = {
  project: Project
}

/**
 * Right sidebar for project details page
 */
const RightSidebar = ({ project }: Props) => {
  const affinityAPIKey = localStorage.getItem('affinityKey')
  const affinityListID = localStorage.getItem('affinityListId')

  const sendToAffinityProps: SendToAffinityProps = {
    name: project.name as string,
    stars: project.starCount || 0,
    forks: project.forkCount || 0,
    contributors: project.contributorCount || 0,
    githubUrl: project.githubUrl as string,
    apiKey: affinityAPIKey as string,
    listId: affinityListID as string
  }

  return (
    // @TODO Add historical data for showing growth
    <Sidebar.Small>
      <Sidebar.Box title="GitHub Stats">
        <Sidebar.Box.GithubStatItem id="Stars" Icon={StarIcon} value={project?.starCount || 0} />
        <Sidebar.Box.GithubStatItem
          Icon={PeopleIcon}
          value={project?.contributorCount || 0}
          id="Contributors"
        />
        <Sidebar.Box.GithubStatItem
          Icon={IssueOpenedIcon}
          value={project?.issueCount || 0}
          id="Issues"
        />
        <Sidebar.Box.GithubStatItem
          IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
          value={project.issuesPerContributor || 0}
          id="Issues/ Contributor"
        />
        <Sidebar.Box.GithubStatItem
          Icon={RepoForkedIcon}
          value={project?.forkCount || 0}
          id="Forks"
        />
        <Sidebar.Box.GithubStatItem
          IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
          value={project.forksPerContributor || 0}
          id="Forks/ Contributor"
        />
        <Sidebar.Box.GithubStatItem
          Icon={GitPullRequestIcon}
          value={project.pullRequestCount || 0}
          id="Pull requests"
        />
        <Sidebar.Box.GithubStatItem
          Icon={FaGithub}
          link={project.githubUrl as string}
          id={project.githubUrl as string}
        />
      </Sidebar.Box>

      {project.languages?.length && (
        <Sidebar.Box title="Languages">
          <Sidebar.Box.LanguagesItem
            languages={project.languages as unknown as Array<{ name: string; color: string }>}
          />
        </Sidebar.Box>
      )}

      {(project.organization?.twitterUsername || project.organization?.websiteUrl) && (
        <Sidebar.Box title="Company">
          <Sidebar.Box.CompanyItem
            twitterLink={project.organization?.twitterUsername as string}
            websiteLink={project.organization?.websiteUrl as string}
          />
        </Sidebar.Box>
      )}

      {project.name &&
        (project.associatedPerson?.name ||
          project.associatedPerson?.githubUrl ||
          project.associatedPerson?.email ||
          project.associatedPerson?.twitterUsername ||
          project.associatedPerson?.websiteUrl) && (
          <Sidebar.Box title="Founder">
            <Sidebar.Box.FounderItem
              projectName={project.name}
              name={project.associatedPerson?.name as string}
              github={project.associatedPerson?.githubUrl as string}
              mail={project.associatedPerson?.email as string}
              twitter={project.associatedPerson?.twitterUsername as string}
              website={project.associatedPerson?.websiteUrl as string}
            />
          </Sidebar.Box>
        )}

      <Sidebar.Box title="Integrations">
        <div className="flex flex-col justify-between">
          <div className="inline-flex px-7 py-2.5">
            <div className="flex flex-row items-center justify-center gap-[15px]">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <SendToAffinity {...sendToAffinityProps} />
            </div>
          </div>
        </div>
      </Sidebar.Box>
    </Sidebar.Small>
  )
}

export default RightSidebar
