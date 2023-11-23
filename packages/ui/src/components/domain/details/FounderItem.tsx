import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { LinkIcon } from '@primer/octicons-react'
import Tooltip from '@/components/shared/TooltipItem'

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
  <div className='flex flex-row items-center justify-center gap-[15px] py-2.5 text-white/50'>
    <span className='text-xs not-italic leading-3'>{name}</span>
    {mail && (
      <>
        <a
          href={emailTemplate(mail, name, projectName)}
          target='_blank'
          rel='noreferrer'
          data-tooltip-id={mail}>
          <AiFillMail className='h-[14px] w-[14px] text-white/50' />
        </a>
        <Tooltip id={mail} />
      </>
    )}
    {twitter && (
      <>
        <a
          href={`https://twitter.com/${twitter}`}
          target='_blank'
          rel='noreferrer'
          data-tooltip-id={twitter}>
          <FaTwitter className='h-[14px] w-[14px] text-white/50' />
        </a>
        <Tooltip id={twitter} />
      </>
    )}
    {website && (
      <>
        <a href={website} target='_blank' rel='noreferrer' data-tooltip-id={website}>
          <LinkIcon className='h-[14px] w-[14px] text-white/50' />
        </a>
        <Tooltip id={website} />
      </>
    )}
    {github && (
      <a href={github} target='_blank' rel='noreferrer' data-tooltip-id={github}>
        <FaGithub className='h-[14px] w-[14px] text-white/50' />
        <Tooltip id={github} />
      </a>
    )}
  </div>
)

export default FounderItem
