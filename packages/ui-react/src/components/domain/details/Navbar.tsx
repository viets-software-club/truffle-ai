import { useState, useEffect } from 'react'
import { FiX, FiChevronUp, FiChevronDown } from 'react-icons/fi'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Button from '@/components/pure/Button'
import { useProjectIdsQuery, Project } from '@/graphql/generated/gql'
import {
  useBookmarkedProjectsState,
  useCategoryProjectsState,
  useLastViewedPageState,
  useTrendingProjectsState
} from '@/hooks/useProjectTableState'
import { defaultSort } from '../projects/types'

type NavbarProps = {
  loading?: boolean
}

const Navbar = ({ loading }: NavbarProps) => {
  const projectId = useParams()?.id
  const id = (typeof projectId === 'string' ? projectId : projectId?.join('')) || ''

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

  // @TODO Add pagination
  const [{ data: projectIds }] = useProjectIdsQuery({
    variables: {
      orderBy: sorting || defaultSort,
      filter: {
        ...filters
      }
    }
  })

  // List of all project IDs for navigation
  const projects = projectIds?.projectCollection?.edges?.map(edge => edge.node) as Project[]

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
    if (projects && id) updateProjectIndices(id, projects)
  }, [projects, id])

  return (
    <div className='z-10 flex h-[60px] w-full items-center gap-3 border-b border-white/5 bg-gray-900 px-4 lg:fixed lg:top-0 lg:pl-7 lg:pr-3'>
      <Link
        href={
          lastViewedPage === 'trending'
            ? '/'
            : lastViewedPage === 'bookmarked'
              ? '/bookmarks'
              : `/compare/${encodeURIComponent(lastViewedPage)}`
        }
        className='mr-auto md:mr-0'>
        <FiX className='h-4 w-4 text-white/50' />
      </Link>

      {nextProjectId ? (
        <Link href={`/details/${nextProjectId}`}>
          <Button>
            <FiChevronUp />
          </Button>
        </Link>
      ) : (
        <Button disabled={!nextProjectId}>
          <FiChevronUp className='text-white/50' />
        </Button>
      )}

      {previousProjectId ? (
        <Link href={`/details/${previousProjectId}`}>
          <Button>
            <FiChevronDown />
          </Button>
        </Link>
      ) : (
        <Button disabled={!previousProjectId}>
          <FiChevronDown className='text-white/50' />
        </Button>
      )}

      {!loading && (
        <div className='flex flex-row items-center'>
          <p className='text-sm text-white'>
            {currentProjectIndex !== undefined ? currentProjectIndex + 1 : '0'}&nbsp;
          </p>
          <p className='text-sm text-white/50'>/&nbsp;{projects?.length}</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
