import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FiX as X,
  FiChevronUp as ChevronUp,
  FiChevronDown as ChevronDown,
  FiCalendar as Calendar
} from 'react-icons/fi'
import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Button from '@/components/pure/Button'
import Card from '@/components/pure/Card'
import Chart from '@/components/page/details/Chart'
import ProjectInformation from '@/components/page/details/ProjectInformation'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import SmallSidebar from '@/components/page/details/Sidebar'
import { useProjectDetailsQuery } from '@/generated/gql'
import { data as chartDataMock, hackerNewsListMock, tweetListMock } from '@/data/detailPageMocks'

// TODO: Implement handler for navigation
const handleClick = () => ''

// TODO: Update social media buttons
const SomeButton = <Button variant="normalHighlighted" onClick={handleClick} text="Do something" />

/**
 * Detail page for a project (displays GitHub data, top tweets, etc.)
 */
const DetailPage: NextPage = () => {
  // Get project id from URL
  const {
    query: { id }
  } = useRouter()

  const [{ data, fetching, error }] = useProjectDetailsQuery({ variables: { id } })
  const project = data?.projectCollection?.edges?.map((edge) => edge.node)[0]

  // TODO: Replace with loading component
  if (fetching) return <p>Loading...</p>
  // TODO: Replace with error component
  if (error || !project) return <p>{error?.message}</p>

  return (
    <Page>
      <div className="py-2 text-gray-500">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-3">
            <Link href="/">
              <X key="2" className="h-4 w-4 text-gray-500" />
            </Link>
            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronUp} />
            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronDown} />
            {/* TODO: Make values dynamic */}
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
            // TODO: Add actual image URL
            image=""
            // TODO: Adjust for owner (could be user or organization)
            name={`${project.organization?.login || 'No name'}/${project.name}`}
            eli5={project.about || 'No description'}
            // TODO: Replace with actual tags
            tags={['React', 'Static Site Generation', 'TypeScript']}
          />

          <Chart data={chartDataMock} />

          {/* TODO: Add real data */}
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

        <SmallSidebar project={project} />
      </div>
    </Page>
  )
}

export default withAuth(DetailPage)
