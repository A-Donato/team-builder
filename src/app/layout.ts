import { supabase } from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';

interface LoadResult {
  session: Session | null;
}

export const load = async (): Promise<LoadResult> => {
  const { data: { session } } = await supabase.auth.getSession();
  return {
    session
  };
}; 