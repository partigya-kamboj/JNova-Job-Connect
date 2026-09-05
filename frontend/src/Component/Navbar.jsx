import { NavLink } from "react-router-dom";
import LogoImage from "../assets/JobNova.png";
export default function Navbar() {
  return (
   <nav className="w-full bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[72px] flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img
  src={LogoImage}
  alt="JobNova Logo"
  className="w-32 h-auto"
/>
          </NavLink>
          <div className="flex items-center gap-9">
             <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[24px] font-medium transition ${
                  isActive
                    ? "text-[#2563EB]"
                    : "text-[#0F172A] hover:text-[#2563EB]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `text-[24px] font-medium transition ${
                  isActive
                    ? "text-[#2563EB]"
                    : "text-[#0F172A] hover:text-[#2563EB]"
                }`
              }
            >
              Find Jobs
            </NavLink>

           <NavLink to="/companydashboard" className={({ isActive }) =>`text-[24px] font-medium transition ${isActive ? "text-[#2563EB]": "text-[#0F172A] hover:text-[#2563EB]" 
    }`
  } 
>
  Companies
</NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[24px] font-medium transition ${
                  isActive
                    ? "text-[#2563EB]"
                    : "text-[#0F172A] hover:text-[#2563EB]"
                }`
              }
            >
              About
            </NavLink>
            
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-5">

            <NavLink
              to="/login"
              className="font-medium text-[#0F172A] px-6 py-2.5  rounded-lg  hover:bg-[#406de9] transition shadow-sm"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className=" text-[#0F172A] px-6 py-2.5 rounded-lg font-medium hover:bg-[#4a73e5] transition shadow-sm"
            >
              Sign Up
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
}