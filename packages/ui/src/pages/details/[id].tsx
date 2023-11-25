import { useRouter } from 'next/router'
import Details from '@/components/domain/details'
import Page from '@/components/shared/Page'
import { NextPageWithLayout } from '../_app'

/**
 * Project detail page (displays GitHub data, top tweets, etc.)
 */
const DetailPage: NextPageWithLayout = () => {
  // Get project id from URL
  const {
    query: { id }
  } = useRouter()

  return <Details id={(typeof id === 'string' ? id : id?.join('')) || ''} />
}

DetailPage.getLayout = page => <Page>{page}</Page>

export default DetailPage
