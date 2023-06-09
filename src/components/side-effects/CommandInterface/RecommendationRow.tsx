type RecommendationRowCommandType = {
  Icon?: IconComponentType | null
  menuText: string
  enableDivider?: boolean | false
  subtitle?: string | null
  rowClicked: () => void
}

const RecommendationRow: React.FC<RecommendationRowCommandType> = ({
  Icon,
  menuText,
  enableDivider,
  subtitle,
  rowClicked
}: RecommendationRowCommandType) => (
  <div className="cursor-pointer">
    {subtitle && <h4 className="mt-2 px-6 py-2 text-sm text-gray-500">{subtitle}</h4>}
    <button type="button" className="w-full" onClick={rowClicked}>
      <div className="flex cursor-pointer items-center justify-between p-4 py-2">
        <div className="flex items-center px-2 py-1">
          {Icon && <Icon className="mr-8 h-[14px] w-[14px] text-gray-500" />}
          <span className="text-gray-200">{menuText}</span>
        </div>
      </div>
      {enableDivider && <div className="h-0.5 bg-gray-600" />}
    </button>
  </div>
)

RecommendationRow.defaultProps = {
  Icon: null,
  enableDivider: false,
  subtitle: null
}

export default RecommendationRow
