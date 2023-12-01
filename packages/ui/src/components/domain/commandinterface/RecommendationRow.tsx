import clsx from 'clsx'

export type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  pageRestriction: string | null
  isIdPrimary?: boolean
  subtitle?: string | null
  isProjectPrimary?: boolean
  commandInterfaceOptions: string
  shortcutKey: string | null
  needConfirmation?: boolean
  hide?: boolean
}

type RecommendationRowProps = {
  Icon?: IconComponentType | null
  shortcutKey: string | null
  menuText: string
  subtitle?: string | null
  isHighlighted: boolean
  isNextItem: boolean
  isPrevItem: boolean
  isProjectItem: boolean
  handleClick: () => void
}

/**
 * Command interface row
 */
const RecommendationRow = ({
  Icon,
  menuText,
  subtitle,
  isHighlighted,
  isProjectItem,
  shortcutKey,
  isNextItem,
  isPrevItem,
  handleClick
}: RecommendationRowProps) => (
  <div id={`${isNextItem ? 'active' : ''} ${isPrevItem ? 'prevActive' : ''}`}>
    {subtitle && <h4 className='mt-2 px-6 py-2 text-sm text-white/50'>{subtitle}</h4>}

    <button type='button' className='w-full' onClick={handleClick}>
      <div
        className={clsx(
          'mx-2 flex h-12 cursor-pointer items-center justify-between rounded-md p-4 text-sm transition-all hover:bg-white/10',
          {
            'bg-white/10': isHighlighted
          }
        )}>
        <div className='flex w-full items-center'>
          {Icon && <Icon className='mr-4 w-[24px] text-white/50' />}

          <span className='w-full text-left text-white/90'>{menuText}</span>

          <div className='flex justify-end'>
            {!isProjectItem && shortcutKey && (
              <span className='flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xxs leading-none text-white'>
                {shortcutKey}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  </div>
)

export default RecommendationRow
