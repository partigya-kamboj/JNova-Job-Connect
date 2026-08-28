import { NavLink } from "react-router-dom";
import {FiFacebook, FiInstagram, FiLinkedin,FiTwitter,FiMail,FiMapPin,} from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Job<span className="text-[#3B82F6]">Nova</span>
            </h2>
            <p className="text-slate-400 mt-4 leading-7">
              Connecting talented people with the right opportunities.
              Find your dream job and build your future with JobNova.
            </p>
            <div className="flex items-center gap-3 mt-6">
                <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition"><FiFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition"><FiInstagram />
              </a>
               <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition"><FiLinkedin />
              </a>
               <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition"> <FiTwitter />
              </a>
</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5">
              For Job Seekers
            </h3>
<div className="flex flex-col gap-3 text-slate-400">
                 <NavLink
                to="/jobs"
                className="hover:text-[#60A5FA] transition"> Find Jobs
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-[#60A5FA] transition"> Browse Categories
              </NavLink>
              <NavLink
                to="/login"
                className="hover:text-[#60A5FA] transition" > Login
              </NavLink>
               <NavLink
                to="/signup"
                className="hover:text-[#60A5FA] transition">Create Account
              </NavLink>
              </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5">
              For Employers
            </h3>
<div className="flex flex-col gap-3 text-slate-400">
 <a href="#"className="hover:text-[#60A5FA] transition">Post a Job</a>              <a href="#"className="hover:text-[#60A5FA] transition" >Find Candidates</a>
              <a href="#" className="hover:text-[#60A5FA] transition">Employer Dashboard</a>
<a href="#"className="hover:text-[#60A5FA] transition">Pricing </a>
              </div>
          </div>
          <div>
         <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
<div className="space-y-4 text-slate-400">
<div className="flex items-start gap-3">
                <FiMail className="text-[#60A5FA] text-lg mt-1" />
<span> support@jobnova.com</span>
              </div>
<div className="flex items-start gap-3">
                <FiMapPin className="text-[#60A5FA] text-lg mt-1" />
                 <span>Chandigarh, India </span>
              </div>
               </div>
          </div>
</div></div>
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<p className="text-sm text-slate-400"> © 2026 JobNova. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a href="#" className="hover:text-white transition">Privacy Policy</a>
               <a href="#" className="hover:text-white transition">Terms & Conditions</a>
             </div> </div>
</div></footer>
  );
}