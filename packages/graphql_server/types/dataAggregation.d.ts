import { Database } from './supabase'

export type ProjectInsertion = Database['public']['Tables']['project']['Insert']
export type OrganizationInsertion = Database['public']['Tables']['organization']['Insert']
