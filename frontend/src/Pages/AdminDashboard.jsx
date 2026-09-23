import React from "react";
import { FiHome, FiUsers,FiBriefcase,FiFileText,FiBarChart2,FiSettings,FiLogOut,FiBell,FiUserCheck,FiCheckCircle,FiClock,FiActivity,} from "react-icons/fi";
const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-[#0A263C] text-white hidden md:flex flex-col">
        <div className="px-6 py-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-400">Nova</span> </h1>
      <p className="text-sm text-slate-300 mt-1">  Admin Panel</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
     <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 font-medium">
       <FiHome size={19} /> Dashboard
          </a>
          <a href="#"className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white transition"  > <FiUsers size={19} />  Users
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white transition" >
            <FiBriefcase size={19} />  Companies
          </a>
          <a href="#"className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white transition">
            <FiFileText size={19} /> Jobs
          </a>
    <a href="#"className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white transition"  >
            <FiUserCheck size={19} />
            Applications
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white transition" >
            <FiBarChart2 size={19} />
            Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-white transition"  >
            <FiSettings size={19} /> Settings
          </a>
        </nav>
        <div className="px-4 py-5 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-red-400 transition w-full">
            <FiLogOut size={19} />
            Logout </button>
        </div>
      </aside>
      <main className="flex-1">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between"><div>
            <p className="text-sm text-slate-500"> Welcome back 👋  </p>
<h2 className="text-2xl font-bold text-[#0A263C]">Admin Dashboard</h2>
          </div>
          <div className="flex items-center gap-5">
            <button className="relative text-slate-600 hover:text-blue-600">
              <FiBell size={22} />
 <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
     <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">  A</div>
    <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">Admin</p>
     <p className="text-xs text-slate-500">  Administrator </p>
              </div>
            </div></div></header>
        <div className="p-6 lg:p-8">
          <div className="bg-gradient-to-r from-[#0A263C] to-blue-600 rounded-2xl p-7 text-white mb-7">
            <p className="text-blue-200 text-sm mb-2"> Welcome to JobNova Admin Panel </p>
        <h1 className="text-3xl font-bold mb-2">Manage your platform with ease </h1>
 <p className="text-blue-100">  Monitor users, companies, jobs and applications from one place.</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
<div className="flex items-center justify-between mb-4">
 <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"> <FiUsers size={21} /> </div>
        <span className="text-xs text-green-600 font-medium"> +12%</span></div>
      <p className="text-sm text-slate-500"> Total Users</p>
     <h3 className="text-2xl font-bold text-slate-800 mt-1">  2,450</h3>
              </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
           <div className="flex items-center justify-between mb-4">
             <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <FiBriefcase size={21} />
                </div>
  <span className="text-xs text-green-600 font-medium"> +8%</span> </div>
         <p className="text-sm text-slate-500">Companies</p>
       <h3 className="text-2xl font-bold text-slate-800 mt-1">180</h3> </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
               <div className="flex items-center justify-between mb-4">
       <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <FiFileText size={21} /></div>
      <span className="text-xs text-green-600 font-medium"> +15%</span></div>
      <p className="text-sm text-slate-500">Total Jobs </p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">  520 </h3> </div>
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
         <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <FiUserCheck size={21} /> </div>
 <span className="text-xs text-green-600 font-medium"> +20% </span>
 </div>
       <p className="text-sm text-slate-500">  Applications</p>
     <h3 className="text-2xl font-bold text-slate-800 mt-1">8,430 </h3> </div> </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
       <h3 className="text-lg font-semibold text-slate-800">Recent Activity</h3>
        <button className="text-sm text-blue-600 font-medium"> View All</button></div>
         <div className="divide-y divide-slate-100">
                <div className="p-5 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FiUsers /></div>
           <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">  New user registered </h4>
         <p className="text-sm text-slate-500"> Partigya Kamboj joined JobNova </p>
                  </div>
                   <span className="text-xs text-slate-400">  2h ago  </span> </div>
                <div className="p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                    <FiCheckCircle />
                   </div>
           <div className="flex-1">
                    <h4 className="font-semibold text-slate-800"> Company verified  </h4>
  <p className="text-sm text-slate-500">  TechCorp Pvt. Ltd. was verified </p>
                  </div>
           <span className="text-xs text-slate-400">    5h ago  </span>
                </div>
                <div className="p-5 flex items-center gap-4">
           <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <FiBriefcase /></div>
            <div className="flex-1">
                    <h4 className="font-semibold text-slate-800"> New job posted</h4>
          <p className="text-sm text-slate-500">  Frontend Developer at ABC Technologies </p>
                  </div>
             <span className="text-xs text-slate-400"> 8h ago </span>
                   </div>
                <div className="p-5 flex items-center gap-4">
           <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <FiFileText />
                  </div>
            <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">  New application received</h4>
             <p className="text-sm text-slate-500">  MERN Developer received 12 applications </p>
                  </div>
              <span className="text-xs text-slate-400">1d ago </span>
                </div>
              </div></div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
       <h3 className="text-lg font-semibold text-slate-800 mb-5"> Quick Actions</h3>
               <div className="space-y-3">
      <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition text-left">
                  <FiUsers />
                  <span className="font-medium">Manage Users </span>
                </button>
     <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition text-left">
                  <FiBriefcase />
                  <span className="font-medium"> Manage Companies</span>
                </button>
<button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition text-left">
                  <FiFileText />
                  <span className="font-medium">  Manage Jobs </span>
                </button>
<button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition text-left">
                  <FiActivity />
                  <span className="font-medium">  View Reports </span>
                </button>
        </div> </div>
          </div>
        </div>
         </main>
        </div>
  );
};export default AdminDashboard;