import { LinkIcon } from '@primer/octicons-react'
import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaTwitter } from 'react-icons/fa'

type FounderProps = {
  name: string
  mail?: string
  company: string
  twitter?: string
  github?: string
  website?: string
}

const emailTemplate = (email: string, founderName: string, companyName: string) => {
  const subject = `La Famiglia x ${companyName}`

  let body = localStorage.getItem('emailMessage') || ''
  body = body.replace('{founderName}', founderName)
  body = body.replace('{companyName}', companyName)

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const FounderItem = ({ name, mail, company, github, twitter, website }: FounderProps) => (
  <div className="flex flex-col justify-between">
    <div className="px-7 py-2.5 text-gray-500">
      <div className="inline-flex pb-2">
        <div className="flex flex-row items-center justify-center gap-[15px]">
          <span className="text-xs not-italic leading-3">{name}</span>
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
              <LinkIcon className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub className="h-[14px] w-[14px] text-gray-500" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)

FounderItem.defaultProps = {
  mail: null,
  // linkedin: null,
  twitter: null,
  github: null,
  website: null
}

export default FounderItem
