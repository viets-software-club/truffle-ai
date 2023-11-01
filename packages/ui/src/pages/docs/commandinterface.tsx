import CommandInterface from '@/assets/docs/command-interface.png'
import Heading from '@/components/domain/docs/Heading'
import Image from '@/components/domain/docs/Image'
import DocsPageWrapper from '@/components/domain/docs/PageWrapper'
import Paragraph from '@/components/domain/docs/Paragraph'

const CIDocs = () => (
  <DocsPageWrapper>
    <Heading type='h1'>Command interface</Heading>

    <Paragraph>
      Using Cmd/Ctrl + K, the user can open up a command interface which allows quicker navigation
      between pages and fast execution of certain actions like sending an email without ever leaving
      the keyboard. Some items have shortcut keys displayed on the right which makes navigation
      between key pages even faster.
    </Paragraph>

    {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
    {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
    <Image src={CommandInterface.src} alt='Command Interface' />

    <Paragraph>
      For actions or navigation items that require additional input or confirmation, such as sending
      an email, the project details page or logging out, a second step is shown before carrying out
      the action.
    </Paragraph>
  </DocsPageWrapper>
)

export default CIDocs
