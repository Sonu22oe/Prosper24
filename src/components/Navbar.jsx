import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMobileOpen(false);
  };

  return (
    <nav className=" bg-white shadow-md w-full z-99">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-slate-800">Prosper</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>

          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Logout
            </button>
          ) : null}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden " >
          <button onClick={() => setMobileOpen(!mobileOpen)} className="focus:outline-none">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden transition-all py-6 duration-300 ${mobileOpen ? 'block absolute z-77 w-full' : 'hidden'} bg-white shadow-md`}>
        <div className="flex flex-col items-start px-6 py-4 space-y-3">
          <a href="/" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-700 hover:text-blue-600">About</a>

          {!user ? (
            <>
            
              <a
                href="/v1/auth/login"
                className="w-full text-center px-6 py-4 bg-slate-800 text-white hover:bg-slate-600"
              >
                Sign In
              </a>
              <a
                href="/v1/auth/register"
                className="w-full text-center px-8 py-4 border-1   text-slate-700 hover:bg-green-600"
              >
                Register
              </a>
            </>
          ) : (
      <>
<span className="h-[1px] w-full bg-gray-400"></span>
        <div className="py-2 ">{user.email.split('@')[0]}</div>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 "
            >
              Logout
            </button>
      </> )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;