import { writable } from 'svelte/store';

// This store will hold the updated data
export const updateSidebar = writable<any>(undefined);
