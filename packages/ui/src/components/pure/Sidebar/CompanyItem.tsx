import { FaTwitter, FaGlobe } from 'react-icons/fa'
import Tooltip from '@/components/pure/Sidebar/TooltipItem'

type CompanyProps = {
  twitterLink?: string
  websiteLink?: string
}

const CompanyItem = ({ twitterLink, websiteLink }: CompanyProps) => (
  <div className='flex flex-col justify-between gap-4 py-2.5 text-gray-500'>
    {twitterLink && (
      <div>
        <a
          href={twitterLink}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-[5px]'
          data-tooltip-id={twitterLink}>
          <FaTwitter className='h-[14px] w-[14px]' />
          Twitter
        </a>
        <Tooltip id={twitterLink} />
      </div>
    )}

    {websiteLink && (
      <div>
        <a
          href={websiteLink}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-[5px]'
          data-tooltip-id={websiteLink}>
          <FaGlobe className='h-[14px] w-[14px]' />
          Website
        </a>
        <Tooltip id={websiteLink} />
      </div>
    )}
  </div>
)

export default CompanyItem
