import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Details from '@/components/domain/details'
import Page from '@/components/shared/Page'
import withAuth from '@/components/shared/hoc/withAuth'

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
