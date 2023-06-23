import { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import Button from '@/components/pure/Button'
import Input from '@/components/pure/Input'
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
  useEditBookmarkCategoryMutation
} from '@/graphql/generated/gql'

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
  const [error, setError] = useState<boolean>(false)

  const [{ fetching: fetchingAdd }, addBookmarkMutation] = useAddBookmarkMutation()
  const [{ fetching: fetchingDelete }, deleteBookmarkMutation] = useDeleteBookmarkMutation()
  const [{ fetching: fetchingEdit }, editBookmarkCategoryMutation] =
    useEditBookmarkCategoryMutation()

  // Sends mutation that adds a project to a category or edits the category of a bookmark
  const addOrEditBookmark = async () => {
    try {
      if (isBookmarked) {
        const res = await editBookmarkCategoryMutation({ projectID, newCategory })

        // If the mutation was successful, show success message
        if (res?.data?.editBookmarkCategory?.code === '204') {
          refetch()
        } else {
          // Otherwise, show error message
          throw new Error('Failed to bookmark project')
        }
      } else {
        const res = await addBookmarkMutation({ projectID, category: newCategory })

        // If the mutation was successful, show success message
        if (res?.data?.addBookmark?.code === '204') {
          refetch()
        } else {
          // Otherwise, show error message
          throw new Error('Failed to update category')
        }
      }
    } catch (e) {
      setError(true)
    }
  }

  // Sends mutation that deletes a bookmark
  const deleteBookmark = async () => {
    try {
      const res = await deleteBookmarkMutation({ projectID })

      // If the mutation was successful, show success message
      if (res?.data?.deleteBookmark?.code === '204') {
        refetch()
      } else {
        // Otherwise, show error message
        throw new Error('Failed to delete bookmark')
      }
    } catch (e) {
      setError(true)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    // Reset success and error states
    setError(false)

    // Add or save bookmark
    void addOrEditBookmark()
  }

  const handleDelete = () => {
    // Reset success and error states
    setError(false)

    // Delete bookmark
    void deleteBookmark()
  }

  return (
    <Transition appear show={open}>
      <Dialog as="div" open={open} onClose={toggleModal} className="fixed inset-0 z-30">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-950/25" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Dialog.Panel
              as="form"
              className="flex w-[350px] flex-col items-stretch gap-4 rounded-lg border border-gray-900/20 bg-gray-700 p-4 text-left shadow-lg shadow-gray-950/10"
              onSubmit={handleSubmit}
            >
              <Dialog.Title className="text-base font-semibold text-white">
                {isBookmarked ? 'Edit bookmark' : 'Add bookmark'}
              </Dialog.Title>

              <Input placeholder="Category" value={newCategory} onChange={handleChange} />

              {/* Error message */}
              {error && (
                <p className="text-sm text-red">Something went wrong. Please try again later.</p>
              )}

              <div
                className={`flex w-full items-center ${
                  isBookmarked ? 'justify-between' : 'justify-end'
                }`}
              >
                {/* Delete button */}
                {isBookmarked && (
                  <Button
                    variant="noBorderNoBG"
                    textColor="text-red"
                    text={fetchingDelete ? 'Deleting' : 'Delete'}
                    onClick={!fetchingDelete ? handleDelete : undefined}
                  />
                )}

                {/* Submit button */}
                <Button
                  text={fetchingAdd || fetchingEdit ? 'Loading...' : 'Save'}
                  variant="highlighted"
                  disabled={fetchingAdd || fetchingEdit}
                  type="submit"
                  textColor="text-white"
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BookmarkModal
