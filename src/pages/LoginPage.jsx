import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Dummy validation, replace with your API call
    if (form.username === "admin" && form.password === "admin123") {
      // store a simple token so RequireAuth can detect logged-in state
      try {
        localStorage.setItem('token', 'dummy-admin-token');
      } catch {
        // ignore storage errors
      }

      // If the user was redirected to /login by RequireAuth, return them to the original page
      const dest = location.state?.from?.pathname || '/admin/dashboardadmin';
      navigate(dest, { replace: true });
    } else {
      setError("Username atau password salah.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#1976ED] to-[#162447]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img src="/LogoUtama-Manusia.Ai.svg" alt="Manusia.AI" className="h-12 mb-4" />
          <h2 className="text-2xl font-bold text-[#1976ED] mb-2">Admin Login</h2>
          <p className="text-gray-500 text-sm">Masuk untuk mengakses dashboard admin</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#1976ED] mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976ED] text-base"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1976ED] mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976ED] text-base"
              autoComplete="current-password"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 bg-[#1976ED] text-white font-semibold rounded-lg shadow hover:bg-[#1565C0] transition"
            disabled={loading}
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}