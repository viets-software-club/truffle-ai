import { FaTwitter, FaGlobe } from 'react-icons/fa'
import Tooltip from '@/components/pure/Sidebar/Box/TooltipItem'

type CompanyProps = {
  twitterLink?: string
  websiteLink?: string
}

const CompanyItem = ({ twitterLink, websiteLink }: CompanyProps) => (
  <div className='flex flex-col justify-between'>
    <div className='px-7 py-2.5'>
      <div className='flex flex-col gap-4 text-gray-500'>
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
        {/* <span className="text-xs not-italic leading-3 text-gray-500">{name}</span>
        <span className="w-6 text-xs not-italic leading-3 text-gray-100">{value}</span> */}
      </div>
    </div>
  </div>
)

CompanyItem.defaultProps = {
  twitterLink: null,
  websiteLink: null
}

export default CompanyItem
