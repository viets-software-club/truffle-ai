<script lang="ts">
	// import { PUBLIC_UI_HOSTNAME } from '$env/static/public';
	import { browser } from '$app/environment';

	import '../index.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase/index';
	import { goto } from '$app/navigation';
	import type { AuthSession } from '@supabase/supabase-js';
	import { Toaster } from 'svelte-sonner';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.remove('cosmos');
			document.documentElement.classList.add('dark');
		} else if (localStorage.theme === 'cosmos') {
			document.documentElement.classList.add('dark', 'cosmos');
		} else {
			document.documentElement.classList.remove('dark', 'cosmos');
		}
	}

	// let isAuthenticated = $state(false);
	// $effect(() => {
	// 	(async () => {
	// 		const { data, error } = await supabaseClient.auth.getSession();
	// 		if (
	// 			error ||
	// 			data?.session?.access_token?.length === 0 ||
	// 			!data?.session?.access_token?.length
	// 		) {
	// 			goto('/signin');
	// 		} else {
	// 			isAuthenticated = true;
	// 		}
	// 	})();
	// });

	let session: AuthSession | null = $state(null);

	$effect.pre(() => {
		supabaseClient.auth.onAuthStateChange((_event, _session) => {
			session = _session;
			if (!session) {
				goto('/signin');
			}
		});
	});
	// export let data;

	// let { supabase, session } = data;
	// $: ({ supabase, session } = data);

	// onMount(() => {
	// 	const { data } = supabase.auth.onAuthStateChange((event, _session) => {
	// 		if (_session?.expires_at !== session?.expires_at) {
	// 			invalidate('supabase:auth');
	// 		}
	// 	});

	// 	return () => data.subscription.unsubscribe();
	// });
	// if (!navigator?.serviceWorker?.controller && navigator?.serviceWorker?.register) {
	// 	navigator.serviceWorker.unregister('/sw.js').then(function (reg) {
	// 		console.log('Service worker has been registered for scope: ' + reg.scope);
	// 	});
	// }
</script>

<svelte:head>
	<!-- Open Graph -->
	<meta property="og:title" content="Truffle AI" />
	<meta property="og:description" content="Find early stage tech startups." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/icons/icon-512x512.png" />
	<!-- <meta property="og:url" content={PUBLIC_UI_HOSTNAME} /> -->

	<!-- Twitter -->
	<meta name="twitter:card" content="website" />
	<meta name="twitter:title" content="Truffle AI" />
	<meta name="twitter:description" content="Find early stage tech startups." />
	<meta name="twitter:site" content="@lafamigliaVC" />
	<meta name="twitter:creator" content="@vietdle" />
	<meta name="twitter:image" content="/icons/icon-192x192.png" />

	<!-- PWA -->
	<meta name="application-name" content="Truffle AI" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="Truffle AI" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="theme-color" content="#575BC7" />
</svelte:head>

<Toaster />
<slot />
