import clsx from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

enum Variant {
	Default = 0,
	Selected = 1,
	Unstyled = 2,
	Error = 3
}

type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant: Variant
}

const BASE_CLASSNAME =
	'flex min-h-[30px] items-center gap-1.5 rounded-md text-sm leading-none outline-none transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed'

const VARIANT_TO_CLASSNAMES = new Map<Variant, string>([
	[
		Variant.Default,
		'bg-white/[2%] border border-white/5 [&_svg]:text-white/50 hover:bg-white/[7%] hover:border-white/[7%] disabled:hover:bg-white/[2%] disabled:hover:border-white/[2%]'
	],
	[
		Variant.Selected,
		'border border-indigo-500 bg-indigo-500 hover:bg-opacity-90 text-white font-medium'
	],
	[
		Variant.Error,
		'border border-red-400 bg-red-400 text-white hover:bg-opacity-90'
	],
	[Variant.Unstyled, '']
])

const Button = (props: ButtonProps) => {
	const classNames = clsx(
		BASE_CLASSNAME,
		VARIANT_TO_CLASSNAMES.get(props.variant),
		props.className
	)
	return (
		<button {...props} className={classNames}>
			{props.children}
		</button>
	)
}

Button.Variant = Variant
export default Button
