import Button from '@/components/pure/Button'
import Input from '@/components/shared/Input'
import { FC, FormEvent } from 'react'

type LoginFormProps = {
	error: boolean
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const LoginForm: FC<LoginFormProps> = ({ error, handleSubmit }) => (
	<form
		onSubmit={handleSubmit}
		noValidate
		className="flex w-full flex-col items-center justify-center gap-3"
	>
		<Input
			placeholder="Email"
			id="email"
			name="email"
			type="email"
			className="w-full max-w-full"
		/>
		<Input
			placeholder="Password"
			name="password"
			type="password"
			className="w-full max-w-full"
		/>
		{error && (
			<div className="mt-4 text-center text-sm text-red-400">
				Invalid email or password. Please note that only invited users or La
				Famiglia employees can sign in.
			</div>
		)}
		<Button
			variant={Button.Variant.Selected}
			type="submit"
			name="provider"
			value="email"
			className="mt-4 w-full justify-center"
		>
			Log in
		</Button>
	</form>
)

export default LoginForm
