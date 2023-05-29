/* eslint-disable react/jsx-props-no-spreading */
import Button from '@/components/pure/Button'
import Sidebar from '@/components/pure/Sidebar'
import { founderListMock, githubStatListMock, socialMediaListMock } from '@/data/detailPageMocks'
import { FaSlack } from 'react-icons/fa'

const SmallSidebar = () => (
  <Sidebar.Small>
    <Sidebar.Box title="GitHub Stats">
      {githubStatListMock.map(({ id, ...data }) => (
        <Sidebar.Box.GithubStatItem key={id} {...data} />
      ))}
    </Sidebar.Box>

    <Sidebar.Box title="SocialMedia">
      {socialMediaListMock.map(({ id, ...data }) => (
        <Sidebar.Box.SocialMediaItem key={id} {...data} />
      ))}
    </Sidebar.Box>

    <Sidebar.Box title="Founder">
      {founderListMock.map(({ id, ...data }) => (
        <Sidebar.Box.FounderItem key={id} {...data} />
      ))}
    </Sidebar.Box>

    <Sidebar.Box title="Integrations">
      <div className="flex flex-col justify-between">
        <div className="inline-flex px-7 py-2.5">
          <div className="flex flex-row items-center justify-center gap-[15px]">
            <Button variant="normal" onClick={() => null} text="Add to CRM" />

            <button type="button" onClick={() => null}>
              <FaSlack className=" h-[14px] w-[14px]" />
            </button>
          </div>
        </div>
      </div>
    </Sidebar.Box>
  </Sidebar.Small>
)

export default SmallSidebar
