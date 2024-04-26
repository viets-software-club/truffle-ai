import { FaRegStar, FaStar } from 'react-icons/fa'

type PinProps = {
	isPinned: string | boolean
	pin: () => void
	unpin: () => void
}

const Pin = ({ isPinned = false, pin, unpin }: PinProps) => {
	const togglePinned = () => {
		if (isPinned) {
			unpin()
		} else {
			pin()
		}
	}

	return (
		<button
			type="button"
			className="ml-3 mt-1.5 h-full text-lg"
			onClick={(e) => {
				// Prevent the row click handler from being called
				e.preventDefault()
				e.stopPropagation()
				togglePinned()
			}}
		>
			{isPinned ? (
				<FaStar className="text-indigo-500" />
			) : (
				<FaRegStar className="text-white/20 hover:text-indigo-500/100" />
			)}
		</button>
	)
}

export default Pin
