import { TooltipProps } from 'recharts'
import formatNumber from '@/util/formatNumber'
import formatDate from '@/util/formatDate'

const CustomTooltip = ({ active, payload, label }: TooltipProps<string, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-[5px] border border-gray-800 bg-gray-900 p-2 text-xs text-white">
        <p>{formatDate(label as string)}</p>
        <p className="mt-2 font-bold">{formatNumber(parseFloat(payload[0].value as string))}</p>
      </div>
    )
  }

  return null
}

export default CustomTooltip
