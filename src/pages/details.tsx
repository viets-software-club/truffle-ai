import Link from 'next/link'
import {
  FiX as X,
  FiChevronUp as ChevronUp,
  FiChevronDown as ChevronDown,
  FiCalendar as Calendar,
  FiArrowUpRight
} from 'react-icons/fi'
import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Card from '@/components/pure/Card'
import Button from '@/components/pure/Button'
import Page from '@/components/side-effects/Page'
import Chart from '@/components/page/details/Chart'
import withAuth from '@/components/side-effects/withAuth'
import SmallSidebar from '@/components/page/details/Sidebar'
import ProjectInformation from '@/components/page/details/ProjectInformation'
import { data, hackerNewsListMock, tweetListMock } from '@/data/detailPageMocks'
import { useRouter } from 'next/router'

const handleClick = () => {
  // TODO: Implement click handler
}

const SomeButton = (
  <Button Icon={FiArrowUpRight} variant="normal" onClick={handleClick} text="Open" order="ltr" />
)

const DetailPage = () => {
  const router = useRouter()
  const { owner, name } = router.query

  const ownerString = owner as string
  const nameString = name as string
  const ownerName = `${ownerString}/${nameString}`

  return (
    <Page>
      <div className="border-b border-solid border-gray-800 py-2.5 pl-7 pr-2 text-gray-500">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-3">
            <Link href="/">
              <div className="flex items-center rounded-[5px] transition-colors duration-100 hover:bg-gray-700">
                <X />
              </div>
            </Link>

            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronUp} />
            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronDown} />

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
        <div className="w-4/5 flex-row">
          <ProjectInformation
            image=""
            name={ownerName}
            eli5="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            tags={['React', 'Static Site Generation', 'TypeScript']}
          />

          <Chart data={data} />

          <div className="flex flex-row gap-3 px-3">
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

        <SmallSidebar />
      </div>
    </Page>
  )
}

export default withAuth(DetailPage)
