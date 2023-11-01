import LoginPage from '@/assets/docs/login-page.png'
import Heading from '@/components/domain/docs/Heading'
import Image from '@/components/domain/docs/Image'
import DocsPageWrapper from '@/components/domain/docs/PageWrapper'
import Paragraph from '@/components/domain/docs/Paragraph'

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
