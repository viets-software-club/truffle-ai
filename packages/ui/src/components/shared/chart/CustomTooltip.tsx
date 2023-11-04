import { TooltipProps } from 'recharts'
import formatDate from '@/util/formatDate'
import formatNumber from '@/util/formatNumber'

// Custom tooltip for chart
const CustomTooltip = ({ active, payload, label }: TooltipProps<string, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded-md border border-white/5 bg-gray-900 p-2 text-xs text-white'>
        <p>{formatDate(label as string)}</p>
        {payload.map(item => (
          <div key={item.value} className='flex flex-row justify-between gap-2'>
            <p className='mt-2 text-white/50'>{item.name}</p>
            <p className='mt-2 font-bold'>{formatNumber(parseFloat(item.value as string))}</p>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default CustomTooltip
