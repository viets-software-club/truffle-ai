import { IconType } from 'react-icons'
import { AiOutlineRetweet, AiOutlineMessage } from 'react-icons/ai'
import clsx from 'clsx'
import { format } from 'date-fns'

export type Tweet = {
	userVerified: boolean
	userName: string
	tweetUrl: string
	date: string
	text: string
	retweetCount: number
	replies: number
	id: string
}

type CardProps = {
	Icon: IconType
	name: string
	variant: 'twitter' | 'hackernews'
	tweets?: Tweet[]
	hackernewsSentiment?: string
	links?: string[]
}

const twitterVariant = 'twitter'
const hackernewsVariant = 'hackernews'

const Card = ({
	Icon,
	name,
	variant,
	tweets,
	hackernewsSentiment,
	links
}: CardProps) => {
	const color = variant === 'twitter' ? 'text-twitter' : 'text-hackernews'

	return (
		<div className="h-auto rounded-lg border border-white/5">
			<div className="flex flex-row items-center p-4">
				<Icon className={clsx('mr-2 h-6 w-6', color)} />
				<h3 className="text-lg font-bold">{name}</h3>
			</div>

			{variant === twitterVariant && (
				<div className="max-h-[270px] overflow-auto scrollbar-hide">
					{tweets?.map((tweet) => (
						<div
							key={tweet.id}
							className="mb-4 border-b border-white/5 px-4 pb-4"
						>
							<a
								href={tweet.tweetUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="flex items-center justify-between">
									<p className="font-medium">
										@{tweet.userName} {tweet.userVerified && '✔️'}
									</p>
									<p className="text-sm text-white/50">
										{format(new Date(tweet.date), 'MMM do, yyyy')}
									</p>
								</div>

								<p className="my-2 text-sm font-light text-white/75">
									{tweet.text}
								</p>

								<div className="flex items-center justify-start space-x-3">
									<span className="flex items-center space-x-1 text-sm text-white/50">
										<AiOutlineRetweet size={16} />
										<p>{tweet.retweetCount}</p>
									</span>

									<span className="flex items-center space-x-1 text-sm text-white/50">
										<AiOutlineMessage size={16} />
										<p>{tweet.replies}</p>
									</span>
								</div>
							</a>
						</div>
					))}

					{!tweets?.length && (
						<div className="px-4 pb-4 text-sm font-light text-white/75">
							No tweets found for this project
						</div>
					)}
				</div>
			)}

			{variant === hackernewsVariant && (
				<div className="text-sm font-light text-white/75 ">
					<p className="px-4 pb-4">
						{hackernewsSentiment ||
							'No Hackernews posts found for this project'}
					</p>

					{hackernewsSentiment && (
						<div className="flex flex-wrap gap-1 overflow-auto border-t border-white/5 p-4 font-medium">
							Sources:{' '}
							{links
								?.filter(
									(value, index, array) => array.indexOf(value) === index
								)
								.map((link, index) => (
									<a key={link} href={link} target="_blank" rel="noreferrer">
										{index + 1}
									</a>
								))}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Card
