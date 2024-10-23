import { supabase } from './supabaseClient';

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user: data.user, error }; // Update this line
};

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { user: data.user, error }; // Update this line
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
