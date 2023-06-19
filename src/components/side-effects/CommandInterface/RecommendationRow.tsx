type RecommendationRowCommandProps = {
  Icon?: IconComponentType | null
  shortcutKey: string | null
  menuText: string
  subtitle?: string | null
  isHighlighted: boolean
  isProjectItem: boolean
  handleClick: () => void
}

/**
 * Command interface row
 */
const RecommendationRow: React.FC<RecommendationRowCommandProps> = ({
  Icon,
  menuText,
  subtitle,
  isHighlighted,
  isProjectItem,
  shortcutKey,
  handleClick
}: RecommendationRowCommandProps) => (
  <div>
    {subtitle && <h4 className="mt-2 px-6 py-2 text-sm text-gray-500">{subtitle}</h4>}

    <button type="button" className="w-full" onClick={handleClick}>
      <div
        className={`mx-2 flex h-12 cursor-pointer items-center justify-between rounded-[5px] p-4 text-sm transition-all hover:bg-gray-800/50 ${
          isHighlighted ? 'bg-gray-800/50' : ''
        }`}
      >
        <div className="flex w-full items-center">
          {Icon && <Icon className="mr-4 w-[24px] text-gray-500" />}

          <span className="w-full text-left text-gray-200">{menuText}</span>

          <div className="flex justify-end">
            {!isProjectItem && shortcutKey && (
              <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-gray-500/20 text-10 leading-none text-white">
                {shortcutKey}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  </div>
)

RecommendationRow.defaultProps = {
  Icon: null,
  subtitle: null
}

export default RecommendationRow
