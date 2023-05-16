import { FaDiscord, FaTwitter, FaLinkedin, FaSlack } from 'react-icons/fa'

import SocialMediaItem from './SocialMediaItem'

type SocialMediaData = {
  name: string
  text: string
  value: string
  growth: string
  url: string
}

type SocialMediaContainerProps = {
  socialMediaData: SocialMediaData[]
}

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'discord':
      return FaDiscord
    case 'twitter':
      return FaTwitter
    case 'linkedin':
      return FaLinkedin
    case 'slack':
      return FaSlack
    default:
      return FaDiscord
  }
}

const SocialMediaContainer = ({ socialMediaData }: SocialMediaContainerProps) => {
  const handleClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="border-y border-solid border-gray-800 py-2.5 text-14 font-normal leading-4">
      <h1 className="px-7 py-2.5 text-12 uppercase text-gray-300">Social Media</h1>
      {socialMediaData.map((data) => {
        const Icon = getIcon(data.name)
        return (
          <SocialMediaItem
            key={data.name}
            Icon={Icon}
            name={data.name}
            text={data.text}
            value={data.value}
            growth={data.growth}
            onClick={() => handleClick(data.url)}
          />
        )
      })}
    </div>
  )
}

export default SocialMediaContainer
