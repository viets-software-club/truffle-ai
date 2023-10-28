import LoginPage from '@/assets/LoginPage.png'
import DocsPageWrapper from '@/components/page/docs/DocsPageWrapper'
import Heading from '@/components/page/docs/Heading'
import Image from '@/components/page/docs/Image'
import Paragraph from '@/components/page/docs/Paragraph'

const LoginDocs = () => (
  <DocsPageWrapper>
    <Heading type='h1'>Login page</Heading>

    <Paragraph>
      All our pages are protected, which means that if the user tries to access any page without
      being logged in, they will be prompted to log in by this screen:
    </Paragraph>

    {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
    {/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
    <Image src={LoginPage.src} alt='Login page' />

    <Paragraph>
      If the user enters wrong login credentials or tries to log in using an email or a Google
      account that has not been whitelisted, they will receive an error message.
    </Paragraph>
  </DocsPageWrapper>
)

export default LoginDocs
