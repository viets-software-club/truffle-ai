import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa'

type FounderProps = {
  name: string
  mail?: string
  // linkedin?: string
  company: string
  twitter?: string
  github?: string
  website?: string
  repositoryCount?: number
}

const emailTemplate = (email: string, founderName: string, companyName: string) => {
  const subject = `La Famiglia x ${companyName}`
  const body = `Dear ${founderName},

I hope you're well. I saw you're the mastermind behind ${companyName}, and I had to reach out.

I'm a former ML researcher (in federated learning) + data scientist at Amazon turned VC at La Famiglia (early-stage investor of Deel, Personio, Applied Intuition, Groq, Abacus AI, Stripe, etc.).

{What you are building is compelling, especially after I played with Langchain + Pinecone + GPT3 API a few weeks ago.}

I would love to meet you and learn more about how we could work together. Is there a good time in the next few days?

Take care & all the best,
Viet

PS: if you have time, please check out my blog post on Building a Defensible ML company here: https://vietle.substack.com/p/defensible-machine-learning`

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const FounderItem = ({
  name,
  mail,
  company,
  github,
  repositoryCount,
  twitter,
  website
}: FounderProps) => (
  <div className="flex flex-col justify-between">
    <div className="px-7 py-2.5 text-gray-500">
      <div className="inline-flex pb-2">
        <div className="flex flex-row items-center justify-center gap-[15px]">
          <span className="text-xs not-italic leading-3">{name}</span>
          {/* {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )} */}
          {mail && (
            <a href={emailTemplate(mail, name, company)} target="_blank" rel="noreferrer">
              <AiFillMail className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )}
          {twitter && (
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
              <FaTwitter className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              <FaGlobe className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )}
        </div>
      </div>
      <div>
        {repositoryCount && (
          <span className="text-xs not-italic leading-3">Repository count: {repositoryCount}</span>
        )}
      </div>
    </div>
  </div>
)

FounderItem.defaultProps = {
  mail: null,
  // linkedin: null,
  twitter: null,
  github: null,
  website: null,
  repositoryCount: null
}

export default FounderItem
