import { FaGithub } from 'react-icons/fa'
import {
  IssueOpenedIcon,
  PeopleIcon,
  PersonIcon,
  RepoForkedIcon,
  StarIcon,
  GitPullRequestIcon
} from '@primer/octicons-react'
import Box from '@/components/pure/Sidebar/Box'
import CompanyItem from '@/components/pure/Sidebar/CompanyItem'
import FounderItem from '@/components/pure/Sidebar/FounderItem'
import GithubStatItem from '@/components/pure/Sidebar/GithubStatItem'
import LanguagesItem from '@/components/pure/Sidebar/LanguagesItem'
import SmallSidebar from '@/components/pure/Sidebar/SmallSidebar'
import { Project } from '@/graphql/generated/gql'
import SendToAffinity, { SendToAffinityProps } from '../settings/SendData/SendToAffinity'
import GitHubMetricIcon from './GitHubMetricIcon'

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
    <SmallSidebar>
      <Box title='GitHub Stats'>
        <GithubStatItem id='Stars' Icon={StarIcon} value={project?.starCount || 0} />
        <GithubStatItem
          Icon={PeopleIcon}
          value={project?.contributorCount || 0}
          id='Contributors'
        />
        <GithubStatItem Icon={IssueOpenedIcon} value={project?.issueCount || 0} id='Issues' />
        <GithubStatItem
          IconMetric={<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />}
          value={project.issuesPerContributor || 0}
          id='Issues/ Contributor'
        />
        <GithubStatItem Icon={RepoForkedIcon} value={project?.forkCount || 0} id='Forks' />
        <GithubStatItem
          IconMetric={<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />}
          value={project.forksPerContributor || 0}
          id='Forks/ Contributor'
        />
        <GithubStatItem
          Icon={GitPullRequestIcon}
          value={project.pullRequestCount || 0}
          id='Pull requests'
        />
        <GithubStatItem
          Icon={FaGithub}
          link={project.githubUrl as string}
          id={project.githubUrl as string}
        />
      </Box>

      {project.languages?.length && (
        <Box title='Languages'>
          <LanguagesItem
            languages={project.languages as unknown as Array<{ name: string; color: string }>}
          />
        </Box>
      )}

      {(project.organization?.twitterUsername || project.organization?.websiteUrl) && (
        <Box title='Company'>
          <CompanyItem
            twitterLink={project.organization?.twitterUsername as string}
            websiteLink={project.organization?.websiteUrl as string}
          />
        </Box>
      )}

      {project.name &&
        (project.associatedPerson?.name ||
          project.associatedPerson?.githubUrl ||
          project.associatedPerson?.email ||
          project.associatedPerson?.twitterUsername ||
          project.associatedPerson?.websiteUrl) && (
          <Box title='Founder'>
            <FounderItem
              projectName={project.name}
              name={project.associatedPerson?.name as string}
              github={project.associatedPerson?.githubUrl as string}
              mail={project.associatedPerson?.email as string}
              twitter={project.associatedPerson?.twitterUsername as string}
              website={project.associatedPerson?.websiteUrl as string}
            />
          </Box>
        )}

      <Box title='Integrations'>
        <div className='py-2.5'>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <SendToAffinity {...sendToAffinityProps} />
        </div>
      </Box>
    </SmallSidebar>
  )
}

export default RightSidebar
