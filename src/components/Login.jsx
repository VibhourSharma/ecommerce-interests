import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-2 flex items-center justify-center flex-col mt-6 p-8 w-[35%] rounded-2xl">
        <div className="font-[600] text-3xl mt-4">Login</div>
        <div className="mt-5 font-[500] text-xl">Welcome Back To ECOMMERCE</div>
        <span className="text-sm mt-2">The next gen business Marketplace</span>
        <form onSubmit={handleSubmit} className="flex flex-col mt-10 w-[90%]">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="enter email"
            className="p-2 rounded-lg my-2 border outline-none focus:border-black transition-all"
          />
          <label htmlFor="password" className="font-medium mt-4">
            Password
          </label>
          <input
            type="password"
            placeholder="enter password"
            className="p-2 rounded-lg my-2 border outline-none focus:border-black transition-all"
          />
          <button className="p-2.5 text-white bg-black mt-8 tracking-wide rounded-lg">
            Login
          </button>
        </form>
        <div className="w-full border h-px mt-8"></div>
        <div className="text-sm text-gray-500 py-2 mt-4">
          Don't have an account?{" "}
          <span className="font-semibold text-black tracking-wider cursor-pointer">
            SIGN UP
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
