import { useState } from 'react';
import supabase from '../supabase-client';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
    } else {
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md p-10 border border-neutral-700 rounded-xl shadow-lg bg-neutral-800">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl text-center font-bold mb-6 tracking-wide">
          Executive <span className="text-[#E2AC0D]">Login</span>
        </h2>

        {/* Error */}
        {error && <p className="text-red-500 text-center mb-4 text-sm">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-neutral-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-neutral-700 text-white rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              required
            />
          </div>

          <div>
            <label className="block text-neutral-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-neutral-700 text-white rounded-md outline-none focus:ring-2 focus:ring-[#E2AC0D]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#E2AC0D] text-black font-bold py-2 rounded-md hover:bg-yellow-500 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
