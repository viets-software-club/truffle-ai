import { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import Button from '@/components/pure/Button'
import Input from '@/components/pure/Input'
import { useRenameBookmarkCategoryMutation } from '@/graphql/generated/gql'

const defaultErrorMessage = 'Something went wrong. Please try again later.'

type CategoryModalProps = {
  open: boolean
  category: string
  toggleModal: () => void
  redirect: (newCategory: string) => void
}

const CategoryModal: FC<CategoryModalProps> = ({ open, toggleModal, category, redirect }) => {
  const [newCategory, setNewCategory] = useState<string>(category)
  const [error, setError] = useState<string | null>(null)

  const [{ fetching }, renameBookmarkCategoryMutation] = useRenameBookmarkCategoryMutation()

  // Sends mutation that renames the bookmark category
  const renameBookmarkCategory = async () => {
    try {
      const res = await renameBookmarkCategoryMutation({ oldCategory: category, newCategory })
      const responseCode = parseInt(res?.data?.renameBookmarkCategory?.code as string, 10)

      // If the mutation was successful, show success message
      if (responseCode >= 200 && responseCode < 300) {
        redirect(newCategory)
      } else {
        // Otherwise, show error message
        setError(res?.data?.renameBookmarkCategory?.message || defaultErrorMessage)
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

    // Don't do anything if the category is the same or empty
    if (newCategory === category || newCategory.length === 0) return

    // Add or save bookmark
    void renameBookmarkCategory()
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
                Rename category
              </Dialog.Title>

              <Input placeholder="Category" value={newCategory} onChange={handleChange} />

              {/* Error message */}
              {error && <p className="text-sm text-red-500">{defaultErrorMessage}</p>}

              <div className="flex w-full items-center justify-end">
                {/* Submit button */}
                <Button
                  text={fetching ? 'Loading...' : 'Save'}
                  variant="highlighted"
                  disabled={fetching}
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

export default CategoryModal
