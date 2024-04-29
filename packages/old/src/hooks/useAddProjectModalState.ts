import { create } from 'zustand'

interface AddProjectModalState {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const useAddProjectModalState = create<AddProjectModalState>((set) => ({
	isOpen: false,
	setIsOpen: (isOpen) => set({ isOpen })
}))

export default useAddProjectModalState
