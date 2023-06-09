import CommandInterfaceOptions from './CommandInterfaceOptions'

type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  isIdPrimary?: boolean | false
  enableDivider?: boolean | false
  subtitle?: string | null
  commandInterfaceOptions: CommandInterfaceOptions
}

export default RecommendationRowType
