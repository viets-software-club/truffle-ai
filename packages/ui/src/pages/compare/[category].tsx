import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Page from '@/components/side-effects/Page'
import Compare from '@/components/side-effects/Compare'
import withAuth from '@/components/side-effects/withAuth'

/**
 * Compare projects page
 */
const ComparePage: NextPage = () => {
  // Get project id from URL
  const {
    query: { category }
  } = useRouter()

  return (
    <Page>
      <Compare category={(typeof category === 'string' ? category : category?.join('')) || ''} />
    </Page>
  )
}

export default withAuth(ComparePage)
