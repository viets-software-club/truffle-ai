import CommunitySentiment from '@/components/domain/details/CommunitySentiment'
import Navbar from '@/components/domain/details/Navbar'
import ProjectInformation from '@/components/domain/details/ProjectInformation'
import Error from '@/components/pure/Error'
import GithubStats from '@/components/pure/InformationSidebar/GithubStats'
import RightSidebar from '@/components/pure/InformationSidebar/RightSidebar'
import Page from '@/components/pure/Page'
import { DataPoint } from '@/components/shared/chart/Chart'
import ChartWrapper from '@/components/shared/chart/ChartWrapper'
import useFetchProjectDetails from '@/hooks/useFetchProjectDetails'
import { useState } from 'react'
import { NextPageWithLayout } from '../_app'

/**
 * Project detail page (displays GitHub data, top tweets, etc.)
 */
const DetailPage: NextPageWithLayout = () => {
	const [selectedMetric, setSelectedMetric] = useState('Stars')

	const { project, fetching, error, isBookmarked, category } =
		useFetchProjectDetails()

	// Display error message conditionally
	if (error || (!fetching && !project)) return <Error />

	const owner = project?.organization || project?.associatedPerson

	const loading = fetching && !project

	return (
		<>
			<Navbar loading={loading} />

			<div className="flex grow flex-col lg:flex-row">
				<div className="border-b border-white/5 md:border-none lg:mt-[60px] lg:w-[calc(100%-250px)]">
					<ProjectInformation
						id={project?.id as string}
						githubUrl={project?.githubUrl as string}
						image={owner?.avatarUrl as string}
						name={`${owner?.login as string} / ${project?.name as string}`}
						url={project?.githubUrl as string}
						explanation={project?.eli5 || 'No explanation'}
						about={project?.about || 'No description'}
						// categories={project?.categories as string[]}
						isBookmarked={isBookmarked}
						category={category}
						loading={loading}
					/>

					<div className="md:hidden">
						<GithubStats project={project} loading={loading} />
					</div>

					<ChartWrapper
						loading={loading}
						datasets={[
							{
								id: project?.id as string,
								name: project?.name as string,
								data: (selectedMetric === 'stars'
									? project?.starHistory
									: project?.forkHistory) as DataPoint[]
							}
						]}
						selectedMetric={selectedMetric}
						setSelectedMetric={setSelectedMetric}
					/>

					<CommunitySentiment
						tweets={project?.relatedTwitterPosts ?? undefined}
						hackernewsSentiment={project?.hackernewsSentiment ?? undefined}
						hackernewsStories={project?.hackernewsStories as string[]}
						loading={loading}
					/>
				</div>

				<RightSidebar project={project} loading={loading} />
			</div>
		</>
	)
}

DetailPage.getLayout = (page) => <Page>{page}</Page>

export default DetailPage
