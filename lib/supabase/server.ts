import { createClient as createSupabaseClient } from "@supabase/supabase-js";

import { getSupabaseEnvironment, getSupabaseServiceRoleKey } from "./config";

/**
 * Creates a server-only client for trusted write operations. Never import this
 * module from Client Components or expose its service-role key to the browser.
 */
export function createClient() {
  const { url } = getSupabaseEnvironment();
  const serviceRoleKey = getSupabaseServiceRoleKey();

  return createSupabaseClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
