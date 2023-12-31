import { FormEvent, useState } from 'react'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'
import { useAddProjectByUrlMutation } from '@/graphql/generated/gql'
import useAddProjectModalState from '@/hooks/useAddProjectModalState'
import useFetchBookmarks from '@/hooks/useFetchBookmarks'
import Modal from './Modal'

const defaultSuccessMessage =
  'Project added successfully! Please give us a few minutes to fetch all the data.'
const defaultErrorMessage = 'Failed to add project. Please make sure to provide a valid GitHub URL.'

const AddProject = () => {
  const { isOpen, setIsOpen } = useAddProjectModalState()
  const [success, setSuccess] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})
  const [projectUrl, setProjectUrl] = useState<string>('')
  const [categories, setCategories] = useState<string[]>([])

  const { categories: existingCategories } = useFetchBookmarks()
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
        const errorMessage = res?.data?.addProjectByUrl?.message
        if (errorMessage && errorMessage.toLowerCase().includes('url')) {
          setErrors({ url: errorMessage })
        } else {
          setErrors({ default: errorMessage || defaultErrorMessage })
        }
      }
    } catch (e) {
      setErrors({ default: defaultErrorMessage })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    // Reset success and error states
    setErrors({})
    setSuccess(null)

    const newErrors: { [key: string]: string } = {}

    // If the project URL or category is empty, don't submit
    if (projectUrl.length === 0) newErrors.url = 'Please provide a valid GitHub URL'
    if (categories.length === 0) newErrors.category = 'Please select a category'

    // If there are errors, set the error inputs and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Add project
    void addProject()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false)
        setProjectUrl('')
        setCategories([])
        setErrors({})
        setSuccess(null)
      }}>
      <form className='flex flex-col items-stretch gap-4' onSubmit={handleSubmit}>
        <p className='text-lg font-semibold text-white'>Add Project</p>

        <div className='flex w-full flex-col gap-1.5'>
          <p className='text-sm font-medium text-white/50'>GitHub URL</p>
          <Input
            placeholder='https://github.com/facebook/react'
            value={projectUrl}
            onChange={e => {
              setProjectUrl(e.target.value)
              setErrors({ ...errors, url: undefined })
            }}
            error={errors.url}
          />
        </div>

        {existingCategories && (
          <div className='flex w-full flex-col gap-1.5'>
            <p className='text-sm font-medium text-white/50'>Category</p>
            <Select
              values={existingCategories}
              selected={categories}
              setSelected={values => {
                setCategories(values)
                setErrors({ ...errors, category: undefined })
              }}
              placeholder='Search or select categories'
              error={errors.category}
            />
          </div>
        )}

        {/* Success message */}
        {success && <p className='text-sm text-green-500'>{success}</p>}

        {/* Error message */}
        {errors.default && <p className='text-sm text-red-400'>{errors.default}</p>}

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
  )
}

export default AddProject
