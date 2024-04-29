import { createClient } from "@supabase/supabase-js";
const PUBLIC_GATEWAY_GRAPHQL_URL = "http://localhost:3001/graphql";
const PUBLIC_SUPABASE_URL = "https://cpapirdmtzjahhavfbab.supabase.co";
const PUBLIC_SUPABASE_GRAPHQL_URL = "https://cpapirdmtzjahhavfbab.supabase.co/graphql/v1";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwYXBpcmRtdHpqYWhoYXZmYmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1OTAyNDQsImV4cCI6MjAxNTE2NjI0NH0.SeuaYbWUX2cs5_txugVz2uVAygcWThNKbVfEkB0Jms4";
const PUBLIC_UI_HOSTNAME = "truffle.tools";
const supabaseClient = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);
export {
  PUBLIC_UI_HOSTNAME as P,
  PUBLIC_GATEWAY_GRAPHQL_URL as a,
  PUBLIC_SUPABASE_GRAPHQL_URL as b,
  PUBLIC_SUPABASE_ANON_KEY as c,
  supabaseClient as s
};
