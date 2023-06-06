import CommandIntefaceDivider from '@/components/commandinterface/CommandInterfaceDivider'

export type CommandInterfaceRecommendationRowType = {
  Icon?: IconComponentType | null
  MenuText: string
  EnableDivider?: boolean | false
  Subtitle?: string | null
}

const CommandInterfaceRecommendationRow: React.FC<CommandInterfaceRecommendationRowType> = ({
  Icon,
  MenuText,
  EnableDivider,
  Subtitle
}: CommandInterfaceRecommendationRowType) => (
  <div className="cursor-pointer">
    {Subtitle && <h4 className="text-m mt-2 p-4 py-2 text-gray-500">{Subtitle}</h4>}
    <div className="flex cursor-pointer items-center justify-between p-4 py-2">
      <div className="flex items-center px-2 py-1">
        {Icon && <Icon className="mr-8 h-[14px] w-[14px]" />}
        <span className="text-m">{MenuText}</span>
      </div>
    </div>
    {EnableDivider && <CommandIntefaceDivider />}
  </div>
)
CommandInterfaceRecommendationRow.defaultProps = {
  Icon: null,
  EnableDivider: false,
  Subtitle: null
}
export default CommandInterfaceRecommendationRow
