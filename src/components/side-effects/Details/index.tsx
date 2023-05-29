import Link from 'next/link'
import {
  FiX as X,
  FiChevronUp as ChevronUp,
  FiChevronDown as ChevronDown,
  FiCalendar as Calendar,
  FiArrowUpRight
} from 'react-icons/fi'
import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Loading from '@/components/pure/Loading'
import Button from '@/components/pure/Button'
import Card from '@/components/pure/Card'
import Error from '@/components/pure/Error'
import Chart from '@/components/page/details/Chart'
import ProjectInformation from '@/components/page/details/ProjectInformation'
import RightSidebar from '@/components/page/details/RightSidebar'
import { useProjectDetailsQuery } from '@/generated/gql'
import { data as chartDataMock, hackerNewsListMock, tweetListMock } from '@/data/detailPageMocks'

// @TODO Implement handler for navigation
const handleClick = () => ''

// @TODO Update social media buttons
const SomeButton = (
  <Button Icon={FiArrowUpRight} variant="normal" onClick={handleClick} text="Open" order="ltr" />
)

type DetailsProps = {
  id: string
}

/**
 * Project detail component
 */
const Details = ({ id }: DetailsProps) => {
  // Get project details data using generated hook (returns array with 1 project if successful)
  const [{ data, fetching, error }] = useProjectDetailsQuery({ variables: { id } })

  // Get first entry of returned collection
  const project = data?.projectCollection?.edges?.map((edge) => edge.node)[0]

  // Display loading/ error messages conditionally
  if (fetching) return <Loading />
  if (error || !project) return <Error />

  return (
    <>
      <div className="py-2 text-gray-500">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-3">
            <Link href="/">
              <X key="2" className="h-4 w-4 text-gray-500" />
            </Link>

            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronUp} />
            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronDown} />
            {/* @TODO Make values dynamic */}
            <p className="text-14 text-gray-300">3/12</p>
          </div>

          <Button
            variant="normal"
            onClick={handleClick}
            text="Edit timeframe"
            Icon={Calendar}
            order="ltr"
          />
        </div>
      </div>

      <div className="flex grow">
        <div className="mr-4 w-4/5 flex-row border-y border-solid border-gray-800 ">
          <ProjectInformation
            // @TODO Add actual image URL
            image={project.organization?.avatar_url || undefined}
            // @TODO Adjust for owner (could be user or organization)
            name={`${project.organization?.login || 'No name'}/${project.name}`}
            eli5={project.about || 'No description'}
            // @TODO Replace with actual tags
            tags={['React', 'Static Site Generation', 'TypeScript']}
          />

          <Chart data={chartDataMock} />

          {/* @TODO Add real data */}
          <div className="my-4 flex flex-row gap-4">
            <Card
              Icon={FaTwitter}
              name="Top Tweets"
              button={SomeButton}
              textFields={tweetListMock}
            />
            <Card
              Icon={FaHackerNews}
              name="Community sentiment"
              button={SomeButton}
              textFields={hackerNewsListMock}
            />
          </div>
        </div>

        <RightSidebar project={project} />
      </div>
    </>
  )
}

export default Details
