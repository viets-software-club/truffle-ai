import { FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useUser } from '@supabase/auth-helpers-react'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'
import { useAddProjectByUrlMutation, useFilteredBookmarksQuery } from '@/graphql/generated/gql'
import Modal from '../../shared/Modal'

const defaultSuccessMessage =
  'Project added successfully! Please give us a few minutes to fetch all the data.'
const defaultErrorMessage = 'Failed to add project. Please make sure to provide a valid GitHub URL.'

/**
 * Add project modal
 */
const AddProject = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [projectUrl, setProjectUrl] = useState<string>('')
  const [categories, setCategories] = useState<string[]>([])

  const user = useUser()

  const [{ data: bookmarks }] = useFilteredBookmarksQuery({
    variables: { userId: user?.id as string }
  })
  const [{ fetching }, addProjectByUrlMutation] = useAddProjectByUrlMutation()

  // Sends mutation that adds a project by its URL
  const addProject = async () => {
    try {
      const res = await addProjectByUrlMutation({ url: projectUrl, category: categories[0] })
      const responseCode = parseInt(res?.data?.addProjectByUrl?.code as string, 10)

      // If the mutation was successful, show success message
      if (responseCode >= 200 && responseCode < 300) {
        setSuccess(res?.data?.addProjectByUrl?.message || defaultSuccessMessage)
      } else {
        // Otherwise, show error message
        setError(res?.data?.addProjectByUrl?.message || defaultErrorMessage)
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
    setSuccess(null)

    // If the project URL or category is empty, don't submit
    if (projectUrl.length === 0 || categories.length === 0) return

    // Add project
    void addProject()
  }

  const toggleModal = () => {
    setOpen(!open)
  }

  // Get unique array of categories
  const existingCategories = bookmarks?.bookmarkCollection?.edges
    ?.map(({ node }) => node.category)
    .filter((value, index, array) => array.indexOf(value) === index)
    .filter(value => value !== undefined && value !== null) as string[]

  return (
    <div>
      <Button onClick={toggleModal} variant='highlighted'>
        <AiOutlinePlus />
        Add Project
      </Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <form className='flex flex-col items-stretch gap-4' onSubmit={handleSubmit}>
          <p className='text-lg font-semibold text-white'>Add Project</p>

          <div className='flex w-full flex-col gap-1.5'>
            <p className='text-sm font-medium text-white/50'>GitHub URL</p>
            <Input
              placeholder='https://github.com/facebook/react'
              value={projectUrl}
              onChange={e => setProjectUrl(e.target.value)}
            />
          </div>

          {existingCategories && (
            <div className='flex w-full flex-col gap-1.5'>
              <p className='text-sm font-medium text-white/50'>Category</p>
              <Select
                values={existingCategories}
                selected={categories}
                setSelected={setCategories}
                placeholder='Search or select categories'
              />
            </div>
          )}

          {/* Success message */}
          {success && <p className='text-sm text-green-500'>{success}</p>}

          {/* Error message */}
          {error && <p className='text-sm text-red-400'>{error}</p>}

          <div className='flex w-full justify-end'>
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
    </div>
  )
}

export default AddProject
