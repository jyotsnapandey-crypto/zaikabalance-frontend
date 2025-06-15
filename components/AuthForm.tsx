'use client';
import { useState } from 'react';
import axios from 'axios';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setToken('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    const endpoint = isLogin ? 'login' : 'signup';

    try {
      const res = await axios.post(https://zaikabalance-backend.onrender.com/${endpoint}, {
        email,
        password,
      });

      if (isLogin) {
        setToken(res.data.token);
        setMessage('Login successful!');
      } else {
        setMessage('Signup successful! You can now log in.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <button
          type="button"
          onClick={toggleMode}
          className="w-full text-sm text-blue-600 mt-2 hover:underline"
        >
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </form>
      {token && (
        <div className="mt-4 text-green-600 break-words">
          <strong>Token:</strong> {token}
        </div>
      )}
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default AuthForm;


Update app/page.tsx or add to a new page

import AuthForm from '@/components/AuthForm';
// other imports...

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <AuthForm />
      {/* other forms below if needed */}
    </main>
  );
}
