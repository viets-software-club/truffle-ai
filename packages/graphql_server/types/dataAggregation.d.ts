import { Database } from './supabase'

export type ProjectInsertion = Database['public']['Tables']['project']['Insert']
export type OrganizationInsertion = Database['public']['Tables']['organization']['Insert']
export type UserInsertion = Database['public']['Tables']['user']['Insert']
export type UserUpdate = Database.public.Tables.user.Update
export type ProjectUpdate = Database['public']['Tables']['project']['Update']
