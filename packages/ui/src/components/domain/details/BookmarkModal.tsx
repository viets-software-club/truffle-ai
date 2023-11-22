import { FC, FormEvent, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import clsx from 'clsx'
import Button from '@/components/shared/Button'
import Modal from '@/components/shared/Modal'
import Select from '@/components/shared/Select'
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
  useEditBookmarkCategoryMutation,
  useFilteredBookmarksQuery
} from '@/graphql/generated/gql'

const defaultErrorMessage = 'Something went wrong. Please try again later.'

type BookmarkModalProps = {
  open: boolean
  close: () => void
  projectID: string
  category: string
  isBookmarked: boolean
  refetch: () => void
}

// @TODO allow adding multiple categories
const BookmarkModal: FC<BookmarkModalProps> = ({
  open,
  close,
  projectID,
  category: currentCategory,
  isBookmarked,
  refetch
}) => {
  const [newCategories, setNewCategories] = useState<string[]>([currentCategory])
  const [error, setError] = useState<string | null>(null)

  const user = useUser()

  const [{ data: bookmarks }] = useFilteredBookmarksQuery({
    variables: { userId: user?.id as string }
  })
  const [{ fetching: fetchingAdd }, addBookmarkMutation] = useAddBookmarkMutation()
  const [{ fetching: fetchingDelete }, deleteBookmarkMutation] = useDeleteBookmarkMutation()
  const [{ fetching: fetchingEdit }, editBookmarkCategoryMutation] =
    useEditBookmarkCategoryMutation()

  // Sends mutation that adds a project to a category or edits the category of a bookmark
  const addOrEditBookmark = async () => {
    try {
      // Don't do anything if the category is the same or empty
      if (newCategories[0] === currentCategory || newCategories.length === 0) return

      if (isBookmarked) {
        const res = await editBookmarkCategoryMutation({ projectID, newCategory: newCategories[0] })
        const responseCode = parseInt(res?.data?.editBookmarkCategory?.code as string, 10)

        // If the mutation was successful, show success message
        if (responseCode >= 200 && responseCode < 300) {
          refetch()
        } else {
          // Otherwise, show error message
          setError(res?.data?.editBookmarkCategory?.message || defaultErrorMessage)
        }
      } else {
        const res = await addBookmarkMutation({ projectID, category: newCategories[0] })
        const responseCode = parseInt(res?.data?.addBookmark?.code as string, 10)

        // If the mutation was successful, show success message
        if (responseCode >= 200 && responseCode < 300) {
          refetch()
        } else {
          // Otherwise, show error message
          setError(res?.data?.addBookmark?.message || defaultErrorMessage)
        }
      }
    } catch (e) {
      setError(defaultErrorMessage)
    }
  }

  // Sends mutation that deletes a bookmark
  const deleteBookmark = async () => {
    try {
      const res = await deleteBookmarkMutation({ projectID })
      const responseCode = parseInt(res?.data?.deleteBookmark?.code as string, 10)

      // If the mutation was successful, show success message
      if (responseCode >= 200 && responseCode < 300) {
        refetch()
      } else {
        // Otherwise, show error message
        setError(res?.data?.deleteBookmark?.message || defaultErrorMessage)
      }
    } catch (e) {
      setError(defaultErrorMessage)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    // Reset success and error states
    setError(null)

    // Add or save bookmark
    void addOrEditBookmark()
  }

  const handleDelete = () => {
    // Reset success and error states
    setError(null)

    // Delete bookmark
    void deleteBookmark()
  }

  // Get unique array of categories
  const categories = bookmarks?.bookmarkCollection?.edges
    ?.map(({ node: { category } }) => category)
    .filter((value, index, array) => array.indexOf(value) === index)
    .filter(value => value !== undefined && value !== null) as string[]

  return (
    <Modal isOpen={open} onClose={close}>
      <form className='flex flex-col items-stretch gap-4' onSubmit={handleSubmit}>
        <p className='text-base font-semibold text-white'>
          {isBookmarked ? 'Edit bookmark' : 'Add bookmark'}
        </p>

        {categories && (
          <Select
            values={categories}
            selected={newCategories}
            setSelected={setNewCategories}
            placeholder='Search or select categories'
          />
        )}

        {/* Error message */}
        {error && <p className='text-sm text-red-400'>{error}</p>}

        <div
          className={clsx(
            'flex w-full items-center',
            isBookmarked ? 'justify-between' : 'justify-end'
          )}>
          {/* Delete button */}
          {isBookmarked && (
            <Button
              variant='error'
              size='large'
              onClick={!fetchingDelete ? handleDelete : undefined}>
              {fetchingDelete ? 'Deleting' : 'Delete'}
            </Button>
          )}

          {/* Submit button */}
          <Button
            variant='highlighted'
            size='large'
            disabled={fetchingAdd || fetchingEdit}
            type='submit'>
            {fetchingAdd || fetchingEdit ? 'Loading...' : 'Save'}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default BookmarkModal
