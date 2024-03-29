import React, { useState, useRef } from "react";

const VerifyOtp = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpBoxes = useRef([]);

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (isNaN(value)) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== "" && index < otp.length - 1) {
      otpBoxes.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      otpBoxes.current[index - 1].focus();
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="border-2 flex items-center justify-center flex-col mt-6 p-8 w-[30%] rounded-2xl">
        <div className="font-[600] text-2xl">Verify Your Email</div>
        <span className="text-sm mt-5 text-center">
          Enter the code you have received on vibhour121@gmail.com
        </span>
        <form action="" className="flex flex-col mt-12">
          <p className="text-sm mb-2">Code:</p>
          <div className="flex gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(input) => (otpBoxes.current[index] = input)}
                className="w-10 h-10 rounded-xl border-2 text-center"
              />
            ))}
          </div>
          <button className="p-2 w-full rounded-lg text-white bg-black mt-12 tracking-wider">
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
