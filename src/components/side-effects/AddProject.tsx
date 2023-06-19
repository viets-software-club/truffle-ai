import { ChangeEvent, FormEvent, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '@/components/pure/Button'
import Input from '@/components/pure/Input'
import { useAddProjectByUrlMutation } from '@/graphql/generated/gql'

/**
 * Add project modal
 */
const AddProject = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [projectUrl, setProjectUrl] = useState<string>('')

  const [{ data, fetching }, addProjectByUrlMutation] = useAddProjectByUrlMutation()

  // Sends mutation that adds a project by its URL
  const addProject = async () => {
    try {
      await addProjectByUrlMutation({ url: projectUrl })

      // If the mutation was successful, show success message
      if (data?.addProjectByUrl) {
        setSuccess(true)
      } else {
        // Otherwise, show error message
        throw new Error('Failed to add project')
      }
    } catch (e) {
      setError(true)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectUrl(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    // Prevent default form submission
    e.preventDefault()

    // Reset success and error states
    setError(false)
    setSuccess(false)

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
        <Dialog as="div" open={open} onClose={toggleModal} className="fixed right-9 top-14">
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

          <Transition.Child
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
                Add project
              </Dialog.Title>

              <Input placeholder="vercel/next.js" value={projectUrl} onChange={handleChange} />

              {success && (
                <p className="text-sm text-green">
                  Project added successfully! Please give us a few minutes to fetch all the data.
                </p>
              )}

              {error && (
                <p className="text-sm text-red">
                  Failed to add project. Please check the URL and try again.
                </p>
              )}

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
        </Dialog>
      </Transition>
    </div>
  )
}

export default AddProject
