import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  unstyled?: boolean
}

const Modal = ({ isOpen, onClose, children, unstyled }: ModalProps) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' onClose={onClose} className='fixed inset-0 z-30'>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-150'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <div className='fixed inset-0 bg-gray-950/25' />
      </Transition.Child>

      <div className='fixed inset-x-0 top-1/4 flex justify-center'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-150'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-150'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Dialog.Panel
            as='div'
            className={clsx(
              !unstyled &&
                'flex min-w-[400px] flex-col gap-4 rounded-lg border border-gray-900/20 bg-gray-700 p-6 text-left shadow-lg shadow-gray-950/10'
            )}>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)

export default Modal
