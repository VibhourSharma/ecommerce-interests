import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { validateEmail } from "../utils";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = { nameError: "", emailError: "", passwordError: "" };
    const isEmptyName = !formData.name.trim();
    const isInvalidEmail = !validateEmail(formData.email);
    const isShortPassword = formData.password.length < 6;

    if (isEmptyName || isInvalidEmail || isShortPassword) {
      if (isEmptyName) {
        updatedErrors.nameError = "Name is required";
      }
      if (isInvalidEmail) {
        updatedErrors.emailError = "Invalid email format";
      }
      if (isShortPassword) {
        updatedErrors.passwordError = "Password must be at least 6 characters";
      }
    } else {
      navigate("/verify-otp");
      toast.info("Use any 6 random numbers to verify", {
        duration: 6000,
      });
    }
    setErrors(updatedErrors);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-2 flex items-center justify-center flex-col mt-6 p-8 w-[33%] rounded-2xl">
        <div className="font-[600] text-3xl mt-2">Create Your Account</div>
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-[90%]">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded-lg my-2 border outline-none focus:border-black transition-all"
          />
          {errors.nameError && (
            <p className="text-red-500 text-xs">{errors.nameError}</p>
          )}
          <label htmlFor="email" className="font-medium mt-4">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded-lg my-2 border outline-none focus:border-black transition-all"
          />
          {errors.emailError && (
            <p className="text-red-500 text-xs">{errors.emailError}</p>
          )}
          <label htmlFor="password" className="font-medium mt-4">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 rounded-lg my-2 border outline-none focus:border-black transition-all w-full"
            />
            <span
              className="absolute right-3 top-5 cursor-pointer text-black underline text-sm"
              onClick={toggleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.passwordError && (
            <p className="text-red-500 text-xs">{errors.passwordError}</p>
          )}
          <button className="p-2.5 tracking-wide text-white bg-black mt-8 rounded-lg">
            CREATE ACCOUNT
          </button>
        </form>
        <div className="w-full border h-px mt-8"></div>
        <div className="text-sm text-gray-500 py-2 mt-4">
          Have an account?{" "}
          <span
            className="font-semibold text-black tracking-wider cursor-pointer"
            onClick={() => navigate("/")}
          >
            LOGIN
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
