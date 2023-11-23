import { FaGithub } from 'react-icons/fa'
import {
  StarIcon,
  PeopleIcon,
  IssueOpenedIcon,
  PersonIcon,
  RepoForkedIcon,
  GitPullRequestIcon
} from '@primer/octicons-react'
import GitHubMetricIcon from '@/components/shared/GitHubMetricIcon'
import GithubStatItem from '@/components/shared/GithubStatItem'
import { Project } from '@/graphql/generated/gql'
import Box from '../sidebar/Box'

type GithubStatsProps = {
  project: Project
}

const GithubStats = ({ project }: GithubStatsProps) => (
  <Box title='GitHub Stats'>
    <GithubStatItem id='Stars' Icon={StarIcon} value={project?.starCount || 0} />
    <GithubStatItem Icon={PeopleIcon} value={project?.contributorCount || 0} id='Contributors' />
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
)

export default GithubStats
