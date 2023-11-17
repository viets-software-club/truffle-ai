import { FaDiscord, FaLinkedin, FaQuestion, FaSlack, FaTwitter } from 'react-icons/fa'

type SocialMediaPlatform = 'discord' | 'twitter' | 'linkedin' | 'slack'

type SocialMediaItemProps = {
  icon: SocialMediaPlatform
  text: string
  name: string
  value: string
  growth: string
  onClick: () => void
}
const iconNameToIconComponentType = new Map<SocialMediaPlatform, IconComponentType>([
  ['discord', FaDiscord],
  ['twitter', FaTwitter],
  ['linkedin', FaLinkedin],
  ['slack', FaSlack]
])

const SocialMediaItem = ({ icon, text, name, value, growth, onClick }: SocialMediaItemProps) => {
  const Icon = iconNameToIconComponentType.get(icon) || FaQuestion

  return (
    <div className='flex flex-col justify-between'>
      <div className='inline-flex px-7 py-2.5'>
        <div className='flex flex-row items-center justify-center gap-[15px]'>
          <button type='button' onClick={onClick}>
            <Icon className='h-[14px] w-[14px] text-gray-500' />
          </button>

          <span className='text-xs not-italic leading-3 text-gray-500'>{name + text}</span>
          <span className='w-6 text-xs not-italic leading-3 text-gray-100'>{value}</span>
          <span className='text-xs not-italic leading-3 text-gray-500'>{growth}</span>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaItem
