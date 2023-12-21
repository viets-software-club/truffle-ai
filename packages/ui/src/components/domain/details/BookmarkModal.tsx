import { FC, FormEvent, useEffect, useState } from 'react'
import clsx from 'clsx'
import Button from '@/components/shared/Button'
import Modal from '@/components/shared/Modal'
import Select from '@/components/shared/Select'
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
  useEditBookmarkCategoryMutation
} from '@/graphql/generated/gql'
import useBookmarks from '@/hooks/useFetchBookmarks'
import useBookmarksSync from '../../../hooks/useBookmarksSync'

const defaultErrorMessage = 'Something went wrong. Please try again later.'

type BookmarkModalProps = {
  open: boolean
  close: () => void
  projectID: string
  category?: string
  isBookmarked: boolean
}

// @TODO allow adding multiple categories
const BookmarkModal: FC<BookmarkModalProps> = ({
  open,
  close,
  projectID,
  category: currentCategory,
  isBookmarked
}) => {
  const [newCategories, setNewCategories] = useState<string[]>([])
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})

  const { sync } = useBookmarksSync()
  const { categories } = useBookmarks()

  const [{ fetching: fetchingAdd }, addBookmarkMutation] = useAddBookmarkMutation()
  const [{ fetching: fetchingDelete }, deleteBookmarkMutation] = useDeleteBookmarkMutation()
  const [{ fetching: fetchingEdit }, editBookmarkCategoryMutation] =
    useEditBookmarkCategoryMutation()

  // Sends mutation that adds a project to a category or edits the category of a bookmark
  const addOrEditBookmark = async () => {
    try {
      // Don't do anything if there is no category selected
      if (newCategories.length === 0) {
        setErrors({ category: 'Please select a category' })
        return
      }

      if (isBookmarked) {
        const res = await editBookmarkCategoryMutation(
          { projectID, newCategory: newCategories[0] },
          {
            additionalTypenames: ['BookmarkConnection', 'ProjectConnection']
          }
        )
        const responseCode = parseInt(res?.data?.editBookmarkCategory?.code as string, 10)

        // If the mutation was successful, show success message
        if (responseCode >= 200 && responseCode < 300) {
          sync()
          close()
        } else {
          // Otherwise, show error message
          setErrors({ default: res?.data?.editBookmarkCategory?.message || defaultErrorMessage })
        }
      } else {
        const res = await addBookmarkMutation(
          { projectID, category: newCategories[0] },
          {
            additionalTypenames: ['BookmarkConnection', 'ProjectConnection']
          }
        )
        const responseCode = parseInt(res?.data?.addBookmark?.code as string, 10)

        // If the mutation was successful, show success message
        if (responseCode >= 200 && responseCode < 300) {
          sync()
          close()
        } else {
          // Otherwise, show error message
          setErrors({ default: res?.data?.addBookmark?.message || defaultErrorMessage })
        }
      }
    } catch (e) {
      setErrors({ default: defaultErrorMessage })
    }
  }

  // Sends mutation that deletes a bookmark
  const deleteBookmark = async () => {
    try {
      const res = await deleteBookmarkMutation(
        { projectID },
        {
          additionalTypenames: ['BookmarkConnection', 'ProjectConnection']
        }
      )
      const responseCode = parseInt(res?.data?.deleteBookmark?.code as string, 10)

      // If the mutation was successful, show success message
      if (responseCode >= 200 && responseCode < 300) {
        sync()
        close()
      } else {
        // Otherwise, show error message
        setErrors({ default: res?.data?.deleteBookmark?.message || defaultErrorMessage })
      }
    } catch (e) {
      setErrors({ default: defaultErrorMessage })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    // Reset error state
    setErrors({})

    // Add or save bookmark
    void addOrEditBookmark()
  }

  const handleDelete = () => {
    // Reset error state
    setErrors({})

    // Delete bookmark
    void deleteBookmark()
  }

  useEffect(() => {
    setNewCategories(currentCategory ? [currentCategory] : [])
  }, [currentCategory])

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
            setSelected={values => {
              setNewCategories(values)
              setErrors({})
            }}
            placeholder='Search or select categories'
            error={errors.category}
          />
        )}

        {/* Error message */}
        {errors.default && <p className='text-sm text-red-400'>{errors.default}</p>}

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
