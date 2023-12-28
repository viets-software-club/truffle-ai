import { useEffect, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import CommunitySentiment from '@/components/domain/details/CommunitySentiment'
import ProjectInformation from '@/components/domain/details/ProjectInformation'
import RightSidebar from '@/components/domain/details/RightSidebar'
import { defaultSort } from '@/components/domain/projects/types'
import Error from '@/components/shared/Error'
import ChartWrapper, { DataPoint } from '@/components/shared/chart/ChartWrapper'
import {
  Bookmark,
  Project,
  useBookmarkIdsQuery,
  useProjectDetailsQuery,
  useProjectIdsQuery
} from '@/graphql/generated/gql'
import {
  useBookmarkedProjectsState,
  useCategoryProjectsState,
  useLastViewedPageState,
  useTrendingProjectsState
} from '@/stores/useProjectTableState'
import GithubStats from './GithubStats'
import Navbar from './Navbar'

type DetailsProps = {
  id: string
}

/**
 * Project details component
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
const Details = ({ id }: DetailsProps) => {
  const { filters: trendingFilters, sorting: trendingSorting } = useTrendingProjectsState()
  const { filters: bookmarkFilters, sorting: bookmarkSorting } = useBookmarkedProjectsState()
  const { filters: categoryFilters, sorting: categorySorting } = useCategoryProjectsState()
  const { lastViewedPage } = useLastViewedPageState()

  const filters =
    lastViewedPage === 'trending'
      ? trendingFilters
      : lastViewedPage === 'bookmarked'
        ? bookmarkFilters
        : categoryFilters

  const sorting =
    lastViewedPage === 'trending'
      ? trendingSorting
      : lastViewedPage === 'bookmarked'
        ? bookmarkSorting
        : categorySorting

  // States for navigation between projects
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>()
  const [previousProjectId, setPreviousProjectId] = useState<string>()
  const [nextProjectId, setNextProjectId] = useState<string>()
  const [selectedMetric, setSelectedMetric] = useState('Stars')

  // User data from Supabase auth session
  const user = useUser()

  // Get project details data using generated hook (returns array with 1 project if successful)
  const [{ data, fetching, error }] = useProjectDetailsQuery({
    variables: { id }
  })

  const [{ data: bookmarkIds }] = useBookmarkIdsQuery({
    variables: { userId: user?.id as string, projectId: id }
  })

  // @TODO Add pagination
  const [{ data: projectIds }] = useProjectIdsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: {
        ...filters
      }
    }
  })

  // First entry of returned collection contains project details
  const project = data?.projectCollection?.edges?.map(edge => edge.node)[0] as Project | undefined
  // List of all project IDs for navigation
  const projects = projectIds?.projectCollection?.edges?.map(edge => edge.node) as Project[]
  // Array of length 1 with bookmark details if bookmarked, otherwise empty array
  const bookmarks = bookmarkIds?.bookmarkCollection?.edges?.map(edge => edge.node) as Bookmark[]

  // Whether project is bookmarked or not
  const isBookmarked = bookmarks?.length > 0 && bookmarks[0].project?.id === id
  // Current category of if project is bookmarked
  const category = isBookmarked ? (bookmarks[0].category as string) : undefined

  // Set IDs of previous and next project for navigation buttons
  const updateProjectIndices = (currentId: string, projectList: Project[]) => {
    const currentIndex = projectList.findIndex(p => p.id === currentId)

    const newPreviousProjectId =
      currentIndex > 0 ? (projectList[currentIndex - 1].id as string) : undefined

    const newNextProjectId =
      currentIndex < projectList.length - 1
        ? (projectList[currentIndex + 1].id as string)
        : undefined

    setCurrentProjectIndex(currentIndex)
    setPreviousProjectId(newPreviousProjectId)
    setNextProjectId(newNextProjectId)
  }

  // Update project indices once projects are fetched
  useEffect(() => {
    if (projects) updateProjectIndices(id, projects)
  }, [projects, id])

  // Display error message conditionally
  if (error || (!fetching && !project)) return <Error />

  const owner = project?.organization || project?.associatedPerson

  const loading = fetching && !project

  return (
    <>
      <Navbar
        currentProjectIndex={currentProjectIndex}
        nextProjectId={nextProjectId}
        previousProjectId={previousProjectId}
        projectsLength={projects?.length}
        loading={loading}
      />

      <div className='flex grow flex-col lg:flex-row'>
        <div className='border-b border-white/5 md:border-none lg:w-[calc(100%-250px)]'>
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

          <div className='md:hidden'>
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

export default Details
