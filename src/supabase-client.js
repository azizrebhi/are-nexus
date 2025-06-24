import {createClient} from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_supabase_key;
const supabaseKey = import.meta.env.VITE_supabase_url;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;