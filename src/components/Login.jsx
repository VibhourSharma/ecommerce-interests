import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { validateEmail } from "../utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedErrors = { emailError: "", passwordError: "" };

    if (!validateEmail(email)) {
      updatedErrors.emailError = "Enter a valid email address";
    }

    if (password.length < 6) {
      updatedErrors.passwordError = "Enter a valid Password";
    }

    if (updatedErrors.emailError || updatedErrors.passwordError) {
      setErrors(updatedErrors);
      return;
    }
    navigate("/interests");
    toast.success("Logged in Succesfully");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-2 flex items-center justify-center flex-col mt-6 p-8 w-[33%] rounded-2xl">
        <div className="font-[600] text-3xl mt-4">Login</div>
        <div className="mt-5 font-[500] text-xl">Welcome Back To ECOMMERCE</div>
        <span className="text-sm mt-2">The next gen business Marketplace</span>
        <form onSubmit={handleSubmit} className="flex flex-col mt-10 w-[90%]">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg my-2 border outline-none focus:border-black transition-all"
          />
          {errors.emailError && (
            <span className="text-red-500 text-xs">{errors.emailError}</span>
          )}
          <label htmlFor="password" className="font-medium mt-4">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full rounded-lg my-2 border outline-none focus:border-black transition-all"
            />
            <span
              className="absolute right-3 top-5 cursor-pointer text-black underline text-sm"
              onClick={toggleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.passwordError && (
            <span className="text-red-500 text-xs">{errors.passwordError}</span>
          )}
          <button className="p-2.5 text-white bg-black mt-8 tracking-wide rounded-lg">
            Login
          </button>
        </form>
        <div className="w-full border h-px mt-8"></div>
        <div className="text-sm text-gray-500 py-2 mt-4">
          Don't have an account?{"  "}
          <span
            className="font-semibold text-black tracking-wider cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            SIGN UP
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
