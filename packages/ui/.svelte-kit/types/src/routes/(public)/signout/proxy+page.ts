// @ts-nocheck
import { supabaseClient } from '$lib/supabase/index';
import { redirect } from '@sveltejs/kit';

/** */
export async function load() {
	const response = await supabaseClient.auth.signOut();
	if (response?.error) {
		console.error(response.error);
	} else {
		redirect(307, '/signin');
	}
}
