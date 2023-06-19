export type RecommendationRowType = {
  Icon?: IconComponentType | null
  menuText: string
  pageRestriction: string | null
  isIdPrimary?: boolean | false
  subtitle?: string | null
  isProjectPrimary?: boolean | false
  commandInterfaceOptions: string
  shortcutKey: string | null
  needConfirmation?: boolean | false
}
