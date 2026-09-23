import React from "react";
import {FiHome,FiSearch,FiFileText,FiBookmark,FiUser, FiFile, FiBell,FiSettings, FiLogOut,FiBriefcase,FiCalendar,FiCheckCircle,} from "react-icons/fi";
const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-[#08263e] text-white hidden md:flex flex-col">
        <div className="px-6 py-5 border-b border-slate-100">
          <h1 className="text-2xl font-bold text-[#0A263C]">
            Job<span className="text-blue-600">Nova</span>
          </h1> </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="#"className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white font-medium" >
            <FiHome /> Dashboard</a>
             <a href="/jobs" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600">
            <FiSearch /> Find Jobs</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600">
            <FiFileText /> My Applications</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600" >
            <FiBookmark /> Saved Jobs </a>
             <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600">
            <FiUser /> My Profile </a>
            <a  href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600">
            <FiFile /> Resume</a>
             <a href="#"className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600" ><FiBell />
            Notifications</a>
         <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600" >
            <FiSettings />  Settings </a> </nav>
        <div className="px-4 py-5 border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-red-500 w-full">
            <FiLogOut />Logout</button>
        </div> </aside>
      <main className="flex-1">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
         <div>
            <h2 className="text-xl font-semibold text-slate-800"> Student Dashboard </h2>
            <p className="text-sm text-slate-500"> Manage your job search and applications</p>
          </div>
    <div className="flex items-center gap-4">
     <button className="relative text-slate-600"> <FiBell size={21} />
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">  P
            </div> </div>
             </header>
        <div className="p-6 lg:p-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-500 rounded-2xl p-7 text-white mb-7">
      <p className="text-blue-100 text-sm mb-2"> Welcome back 👋</p>
      <h1 className="text-3xl font-bold mb-2">Find Your Next Opportunity </h1>
      <p className="text-blue-100">  Explore jobs, track your applications and grow your career.  </p>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
         <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FiFileText size={21} /></div>
              </div>
       <p className="text-sm text-slate-500"> Applied Jobs</p>
       <h3 className="text-2xl font-bold text-slate-800 mt-1">12 </h3>
            </div>
       <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
      <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 mb-4"> <FiBookmark size={21} /></div>
        <p className="text-sm text-slate-500">  Saved Jobs</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-1"> 8  </h3> </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-4"> <FiCalendar size={21} /> </div>
            <p className="text-sm text-slate-500"> Interviews </p>
          <h3 className="text-2xl font-bold text-slate-800 mt-1"> 2</h3></div>
         <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
         <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <FiCheckCircle size={21} />
              </div>
               <p className="text-sm text-slate-500"> Profile Complete </p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">80% </h3> </div>
</div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
         <div className="flex items-center justify-between p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800"> Recent Applications </h3>
      <button className="text-sm text-blue-600 font-medium"> View All</button>
</div>
        <div className="divide-y divide-slate-100">
          <div className="p-5 flex items-center justify-between">
           <div className="flex items-center gap-4">
         <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600"><FiBriefcase /></div>
          <div>
             <h4 className="font-semibold text-slate-800">Frontend Developer </h4>
                      <p className="text-sm text-slate-500"> ABC Technologies </p>
                    </div></div>
           <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1.5 rounded-full">  Applied </span>
         </div>
         <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <FiBriefcase /></div>
          <div>
             <h4 className="font-semibold text-slate-800"> MERN Stack Developer</h4>
             <p className="text-sm text-slate-500">  Tech Solutions </p>
                    </div></div>
                     <span className="text-xs font-medium bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full">Under Review </span>
                </div>
         <div className="p-5 flex items-center justify-between">
         <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <FiBriefcase /></div>
         <div>
            <h4 className="font-semibold text-slate-800">React Developer </h4>
           <p className="text-sm text-slate-500">Pixel Labs </p>
                    </div></div>
       <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full"> Shortlisted </span>
        </div> </div></div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
               <h3 className="text-lg font-semibold text-slate-800 mb-5"> Quick Actions</h3>
               <div className="space-y-3">
         <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition">
                  <FiSearch />
                  <span className="font-medium"> Search Jobs</span>
                </button>
<button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition">
                  <FiFile />
                  <span className="font-medium">Upload Resume </span>
                </button>
 <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition">
                  <FiBriefcase />
                  <span className="font-medium"> Browse Companies </span> </button>
                  <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition">
                  <FiUser />
                  <span className="font-medium">Update Profile </span>
                </button> </div>
          </div>
          </div>
           </div>
           </main>
           </div>
  );
};export default StudentDashboard;