import { FaTwitter, FaGlobe } from 'react-icons/fa'

type CompanyProps = {
  twitterLink?: string
  websiteLink?: string
}

const CompanyItem = ({ twitterLink, websiteLink }: CompanyProps) => (
  <div className="flex flex-col justify-between">
    <div className="px-7 py-2.5">
      <div className="flex flex-col gap-4 text-gray-500">
        {twitterLink && (
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[5px]"
          >
            <FaTwitter className="h-[14px] w-[14px]" />
            Twitter
          </a>
        )}
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[5px]"
          >
            <FaGlobe className="h-[14px] w-[14px]" />
            Website
          </a>
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
