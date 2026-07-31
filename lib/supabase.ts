import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://afupcvnfjehkycheextp.supabase.co";

const supabaseKey = " sb_publishable_gfnqKpnqOvG8Z36k8G3Vhg_a8-101m-";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
