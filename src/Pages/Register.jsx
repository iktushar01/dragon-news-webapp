import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ useNavigate imported
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState({});
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photoURL.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const termsAccepted = form.terms.checked;

    // Reset errors
    setError("");
    setFieldError({});

    const newFieldErrors = {};

    if (!name) newFieldErrors.name = "Name is required.";
    if (!email) newFieldErrors.email = "Email is required.";
    if (!password) newFieldErrors.password = "Password is required.";
    if (!termsAccepted) newFieldErrors.terms = "You must accept the terms.";

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldError(newFieldErrors);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate('/'); // ✅ Navigate to home after successful registration
          })
          .catch((error) => {
            console.error(error.message);
            setError(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-138px)] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register your account</h2>
        <form onSubmit={handleRegister} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Your Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {fieldError.name && <p className="text-red-600 text-sm">{fieldError.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {fieldError.email && <p className="text-red-600 text-sm">{fieldError.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {fieldError.password && <p className="text-red-600 text-sm">{fieldError.password}</p>}
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="terms" className="mr-2" />
              <span className="text-sm text-gray-700">
                Accept <span className="font-semibold">Terms & Conditions</span>
              </span>
            </label>
            {fieldError.terms && <p className="text-red-600 text-sm">{fieldError.terms}</p>}
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors mb-4"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-700">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-black font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
