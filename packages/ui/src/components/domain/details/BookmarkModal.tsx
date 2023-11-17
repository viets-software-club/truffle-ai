import { ChangeEvent, FC, FormEvent, useState } from 'react'
import clsx from 'clsx'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Modal from '@/components/shared/Modal'
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
  useEditBookmarkCategoryMutation
} from '@/graphql/generated/gql'

const defaultErrorMessage = 'Something went wrong. Please try again later.'

type BookmarkModalProps = {
  open: boolean
  toggleModal: () => void
  projectID: string
  category: string
  isBookmarked: boolean
  refetch: () => void
}

const BookmarkModal: FC<BookmarkModalProps> = ({
  open,
  toggleModal,
  projectID,
  category,
  isBookmarked,
  refetch
}) => {
  const [newCategory, setNewCategory] = useState<string>(category)
  const [error, setError] = useState<string | null>(null)

  const [{ fetching: fetchingAdd }, addBookmarkMutation] = useAddBookmarkMutation()
  const [{ fetching: fetchingDelete }, deleteBookmarkMutation] = useDeleteBookmarkMutation()
  const [{ fetching: fetchingEdit }, editBookmarkCategoryMutation] =
    useEditBookmarkCategoryMutation()

  // Sends mutation that adds a project to a category or edits the category of a bookmark
  const addOrEditBookmark = async () => {
    try {
      // Don't do anything if the category is the same or empty
      if (newCategory === category || newCategory.length === 0) return

      if (isBookmarked) {
        const res = await editBookmarkCategoryMutation({ projectID, newCategory })
        const responseCode = parseInt(res?.data?.editBookmarkCategory?.code as string, 10)

        // If the mutation was successful, show success message
        if (responseCode >= 200 && responseCode < 300) {
          refetch()
        } else {
          // Otherwise, show error message
          setError(res?.data?.editBookmarkCategory?.message || defaultErrorMessage)
        }
      } else {
        const res = await addBookmarkMutation({ projectID, category: newCategory })
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
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

  return (
    <Modal isOpen={open} onClose={toggleModal}>
      <form className='flex flex-col items-stretch gap-4' onSubmit={handleSubmit}>
        <p className='text-base font-semibold text-white'>
          {isBookmarked ? 'Edit bookmark' : 'Add bookmark'}
        </p>

        <Input placeholder='Category' value={newCategory} onChange={handleChange} />

        {/* Error message */}
        {error && <p className='text-sm text-red-500'>{error}</p>}

        <div
          className={clsx(
            'flex w-full items-center',
            isBookmarked ? 'justify-between' : 'justify-end'
          )}>
          {/* Delete button */}
          {isBookmarked && (
            <Button
              variant='noBorderNoBG'
              className='text-red-500'
              onClick={!fetchingDelete ? handleDelete : undefined}>
              {fetchingDelete ? 'Deleting' : 'Delete'}
            </Button>
          )}

          {/* Submit button */}
          <Button
            variant='highlighted'
            disabled={fetchingAdd || fetchingEdit}
            type='submit'
            className='text-white'>
            {fetchingAdd || fetchingEdit ? 'Loading...' : 'Save'}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default BookmarkModal
