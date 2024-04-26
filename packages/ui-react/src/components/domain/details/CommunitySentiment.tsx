import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Skeleton from '@/components/pure/LoadingBar'
import Card, { Tweet } from './Card'

type CommunitySentimentProps = {
	tweets?: Tweet[]
	hackernewsSentiment?: string
	hackernewsStories?: string[]
	loading?: boolean
}

const CommunitySentiment = ({
	tweets,
	hackernewsSentiment,
	hackernewsStories,
	loading
}: CommunitySentimentProps) => (
	<div className="grid gap-4 border-t border-white/5 px-4 py-6 lg:pl-7 lg:pr-3 xl:grid-cols-2">
		{loading ? (
			<>
				<Skeleton className="h-40" />
				<Skeleton className="h-40" />
			</>
		) : (
			<>
				<Card
					Icon={FaTwitter}
					name="Top Tweets"
					tweets={tweets}
					variant="twitter"
				/>
				<Card
					Icon={FaHackerNews}
					name="Community Sentiment"
					hackernewsSentiment={hackernewsSentiment}
					links={hackernewsStories}
					variant="hackernews"
				/>
			</>
		)}
	</div>
)

export default CommunitySentiment
