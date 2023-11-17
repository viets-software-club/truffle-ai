import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Details from '@/components/side-effects/Details'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'

/**
 * Project detail page (displays GitHub data, top tweets, etc.)
 */
const DetailPage: NextPage = () => {
  // Get project id from URL
  const {
    query: { id }
  } = useRouter()

  return (
    <Page>
      <Details id={(typeof id === 'string' ? id : id?.join('')) || ''} />
    </Page>
  )
}

export default withAuth(DetailPage)
