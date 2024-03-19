import { useState } from 'react'
import { FiBookmark as Bookmark } from 'react-icons/fi'
import Image from 'next/image'
import BookmarkModal from '@/components/domain/details/BookmarkModal'
import Button from '@/components/shared/Button'
import Skeleton from '@/components/shared/Skeleton'
import Tag from '@/components/shared/Tag'
import { ProjCat, ProjRepo } from '@/graphql/generated/gql'
import SendToSlack from '../compare/SendToSlack'

type ProjectInformationProps = {
  project?: ProjRepo
  categories?: ProjCat[]
  loading?: boolean
}

/**
 * Top part of project detail page (logo, name, tags, bookmark button)
 */
const ProjectInformation = ({ project, categories, loading }: ProjectInformationProps) => {
  const name = `${project?.gthbRepo.gthbOwner.gthbOwnerLogin} / ${project?.gthbRepo.gthbRepoName}`

  const [bookmarkModalOpen, setBookmarkModalOpen] = useState(false)

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
              {project?.gthbRepo.gthbOwner.avatarUrl && (
                <Image src={project?.gthbRepo.gthbOwner.avatarUrl} alt='logo' fill sizes='32px' />
              )}
            </div>
          )}

          {loading ? (
            <Skeleton className='h-8 !w-48' />
          ) : (
            <a href={project?.gthbRepo.gthbRepoUrl} target='_blank' rel='noreferrer'>
              <h1 className='mr-3 text-xl font-medium'>
                {name.slice(0, 32)}
                {name.length > 32 ? '...' : ''}
              </h1>
            </a>
          )}

          {categories?.map(category => (
            <Tag key={category.projCatId as string}>{category.title}</Tag>
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
              <SendToSlack content={`<${project?.gthbRepo.gthbRepoUrl}|${name}>`} />

              <Button onClick={toggleBookmarkModal} className='text-white/90'>
                <Bookmark />
                {categories ? 'Edit bookmark' : 'Bookmark'}
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
              <p className='hyphens-auto text-sm font-light'>
                {project?.gthbRepo.gthbRepoDescription}
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-xs font-semibold uppercase text-white/50'>Explanation</span>
              <p className='hyphens-auto text-sm font-light lg:max-w-[750px]'>
                {project?.projRepo.repoEli5}
              </p>
            </div>
          </>
        )}
      </div>

      {/* <BookmarkModal
        open={bookmarkModalOpen}
        close={() => setBookmarkModalOpen(false)}
        projectID={project?.projRepoId as string}
        categories={categories}
      /> */}
    </div>
  )
}

export default ProjectInformation
