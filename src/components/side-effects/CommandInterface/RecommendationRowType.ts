type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  isIdPrimary?: boolean | false
  enableDivider?: boolean | false
  subtitle?: string | null
  isProjectPrimary?: boolean | false
  commandInterfaceOptions: string
  shortcutKey: string
  shortcutKeyIcon: IconComponentType | null
  needConfirmation?: boolean | false
}

export default RecommendationRowType
