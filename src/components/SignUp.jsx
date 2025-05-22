import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // adjust path
import { useNavigate } from "react-router-dom";
//import { getFriendlyAuthError } from "../utils/firebaseerrors"; // helper to format Firebase errors
import { checkValidData } from "../utils/validate";

const Signup = () => {
  const navigate = useNavigate();
  const [agency, setAgency] = useState("yes");
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    if (!form.fullname.trim()) {
      return "Full name is required.";
    }
    if (!form.phone.trim()) {
      return "Phone number is required.";
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      return "Phone number must be 10 digits.";
    }
    if (!form.email.trim()) {
      return "Email is required.";
    }
    if (!form.password.trim()) {
      return "Password is required.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const validationError = checkValidData(form.email, form.password, form.fullname);
    if (validationError) {
      setError(validationError);
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      localStorage.setItem("popx_name", form.fullname);
      navigate("/login");
    } catch (err) {
      const friendlyMessage = getFriendlyAuthError(err.code);
      setError(friendlyMessage);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#f6f6f7] flex items-start justify-center">
      <div className="w-full max-w-sm px-4 pt-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h1>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSubmit}>
          {[
            { id: "fullname", placeholder: "Full Name", type: "text" },
            { id: "phone", placeholder: "Phone number", type: "text" },
            { id: "email", placeholder: "Email address", type: "email" },
            { id: "password", placeholder: "Password", type: "password" },
            { id: "company", placeholder: "Company name", type: "text" },
          ].map((input) => (
            <div className="mb-4" key={input.id}>
              <label
                className="block text-[#6c47b6] font-semibold text-sm mb-1"
                htmlFor={input.id}
              >
                {input.placeholder}
              </label>
              <input
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={form[input.id]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a259ff] bg-white"
              />
            </div>
          ))}

          <div className="mb-6">
            <label className="block text-gray-700 font-medium text-sm mb-2">
              Are you an Agency?<span className="text-[#a259ff]">*</span>
            </label>
            <div className="flex items-center space-x-6">
              {["yes", "no"].map((val) => (
                <label className="flex items-center cursor-pointer" key={val}>
                  <input
                    type="radio"
                    name="agency"
                    value={val}
                    checked={agency === val}
                    onChange={() => setAgency(val)}
                    className="form-radio text-[#a259ff] focus:ring-[#a259ff] w-5 h-5"
                  />
                  <span className="ml-2 text-gray-900 font-medium capitalize">
                    {val}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#a259ff] text-white font-semibold py-3 rounded-lg text-lg"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
