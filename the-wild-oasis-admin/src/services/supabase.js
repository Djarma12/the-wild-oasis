import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rrewxcmljiaqmvgrtvnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZXd4Y21samlhcW12Z3J0dm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMzU4NzMsImV4cCI6MjAwODkxMTg3M30.FDP68beAd6vYO4SZOciiXCSNVSyHyJ6EpjAz0HxB73A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
