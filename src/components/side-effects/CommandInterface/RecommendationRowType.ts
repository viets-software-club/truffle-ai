type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  isIdPrimary?: boolean | false
  enableDivider?: boolean | false
  subtitle?: string | null
  isProjectPrimary?: boolean | false
  commandInterfaceOptions: string
}

export default RecommendationRowType
