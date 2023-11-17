import { FormEvent, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { useAddProjectByUrlMutation } from '@/graphql/generated/gql'
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
  const [category, setCategory] = useState<string>('')

  const [{ fetching }, addProjectByUrlMutation] = useAddProjectByUrlMutation()

  // Sends mutation that adds a project by its URL
  const addProject = async () => {
    try {
      const res = await addProjectByUrlMutation({ url: projectUrl, category })
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
    if (projectUrl.length === 0 || category.length === 0) return

    // Add project
    void addProject()
  }

  const toggleModal = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button onClick={toggleModal} variant='highlighted' className='text-white'>
        <AiOutlinePlus />
        Add Project
      </Button>

      <Modal isOpen={open} onClose={toggleModal}>
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

          <div className='flex w-full flex-col gap-1.5'>
            <p className='text-sm font-medium text-white/50'>Category</p>
            <Input
              placeholder='Artificial Intelligence'
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>

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
