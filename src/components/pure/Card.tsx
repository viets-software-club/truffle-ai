import { IconType } from 'react-icons'
import { AiOutlineRetweet, AiOutlineMessage } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'
import { format } from 'date-fns'
import Button from './Button'

type Tweet = {
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
  communitySentiment?: string
  links?: string[]
}

const Card = ({ Icon, name, variant, tweets, communitySentiment, links }: CardProps) => {
  const color = variant === 'twitter' ? 'text-twitter' : 'text-hackernews'

  return (
    <div className="my-4 h-auto rounded-lg border border-gray-800">
      <div className="flex flex-row items-center p-4">
        <Icon className={`mr-2 h-6 w-6  ${color}`} />
        <h3 className="text-lg font-bold">{name}</h3>
      </div>

      {variant === 'twitter' && tweets && (
        <div className="max-h-[500px] overflow-auto">
          {tweets.map((tweet) => {
            const date = new Date(tweet.date)
            const formattedDate = format(date, 'MMM do, yyyy')

            return (
              <div key={tweet.id} className="mb-4 border-b border-gray-800 px-4 pb-4">
                <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      @{tweet.userName} {tweet.userVerified && '✔️'}
                    </p>
                    <p className="text-sm text-gray-500">{formattedDate}</p>
                  </div>
                  <p className="my-2 text-14 font-light text-gray-300">{tweet.text}</p>
                  <div className="flex items-center justify-start space-x-3">
                    <span className="flex items-center space-x-1 text-sm text-gray-500">
                      <AiOutlineRetweet size={16} />
                      <p>{tweet.retweetCount}</p>
                    </span>
                    <span className="flex items-center space-x-1 text-sm text-gray-500">
                      <AiOutlineMessage size={16} />
                      <p>{tweet.replies}</p>
                    </span>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      )}
      {variant === 'hackernews' && (
        <>
          <p className="border-b border-gray-800 px-4 pb-4 text-14 font-light text-gray-300">
            {communitySentiment}
          </p>

          <div className="flex flex-wrap gap-3 overflow-auto p-4">
            {links !== null &&
              links &&
              links.map((link, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <a key={`${link}-${index}`} href={link} target="_blank" rel="noreferrer">
                  <Button
                    Icon={FiArrowUpRight}
                    variant="normal"
                    onClick={() => ''}
                    text={`Source ${index}`}
                    order="ltr"
                  />
                </a>
              ))}
          </div>
        </>
      )}
    </div>
  )
}

Card.defaultProps = {
  tweets: [],
  communitySentiment: '',
  links: []
}

export default Card
