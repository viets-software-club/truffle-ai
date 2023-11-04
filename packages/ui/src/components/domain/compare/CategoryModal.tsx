import { ChangeEvent, FC, FormEvent, useState } from 'react'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Modal from '@/components/shared/Modal'
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
    <Modal isOpen={open} onClose={toggleModal}>
      <form className='flex flex-col items-stretch gap-4' onSubmit={handleSubmit}>
        <p className='text-base font-semibold text-white'>Rename category</p>

        <Input placeholder='Category' value={newCategory} onChange={handleChange} />

        {/* Error message */}
        {error && <p className='text-sm text-red-400'>{defaultErrorMessage}</p>}

        <div className='flex w-full items-center justify-end'>
          {/* Submit button */}
          <Button
            variant='highlighted'
            size='large'
            disabled={fetching}
            type='submit'
            className='text-white'>
            {fetching ? 'Loading...' : 'Save'}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CategoryModal
