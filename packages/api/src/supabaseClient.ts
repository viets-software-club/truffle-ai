import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const supabaseClient = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false
    }
  }
)
export default supabaseClient
