import clsx from 'clsx'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export const inputErrorClasses =
	'border border-red-400 ring-1 ring-red-400 focus:ring-1 focus:ring-red-400'

type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	size?: 'default' | 'large'
	error?: string
}

const Input = (props: InputProps) => {
	const { className, size, error } = props

	return (
		<>
			<input
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
				className={twMerge(
					clsx(
						'min-w-[250px] rounded-md border border-white/5 bg-white/5 text-white outline-none transition-all duration-75 placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500',
						error && inputErrorClasses,
						{
							'px-3 py-2.5 text-sm': size !== 'large',
							'p-3.5': size === 'large'
						},
						className
					)
				)}
			/>
			{error && <p className="text-sm text-red-400">{error}</p>}
		</>
	)
}

export default Input
