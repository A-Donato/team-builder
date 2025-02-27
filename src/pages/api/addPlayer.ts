import { supabase } from '@/lib/supabase';

export async function POST({ request}: { request: Request }) {
  const { name, position } = await request.json();

  // Insert the new player into Supabase
  const { data, error } = await supabase
    .from('players') // Ensure this matches your Supabase table name
    .insert([{ name, position }]);

  if (error) {
    console.error("Error inserting player:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 201 });
} 