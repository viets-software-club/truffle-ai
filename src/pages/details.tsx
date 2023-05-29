import {
  FiX as X,
  FiChevronUp as ChevronUp,
  FiChevronDown as ChevronDown,
  FiCalendar as Calendar,
  FiArrowUpRight
} from 'react-icons/fi'
import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Button from '@/components/pure/Button'
import Card from '@/components/pure/Card'
import Chart from '@/components/page/details/Chart'
import ProjectInformation from '@/components/page/details/ProjectInformation'
// import ScatterPlot from '@/components/page/details/ScatterPlot'
import {
  data,
  hackerNewsListMock,
  // tagsMock,
  // githubStatListMockWithId,
  tweetListMock
} from '@/data/detailPageMocks'
import Page from '@/components/side-effects/Page'
import SmallSidebar from '@/components/page/details/Sidebar'
import withAuth from '@/components/side-effects/withAuth'
import Modal from '@/components/pure/Modal'
import { useState } from 'react'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('Under construction!')
}
const SomeButton = (
  <Button Icon={FiArrowUpRight} variant="normal" onClick={handleClick} text="Open" order="ltr" />
)

const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Page>
      <div className="border-b border-solid border-gray-800 py-2.5 pl-7 pr-2 text-gray-500">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-3">
            <Button variant="onlyIconNoBorderNoBG" onClick={handleClick} Icon={X} />
            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronUp} />
            <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronDown} />
            <p className="text-14 text-gray-300">3/12</p>
          </div>
          <div className="flex flex-col">
            <Button
              variant="normal"
              onClick={handleOpenModal}
              text="Edit timeframe"
              Icon={Calendar}
              order="ltr"
            />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <Button variant="noBorderNoBG" text="Today" fullWidth onClick={() => handleClick} />
              <Button variant="normal" text="This Week" fullWidth onClick={() => handleClick} />
              <Button
                variant="noBorderNoBG"
                text="This Month"
                fullWidth
                onClick={() => handleClick}
              />
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex grow">
        <div className="w-4/5 flex-row">
          <ProjectInformation
            image=""
            name="vercel/next.js"
            eli5="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            tags={['React', 'Static Site Generation', 'TypeScript']}
          />
          <Chart data={data} />
          {/* <ScatterPlot /> */}
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
