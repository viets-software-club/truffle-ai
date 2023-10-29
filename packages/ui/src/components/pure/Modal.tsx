import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' onClose={onClose} className='fixed inset-0 z-30'>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-200'
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
          enter='ease-out duration-200'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Dialog.Panel
            as='div'
            className='flex min-w-[350px] flex-col gap-4 rounded-lg border border-gray-900/20 bg-gray-700 p-4 text-left shadow-lg shadow-gray-950/10'>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)

export default Modal
