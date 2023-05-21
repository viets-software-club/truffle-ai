import {
  FiX as X,
  FiChevronUp as ChevronUp,
  FiChevronDown as ChevronDown,
  FiCalendar as Calendar
} from 'react-icons/fi'
import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Button from '@/pureComponents/Button'
import Card from '@/pureComponents/Card'
import Chart from '@/pageComponents/details/Chart'
import ProjectInformation from '@/pageComponents/details/ProjectInformation'
import InformationRow from '@/pureComponents/InformationRow'
import ScatterPlot from '@/pageComponents/details/ScatterPlot'
import {
  forksMock,
  issuesMock,
  starsMock,
  githubStatListMockWithId,
  hackerNewsListMock,
  tagsMock,
  tweetListMock
} from '@/data/detailPageMocks'
import Page from '@/containers/Page'
import SmallSidebar from '@/pageComponents/details/Sidebar'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('Under construction!')
}
const SomeButton = <Button variant="normalHighlighted" onClick={handleClick} text="Do something" />
const DetailPage = () => (
  <Page>
    <div className="border-b border-solid border-gray-800 py-2.5 pl-7 pr-2 text-gray-500">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-3">
          <Button variant="onlyIconnoBorderNoBG" onClick={handleClick} Icon={X} />
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
          name="vercel/next.js"
          eli5="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          tags={['React', 'Static Site Generation', 'TypeScript']}
        />
        <Chart starData={starsMock} forkData={forksMock} issueData={issuesMock} />
        <ScatterPlot />
        <div className="flex flex-row">
          <Card Icon={FaTwitter} name="Top Tweets" button={SomeButton} textFields={tweetListMock} />
          <Card
            Icon={FaHackerNews}
            name="Community sentiment"
            button={SomeButton}
            textFields={hackerNewsListMock}
          />
        </div>
        <div className="flex flex-col px-7 py-2.5">
          <InformationRow
            githubStats={githubStatListMockWithId}
            name="vercel/next.js"
            tags={tagsMock}
          />
          <InformationRow
            githubStats={githubStatListMockWithId}
            name="vercel/next2.js"
            tags={tagsMock}
          />
          <InformationRow
            githubStats={githubStatListMockWithId}
            name="vercel/next3.js"
            tags={tagsMock}
          />
        </div>
      </div>
      <SmallSidebar />
    </div>
  </Page>
)
export default DetailPage
