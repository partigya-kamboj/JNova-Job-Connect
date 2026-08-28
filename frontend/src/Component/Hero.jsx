import HeroImage from "../assets/jobHome.png";
import { FiSearch, FiMapPin } from "react-icons/fi";
export default function Hero() {
  return (
    <section className="bg-[#E8F1FF] min-h-[650px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 items-center min-h-[650px] gap-10">
          <div>
            <p className="text-[#2563EB] font-semibold text-lg mb-4">
              FIND YOUR NEXT OPPORTUNITY
            </p>
            <h1 className="text-5xl font-bold text-[#0F172A] leading-tight">
              Find the Job
              <br />
              of Your{" "}
              <span className="text-[#2563EB]">
                Dreams
              </span>
            </h1>
       <p className="text-[#475569] text-lg mt-6 max-w-xl leading-relaxed">
              Discover thousands of job opportunities and
              find the perfect career that matches your skills
              and ambitions.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-3 mt-8 flex items-center gap-3 max-w-2xl">
              <div className="flex items-center gap-3 flex-1 px-3">
                <FiSearch className="text-[#2563EB] text-xl" /><input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full outline-none text-[#0F172A]"
                />
              </div>
              <div className="flex items-center gap-3 flex-1 px-3 border-l border-slate-200">
                <FiMapPin className="text-[#2563EB] text-xl" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none text-[#0F172A]"
                />
              </div>
<button className="bg-[#2563EB] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition">
                Search Jobs
              </button></div>           
               <div className="mt-6">
              <span className="text-[#475569]">
                Trending:
              </span>

              <span className="text-[#2563EB] ml-3 font-medium">
                React Developer
              </span>

              <span className="text-[#2563EB] ml-4 font-medium">
                UI/UX Designer
              </span>

              <span className="text-[#2563EB] ml-4 font-medium">
                Data Analyst
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={HeroImage}
              alt="Find your dream job"
              className="w-full max-w-[600px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}