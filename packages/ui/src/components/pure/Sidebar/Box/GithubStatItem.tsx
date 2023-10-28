import { ReactNode } from 'react'
import clsx from 'clsx'
import formatNumber from '@/util/formatNumber'
import Tooltip from './TooltipItem'

enum Color {
  DEFAULT = 'text-gray-300',
  GREEN = 'text-green-500',
  LIGHT_GREEN = 'text-green-300',
  RED = 'text-red-500',
  LIGHT_RED = 'text-red-300'
}

type GithubStatItemProps = {
  id?: string
  Icon?: IconComponentType
  IconMetric?: ReactNode
  value?: number
  growth?: string
  paddingOn?: boolean
  outerPaddingOn?: boolean
  greenValue?: number
  lightGreenValue?: number
  redValue?: number
  lightRedValue?: number
  largeGap?: boolean
  link?: string
}

const GithubStatItem = ({
  id,
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  outerPaddingOn,
  greenValue,
  lightGreenValue,
  redValue,
  lightRedValue,
  largeGap,
  link
}: GithubStatItemProps) => {
  let color = Color.DEFAULT
  if (greenValue && value && value >= greenValue) {
    color = Color.LIGHT_GREEN
  } else if (lightGreenValue && value && value >= lightGreenValue) {
    color = Color.GREEN
  } else if (redValue && value && value <= redValue) {
    color = Color.LIGHT_RED
  } else if (lightRedValue && value && value <= lightRedValue) {
    color = Color.RED
  }

  const gap = largeGap ? 'gap-[10px]' : 'gap-[5px]'

  return (
    <div className='flex flex-col justify-between'>
      <div className={clsx('inline-flex py-2.5', { 'px-7': outerPaddingOn })}>
        <div
          className={clsx('flex flex-row items-center justify-center text-xs', gap)}
          data-tooltip-id={id}>
          {Icon && <Icon className={clsx('h-[14px] w-[14px]', color)} />}
          {IconMetric}
          {value && (
            <span
              className={clsx('text-xs font-medium not-italic leading-3', color, {
                'w-6': paddingOn
              })}>
              {formatNumber(value)}
            </span>
          )}
          {link && (
            <a href={link} target='_blank' rel='noreferrer'>
              GitHub
            </a>
          )}
          {growth && <span className='text-xs not-italic leading-3 text-gray-500'>{growth}</span>}
          <Tooltip id={id} />
        </div>
      </div>
    </div>
  )
}

GithubStatItem.defaultProps = {
  id: undefined,
  Icon: undefined,
  value: undefined,
  IconMetric: undefined,
  growth: undefined,
  outerPaddingOn: true,
  paddingOn: true,
  greenValue: undefined,
  lightGreenValue: undefined,
  redValue: undefined,
  lightRedValue: undefined,
  largeGap: false,
  link: undefined
}

export default GithubStatItem
