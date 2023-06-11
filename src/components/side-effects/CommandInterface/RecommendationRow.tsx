type RecommendationRowCommandType = {
  Icon?: IconComponentType | null
  menuText: string
  enableDivider?: boolean | false
  subtitle?: string | null
  isHighlighted: boolean
  isProjectItem: boolean
  rowClicked: () => void
}

const RecommendationRow: React.FC<RecommendationRowCommandType> = ({
  Icon,
  menuText,
  enableDivider,
  subtitle,
  isHighlighted,
  isProjectItem,
  rowClicked
}: RecommendationRowCommandType) => {
  const classNameForWrapper = `flex cursor-pointer items-center h-14 justify-between p-4 py-2 ${
    isHighlighted ? 'bg-gray-700' : ''
  }`
  return (
    <div className="cursor-pointer">
      {subtitle && <h4 className="mt-2 px-6 py-2 text-sm text-gray-500">{subtitle}</h4>}
      <button type="button" className="w-full" onClick={rowClicked}>
        <div className={classNameForWrapper}>
          <div className="flex w-full items-center px-2 py-1">
            {Icon && <Icon className="mr-8  w-[14px] text-gray-500" />}
            <span className="w-48 text-left text-gray-200">{menuText}</span>
            <span className="w-full text-right">
              {!isProjectItem && <>CMD/Ctrl & {menuText.charAt(0)}</>}
            </span>
          </div>
        </div>
        {enableDivider && <div className="h-0.5 bg-gray-600" />}
      </button>
    </div>
  )
}

RecommendationRow.defaultProps = {
  Icon: null,
  enableDivider: false,
  subtitle: null
}

export default RecommendationRow
