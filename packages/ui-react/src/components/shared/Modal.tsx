import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	unstyled?: boolean
	className?: string
}

const Modal = ({
	isOpen,
	onClose,
	children,
	unstyled,
	className
}: ModalProps) => (
	<Transition appear show={isOpen} as={Fragment}>
		<Dialog
			as="div"
			onClose={onClose}
			className={twMerge('fixed inset-0 z-30', className)}
		>
			<Transition.Child
				as={Fragment}
				enter="ease-out duration-150"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="fixed inset-0 bg-gray-950/25" />
			</Transition.Child>

			<div className="fixed inset-x-0 top-1/4 flex justify-center">
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-150"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-150"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Dialog.Panel
						as="div"
						className={clsx(
							!unstyled &&
								'flex w-[400px] max-w-[94vw] flex-col gap-4 rounded-xl border border-white/5 bg-white/5 p-4 text-left shadow-sm shadow-white/5 backdrop-blur-xl md:p-6'
						)}
					>
						{children}
					</Dialog.Panel>
				</Transition.Child>
			</div>
		</Dialog>
	</Transition>
)

export default Modal
