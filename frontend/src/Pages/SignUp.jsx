import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FiUser,FiMail,FiLock, FiEye,FiEyeOff, FiArrowRight,} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import loginImage from "../assets/loginImage.png";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const handleSignup = (e) => {
    e.preventDefault();
 if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    } if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;}
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
 alert("Account created successfully!");
  navigate("/login");  };
    return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
           <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0A263C] min-h-[700px]">
         <img  src={loginImage}
            alt="JobNova Career"
            className="absolute inset-0 w-full h-full object-cover opacity-60"      /><div className="absolute inset-0 bg-[#0A263C]/75"></div>   <div className="relative z-10 p-12 flex flex-col justify-between text-white">
            <div>
              <h1 className="text-3xl font-bold">  Job<span className="text-blue-400">Nova</span> </h1>
  <p className="text-sm text-gray-300 mt-1">  Your Career. Your Future.</p> </div>
            <div className="max-w-md">
 <h2 className="text-4xl font-bold leading-tight mb-5"> Build Your
                <span className="text-blue-400"> Career With Us.</span>
              </h2> <p className="text-gray-200 leading-relaxed">
                Create your JobNova account and discover exciting
                opportunities that match your skills, interests and career.   goals. </p>
<div className="mt-8 space-y-4"><div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Discover relevant job opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Connect with top companies</span>
                </div>
 <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Grow your professional career</span>
                </div></div> </div>
 <p className="text-sm text-gray-300">
              Find jobs. Build connections. Grow your career     </p>   </div> </div>
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14">
          <div className="lg:hidden mb-7">
 <h1 className="text-3xl font-bold text-[#0A263C]">
              Job<span className="text-blue-600">Nova</span>  </h1>  <p className="text-sm text-gray-500 mt-1">    Your Career. Your Future.  </p>     </div>
          <div className="mb-7">
<h2 className="text-3xl font-bold text-gray-900">
              Create Account 🚀 </h2><p className="text-gray-500 mt-2">    Join JobNova and start your career journey.     </p>   </div>
          <form onSubmit={handleSignup} className="space-y-4">
            <div> <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
 <div className="relative">   <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"size={19} /><input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>   </div>      </div>
            <div>
  <label className="block text-sm font-semibold text-gray-700 mb-2"> Email Address </label>
              <div className="relative">         <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"      size={19}   /> <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />   </div> </div><div>
 <label className="block text-sm font-semibold text-gray-700 mb-2">Password </label>
<div className="relative">
  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={19} />  <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>  <button type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button></div> </div>
     <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-2">   Confirm Password </label>
 <div className="relative">
  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={19} />  <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />   <button type="button" onClick={() =>  setShowConfirmPassword(!showConfirmPassword) }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"   >
                  {showConfirmPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>  </div> </div>
            <div className="flex items-start gap-2 pt-1">
<input  type="checkbox" required  className="w-4 h-4 mt-1 accent-blue-600"  />  <p className="text-sm text-gray-500">  I agree to the{" "}  <span className="text-blue-600 font-medium">Terms & Conditions</span>{" "}and Privacy Policy. </p> </div>
            <button type="submit"className="w-full bg-[#0A263C] hover:bg-[#123B59] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-200">Create Account<FiArrowRight size={19} /> </button></form>
<div className="flex items-center gap-4 my-6">
 <div className="flex-1 h-px bg-gray-200"></div>
 <span className="text-sm text-gray-400"> OR SIGN UP WITH </span>
  <div className="flex-1 h-px bg-gray-200"></div>
 </div>
          <div className="grid grid-cols-2 gap-4">
             <button type="button"  className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition"> <FcGoogle size={20} />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
             <button type="button" className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition" >
              <FaLinkedinIn size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700"> LinkedIn</span></button></div>
          <p className="text-center text-sm text-gray-500 mt-7">  Already have an account?{" "} <Link
              to="/login"
              className="text-blue-600 font-semibold hover:text-blue-700" >  Sign In </Link>
</p>
</div>
 </div></div>);};
export default Signup;