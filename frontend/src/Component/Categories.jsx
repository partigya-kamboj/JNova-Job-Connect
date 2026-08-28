import {FiCode,FiPenTool,FiTrendingUp,FiBarChart2,FiDollarSign,FiUsers,FiSettings, FiEdit3,} from "react-icons/fi";
import { NavLink } from "react-router-dom";
const categories = [
  {
    icon: FiCode,
    title: "Development & IT",
    jobs: "1,250+ Jobs",
  },
  {
    icon: FiPenTool,
    title: "Design & Creative",
    jobs: "850+ Jobs",
  },
  {
    icon: FiTrendingUp,
    title: "Sales & Marketing",
    jobs: "920+ Jobs",
  },
  {
    icon: FiBarChart2,
    title: "Data & Analytics",
    jobs: "680+ Jobs",
  },
  {
    icon: FiDollarSign,
    title: "Finance & Accounting",
    jobs: "540+ Jobs",
  },
  {
    icon: FiUsers,
    title: "Human Resources",
    jobs: "430+ Jobs",
  },
  {
    icon: FiSettings,
    title: "Engineering",
    jobs: "760+ Jobs",
  },
  {
    icon: FiEdit3,
    title: "Content & Writing",
    jobs: "390+ Jobs",
  },
];
export default function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#2563EB] font-semibold tracking-wide">
            EXPLORE JOB CATEGORIES
          </p>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-2">
            Find Job's By Category
          </h2>
    <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
            Explore opportunities across different industries and
            find the role that matches your skills.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
             return (
              <div
                key={index}
                className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 cursor-pointer hover:bg-[#2563EB] hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] group-hover:bg-white transition">
                  <Icon size={27} />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mt-5 group-hover:text-white transition">
                  {category.title}
                </h3>
                <p className="text-sm text-[#64748B] mt-2 group-hover:text-blue-100 transition">
                  {category.jobs}
                </p>
               <NavLink
  to={`/jobs?category=${encodeURIComponent(category.title)}`}
  className="inline-block text-[#2563EB] font-medium mt-5 group-hover:text-white transition"
>
  Explore Jobs →
</NavLink>
              </div>
            );
          })}
        </div></div>
    </section>
  );
}