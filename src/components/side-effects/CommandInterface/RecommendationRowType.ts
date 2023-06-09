import CommandInterfaceOptions from './CommandInterfaceOptions'

type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  isIdPrimary?: boolean | false
  enableDivider?: boolean | false
  subtitle?: string | null
  isProjectPrimary?: boolean | false
  commandInterfaceOptions: CommandInterfaceOptions
}

export default RecommendationRowType
