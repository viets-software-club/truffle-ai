<script lang="ts">
	import LoginForm from '$lib/components/impure/LoginForm.svelte';
	import LogoLight from '$lib/assets/images/logo-light.svg';
	import LogoDark from '$lib/assets/images/logo-dark.svg';
	import { supabaseClient } from '$lib/supabase/index';
	import { goto } from '$app/navigation';
	import type { AuthSession } from '@supabase/supabase-js';
	import LogoImg from '$lib/components/pure/LogoImg.svelte';
	import SignUpForm from '$lib/components/impure/SignUpForm.svelte';

	let hasLoadedSession = $state(false);
  
	$effect.pre(() => {
		supabaseClient.auth.getSession().then(({ data }) => {
			if (data.session) {
				goto('/');
			} else {
				hasLoadedSession = true;
			}
		});
	});
</script>

{#if hasLoadedSession}
	<div
		class="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
	>
		<!-- <Button
		href="/examples/authentication"
		variant="ghost"
		class="absolute right-4 top-4 md:right-8 md:top-8"
	>
		Login
	</Button> -->
		<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
			<div
				class="absolute inset-0 bg-cover"
				style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
			/>
			<!-- <div class="relative z-20 flex items-center text-lg font-medium flex-grow-0">
			<div class="flex items-center cursor-pointer align-middle">
        <div class="flex items-center">
          <img src={LogoLight} alt="Truffle AI" class="mr-2 h-6 w-6" loading="eager" />
        </div>
				
				<div
					>Truffle AI<br />
					<span class="block text-[0.5rem] leading-none pl-[0.05rem]">by La Famiglia VC</span>
				</div>
			</div>
		</div> -->
			<div class="relative z-20 flex items-center text-xl sm:text-lg font-medium flex-grow-0">
				<div class="flex items-center cursor-pointer align-middle">
					<!-- <LogoImg  alt="Truffle AI"
					class="mr-2 h-8 w-8 sm:h-6 sm:w-6"
					loading="eager"/> -->
					<img
						src={LogoLight}
						alt="Truffle AI"
						class="mr-2 h-8 w-8 sm:h-6 sm:w-6"
						loading="eager"
					/>
					<div class="leading-none">
						<span class="leading-none mb-[0.175rem] sm:mb-0 sm:leading-normal block"
							>Truffle AI</span
						>
						<span class="block text-[0.6rem] sm:text-[0.5rem] leading-none pl-[0.06rem]"
							>by La Famiglia VC</span
						>
					</div>
				</div>
			</div>

			<div class="relative z-20 mt-auto">
				<blockquote class="space-y-2">
					<p class="text-lg pr-10">
						&ldquo;The best analysis tool for professional venture capitalists seeking to aggregate
						data from GitHub.com and other associated relations for evaluating it in an automated
						fashion. Highly recommended!&rdquo;
					</p>
					<footer class="text-sm">Partner @ General Catalyst</footer>
				</blockquote>
			</div>
		</div>
		<div class="lg:p-8 h-full flex-col items-center justify-center flex">
			<div
				class="self-center grow mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
			>
				<div class="flex flex-col space-y-2 text-center">
					<div>
						<LogoImg alt="Truffle AI" class="inline h-6 w-6 mr-2"/>
						<!-- <img src={LogoDark} alt="Truffle AI" class="inline h-6 w-6 mr-2" /> -->
						<h1 class="text-2xl font-semibold tracking-tight inline align-middle">
							Welcome to Truffle
						</h1>
					</div>
					<p class="text-sm text-muted-foreground">Sign Up to explore investment opportunities</p>
				</div>
				<SignUpForm />
				<p class="px-8 text-center text-xs leading-relaxed text-muted-foreground">
					By signing up, you agree to our
					<a href="/terms-of-service" class="underline underline-offset-4 hover:text-primary">
						Terms of Service
					</a>
					and
					<a href="/privacy-policy" class="underline underline-offset-4 hover:text-primary">
						Privacy Policy
					</a>
				</p>
			</div>
			<div
				class="flex pb-4 lg:pb-0 sm:px-4 text-xs sm:text-sm w-full justify-between sm:justify-normal sm:text-gray-800"
			>
				<a
					href="/terms-of-service"
					class="sm:mr-6 p-1 sm:p-0 hover:text-primary text-muted-foreground">Terms of Service</a
				>
				<a
					href="/privacy-policy"
					class="sm:mr-6 p-1 sm:p-0 hover:text-primary text-muted-foreground">Privacy Policy</a
				>
				<a href="/legal-notice" class="p-1 sm:p-0 hover:text-primary text-muted-foreground"
					>Legal Notice</a
				>
			</div>
		</div>
	</div>
{/if}
