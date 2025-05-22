import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // Make sure this is your Firebase setup file
import { useNavigate } from "react-router-dom";
import { getFriendlyAuthError } from "../utils/firebaseErrors";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // used to redirect

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile"); // Change to your actual route
    } catch (err) {
      setError(getFriendlyAuthError(err.code));
    }
  };
  

  return (
    <div className="min-h-screen bg-[#f6f6f7] flex items-start justify-center">
      <div className="w-full max-w-sm px-4 pt-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Sign in to your <br /> PopX account
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-[#6c47b6] font-semibold text-sm mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a259ff] bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#6c47b6] font-semibold text-sm mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a259ff] bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm mb-4">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#a259ff] text-white font-semibold py-3 rounded-lg hover:bg-[#8f45e0] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
