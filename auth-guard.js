import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  "https://uscjxqkphtajgarnpcjo.supabase.co",
  "DIN_ANON_KEY"
);

const {
  data: { user },
} = await supabase.auth.getUser();
