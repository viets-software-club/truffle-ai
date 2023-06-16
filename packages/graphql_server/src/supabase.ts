import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)
export default supabase
