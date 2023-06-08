type RecommendationRowCommandType = {
  Icon?: IconComponentType | null
  MenuText: string
  EnableDivider?: boolean | false
  Subtitle?: string | null
  rowClicked: () => void
}

const RecommendationRow: React.FC<RecommendationRowCommandType> = ({
  Icon,
  MenuText,
  EnableDivider,
  Subtitle,
  rowClicked
}: RecommendationRowCommandType) => (
  <div className="cursor-pointer">
    {Subtitle && <h4 className="mt-2 px-6 py-2 text-sm text-gray-500">{Subtitle}</h4>}
    <button type="button" className="w-full" onClick={rowClicked}>
      <div className="flex cursor-pointer items-center justify-between p-4 py-2">
        <div className="flex items-center px-2 py-1">
          {Icon && <Icon className="mr-8 h-[14px] w-[14px] text-gray-500" />}
          <span className="text-gray-200">{MenuText}</span>
        </div>
      </div>
      {EnableDivider && <div className="h-0.5 bg-gray-600" />}
    </button>
  </div>
)

RecommendationRow.defaultProps = {
  Icon: null,
  EnableDivider: false,
  Subtitle: null
}

export default RecommendationRow
