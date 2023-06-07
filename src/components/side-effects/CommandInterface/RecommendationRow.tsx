export type RecommendationRowType = {
  Icon?: IconComponentType | null
  MenuText: string
  EnableDivider?: boolean | false
  Subtitle?: string | null
}

const RecommendationRow: React.FC<RecommendationRowType> = ({
  Icon,
  MenuText,
  EnableDivider,
  Subtitle
}: RecommendationRowType) => (
  <div className="cursor-pointer">
    {Subtitle && <h4 className="mt-2 px-6 py-2 text-sm text-gray-500">{Subtitle}</h4>}
    <div className="flex cursor-pointer items-center justify-between p-4 py-2">
      <div className="flex items-center px-2 py-1">
        {Icon && <Icon className="mr-8 h-[14px] w-[14px] text-gray-500" />}
        <span className="text-gray-200">{MenuText}</span>
      </div>
    </div>
    {EnableDivider && <div className="h-0.5 bg-gray-600" />}
  </div>
)
RecommendationRow.defaultProps = {
  Icon: null,
  EnableDivider: false,
  Subtitle: null
}
export default RecommendationRow
