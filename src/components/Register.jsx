import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Registration successful! Please verify your email.');
      console.log(data);
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Supabase Register
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2  hover:bg-blue-700 transition mb-4"
        >
          {loading ? 'Registering...' : 'Register with Email'}
        </button>

        <div className="text-center text-gray-500 my-2">or</div>

        
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-slate-900 text-white py-2 hover:bg-red-600 transition"
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Register with Google
        </button>  


        <p className="text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/v1/auth/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>


        
      </form>


      
    </div>
  );
}