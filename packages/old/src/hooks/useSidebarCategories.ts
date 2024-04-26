import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SidebarCategories {
	categoriesLength: number
	setCategoriesLength: (categoriesLength: number) => void
}

const useSidebarCategories = create<SidebarCategories>()(
	persist(
		(set) => ({
			categoriesLength: 1,
			setCategoriesLength: (categoriesLength: number) =>
				set({ categoriesLength })
		}),
		{
			storage: createJSONStorage(() => localStorage),
			name: 'SidebarCategories'
		}
	)
)

export default useSidebarCategories
