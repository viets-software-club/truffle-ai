<script lang="ts">
	import Page from '$lib/components/pure/Page.svelte';
	import * as Form from '$lib/components/pure/ui/form';
	import { Input } from '$lib/components/pure/ui/input';
	import { z } from 'zod';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { supabaseClient } from '$lib/supabase/index';
	import { Separator } from '$lib/components/pure/ui/separator';
	import { Icon } from 'svelte-icons-pack';
	import { AiOutlineGoogle, AiOutlineLogin } from 'svelte-icons-pack/ai';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { redirect } from '@sveltejs/kit';
	import Button from '../pure/ui/button/button.svelte';
	import { IoLogInOutline } from 'svelte-icons-pack/io';
	import { BiLogInCircle } from 'svelte-icons-pack/bi';
	import * as AlertDialog from '$lib/components/pure/ui/alert-dialog';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	const formSchema = z.object({
		email: z.string().email().min(6).max(50),
		password: z.string().min(6).max(50)
	});

	const form = superForm(
		{ email: '', password: '' },
		{
			validators: zodClient(formSchema),

			async onSubmit({ formData, cancel }) {
				const email = formData.get('email') as string;
				const password = formData.get('password') as string;
				const { data, error } = await supabaseClient.auth.signInWithPassword({
					email,
					password
				});
				if (!error) {
					goto('/');
					// await goto(window.location.origin + '/', { replaceState: true, invalidateAll: true });
				} else {
					isLoginError = true;
				}
				cancel();
			}
		}
	);
	const redirectUrl = typeof window !== 'undefined' ? `${window.location.host}/` : '';
	let isLoginError = $state(false);
	const handleLoginErrorAlertClosed = () => {
		isLoginError = false;
	};
	const loginWithGoogle = async () => {
		const { error } = await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: redirectUrl
			}
		});
		if (error) {
			isLoginError = true;
		} else {
			redirect(302, '/');
		}
	};

	const { form: formData, enhance } = form;
	let isMounted = $state(false);

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<AlertDialog.Root bind:open={isLoginError}>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Sign In Failed</AlertDialog.Title>
				<AlertDialog.Description>
					There was an error when signing in. Please try again.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Action on:click={handleLoginErrorAlertClosed}>Ok</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
{/if}
<form use:enhance>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<!-- <Form.Label>Email</Form.Label> -->
			<Input {...attrs} bind:value={$formData.email} placeholder="E-Mail" />
		</Form.Control>
		<!-- <Form.Description>This is your public display name.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password" class="mt-3">
		<Form.Control let:attrs>
			<!-- <Form.Label>Password</Form.Label> -->
			<Input {...attrs} bind:value={$formData.password} placeholder="Password" type="password" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class=" px-6 mt-2"
		><Icon src={BiLogInCircle} className="mr-1.5 text-base" /> Sign In</Form.Button
	>
</form>
<div class="relative">
	<div class="absolute inset-0 flex items-center">
		<span class="w-full border-t" />
	</div>
	<div class="relative flex justify-center text-xs uppercase">
		<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
	</div>
</div>
<Button on:click={loginWithGoogle} class="font-medium"
	><Icon src={AiOutlineGoogle} className="mr-2 text-lg" /> Sign In with Google</Button
>
