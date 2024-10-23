import { supabase } from './supabaseClient';

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user: data?.user, error };
};

// Sign up with email and password
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { user: data?.user, error };
};

// Sign out the user
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
