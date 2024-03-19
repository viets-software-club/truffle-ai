import { useEffect, useState } from 'react'
import { HiOutlineFolder, HiOutlineFolderOpen } from 'react-icons/hi2'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRightIcon } from '@primer/octicons-react'
import clsx from 'clsx'
import { ProjBookmark } from '@/graphql/generated/gql'
import Item from './Item'

type GroupProps = {
  id: string
  text: string
  path: string
  bookmarks: ProjBookmark[]
}

const Group = ({ id, text, path, bookmarks }: GroupProps) => {
  // Get project or category id from URL
  const {
    query: { category: categoryIdFromUrl, id: projectIdFromUrl }
  } = useRouter()

  const categoryId =
    (typeof categoryIdFromUrl === 'string' ? categoryIdFromUrl : categoryIdFromUrl?.join('')) || ''
  const projectId =
    (typeof projectIdFromUrl === 'string' ? projectIdFromUrl : projectIdFromUrl?.join('')) || ''

  const [isExpanded, setIsExpanded] = useState(categoryId === id)

  // Expand group if user is on the corresponding compare page or on a project detail page which the category contains
  useEffect(() => {
    setIsExpanded(
      categoryId === id || bookmarks.some(bookmark => bookmark.projRepoId === projectId)
    )
  }, [categoryId, projectId, bookmarks, id])

  const Icon = isExpanded ? HiOutlineFolderOpen : HiOutlineFolder

  return (
    <div className='flex flex-col'>
      <button
        type='button'
        onClick={() => setIsExpanded(!isExpanded)}
        className='group relative flex w-full items-center justify-start gap-[5px] rounded-md px-5 py-2.5 transition-colors duration-75 hover:bg-white/5'>
        <Icon className='h-4 w-4 text-white/50' />

        <span
          className='mt-[1px] h-[13px] w-[130px] overflow-hidden text-left text-xs leading-3 text-white/90'
          style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {text}
        </span>

        <Link
          href={path}
          className='group/link invisible absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-white/50 opacity-0 transition-all duration-100 hover:bg-[#343435] group-hover:visible group-hover:opacity-100'>
          <span className='invisible max-w-0 text-xs opacity-0 transition-all delay-100 duration-200 group-hover/link:visible group-hover/link:max-w-[55px] group-hover/link:opacity-100'>
            Compare
          </span>
          <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </button>

      <div
        className={clsx(
          'flex flex-col gap-1 transition-all duration-200',
          isExpanded ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        style={{
          maxHeight: isExpanded ? `${bookmarks.length * 36 + (bookmarks.length - 1) * 4}px` : '0px'
        }}>
        {bookmarks
          .sort((a, b) =>
            a.projRepo.gthbRepo.gthbRepoName.localeCompare(b.projRepo.gthbRepo.gthbRepoName)
          )
          .map(({ projRepo }) => {
            if (!projRepo) return null
            const { gthbRepoName, gthbOwner } = projRepo.gthbRepo
            const projRepoId = projRepo.projRepoId as string

            return (
              <Item
                key={projRepoId}
                imageSrc={gthbOwner.avatarUrl}
                text={gthbRepoName}
                path={`/details/${projRepoId}`}
                secondaryItem
              />
            )
          })}
      </div>
    </div>
  )
}

export default Group
