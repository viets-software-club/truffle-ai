import AllBookmarks from '@/assets/docs/bookmarks-page.png'
import Heading from '@/components/domain/docs/Heading'
import Image from '@/components/domain/docs/Image'
import DocsPageWrapper from '@/components/domain/docs/PageWrapper'
import Paragraph from '@/components/domain/docs/Paragraph'

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
