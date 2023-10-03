const formatNumber = (number: number) =>
  Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(number)

export default formatNumber
