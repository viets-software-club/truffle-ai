import { LinkIcon } from '@primer/octicons-react'
import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Tooltip from '@/components/pure/Sidebar/Box/TooltipItem'

type FounderProps = {
  name: string
  mail?: string
  projectName: string
  twitter?: string
  github?: string
  website?: string
}

const emailTemplate = (email: string, founderName: string, projectName: string) => {
  const subject = `La Famiglia x ${projectName}`

  let body = localStorage.getItem('emailMessage') || ''
  body = body.replace('{projectName}', projectName)
  body = body.replace('{founderName}', founderName)

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const FounderItem = ({ name, mail, projectName, github, twitter, website }: FounderProps) => (
  <div className="flex flex-col justify-between">
    <div className="px-7 py-2.5 text-gray-500">
      <div className="inline-flex pb-2">
        <div className="flex flex-row items-center justify-center gap-[15px]">
          <span className="text-xs not-italic leading-3">{name}</span>
          {mail && (
            <div>
              <a
                href={emailTemplate(mail, name, projectName)}
                target="_blank"
                rel="noreferrer"
                data-tooltip-id={mail}
              >
                <AiFillMail className="h-[14px] w-[14px] text-gray-500" />
              </a>
              <Tooltip id={mail} />
            </div>
          )}
          {twitter && (
            <div>
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noreferrer"
                data-tooltip-id={twitter}
              >
                <FaTwitter className="h-[14px] w-[14px] text-gray-500" />
              </a>
              <Tooltip id={twitter} />
            </div>
          )}
          {website && (
            <div>
              <a href={website} target="_blank" rel="noreferrer" data-tooltip-id={website}>
                <LinkIcon className="h-[14px] w-[14px] text-gray-500" />
              </a>
              <Tooltip id={website} />
            </div>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" data-tooltip-id={github}>
              <FaGithub className="h-[14px] w-[14px] text-gray-500" />
              <Tooltip id={github} />
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
