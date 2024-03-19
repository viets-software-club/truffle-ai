import { useState } from 'react'
import GithubStats from '@/components/domain/details/GithubStats'
import Navbar from '@/components/domain/details/Navbar'
import ProjectInformation from '@/components/domain/details/ProjectInformation'
import RightSidebar from '@/components/domain/details/RightSidebar'
import Error from '@/components/shared/Error'
import Page from '@/components/shared/Page'
import { DataPoint } from '@/components/shared/chart/Chart'
import ChartWrapper from '@/components/shared/chart/ChartWrapper'
import useFetchProjectDetails from '@/hooks/useFetchProjectDetails'
import { NextPageWithLayout } from '../_app'

/**
 * Project detail page (displays GitHub data, top tweets, etc.)
 */
const DetailPage: NextPageWithLayout = () => {
  const [selectedMetric, setSelectedMetric] = useState('Stars')

  const { project, fetching, error, categories } = useFetchProjectDetails()

  // Display error message conditionally
  if (error || (!fetching && !project)) return <Error />

  const loading = fetching && !project

  return (
    <>
      <Navbar loading={loading} />

      <div className='flex grow flex-col lg:flex-row'>
        <div className='border-b border-white/5 md:border-none lg:mt-[60px] lg:w-[calc(100%-250px)]'>
          <ProjectInformation project={project} categories={categories} loading={loading} />

          <div className='md:hidden'>
            <GithubStats project={project} loading={loading} />
          </div>

          <ChartWrapper
            loading={loading}
            datasets={[
              {
                id: project?.projRepoId as string,
                name: project?.gthbRepo.gthbRepoName as string,
                data: (selectedMetric === 'stars'
                  ? project?.gthbRepo.gthbStarHistCollection.edges.map(edge => ({
                      date: edge.node.gthbStarHistDate as string,
                      count: edge.node.amount as number
                    }))
                  : project?.gthbRepo.gthbForkHistCollection.edges.map(edge => ({
                      date: edge.node.gthbForkHistDate as string,
                      count: edge.node.amount as number
                    }))) as DataPoint[]
              }
            ]}
            selectedMetric={selectedMetric}
            setSelectedMetric={setSelectedMetric}
          />

          {/* @TODO */}
          {/* <CommunitySentiment
            hackernewsSentiment={project?.hackernewsSentiment ?? undefined}
            hackernewsStories={project?.hackernewsStories as string[]}
            loading={loading}
          /> */}
        </div>

        <RightSidebar project={project} loading={loading} />
      </div>
    </>
  )
}

DetailPage.getLayout = page => <Page>{page}</Page>

export default DetailPage
