import { FaGlobe, FaTwitter } from 'react-icons/fa'

type CompanyProps = {
	twitterLink?: string
	websiteLink?: string
}

const CompanyItem = ({ twitterLink, websiteLink }: CompanyProps) => (
	<div className="flex flex-col justify-between gap-4 py-2.5 text-white/50">
		{twitterLink && (
			<div>
				<a
					href={twitterLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-[5px]"
					data-tooltip-id="tooltip"
					data-tooltip-content={twitterLink}
				>
					<FaTwitter className="h-[14px] w-[14px]" />
					Twitter
				</a>
			</div>
		)}

		{websiteLink && (
			<div>
				<a
					href={websiteLink}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-[5px]"
					data-tooltip-id="tooltip"
					data-tooltip-content={websiteLink}
				>
					<FaGlobe className="h-[14px] w-[14px]" />
					Website
				</a>
			</div>
		)}
	</div>
)

export default CompanyItem
