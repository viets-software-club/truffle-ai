import { PropsWithChildren } from 'react'

const Placeholder: React.FC<PropsWithChildren> = ({ ...props }) => (
	<div
		className="flex h-16 items-center justify-center whitespace-pre-wrap text-sm text-white/50"
		// eslint-disable-next-line react/jsx-props-no-spreading
		{...props}
	/>
)

export default Placeholder
