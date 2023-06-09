import TruffleAiCommand from './CommandInterfaceOptions'

type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  isIdPrimary?: boolean | false
  enableDivider?: boolean | false
  subtitle?: string | null
  truffleAiCommand: TruffleAiCommand
}

export default RecommendationRowType
