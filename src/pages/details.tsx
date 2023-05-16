/* eslint-disable sonarjs/no-duplicate-string */
import { Inter } from 'next/font/google'
import {
  FiX as X,
  FiChevronUp as ChevronUp,
  FiChevronDown as ChevronDown,
  FiCalendar as Calendar
} from 'react-icons/fi'
import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import {
  RepoForkedIcon,
  StarIcon,
  IssueOpenedIcon,
  PeopleIcon,
  PersonIcon
} from '@primer/octicons-react'

import Button from '@/components/Button'
import Card from '@/components/DetailPage/Card'
import Chart from '@/components/DetailPage/Chart'
import CompanyContainer from '@/components/RightSidebar/CompanyContainer'
import FoundersContainer from '@/components/RightSidebar/FoundersContainer'
import GitHubMetricIcon from '@/components/RightSidebar/GitHubMetricIcon'
import GitHubStatisticsContainer from '@/components/RightSidebar/GitHubStatsContainer'
import ProjectInformation from '@/components/DetailPage/ProjectInformation'
import InformationRow from '@/components/InformationRow'
import IntegrationsContainer from '@/components/RightSidebar/IntegrationsContainer'
import LeftSidebar from '@/components/LeftSidebar'
import ScatterPlot from '@/components/DetailPage/ScatterPlot'
import SocialMediaContainer from '@/components/RightSidebar/SocialMediaContainer'

const inter = Inter({ subsets: ['latin'] })

const Details = () => {
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    alert('Under construction!')
  }

  const starData = [
    { name: '01/01/2023', value: 4000, value2: 1000 },
    { name: '01/02/2023', value: 3000, value2: 2000 },
    { name: '01/03/2023', value: 2000, value2: 3000 },
    { name: '01/04/2023', value: 2780, value2: 4000 },
    { name: '01/05/2023', value: 1890, value2: 5000 },
    { name: '01/06/2023', value: 2390, value2: 6000 },
    { name: '01/07/2023', value: 3490, value2: 7000 }
  ]

  const forkData = [
    { name: '01/01/2023', value: 1000, value2: 4000 },
    { name: '01/02/2023', value: 2000, value2: 3000 },
    { name: '01/03/2023', value: 3000, value2: 2000 },
    { name: '01/04/2023', value: 4000, value2: 2780 },
    { name: '01/05/2023', value: 5000, value2: 1890 },
    { name: '01/06/2023', value: 6000, value2: 2390 },
    { name: '01/07/2023', value: 7000, value2: 3490 }
  ]

  const issueData = [
    { name: '01/01/2023', value: 4800, value2: 1000 },
    { name: '01/02/2023', value: 4200, value2: 2000 },
    { name: '01/03/2023', value: 3600, value2: 3000 },
    { name: '01/04/2023', value: 3000, value2: 4000 },
    { name: '01/05/2023', value: 2400, value2: 5000 },
    { name: '01/06/2023', value: 1800, value2: 6000 },
    { name: '01/07/2023', value: 1200, value2: 7000 }
  ]

  const statisticsData = [
    { Icon: StarIcon, value: '105k', growth: '+450', id: '1' },
    { Icon: IssueOpenedIcon, value: '1.6k', growth: '+121', id: '2' },
    { Icon: RepoForkedIcon, value: '23.7k', growth: '+1.1k', id: '3' },
    {
      IconMetric: <GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />,
      value: '3.2',
      growth: '-0.2',
      id: '4'
    },
    {
      IconMetric: <GitHubMetricIcon Icon={RepoForkedIcon} Icon2={IssueOpenedIcon} />,
      value: '1.6',
      growth: '+0.1',
      id: '5'
    },
    { Icon: PeopleIcon, value: '23', growth: '+2', id: '6' }
  ]

  const name = 'vercel/next.js'
  const tags = ['tag1', 'tag2', 'tag3']

  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-col">
        {/* Sidebar left */}
        <LeftSidebar />

        {/* Main content */}
        <div className="ml-56 flex flex-col text-gray-100">
          <div className="border-b border-solid border-gray-800 py-2.5 pl-7 pr-2 text-gray-500">
            <div className="flex justify-between">
              <div className="flex flex-row items-center gap-3">
                <Button variant="onlyIconnoBordernoBG" onClick={handleClick} Icon={X} />
                <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronUp} />
                <Button variant="onlyIcon" onClick={handleClick} Icon={ChevronDown} />
                <p className="text-14 text-gray-300">3/12</p>
              </div>
              <Button
                variant="normal"
                onClick={handleClick}
                text="Edit timeframe"
                Icon={Calendar}
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
              <Chart starData={starData} forkData={forkData} issueData={issueData} />
              <ScatterPlot />
              <div className="flex flex-row">
                <Card
                  Icon={FaTwitter}
                  name="Top Tweets"
                  button={
                    <Button variant="normalHighlighted" onClick={handleClick} text="Do something" />
                  }
                  textFields={[
                    'Lorem1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
                    'Lorem2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
                    'Lorem 3ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
                  ]}
                />
                <Card
                  Icon={FaHackerNews}
                  name="Community sentiment"
                  button={
                    <Button variant="normalHighlighted" onClick={handleClick} text="Do something" />
                  }
                  textFields={[
                    'Lorem1 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: ELI5',
                    'Lorem2 ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: Hackernews'
                  ]}
                />
              </div>
              <div className="flex flex-col px-7 py-2.5">
                <InformationRow statisticsData={statisticsData} name={name} tags={tags} />
                <InformationRow statisticsData={statisticsData} name={name} tags={tags} />
                <InformationRow statisticsData={statisticsData} name={name} tags={tags} />
              </div>
            </div>

            {/* Sidebar right */}
            <div className="h-full w-1/5 border-l border-solid border-gray-800">
              <GitHubStatisticsContainer statisticsData={statisticsData} />
              <SocialMediaContainer
                socialMediaData={[
                  {
                    name: 'Discord ',
                    text: 'Followers',
                    value: '101k',
                    growth: '+2k',
                    url: 'https://discord.com'
                  },
                  {
                    name: 'Twitter ',
                    text: 'Followers',
                    value: '200k',
                    growth: '+1k',
                    url: 'https://twitter.com'
                  }
                ]}
              />
              <FoundersContainer
                foundersData={[
                  {
                    name: 'John Doe',
                    linkedin: true,
                    mail: true,
                    urlLinkedIn: 'https://linkedin.com',
                    urlMail: 'mailto:john.doe@gmail'
                  },
                  {
                    name: 'Jane Doe',
                    linkedin: true,
                    mail: true,
                    urlLinkedIn: 'https://linkedin.com',
                    urlMail: 'mailto:jane.doe@gmail'
                  }
                ]}
              />
              <CompanyContainer
                companyData={[
                  { name: 'Total Funding', value: '$1.2M', growth: '+$0.2M' },
                  { name: 'Contributions / Employee', value: '1.3', growth: '+0.2' }
                ]}
              />
              <IntegrationsContainer />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Details
