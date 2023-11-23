export type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  pageRestriction: string | null
  isIdPrimary?: boolean
  subtitle?: string | null
  isProjectPrimary?: boolean
  commandInterfaceOptions: string
  shortcutKey: string | null
  needConfirmation?: boolean
  hide?: boolean
}
