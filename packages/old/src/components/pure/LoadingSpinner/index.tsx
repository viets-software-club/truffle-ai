import clsx from 'clsx'

type Props = {
	fullscreen?: boolean
	isVisible?: boolean
}

const LoadingSpinner = ({ fullscreen, isVisible }: Props) => (
	<div
		className={clsx(
			'flex items-center justify-center text-white/75',
			fullscreen ? 'h-screen' : 'py-12 lg:py-20'
		)}
	>
		{isVisible && (
			<div
				className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white/90 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
				role="status"
			/>
		)}
	</div>
)

export default LoadingSpinner
