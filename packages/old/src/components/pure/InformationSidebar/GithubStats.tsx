import Skeleton from '@/components/pure/LoadingBar'
import GitHubMetricIcon from '@/components/shared/GitHubMetricIcon'
import GithubStatItem from '@/components/shared/GithubStatItem'
import {
	GitPullRequestIcon,
	IssueOpenedIcon,
	PeopleIcon,
	PersonIcon,
	RepoForkedIcon,
	StarIcon
} from '@primer/octicons-react'
import { FaGithub } from 'react-icons/fa'
import Box from './Box'

type GithubStatsProps = {
	project?: Project
	loading?: boolean
}

const GithubStats = ({ project, loading }: GithubStatsProps) => (
	<Box title="GitHub Stats">
		{loading ? (
			<div className="my-2 flex flex-col gap-3">
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
			</div>
		) : project ? (
			<>
				<GithubStatItem
					id="Stars"
					Icon={StarIcon}
					value={project?.starCount || 0}
				/>
				<GithubStatItem
					Icon={PeopleIcon}
					value={project?.contributorCount || 0}
					id="Contributors"
				/>
				<GithubStatItem
					Icon={IssueOpenedIcon}
					value={project?.issueCount || 0}
					id="Issues"
				/>
				<GithubStatItem
					IconMetric={
						<GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />
					}
					value={project.issuesPerContributor || 0}
					id="Issues/ Contributor"
				/>
				<GithubStatItem
					Icon={RepoForkedIcon}
					value={project?.forkCount || 0}
					id="Forks"
				/>
				<GithubStatItem
					IconMetric={
						<GitHubMetricIcon Icon={RepoForkedIcon} Icon2={PersonIcon} />
					}
					value={project.forksPerContributor || 0}
					id="Forks/ Contributor"
				/>
				<GithubStatItem
					Icon={GitPullRequestIcon}
					value={project.pullRequestCount || 0}
					id="Pull requests"
				/>
				<GithubStatItem
					Icon={FaGithub}
					link={project.githubUrl as string}
					id={project.githubUrl as string}
				/>
			</>
		) : null}
	</Box>
)

export default GithubStats
