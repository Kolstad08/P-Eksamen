import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  "https://uscjxqkphtajgarnpcjo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzY2p4cWtwaHRhamdhcm5wY2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNjc1MDUsImV4cCI6MjA4Mzk0MzUwNX0.zu9dUgkwmz3txSysNkviCPh6z5GR_Yo13qhW01GB2aM"
);

const { data, error } = await supabase.auth.getSession();

if (error || !data.session) {
  window.location.replace("index.html"); // tilbake til login
}
