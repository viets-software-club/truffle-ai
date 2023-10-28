import { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import clsx from 'clsx'
import Button from '@/components/pure/Button'
import Input from '@/components/pure/Input'
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
    <Transition appear show={open}>
      <Dialog as='div' open={open} onClose={toggleModal} className='fixed inset-0 z-30'>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-950/25' />
        </Transition.Child>

        <div className='fixed inset-0 flex items-center justify-center'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Dialog.Panel
              as='form'
              className='flex w-[350px] flex-col items-stretch gap-4 rounded-lg border border-gray-900/20 bg-gray-700 p-4 text-left shadow-lg shadow-gray-950/10'
              onSubmit={handleSubmit}>
              <Dialog.Title className='text-base font-semibold text-white'>
                {isBookmarked ? 'Edit bookmark' : 'Add bookmark'}
              </Dialog.Title>

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
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BookmarkModal
