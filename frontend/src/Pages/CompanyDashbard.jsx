import React from "react";
import { Link } from "react-router-dom";
import {FiBriefcase,FiUsers,FiCheckCircle,FiPlus,FiEdit,FiTrash2,FiEye,FiHome,FiFileText,FiUser,FiSettings,FiLogOut,} from "react-icons/fi";
const CompanyDashboard = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Mohali, Punjab",
      type: "Full Time",
      applicants: 24,
      status: "Active",
    },
    {
      id: 2,
      title: "React Developer",
      location: "Gurgaon, Haryana",
      type: "Full Time",
      applicants: 18,
      status: "Active",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Internship",
      applicants: 12,
      status: "Closed",
    },
  ];
return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-[#0A263C] text-white min-h-screen hidden md:flex flex-col">
        <div className="px-6 py-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-400">Nova</span> </h1>
          <p className="text-xs text-slate-400 mt-1">Employer Dashboard</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
        <Link to="/company-dashboard"className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600">
            <FiHome /> Dashboard</Link>
<Link to="/post-job"className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
            <FiPlus />Post a Job</Link>
             <Link to="/my-jobs" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition" >
            <FiBriefcase />My Jobs</Link>
            <Link
            to="/applicants"className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
            <FiUsers /> Applicants</Link>
         <Link to="/company-profile" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition" >
            <FiUser /> Company Profile </Link>
               <Link to="/company-settings"className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition">
            <FiSettings />Settings</Link> </nav>
        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-300 transition">
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1">
        <header className="bg-white border-b border-slate-200 px-5 md:px-8 py-5 flex justify-between items-center">
 <div>
<p className="text-sm text-slate-500">Welcome back 👋 </p>
            <h2 className="text-2xl font-bold text-[#0A263C]">Company Dashboard</h2>
          </div>
          <Link to="/post-job" className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition">
            <FiPlus /> Post New Job </Link> </header>
        <section className="p-5 md:p-8">
          <div className="bg-gradient-to-r from-[#0A263C] to-blue-700 rounded-2xl p-6 md:p-8 text-white mb-8">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
<div>  <p className="text-blue-200 text-sm mb-2"> Welcome to JobNova </p>
            <h3 className="text-2xl md:text-3xl font-bold">Manage your hiring with ease</h3>
       <p className="text-blue-100 mt-2 max-w-xl">Post jobs, manage applications and find the right candidates for your company. </p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <FiBriefcase size={42} />
              </div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">Total Jobs </p>
                  <h3 className="text-3xl font-bold text-[#0A263C] mt-2"> 12  </h3>
                </div>
 <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <FiBriefcase size={24} />
                </div>
              </div>   </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500"> Active Jobs</p>
                  <h3 className="text-3xl font-bold text-[#0A263C] mt-2">8  </h3>
                </div>
                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                  <FiCheckCircle size={24} />
                </div>
              </div></div>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center">
                <div>  <p className="text-sm text-slate-500">Applicants  </p>
                  <h3 className="text-3xl font-bold text-[#0A263C] mt-2">  156  </h3>
                </div><div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                  <FiUsers size={24} />
                </div> </div></div>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">Hired </p>
                  <h3 className="text-3xl font-bold text-[#0A263C] mt-2"> 24</h3></div>
           <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                  <FiCheckCircle size={24} />
                </div>
              </div></div> </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-5 md:p-6 border-b border-slate-200 flex justify-between items-center"> <div>
                <h3 className="text-xl font-bold text-[#0A263C]"> Recent Job Posts </h3>
        <p className="text-sm text-slate-500 mt-1"> Manage your recently posted jobs</p>
              </div>
        <Link to="/my-jobs"  className="text-blue-600 hover:text-blue-700 font-medium text-sm"> View All</Link>
              </div>
            <div className="divide-y divide-slate-100">
               {jobs.map((job) => (
                <div key={job.id}className="p-5 md:p-6 hover:bg-slate-50 transition">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                        <FiBriefcase size={22} />
                      </div><div>
                        <h4 className="font-bold text-[#0A263C] text-lg"> {job.title} </h4>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
                          <span>📍 {job.location}</span>
                          <span>💼 {job.type}</span>
                        </div></div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">  Applicants </p>
                <p className="font-bold text-[#0A263C] mt-1">   {job.applicants}  </p>
                    </div>
                    <div>
                      <span  className={`px-3 py-1 rounded-full text-xs font-semibold ${ job.status === "Active"  ? "bg-green-100 text-green-700"    : "bg-slate-100 text-slate-600"   }`}>  {job.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
  <button title="View" className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition"   ><FiEye />
                      </button>
         <button  title="Edit" className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">  <FiEdit /> </button>
          <button title="Delete" className="p-2 rounded-lg border border-slate-200 text-red-500 hover:bg-red-50 transition"><FiTrash2 />
                      </button>
                       </div> </div> </div>
              ))}
                </div>
          </div>
          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
       <div className="text-center sm:text-left">
              <h3 className="font-bold text-[#0A263C] text-lg">Ready to hire?  </h3>
                 <p className="text-sm text-slate-500 mt-1">Post a new job and find your next great candidate. </p>
            </div>
            <Link to="/post-job" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition" ><FiPlus />Post a Job </Link>
              </div>
</section></main> </div>
  );
};export default CompanyDashboard;