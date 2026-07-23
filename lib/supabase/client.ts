"use client";

import { createBrowserClient } from "@supabase/ssr";

import { getSupabaseEnvironment } from "./config";

/** Creates a Supabase client for Client Components and browser-side code. */
export function createClient() {
  const { url, publishableKey } = getSupabaseEnvironment();

  return createBrowserClient(url, publishableKey);
}
