import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiX as X, FiChevronUp as ChevronUp, FiChevronDown as ChevronDown } from 'react-icons/fi'
import { FaHackerNews, FaTwitter } from 'react-icons/fa'
import Loading from '@/components/pure/Loading'
import Button from '@/components/pure/Button'
import Error from '@/components/pure/Error'
import Chart, { DataPoint } from '@/components/page/details/Chart'
import RightSidebar from '@/components/page/details/RightSidebar'
import {
  Bookmark,
  Project,
  useBookmarkIdsQuery,
  useProjectDetailsQuery,
  useProjectIdsQuery
} from '@/graphql/generated/gql'
import ProjectInformation from '@/components/page/details/ProjectInformation'
import { defaultSort } from '@/components/page/overview/types'
import defaultFilters from '@/components/page/overview/defaultFilters'
import Card from '@/components/pure/Card'
import { useUser } from '@supabase/auth-helpers-react'

type DetailsProps = {
  id: string
}

/**
 * Project detail component
 */
const Details = ({ id }: DetailsProps) => {
  // States for navigation between projects
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>()
  const [previousProjectId, setPreviousProjectId] = useState<string>()
  const [nextProjectId, setNextProjectId] = useState<string>()
  const [selectedMetric, setSelectedMetric] = useState('Stars')

  // User data from Supabase auth session
  const user = useUser()

  /**
   * Get project details data using generated hook (returns array with 1 project if successful).
   * @param {string} id - The ID of the project for which to fetch details.
   * @returns {[{ data: any, fetching: boolean, error: any }]} Data is the data containing trending projects.
   * Fetching is a boolean flag indicating whether the data is currently being fetched or not.
   * Error contains any error information if the query encounters an error during the fetch.
   */
  const [{ data, fetching, error }, refetchProjectDetails] = useProjectDetailsQuery({
    variables: { id }
  })

  const [{ data: bookmarkIds }, refetchBookmarkIds] = useBookmarkIdsQuery({
    variables: { userId: user?.id as string, projectId: id }
  })

  // @TODO Make list of projects dependent on where the user came from (trending, bookmarked, compare)
  // + add proper pagination
  const [{ data: projectIds }, refetchProjectIds] = useProjectIdsQuery({
    variables: {
      orderBy: defaultSort,
      filter: defaultFilters
    }
  })

  // First entry of returned collection contains project details
  const project = data?.projectCollection?.edges?.map((edge) => edge.node)[0] as Project
  // List of all project IDs for navigation
  const projects = projectIds?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
  // Array of length 1 with bookmark details if bookmarked, otherwise empty array
  const bookmarks = bookmarkIds?.bookmarkCollection?.edges?.map((edge) => edge.node) as Bookmark[]

  // Whether project is bookmarked or not
  const isBookmarked = bookmarks?.length > 0 && bookmarks[0].project?.id === id
  // Current category of if project is bookmarked
  const category = isBookmarked ? (bookmarks[0].category as string) : ''

  // Set IDs of previous and next project for navigation buttons
  const updateProjectIndices = (currentId: string, projectList: Project[]) => {
    const currentIndex = projectList.findIndex((p) => p.id === currentId)

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

  const refetch = () => {
    refetchProjectDetails()
    refetchBookmarkIds()
    refetchProjectIds()
  }

  // Update project indices once projects are fetched
  useEffect(() => {
    if (projects) {
      updateProjectIndices(id, projects)
    }
  }, [projects, id])

  // Display loading/ error messages conditionally
  if (fetching) return <Loading fullscreen />
  if (error || !project) return <Error />

  return (
    <>
      <div className="fixed z-10 flex h-[60px] w-full items-center justify-between border-b border-solid border-gray-800 bg-gray-900 px-3 pl-7 text-gray-500">
        <div className="flex flex-row items-center gap-3">
          <Link href="/">
            <X key="2" className="h-4 w-4 text-gray-500" />
          </Link>

          {nextProjectId ? (
            <Link href={`/details/${nextProjectId}`}>
              <Button variant="onlyIcon" Icon={ChevronUp} />
            </Link>
          ) : (
            <Button
              disabled={!nextProjectId}
              variant="onlyIcon"
              Icon={ChevronUp}
              iconColor="text-gray-600"
            />
          )}

          {previousProjectId ? (
            <Link href={`/details/${previousProjectId}`}>
              <Button variant="onlyIcon" Icon={ChevronDown} />
            </Link>
          ) : (
            <Button
              disabled={!previousProjectId}
              variant="onlyIcon"
              Icon={ChevronDown}
              iconColor="text-gray-600"
            />
          )}

          <div className="flex flex-row items-center">
            <p className="text-14 text-white">
              {currentProjectIndex !== undefined ? currentProjectIndex + 1 : '0'}&nbsp;
            </p>
            <p className="text-14 text-gray-500">/&nbsp;{projects?.length}</p>
          </div>
        </div>
      </div>

      <div className="flex grow">
        <div className="w-[calc(100%-250px)] flex-row pt-[60px]">
          <ProjectInformation
            id={project.id as string}
            githubUrl={project.githubUrl as string}
            image={
              (project.organization?.avatarUrl || project.associatedPerson?.avatarUrl) as string
            }
            name={`${
              (project.organization?.login || project.associatedPerson?.login) as string
            } / ${project.name as string}`}
            url={project.githubUrl as string}
            explanation={project.eli5 || 'No explanation'}
            about={project.about || 'No description'}
            categories={project.categories as string[]}
            isBookmarked={isBookmarked}
            category={category}
            refetch={refetch}
          />

          <div className="flex flex-col items-start">
            <Chart
              datasets={[
                {
                  id: project.id as string,
                  name: project.name as string,
                  data:
                    selectedMetric === 'Stars'
                      ? (project.starHistory as DataPoint[])
                      : (project.forkHistory as DataPoint[])
                }
              ]}
              multipleLines={false}
              selectedMetric={selectedMetric}
              setSelectedMetric={setSelectedMetric}
            />
          </div>

          <div className="flex flex-row gap-4 border-t border-gray-800 py-2 pl-7 pr-3">
            <div className="w-1/2">
              <Card
                Icon={FaTwitter}
                name="Top Tweets"
                tweets={project.relatedTwitterPosts ?? undefined}
                variant="twitter"
                key={project.id as string}
              />
            </div>

            <div className="w-1/2">
              <Card
                Icon={FaHackerNews}
                name="Community Sentiment"
                communitySentiment={project.hackernewsSentiment ?? undefined}
                links={project.hackernewsStories as string[]}
                variant="hackernews"
                key={project.id as string}
              />
            </div>
          </div>
        </div>

        <RightSidebar project={project} />
      </div>
    </>
  )
}

export default Details
