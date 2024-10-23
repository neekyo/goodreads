import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  const fetchSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error fetching session:', error.message);
    } else if (data?.session) {
      setUser(data.session.user); // Ensure session exists before accessing user
    } else {
      setUser(null); // No session, set user to null
    }
  };

  fetchSession();
}, []);


  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Error signing in:', error.message);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error signing out:', error.message);
    setUser(null);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl">Book Finder</h1>
      <div>
        {user ? (
          <div>
            <span className="mr-4">Hello, {user.email}</span>
            <button onClick={signOut} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
              Sign Out
            </button>
          </div>
        ) : (
          <button onClick={signIn} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Sign In with Google
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
