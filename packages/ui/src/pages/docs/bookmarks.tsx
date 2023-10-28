import AllBookmarks from '@/assets/AllBookmarks.png'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'
import Heading from '@/components/page/docs/Heading'
import Image from '@/components/page/docs/Image'
import Paragraph from '@/components/page/docs/Paragraph'

const BookmarksDocs = () => (
  <DocsPageWrapper>
    <Heading type='h1'>All bookmarks</Heading>

    {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
    {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
    <Image src={AllBookmarks.src} alt='All bookmarks page' />

    <Paragraph>
      This page gives the user an overview of all projects which were bookmarked regardless of their
      category.
    </Paragraph>
  </DocsPageWrapper>
)

export default BookmarksDocs
