import { AiFillMail } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import emailTemplate from './EmailTemplate'

type FounderProps = {
  name: string
  mail?: string
  linkedin?: string
  company: string
}

const FounderItem = ({ name, mail, linkedin, company }: FounderProps) => (
  <div className="flex flex-col justify-between">
    <div className="inline-flex px-7 py-2.5">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <span className="text-xs not-italic leading-3 text-gray-500">{name}</span>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="h-[14px] w-[14px] text-gray-500" />
          </a>
        )}
        {mail && (
          <a href={emailTemplate(mail, name, company)} target="_blank" rel="noreferrer">
            <AiFillMail className="h-[14px] w-[14px] text-gray-500" />
          </a>
        )}
      </div>
    </div>
  </div>
)

FounderItem.defaultProps = {
  mail: null,
  linkedin: null
}

export default FounderItem
