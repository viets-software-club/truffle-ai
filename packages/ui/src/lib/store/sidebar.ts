import { writable } from "svelte/store";

// This store will hold the updated data
export const updateSidebar = writable<any>(undefined);

// export const createSidebarState = () => {
//     let isOpen = $state(false);
//     return {
//         get isOpen() { return isOpen },
// 		toggle: () => isOpen = !isOpen,
//     }
// }

export const updateMobileSidebarOpenState = writable<boolean>(false);
