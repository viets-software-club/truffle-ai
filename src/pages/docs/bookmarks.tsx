import Image from '@/components/page/docs/Image'
import Heading from '@/components/page/docs/Heading'
import Paragraph from '@/components/page/docs/Paragraph'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'

import AllBookmarks from '@/assets/AllBookmarks.png'

const BookmarksDocs = () => (
  <DocsPageWrapper>
    <Heading type="h1">All bookmarks</Heading>

    <Image src={AllBookmarks.src} alt="All bookmarks page" />

    <Paragraph>
      This page gives the user an overview of all projects which were bookmarked regardless of their
      category.
    </Paragraph>
  </DocsPageWrapper>
)

export default BookmarksDocs
