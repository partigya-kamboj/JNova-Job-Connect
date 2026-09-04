import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FiArrowLeft, FiBriefcase,FiMapPin,FiDollarSign,FiCalendar,FiFileText,FiPlus,FiCheckCircle,} from "react-icons/fi";
const PostJob = () => {
  const navigate = useNavigate();
   const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "Full Time",
    salary: "",
    experience: "",
    skills: "",
    description: "",
    requirements: "",
    deadline: "",
  });
const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    const existingJobs =
      JSON.parse(localStorage.getItem("companyJobs")) || [];
      const newJob = {
      id: Date.now(),
      ...formData,
      status: "Active",
      applicants: 0,
      postedDate: new Date().toLocaleDateString(),
    };
     localStorage.setItem(
      "companyJobs",
      JSON.stringify([...existingJobs, newJob])
    );
    setMessage("Job posted successfully! 🎉");
    setTimeout(() => {
      navigate("/company-dashboard");
    }, 1500);
  };
return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#0A263C] text-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
<Link to="/company-dashboard" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition mb-5"> <FiArrowLeft />Back to Dashboard</Link>
 <h1 className="text-2xl md:text-3xl font-bold">Post a New Job</h1>
<p className="text-slate-300 mt-2">Find the right candidate for your company. </p></div>
      </div>
      <main className="max-w-6xl mx-auto px-5 md:px-8 py-8">
        {message && (
          <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl">
            <FiCheckCircle size={22} />
            <span className="font-medium">{message}</span>
          </div>
        )}
<form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <FiBriefcase size={22} />
              </div><div>
                <h2 className="text-xl font-bold text-[#0A263C]"> Basic Information</h2>
<p className="text-sm text-slate-500">Enter the basic details of the job.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Title * </label>
       <input type="text" name="jobTitle" value={formData.jobTitle}onChange={handleChange} placeholder="e.g. Frontend Developer" required className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. JobNova Technologies"
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location *</label>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Mohali, Punjab" required className="w-full border border-slate-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
                </div>
              </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Job Type *</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white">
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2"> Salary *</label>
         <div className="relative">
                  <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" name="salary" value={formData.salary} onChange={handleChange}placeholder="e.g. ₹5 - ₹8 LPA" required className="w-full border border-slate-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">  Experience *
                </label>
       <input type="text" name="experience"value={formData.experience}onChange={handleChange}placeholder="e.g. 1-3 Years" required className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
</div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <FiFileText size={22} />
              </div><div>
                <h2 className="text-xl font-bold text-[#0A263C]"> Skills & Requirements </h2>
        <p className="text-sm text-slate-500"> Tell candidates what you are looking for.</p>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Required Skills *</label>
<input type="text" name="skills"value={formData.skills}onChange={handleChange}placeholder="e.g. React, JavaScript, HTML, CSS"required className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
              <p className="text-xs text-slate-400 mt-2">  Separate multiple skills with commas.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Job Requirements *</label>
              <textarea name="requirements" value={formData.requirements}onChange={handleChange}placeholder="Enter the qualifications and requirements..." required rows="5"  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
            </div> </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                <FiFileText size={22} />
              </div><div>
                <h2 className="text-xl font-bold text-[#0A263C]">  Job Description</h2>
                 <p className="text-sm text-slate-500"> Describe the role and responsibilities.</p>
              </div>
            </div>
<textarea name="description"value={formData.description} onChange={handleChange}placeholder="Write a detailed description of the job..."required rows="7" className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/> </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                <FiCalendar size={22} />
              </div><div>
                <h2 className="text-xl font-bold text-[#0A263C]">Application Deadline</h2>
       <p className="text-sm text-slate-500"> Select the last date for applications.</p>
              </div>
            </div>
<input type="date" name="deadline" value={formData.deadline} onChange={handleChange}required className="w-full md:w-1/2 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />  </div>
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <Link to="/company-dashboard" className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium text-center hover:bg-slate-100 transition" >Cancel</Link>
 <button type="submit"className="flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition" ><FiPlus /> Post Job</button></div>
        </form>
      </main>
    </div>
  );
};

export default PostJob;