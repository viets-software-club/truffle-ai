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
  <div className='grid gap-4 border-t border-white/5 px-4 py-6 lg:pl-7 lg:pr-3 xl:grid-cols-2'>
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
