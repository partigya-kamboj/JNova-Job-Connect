import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiArrowLeft, FiSend } from "react-icons/fi";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => { e.preventDefault();if (!email) {
      setMessage("Please enter your email address.");
      return;}
    setMessage(
      "If an account exists with this email, a password reset link has been sent." ); };
      return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
    <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0A263C] min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A263C] to-[#123B59]"></div>
       <div className="relative z-10 p-12 flex flex-col justify-between text-white">
            <div>
              <h1 className="text-3xl font-bold">Job<span className="text-blue-400">Nova</span></h1>
              <p className="text-sm text-gray-300 mt-1">Your Career. Your Future.</p></div>
            <div className="max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <FiSend size={28} /></div>
                <h2 className="text-4xl font-bold leading-tight mb-5">Get Back to Your
                <span className="text-blue-400"> Career.</span></h2>
               <p className="text-gray-200 leading-relaxed">
                Don't worry if you forgot your password. Enter your registered
                email and we'll help you get back into your JobNova account. </p></div>
                <p className="text-sm text-gray-300">
              Find jobs. Build connections. Grow your career. </p></div></div>
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14">
          <div className="lg:hidden mb-8"><h1 className="text-3xl font-bold text-[#0A263C]">Job<span className="text-blue-600">Nova</span> </h1>
        <p className="text-sm text-gray-500 mt-1">Your Career. Your Future.</p> </div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-8 transition">
            <FiArrowLeft size={17} />
            Back to Login
          </Link>
          <div className="mb-8">
       <h2 className="text-3xl font-bold text-gray-900">Forgot Password? </h2>
     <p className="text-gray-500 mt-2 leading-relaxed">
              Enter your registered email address and we'll send you a link to
              reset your password. </p></div>
          <form onSubmit={handleSubmit} className="space-y-5">
             <div>
     <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
     <div className="relative"><FiMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={19} />
                  <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage(""); }} className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
 </div>
 </div>
            {message && (
              <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-xl p-3 text-sm">
                {message}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#0A263C] hover:bg-[#123B59] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-200">
              Send Reset Link
              <FiSend size={18} />
            </button></form>
          <p className="text-center text-sm text-gray-500 mt-8">Remember your password?{" "} <Link
              to="/login"
              className="text-blue-600 font-semibold hover:text-blue-700">Sign In </Link></p>
              </div></div></div>
  );
};export default ForgetPassword;