import { ChartOptions } from 'chart.js'
import formatDate from '@/util/formatDate'
import formatNumber from '@/util/formatNumber'

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 1,
      hitRadius: 10,
      hoverRadius: 6
    },
    line: {
      tension: 0.2,
      borderCapStyle: 'round',
      fill: true
    }
  },
  scales: {
    x: {
      type: 'time',
      grid: {
        color: '#ffffff08'
      },
      border: {
        display: false
      },
      ticks: {
        font: {
          size: 12
        },
        color: '#ffffff50',
        padding: 12,
        autoSkipPadding: 80,
        maxRotation: 0
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        color: '#ffffff50'
      },
      border: {
        display: false
      },
      ticks: {
        font: {
          size: 12
        },
        callback: value => formatNumber(parseFloat(value as string))
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        boxHeight: 10,
        boxWidth: 10,
        padding: 12
      }
    },
    tooltip: {
      intersect: false,
      backgroundColor: '#111',
      borderWidth: 1,
      cornerRadius: 7,
      borderColor: '#ffffff10',
      padding: 12,
      titleColor: '#ffffff80',
      titleFont: {
        weight: 'normal'
      },
      bodyFont: {
        size: 14
      },
      caretSize: 0,
      boxHeight: 10,
      boxWidth: 10,
      boxPadding: 4,
      usePointStyle: true,
      callbacks: {
        title: context => formatDate(context[0].label),
        label: context => `${context.dataset.label}: ${formatNumber(context.parsed.y)}`
      }
    }
  }
}

export default chartOptions
