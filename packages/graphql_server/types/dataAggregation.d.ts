import { Database } from './supabase'

export type ProjectInsertion = Database['public']['Tables']['project']['Insert']
export type OrganizationInsertion = Database['public']['Tables']['organization']['Insert']
export type PersonInsertion = Database['public']['Tables']['associated_person']['Insert']
export type ProjectUpdate = Database['public']['Tables']['project']['Update']
