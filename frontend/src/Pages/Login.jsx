import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail,FiLock, FiEye, FiEyeOff, FiArrowRight,FiBriefcase,} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import loginImage from "../assets/loginImage.png";
const Login = () => {
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = (e) => {
    e.preventDefault();
 if (!email || !password) {
      alert("Please enter email and password.");
      return; }
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);  navigate("/");  };
 return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0A263C] min-h-[650px]">
         <img
            src={loginImage}
            alt="JobNova Career"
            className="absolute inset-0 w-full h-full object-cover opacity-75" />
 <div className="absolute inset-0 bg-[#0A263C]/70"></div>
   <div className="relative z-10 p-12 flex flex-col justify-between text-white">
            <div> <h1 className="text-3xl font-bold tracking-wide">
                Job<span className="text-blue-400">Nova</span> </h1>
              <p className="text-sm text-gray-300 mt-1">
                Your Career. Your Future. </p>
            </div>
            <div className="max-w-md">
                 <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                <FiBriefcase size={28} />  </div>
 <h2 className="text-4xl font-bold leading-tight mb-5">
                Your Next Opportunity
                <span className="text-blue-400"> Starts Here.</span>  </h2>
 <p className="text-gray-200 leading-relaxed">
                Discover amazing career opportunities, connect with top
                companies and take the next step towards your dream career. </p></div>
            <p className="text-sm text-gray-300">
              Find jobs. Build connections. Grow your career.  </p>   </div>  </div>
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14">
          <div className="lg:hidden mb-8">
            <h1 className="text-3xl font-bold text-[#0A263C]">Job<span className="text-blue-600">Nova</span>  </h1>
            <p className="text-sm text-gray-500 mt-1">
              Your Career. Your Future. </p>
          </div>
          <div className="mb-8"> <h2 className="text-3xl font-bold text-gray-900">
              Welcome Back! 👋 </h2>
<p className="text-gray-500 mt-2">
              Sign in to continue to your JobNova account. </p>  </div>
          <form onSubmit={handleLogin} className="space-y-5">  <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
<div className="relative"><FiMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={19} /> <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
</div> </div>
            <div> <div className="flex items-center justify-between mb-2">
 <label className="block text-sm font-semibold text-gray-700">  Password</label>
   <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700" >  Forgot Password? </Link>
  </div>
 <div className="relative"><FiLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={19} /><input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
<button   type="button"  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"  >
                  {showPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button> </div>
            </div>
            <div className="flex items-center gap-2"><input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-blue-600" />  <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer" >Remember me </label> </div>
            <button
              type="submit"
              className="w-full bg-[#0A263C] hover:bg-[#123B59] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-200"    >
              Sign In   <FiArrowRight size={19} /></button>   </form>
<div className="flex items-center gap-4 my-7">
 <div className="flex-1 h-px bg-gray-200"></div> <span className="text-sm text-gray-400">
              OR CONTINUE WITH </span> <div className="flex-1 h-px bg-gray-200"></div>  </div>
          <div className="grid grid-cols-2 gap-4"><button
              type="button"
              className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
              <FcGoogle size={20} />
              <span className="text-sm font-medium text-gray-700">
                Google
              </span>
            </button> <button
              type="button"
              className="border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition" >
              <FaLinkedinIn size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">   LinkedIn
              </span>
            </button> </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{" "} <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:text-blue-700" >
              Create Account  </Link> </p>  <div className="mt-6 text-center">  <Link
              to="/company-login"
              className="text-sm text-gray-600 hover:text-blue-600 font-medium" >
              Are you a company?{" "}
              <span className="text-blue-600">
                Login as Company
              </span>
            </Link></div> </div> </div> </div>
  );
};export default Login;