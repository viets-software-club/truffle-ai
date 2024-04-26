import { useState } from 'react'
import Button from '@/components/pure/Button'
import sendToAffinity, { AffinityData } from '@/util/sendToAffinity'
import Banner from '../../shared/Banner'

const SendToAffinity = (data: AffinityData) => {
	const [showBanner, setShowBanner] = useState(false)
	const [status, setStatus] = useState<'success' | 'error'>()
	const [loading, setLoading] = useState(false)

	const handleClick = async () => {
		setLoading(true)
		const res = await sendToAffinity(data)
		setStatus(res)
		setLoading(false)
		setShowBanner(true)

		// Hide banner after 4 seconds
		setTimeout(() => setShowBanner(false), 4000)
	}

	const handleClickWrapper = () => {
		void handleClick()
	}

	return (
		<div className="flex flex-col items-start gap-[15px]">
			<Button onClick={handleClickWrapper}>
				{loading ? 'Loading...' : 'Send to Affinity'}
			</Button>

			<Banner
				show={showBanner}
				variant={status}
				message={
					status === 'success'
						? 'Data sent to Affinity'
						: "Couldn't send project to Affinity. Did you add your API token in settings?"
				}
			/>
		</div>
	)
}

export default SendToAffinity
