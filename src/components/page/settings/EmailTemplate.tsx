import Button from '@/components/pure/Button'
import Textarea from '@/components/pure/Textarea'
import { useEffect, useState } from 'react'
import Banner from './Banner'

const initialTemplate = `Dear {founderName},

I hope you're well. I saw you're the mastermind behind {projectName}, and I had to reach out.

I'm a former ML researcher (in federated learning) + data scientist at Amazon turned VC at La Famiglia (early-stage investor of Deel, Personio, Applied Intuition, Groq, Abacus AI, Stripe, etc.).

{What you are building is compelling, especially after I played with Langchain + Pinecone + GPT3 API a few weeks ago.}

I would love to meet you and learn more about how we could work together. Is there a good time in the next few days?

Take care & all the best,
Viet

PS: if you have time, please check out my blog post on Building a Defensible ML company here: https://vietle.substack.com/p/defensible-machine-learning`

const UpdateEmailTemplate = () => {
  const [email, setEmail] = useState(localStorage.getItem('emailMessage') || initialTemplate)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    localStorage.setItem('emailMessage', email)
  }, [email])

  const showBannerFunc = () => {
    setShowBanner(true)
    setTimeout(() => {
      setShowBanner(false)
    }, 4000)
  }

  return (
    <>
      <p className="mb-6 text-14 font-normal text-gray-400">
        Here, you have the option to customize the email template that will be automatically sent to
        the founders of a project on its detail page.
        <br /> Use {'{founderName}'} and {'{projectName}'} as placeholders for the actual values.
      </p>
      <Textarea
        placeholder="Hi {founderName}, ..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="mt-5">
        <Button variant="highlighted" text="Update" onClick={showBannerFunc} />
        {showBanner && <Banner variant="success" message="Email updated" />}
      </div>
    </>
  )
}

export default UpdateEmailTemplate
