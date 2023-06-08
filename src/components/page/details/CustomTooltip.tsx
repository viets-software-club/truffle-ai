import { TooltipProps } from 'recharts'
import formatNumber from '@/util/formatNumber'
import formatDate from '@/util/formatDate'

const CustomTooltip = ({ active, payload, label }: TooltipProps<string, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-gray-800 bg-gray-900 p-2 text-xs text-white">
        <p>{formatDate(label as string)}</p>
        {payload.map((item) => (
          <div key={item.name} className="flex flex-row justify-between">
            <p key={item.name} className="mt-2 text-gray-400">
              {item.name}
            </p>
            <p key={item.name} className="mt-2 font-bold">
              {formatNumber(parseFloat(item.value as string))}
            </p>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default CustomTooltip
