import { useEffect, useState } from 'react'
import Button from '@/components/shared/Button'
import Textarea from '@/components/shared/Textarea'
import { initialTemplate } from '@/util/emailTemplate'
import Banner from '../../shared/Banner'

const EditEmailTemplate = () => {
  const [email, setEmail] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('emailMessage')) || initialTemplate
  )
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    localStorage.setItem('emailMessage', email)
  }, [email])

  const showBannerFunc = () => {
    setShowBanner(true)
    // Hide banner after 4 seconds
    setTimeout(() => setShowBanner(false), 4000)
  }

  return (
    <>
      <p className='mb-6 text-sm font-normal text-white/75'>
        Here, you have the option to customize the email template that will be automatically sent to
        the founders of a project on its detail page.
        <br /> Use {'{founderName}'} and {'{projectName}'} as placeholders for the actual values.
      </p>
      <Textarea
        placeholder='Hi {founderName}, ...'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <div className='mt-5'>
        <Button variant='highlighted' size='large' onClick={showBannerFunc}>
          Update
        </Button>
        <Banner show={!!showBanner} variant='success' message='Updated email template' />
      </div>
    </>
  )
}

export default EditEmailTemplate
