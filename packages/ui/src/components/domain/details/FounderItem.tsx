import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { LinkIcon } from '@primer/octicons-react'

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
  <div className='flex flex-row items-center gap-[15px] py-2.5 text-white/50'>
    <span className='text-xs not-italic leading-3'>{name}</span>
    {mail && (
      <a
        href={emailTemplate(mail, name, projectName)}
        target='_blank'
        rel='noreferrer'
        data-tooltip-id='tooltip'
        data-tooltip-content={mail}>
        <AiFillMail className='h-[14px] w-[14px] text-white/50' />
      </a>
    )}
    {twitter && (
      <a
        href={`https://twitter.com/${twitter}`}
        target='_blank'
        rel='noreferrer'
        data-tooltip-id='tooltip'
        data-tooltip-content={twitter}>
        <FaTwitter className='h-[14px] w-[14px] text-white/50' />
      </a>
    )}
    {website && (
      <a
        href={website}
        target='_blank'
        rel='noreferrer'
        data-tooltip-id='tooltip'
        data-tooltip-content={website}>
        <LinkIcon className='h-[14px] w-[14px] text-white/50' />
      </a>
    )}
    {github && (
      <a
        href={github}
        target='_blank'
        rel='noreferrer'
        data-tooltip-id='tooltip'
        data-tooltip-content={github}>
        <FaGithub className='h-[14px] w-[14px] text-white/50' />
      </a>
    )}
  </div>
)

export default FounderItem
