import { supabaseClient } from '$lib/supabase/index';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const response = await supabaseClient.auth.signOut();
	if (response?.error) {
		console.error(response.error);
	} else {
		redirect(307, '/signin');
	}
}
