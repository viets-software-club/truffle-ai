import { useState } from 'react'
import Image from 'next/image'
import { FaSlack } from 'react-icons/fa'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Banner from '@/components/page/settings/Banner'
import Button from '@/components/pure/Button'
import sendSlackNotification from '@/util/sendSlackNotification'

type ProjectInformationProps = {
  githubUrl: string
  image: string
  name: string
  url: string
  eli5: string
  categories: string[]
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
  categories
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
            <h1 className="mr-3 text-20 font-medium">
              {name.slice(0, 32)}
              {name.length > 32 ? '...' : ''}
            </h1>
          </a>

          {categories?.length > 0 &&
            categories[0] !== 'CategorizationError' &&
            categories.map((category) => (
              <p
                key={category}
                className="mx-1 rounded-[5px] bg-gray-850 px-2 py-0.5 text-12 font-normal text-gray-300"
              >
                {category}
              </p>
            ))}
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
