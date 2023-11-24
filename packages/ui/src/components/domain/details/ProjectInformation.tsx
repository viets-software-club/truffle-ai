import { useState } from 'react'
import { FaSlack } from 'react-icons/fa'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Image from 'next/image'
import BookmarkModal from '@/components/domain/details/BookmarkModal'
import Banner from '@/components/shared/Banner'
import Button from '@/components/shared/Button'
import Skeleton from '@/components/shared/Skeleton'
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
  category?: string
  loading?: boolean
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
  loading,
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

    const savedMessage =
      (typeof window !== 'undefined' && localStorage.getItem('slackMessage')) || ''
    const message = `${savedMessage}: <${githubUrl}|${name}>`

    void handleNotificationWrapper(message)

    setSlackLoading(false)
  }

  const toggleBookmarkModal = () => {
    setBookmarkModalOpen(!bookmarkModalOpen)
  }

  return (
    <div className='border-b border-white/5 px-4 py-6 lg:px-7'>
      <div className='mb-6 flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center'>
        <div className='flex flex-row items-center'>
          {loading ? (
            <Skeleton className='mr-4 h-8 !w-8' />
          ) : (
            <div className='relative mr-4 h-8 w-8 overflow-hidden rounded-md'>
              <Image src={image} alt='logo' fill sizes='32px' />
            </div>
          )}

          {loading ? (
            <Skeleton className='h-8 !w-48' />
          ) : (
            <a href={url} target='_blank' rel='noreferrer'>
              <h1 className='mr-3 text-xl font-medium'>
                {name.slice(0, 32)}
                {name.length > 32 ? '...' : ''}
              </h1>
            </a>
          )}

          {categories?.length > 0 &&
            categories[0] !== 'CategorizationError' &&
            categories
              .filter((value, index, array) => array.indexOf(value) === index)
              .map(cat => (
                <p
                  key={cat}
                  className='mx-1 rounded-md bg-white/5 px-2 py-0.5 text-xs font-normal text-white/75'>
                  {cat}
                </p>
              ))}
        </div>

        <div className='flex flex-row items-center justify-end gap-2'>
          {loading ? (
            <>
              <Skeleton className='h-8 !w-24' />
              <Skeleton className='h-8 !w-24' />
            </>
          ) : (
            <>
              <Button onClick={sendSlackMessage} className='text-white'>
                <FaSlack />
                {slackLoading ? 'Loading...' : 'Send to Slack'}
              </Button>

              <Button onClick={toggleBookmarkModal} className='text-white/90'>
                <Bookmark />
                {isBookmarked ? 'Edit bookmark' : 'Bookmark'}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className='flex w-full flex-col gap-6 xl:flex-row'>
        {loading ? (
          <Skeleton className='h-12 !w-full xl:min-w-[300px]' />
        ) : (
          <>
            <div className='flex shrink-0 flex-col gap-2 xl:w-[250px]'>
              <span className='text-xs font-semibold uppercase text-white/50'>About</span>
              <p className='text-sm font-light'>{about}</p>
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-xs font-semibold uppercase text-white/50'>Explanation</span>
              <p className='text-sm font-light lg:max-w-[750px]'>{explanation}</p>
            </div>
          </>
        )}
      </div>

      {notificationStatus === 'success' && (
        <Banner variant='success' message='Slack notification sent' />
      )}

      {notificationStatus === 'error' && (
        <Banner variant='error' message='Error sending notification' />
      )}

      <BookmarkModal
        open={bookmarkModalOpen}
        close={() => setBookmarkModalOpen(false)}
        projectID={id}
        category={category}
        isBookmarked={isBookmarked}
        refetch={refetch}
      />
    </div>
  )
}

export default ProjectInformation
