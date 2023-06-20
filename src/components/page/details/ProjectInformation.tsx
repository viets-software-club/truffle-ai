import { useState } from 'react'
import Image from 'next/image'
import { FaSlack } from 'react-icons/fa'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Banner from '@/components/page/settings/Banner'
import Button from '@/components/pure/Button'
import { Tooltip } from 'react-tooltip'
import sendSlackNotification from '@/util/sendSlackNotification'

type ProjectInformationProps = {
  githubUrl: string
  image: string
  name: string
  url: string
  eli5: string
  tags: Array<{ name: string; color: string }>
}

/**
 * Top part of project detail page (logo, name, tags, bookmark button)
 */
const ProjectInformation = ({
  githubUrl,
  image,
  url,
  name,
  eli5,
  tags
}: ProjectInformationProps) => {
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [slackLoading, setSlackLoading] = useState(false)

  const handleNotificationWrapper = async (message: string) => {
    setNotificationStatus(await sendSlackNotification(message))
  }

  const sendSlackMessage = () => {
    setSlackLoading(true)

    const savedMessage = localStorage.getItem('slackMessage') || ''
    const message = `${savedMessage}: <${githubUrl}|${name}>`

    void handleNotificationWrapper(message)

    setSlackLoading(false)
  }

  return (
    <div className="border-b border-gray-800 px-7 py-6">
      <div className="mb-6 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="relative mr-4 h-8 w-8 overflow-hidden rounded-[5px] bg-gray-600">
            <Image src={image} alt="logo" fill sizes="32px" />
          </div>

          <a href={url} target="_blank" rel="noreferrer">
            <h1 className="mr-3 text-20 font-medium" data-tooltip-id="project-url">
              {name.slice(0, 32)}
              {name.length > 32 ? '...' : ''}
            </h1>
          </a>

          <Tooltip id="project-url" place="bottom">
            {url}
          </Tooltip>

          {tags.length > 0 ? (
            tags.map((tag) => (
              <p
                key={tag.name}
                className="mx-1 rounded-[5px] bg-gray-850 px-2 py-0.5 text-12 font-normal text-gray-300"
                style={{ color: tag.color }}
              >
                {tag.name}
              </p>
            ))
          ) : (
            <p className="text-12 font-light text-gray-300">No tags available</p>
          )}
        </div>

        <div className="flex flex-row items-center justify-end gap-2">
          <Button
            onClick={sendSlackMessage}
            variant="normal"
            text={slackLoading ? 'Loading...' : 'Send to Slack'}
            Icon={FaSlack}
            order="ltr"
            textColor="white"
          />

          <Button
            variant="normal"
            text="Bookmark"
            Icon={Bookmark}
            onClick={() => {
              // @TODO Implement bookmark functionality
            }}
            order="ltr"
            textColor="text-gray-100"
          />
        </div>
      </div>

      <p className="text-14 font-light">{eli5}</p>

      {notificationStatus === 'success' && (
        <Banner variant="success" message="Slack notification sent" />
      )}

      {notificationStatus === 'error' && (
        <Banner variant="error" message="Error sending notification" />
      )}
    </div>
  )
}

export default ProjectInformation
