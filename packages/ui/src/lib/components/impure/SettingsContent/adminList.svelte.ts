import { writable } from "svelte/store";

type Admins = {
	id: string;
	email: string;
	createdAt: string;
  }[] |  null;

export function createAdminList() {

	let data: Admins = $state(null);

	return {

		get data() { return data },
		set: (newData: Admins) => data = newData
   };
}


export const adminList = createAdminList();

export const adminStore = writable('');