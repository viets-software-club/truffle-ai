import { useState } from 'react'
import { FaSlack } from 'react-icons/fa'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Image from 'next/image'
import Banner from '@/components/page/settings/Banner'
import Button from '@/components/pure/Button'
import BookmarkModal from '@/components/side-effects/Details/BookmarkModal'
import sendSlackNotification from '@/util/sendSlackNotification'

type ProjectInformationProps = {
  id: string
  githubUrl: string
  image: string
  name: string
  url: string
  explanation: string
  about: string
  categories: string[]
  isBookmarked: boolean
  category: string
  refetch: () => void
}

/**
 * Top part of project detail page (logo, name, tags, bookmark button)
 */
const ProjectInformation = ({
  id,
  githubUrl,
  image,
  url,
  name,
  explanation,
  about,
  categories,
  isBookmarked,
  category,
  refetch
}: ProjectInformationProps) => {
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | ''>('')
  const [slackLoading, setSlackLoading] = useState(false)
  const [bookmarkModalOpen, setBookmarkModalOpen] = useState(false)

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

  const toggleBookmarkModal = () => {
    setBookmarkModalOpen(!bookmarkModalOpen)
  }

  return (
    <div className='border-b border-gray-800 px-7 py-6'>
      <div className='mb-6 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <div className='relative mr-4 h-8 w-8 overflow-hidden rounded-md bg-gray-600'>
            <Image src={image} alt='logo' fill sizes='32px' />
          </div>

          <a href={url} target='_blank' rel='noreferrer'>
            <h1 className='mr-3 text-xl font-medium'>
              {name.slice(0, 32)}
              {name.length > 32 ? '...' : ''}
            </h1>
          </a>

          {categories?.length > 0 &&
            categories[0] !== 'CategorizationError' &&
            categories
              .filter((value, index, array) => array.indexOf(value) === index)
              .map(cat => (
                <p
                  key={cat}
                  className='mx-1 rounded-md bg-gray-850 px-2 py-0.5 text-xs font-normal text-gray-300'>
                  {cat}
                </p>
              ))}
        </div>

        <div className='flex flex-row items-center justify-end gap-2'>
          <Button onClick={sendSlackMessage} className='text-white'>
            <FaSlack />
            {slackLoading ? 'Loading...' : 'Send to Slack'}
          </Button>

          <Button onClick={toggleBookmarkModal} className='text-gray-100'>
            <Bookmark />
            {isBookmarked ? 'Edit bookmark' : 'Bookmark'}
          </Button>
        </div>
      </div>

      <div className='flex w-full gap-6'>
        <div className='flex w-[250px] shrink-0 flex-col gap-2'>
          <span className='text-xs font-semibold uppercase text-gray-500'>About</span>
          <p className='text-sm font-light'>{about}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='text-xs font-semibold uppercase text-gray-500'>Explanation</span>
          <p className='max-w-[750px] text-sm font-light'>{explanation}</p>
        </div>
      </div>

      {notificationStatus === 'success' && (
        <Banner variant='success' message='Slack notification sent' />
      )}

      {notificationStatus === 'error' && (
        <Banner variant='error' message='Error sending notification' />
      )}

      <BookmarkModal
        open={bookmarkModalOpen}
        toggleModal={toggleBookmarkModal}
        projectID={id}
        category={category}
        isBookmarked={isBookmarked}
        refetch={refetch}
      />
    </div>
  )
}

export default ProjectInformation
