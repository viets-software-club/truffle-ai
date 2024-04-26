import { createClient } from "@supabase/supabase-js";
import { c as PUBLIC_SUPABASE_URL, b as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
const supabaseClient = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);
export {
  supabaseClient as s
};
