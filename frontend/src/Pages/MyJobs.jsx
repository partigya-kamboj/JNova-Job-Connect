import React, { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiClock,
  FiBookmark,
  FiMoreVertical,
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiXCircle,
  FiUsers,
} from "react-icons/fi";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Gurgaon, India",
    type: "Full Time",
    salary: "₹6 - 10 LPA",
    status: "Applied",
    date: "Sep 2, 2026",
    logo: "G",
    logoBg: "bg-blue-600",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Microsoft",
    location: "Noida, India",
    type: "Full Time",
    salary: "₹5 - 8 LPA",
    status: "Saved",
    date: "Sep 1, 2026",
    logo: "M",
    logoBg: "bg-blue-500",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Amazon",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "₹8 - 14 LPA",
    status: "Interview",
    date: "Aug 29, 2026",
    logo: "A",
    logoBg: "bg-orange-500",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Remote",
    type: "Full Time",
    salary: "₹5 - 9 LPA",
    status: "Rejected",
    date: "Aug 25, 2026",
    logo: "A",
    logoBg: "bg-red-500",
  },
];

const tabs = ["All Jobs", "Applied", "Saved", "Interview", "Rejected"];

const statusStyles = {
  Applied: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    icon: <FiCheckCircle />,
  },
  Saved: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    icon: <FiBookmark />,
  },
  Interview: {
    bg: "bg-green-50",
    text: "text-green-600",
    icon: <FiCalendar />,
  },
  Rejected: {
    bg: "bg-red-50",
    text: "text-red-600",
    icon: <FiXCircle />,
  },
};

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState("All Jobs");
  const [search, setSearch] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    const matchesTab =
      activeTab === "All Jobs" || job.status === activeTab;

    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F4F8FF] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
              JOB DASHBOARD
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#101828] md:text-4xl">
              My Jobs
            </h1>

            <p className="mt-2 text-slate-500">
              Manage your saved jobs and track your applications.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[330px]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search jobs or companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-[#101828] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <StatCard
            icon={<FiBriefcase />}
            title="Applied Jobs"
            value="12"
            description="+3 this month"
          />

          <StatCard
            icon={<FiBookmark />}
            title="Saved Jobs"
            value="08"
            description="Ready to apply"
          />

          <StatCard
            icon={<FiCalendar />}
            title="Interviews"
            value="03"
            description="Upcoming"
          />

          <StatCard
            icon={<FiUsers />}
            title="Profile Views"
            value="24"
            description="+18% this week"
          />

        </div>

        {/* ================= MAIN CARD ================= */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">

          {/* Tabs */}
          <div className="mb-6 flex gap-2 overflow-x-auto border-b border-slate-100 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Result Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#101828]">
                {activeTab}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {filteredJobs.length} jobs found
              </p>
            </div>

            <button className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:block">
              Latest First
            </button>
          </div>

          {/* ================= JOBS ================= */}
          <div className="space-y-4">

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">

                <div className="mb-4 rounded-full bg-blue-50 p-5">
                  <FiBriefcase className="text-2xl text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-slate-700">
                  No jobs found
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Try changing your search or selected filter.
                </p>

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};


/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({ icon, title, value, description }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md">

      <div className="mb-4 flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

        <FiArrowUpRight className="text-slate-300 transition group-hover:text-blue-400" />

      </div>

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <div className="mt-1 flex items-end gap-2">

        <h3 className="text-2xl font-bold text-[#101828]">
          {value}
        </h3>

        <span className="mb-1 text-xs text-slate-400">
          {description}
        </span>

      </div>

    </div>
  );
};


/* =========================================================
   JOB CARD
========================================================= */

const JobCard = ({ job }) => {
  const status = statusStyles[job.status];

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-[1px] hover:border-blue-200 hover:shadow-lg">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* Company Logo */}
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-xl font-bold text-white shadow-sm ${job.logoBg}`}
        >
          {job.logo}
        </div>

        {/* Job Information */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-2">

            <h3 className="text-lg font-bold text-[#101828] transition group-hover:text-blue-600">
              {job.title}
            </h3>

            <span
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.text}`}
            >
              {status.icon}
              {job.status}
            </span>

          </div>

          <p className="mt-1 font-medium text-slate-600">
            {job.company}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">

            <span className="flex items-center gap-1.5">
              <FiMapPin />
              {job.location}
            </span>

            <span className="flex items-center gap-1.5">
              <FiBriefcase />
              {job.type}
            </span>

            <span className="font-semibold text-slate-600">
              {job.salary}
            </span>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-col sm:items-end sm:border-0 sm:pt-0">

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <FiClock />
            {job.date}
          </div>

          <div className="flex items-center gap-2">

            <button
              className="flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              View Job
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              title="More Options"
            >
              <FiMoreVertical />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MyJobs;