import { useEffect, useState } from 'react'

const body = `Dear founderName,

I hope you're well. I saw you're the mastermind behind companyName, and I had to reach out.

I'm a former ML researcher (in federated learning) + data scientist at Amazon turned VC at La Famiglia (early-stage investor of Deel, Personio, Applied Intuition, Groq, Abacus AI, Stripe, etc.).

{What you are building is compelling, especially after I played with Langchain + Pinecone + GPT3 API a few weeks ago.}

I would love to meet you and learn more about how we could work together. Is there a good time in the next few days?

Take care & all the best,
Viet

PS: if you have time, please check out my blog post on Building a Defensible ML company here: https://vietle.substack.com/p/defensible-machine-learning`

const EmailTemplate = () => {
  const savedEmailMessage = localStorage.getItem('emailMessage') || body
  const [email, setEmail] = useState(savedEmailMessage)

  useEffect(() => {
    localStorage.setItem('emailMessage', email)
  }, [email])

  return (
    <>
      <p className="pb-2 text-14 font-normal text-gray-400">
        Make sure to include founderName and companyName
      </p>
      <textarea
        className="h-64 w-full rounded border border-gray-800 bg-gray-900 p-2 text-gray-300"
        placeholder={savedEmailMessage}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  )
}

export default EmailTemplate
