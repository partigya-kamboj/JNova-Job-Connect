import { useSearchParams } from "react-router-dom";
import {FiMapPin,FiClock, FiBookmark, FiSearch,} from "react-icons/fi";
const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Gurgaon, India",
    type: "Full Time",
    salary: "₹6 - ₹10 LPA",
    category: "Development & IT",
  },
  {
    title: "MERN Stack Developer",
    company: "WebTech Solutions",
    location: "Mohali, India",
    type: "Full Time",
    salary: "₹7 - ₹12 LPA",
    category: "Development & IT",
  },
  {
    title: "React Developer",
    company: "CodeCraft Technologies",
    location: "Noida, India",
    type: "Full Time",
    salary: "₹6 - ₹11 LPA",
    category: "Development & IT",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Noida, India",
    type: "Full Time",
    salary: "₹5 - ₹8 LPA",
    category: "Design & Creative",
  },
  {
    title: "Graphic Designer",
    company: "Pixel Studio",
    location: "Delhi, India",
    type: "Full Time",
    salary: "₹4 - ₹7 LPA",
    category: "Design & Creative",
  },
  {
    title: "Digital Marketing Executive",
    company: "GrowthHub",
    location: "Chandigarh, India",
    type: "Full Time",
    salary: "₹4 - ₹7 LPA",
    category: "Sales & Marketing",
  },
  {
    title: "Sales Executive",
    company: "MarketPro Solutions",
    location: "Gurgaon, India",
    type: "Full Time",
    salary: "₹5 - ₹8 LPA",
    category: "Sales & Marketing",
  },
  {
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Delhi, India",
    type: "Full Time",
    salary: "₹5 - ₹9 LPA",
    category: "Data & Analytics",
  },
  {
    title: "Business Data Analyst",
    company: "DataVision",
    location: "Noida, India",
    type: "Full Time",
    salary: "₹6 - ₹10 LPA",
    category: "Data & Analytics",
  },
  {
    title: "HR Executive",
    company: "PeopleFirst",
    location: "Gurgaon, India",
    type: "Full Time",
    salary: "₹4 - ₹6 LPA",
    category: "Human Resources",
  },
  {
    title: "HR Manager",
    company: "TalentBridge",
    location: "Chandigarh, India",
    type: "Full Time",
    salary: "₹7 - ₹11 LPA",
    category: "Human Resources",
  },
  {
    title: "Mechanical Engineer",
    company: "BuildTech Industries",
    location: "Yamunanagar, India",
    type: "Full Time",
    salary: "₹5 - ₹9 LPA",
    category: "Engineering",
  },
  {
    title: "Content Writer",
    company: "ContentWorks",
    location: "Remote",
    type: "Full Time",
    salary: "₹3 - ₹6 LPA",
    category: "Content & Writing",
  },
  {
    title: "Financial Analyst",
    company: "FinEdge",
    location: "Delhi, India",
    type: "Full Time",
    salary: "₹6 - ₹10 LPA",
    category: "Finance & Accounting",
  },
];
export default function Jobs() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;
return (
    <section className="min-h-screen bg-[#F8FAFC] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#2563EB] font-semibold tracking-wide">
            {selectedCategory
              ? `${selectedCategory.toUpperCase()}`
              : "EXPLORE OPPORTUNITIES"}</p>
              <h1 className="text-4xl font-bold text-[#0F172A] mt-2">
            {selectedCategory
              ? `${selectedCategory} Jobs`
              : "Find Your Perfect Job"}</h1>
<p className="text-[#64748B] mt-3">
            {selectedCategory
              ? `Explore the latest ${selectedCategory} opportunities.`
              : "Discover the latest jobs and take the next step in your career."} </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-10">
          <div className="flex items-center gap-4">

            <div className="flex items-center gap-3 flex-1 px-4">
              <FiSearch className="text-[#2563EB] text-xl" />
              <input
                type="text"
                placeholder="Job title, skills or company"
                className="w-full outline-none text-[#0F172A]"
              />
            </div>
            <div className="flex items-center gap-3 flex-1 border-l border-slate-200 px-4">
              <FiMapPin className="text-[#2563EB] text-xl" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-[#0F172A]"/>
            </div>
            <button className="bg-[#2563EB] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition">
              Search Jobs
            </button>
</div>
        </div>
        <div className="flex items-center justify-between mb-6">
            <div>
            <h2 className="text-2xl font-bold text-[#0F172A]">
              {selectedCategory ? "Available Jobs" : "Latest Jobs"}
            </h2>
<p className="text-[#64748B] mt-1">
              {filteredJobs.length} job opportunities available </p>
          </div>
 <select className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 outline-none text-[#475569]">
            <option>Sort By</option>
            <option>Newest</option>
            <option>Salary: High to Low</option>
            <option>Salary: Low to High</option>
          </select></div>
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">

            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] text-xl font-bold">
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0F172A]">
                        {job.title}
                      </h3>
                      <p className="text-[#64748B] mt-1">
                        {job.company}
                      </p>
                    </div>
                    </div>
                  <button className="text-slate-400 hover:text-[#2563EB] transition">
                    <FiBookmark size={21} />
                  </button>
                  </div>
                <div className="mt-5">
                  <span className="inline-block bg-[#EFF6FF] text-[#2563EB] text-sm font-medium px-3 py-1.5 rounded-full">
                    {job.category}
                  </span>
                </div>
                <div className="flex items-center gap-6 mt-5 text-sm text-[#64748B]">
                    <span className="flex items-center gap-2">
                    <FiMapPin className="text-[#2563EB]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiClock className="text-[#2563EB]" />
                    {job.type}
                  </span>
                  </div>
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
                    <div>
                    <p className="font-bold text-[#0F172A]">
                      {job.salary}
                    </p>
                     <p className="text-sm text-[#94A3B8] mt-1">
                      Per Year
                    </p>
                  </div>
                   <button className="bg-[#2563EB] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1D4ED8] transition">
                    Apply Now
                  </button>
                  </div>
                </div>
            ))}
            </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
            <h3 className="text-xl font-semibold text-[#0F172A]">
              No Jobs Found
            </h3>
           <p className="text-[#64748B] mt-2">
              There are currently no jobs available in this category.
            </p>
          </div>
        )}
         </div>
    </section>
  );
}