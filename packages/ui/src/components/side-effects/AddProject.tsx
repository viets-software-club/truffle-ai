import { FormEvent, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '@/components/pure/Button'
import Input from '@/components/pure/Input'
import { useAddProjectByUrlMutation } from '@/graphql/generated/gql'

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
      <Button
        onClick={toggleModal}
        variant="highlighted"
        text="Add Project"
        Icon={AiOutlinePlus}
        textColor="text-white"
        iconColor="text-white"
        order="ltr"
      />

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
                  Add Project
                </Dialog.Title>

                <div className="flex w-full flex-col gap-1.5">
                  <p className="text-sm font-medium text-gray-500">GitHub URL</p>
                  <Input
                    placeholder="https://github.com/facebook/react"
                    value={projectUrl}
                    onChange={(e) => setProjectUrl(e.target.value)}
                  />
                </div>

                <div className="flex w-full flex-col gap-1.5">
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <Input
                    placeholder="Artificial Intelligence"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                {/* Success message */}
                {success && <p className="text-sm text-green-500">{success}</p>}

                {/* Error message */}
                {error && <p className="text-sm text-red-500">{error}</p>}

                <div className="flex w-full justify-end">
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
    </div>
  )
}

export default AddProject
