import { supabase } from '@/lib/supabase';

export async function GET() {
  // Fetch players from Supabase

  const { data, error } = await supabase
    .from('players') // Replace with your actual table name
    .select('*');

  if (error) {
    console.error("Error fetching players:", error);
    return new Response(JSON.stringify({ error: 'Error fetching players' }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
} 