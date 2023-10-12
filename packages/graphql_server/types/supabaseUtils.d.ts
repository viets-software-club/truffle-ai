import { Database } from './supabase'

export type ProjectInsertion = Database['public']['Tables']['project']['Insert']
export type ProjectUpdate = Database['public']['Tables']['project']['Update']

export type OrganizationInsertion = Database['public']['Tables']['organization']['Insert']
export type OrganizationUpdate = Database['public']['Tables']['organization']['Update']

export type PersonInsertion = Database['public']['Tables']['associated_person']['Insert']

export type FoundedByInsertion = Database['public']['Tables']['founded_by']['Insert']

// has to be named ProjectInfo because otherwise there could be name conflict with supabaseType
export type ProjectInfo = {
  name: string
  owner: string
}
