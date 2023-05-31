import { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black opacity-10"
        onClick={onClose}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClose()
          }
        }}
        tabIndex={0}
        role="button"
      />

      {/* Modal */}
      <div className="z-50 m-0">
        <div className="absolute bg-gray-850">{children}</div>
      </div>
    </>
  )
}

export default Modal
