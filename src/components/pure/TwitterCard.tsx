import { format } from 'date-fns'
import { AiOutlineRetweet, AiOutlineMessage } from 'react-icons/ai'

type Tweet = {
  userVerified: boolean
  userName: string
  tweetUrl: string
  date: string
  text: string
  retweetCount: number
  replies: number
}

type TwitterCardProps = {
  Icon: IconComponentType
  name: string
  tweets: Tweet[]
}

const TwitterCard = ({ Icon, name, tweets }: TwitterCardProps) => (
  <div className="my-4 rounded-lg border border-gray-800">
    <div className="flex flex-row items-center px-4 pt-4">
      <Icon className="mr-2 h-6 w-6 text-indigo-500" />
      <h3 className="text-lg font-bold">{name}</h3>
    </div>

    {tweets.map((tweet) => {
      const date = new Date(tweet.date)
      const formattedDate = format(date, 'MMM do, yyyy')

      return (
        <div className="border-b border-gray-800 p-4">
          <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-between">
              <p className="font-bold">
                @{tweet.userName} {tweet.userVerified && '✔️'}
              </p>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
            <p className="my-2">{tweet.text}</p>
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
)

export default TwitterCard
