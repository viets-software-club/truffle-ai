import { create } from 'zustand'

interface SidebarSync {
  counter: number
  sync: () => void
}

const useBookmarksSync = create<SidebarSync>(set => ({
  counter: 0,
  sync: () => set(state => ({ counter: state.counter + 1 }))
}))

export default useBookmarksSync
