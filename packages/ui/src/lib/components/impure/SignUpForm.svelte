<script lang="ts">
import { goto } from "$app/navigation";
import Page from "$lib/components/pure/Page.svelte";
import * as AlertDialog from "$lib/components/pure/ui/alert-dialog";
import * as Form from "$lib/components/pure/ui/form";
import { Input } from "$lib/components/pure/ui/input";
import { Separator } from "$lib/components/pure/ui/separator";
import { supabaseClient } from "$lib/supabase/index";
import { redirect } from "@sveltejs/kit";
import { onMount } from "svelte";
import { Icon } from "svelte-icons-pack";
import { AiOutlineGoogle, AiOutlineLogin } from "svelte-icons-pack/ai";
import { BiLogInCircle } from "svelte-icons-pack/bi";
import { IoLogInOutline } from "svelte-icons-pack/io";
import {
	type Infer,
	type SuperValidated,
	superForm,
} from "sveltekit-superforms";
import { zodClient } from "sveltekit-superforms/adapters";
import { z } from "zod";
import Button from "../pure/ui/button/button.svelte";
const formSchema = z.object({
	email: z.string().email().min(6).max(50),
	password: z.string().min(6).max(50),
});

const form = superForm(
	{ email: "", password: "" },
	{
		validators: zodClient(formSchema),

		async onSubmit({ formData, cancel }) {
			const email = formData.get("email") as string;
			const password = formData.get("password") as string;
			const { data, error } = await supabaseClient.auth.signUp({
				email,
				password,
			});
			if (!error) {
				goto("/");
				// await goto(window.location.origin + '/', { replaceState: true, invalidateAll: true });
			} else {
				isLoginError = true;
			}
			cancel();
		},
	},
);
const redirectUrl =
	typeof window !== "undefined" ? `${window.location.host}/` : "";
let isLoginError = $state(false);
const handleLoginErrorAlertClosed = () => {
	isLoginError = false;
};
const loginWithGoogle = async () => {
	const { error } = await supabaseClient.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: redirectUrl,
		},
	});
	if (error) {
		isLoginError = true;
	} else {
		redirect(302, "/");
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
				<AlertDialog.Title>Sign Up Failed</AlertDialog.Title>
				<AlertDialog.Description>
					There was an error when signing up. Make sure that you are approved by an admin and try again. Please check if you have already signed up before.
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
	
		<Form.Button class="px-6 mt-2 w-full" size="full"
		><Icon src={BiLogInCircle} className="mr-1.5 text-base" /> Sign Up</Form.Button
	>

	
</form>
<div class="relative">
	<div class="absolute inset-0 flex items-center">
		<span class="w-full border-t"></span>
	</div>
	<div class="relative flex justify-center text-xs uppercase">
		<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
	</div>
</div>
<Button on:click={loginWithGoogle} class="font-medium"
	><Icon src={AiOutlineGoogle} className="mr-2 text-lg" /> Sign In with Google</Button
>
