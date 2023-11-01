import { FaTwitter, FaHackerNews } from 'react-icons/fa'
import Card, { Tweet } from './Card'

type CommunitySentimentProps = {
  tweets?: Tweet[]
  hackernewsSentiment?: string
  hackernewsStories?: string[]
}

const CommunitySentiment = ({
  tweets,
  hackernewsSentiment,
  hackernewsStories
}: CommunitySentimentProps) => (
  <div className='grid grid-cols-2 gap-4 border-t border-gray-800 py-2 pl-7 pr-3'>
    <Card Icon={FaTwitter} name='Top Tweets' tweets={tweets} variant='twitter' />

    <Card
      Icon={FaHackerNews}
      name='Community Sentiment'
      hackernewsSentiment={hackernewsSentiment}
      links={hackernewsStories}
      variant='hackernews'
    />
  </div>
)

export default CommunitySentiment
