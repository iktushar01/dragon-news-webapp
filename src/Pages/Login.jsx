import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // ✅ Correct import
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { signin } = useContext(AuthContext); // ✅ useContext instead of use()
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState(""); // ✅ State to store error messages

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError(""); // Clear previous errors

    signin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again."); // ✅ Set error message
      });
  };

  return (
    <div className="min-h-[calc(100vh-138px)] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* ✅ Error Message */}
          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors mb-4"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-black font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
