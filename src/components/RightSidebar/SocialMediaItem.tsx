import { ComponentType } from 'react'

type SocialMediaProps = {
  Icon: ComponentType<{ className?: string }>
  text: string
  name: string
  value: string
  growth: string
  onClick: () => void
}
const SocialMediaItem = ({ Icon, text, name, value, growth, onClick }: SocialMediaProps) => (
  <div className="flex flex-col justify-between">
    <div className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-gray-850">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <button type="button" onClick={onClick}>
          <Icon className="h-[14px] w-[14px] text-gray-500" />
        </button>
        <span className="text-xs not-italic leading-3 text-gray-500">{name + text}</span>
        <span className="w-6 text-xs not-italic leading-3 text-gray-100">{value}</span>
        <span className="text-xs not-italic leading-3 text-gray-500">{growth}</span>
      </div>
    </div>
  </div>
)

export default SocialMediaItem
