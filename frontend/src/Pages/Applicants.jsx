import React, { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiMail,
  FiPhone,
  FiEye,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiUsers,
  FiMoreVertical,
} from "react-icons/fi";

const applicantsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "+91 98765 43210",
    position: "Frontend Developer",
    location: "Mohali, Punjab",
    experience: "2 Years",
    appliedDate: "Sep 3, 2026",
    status: "Under Review",
    initials: "RS",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    phone: "+91 98765 12345",
    position: "React Developer",
    location: "Gurgaon, Haryana",
    experience: "3 Years",
    appliedDate: "Sep 2, 2026",
    status: "Shortlisted",
    initials: "PV",
  },
  {
    id: 3,
    name: "Aman Kumar",
    email: "aman.kumar@gmail.com",
    phone: "+91 98765 67890",
    position: "UI/UX Designer",
    location: "Chandigarh, India",
    experience: "1 Year",
    appliedDate: "Sep 1, 2026",
    status: "Interview",
    initials: "AK",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha.singh@gmail.com",
    phone: "+91 98765 24680",
    position: "Frontend Developer",
    location: "Noida, India",
    experience: "2 Years",
    appliedDate: "Aug 30, 2026",
    status: "Under Review",
    initials: "NS",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    phone: "+91 98765 13579",
    position: "React Developer",
    location: "Delhi, India",
    experience: "4 Years",
    appliedDate: "Aug 28, 2026",
    status: "Rejected",
    initials: "AM",
  },
  {
    id: 6,
    name: "Simran Kaur",
    email: "simran.kaur@gmail.com",
    phone: "+91 98765 97531",
    position: "UI/UX Designer",
    location: "Amritsar, Punjab",
    experience: "2 Years",
    appliedDate: "Aug 27, 2026",
    status: "Shortlisted",
    initials: "SK",
  },
];

const tabs = [
  "All Applicants",
  "Under Review",
  "Shortlisted",
  "Interview",
  "Rejected",
];

const statusStyles = {
  "Under Review": {
    bg: "bg-blue-50",
    text: "text-blue-600",
    icon: <FiClock />,
  },

  Shortlisted: {
    bg: "bg-green-50",
    text: "text-green-600",
    icon: <FiCheckCircle />,
  },

  Interview: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    icon: <FiCalendar />,
  },

  Rejected: {
    bg: "bg-red-50",
    text: "text-red-600",
    icon: <FiXCircle />,
  },
};

const Applicants = () => {
  const [activeTab, setActiveTab] = useState("All Applicants");
  const [search, setSearch] = useState("");

  const filteredApplicants = applicantsData.filter((applicant) => {
    const matchesTab =
      activeTab === "All Applicants" ||
      applicant.status === activeTab;

    const matchesSearch =
      applicant.name.toLowerCase().includes(search.toLowerCase()) ||
      applicant.position.toLowerCase().includes(search.toLowerCase()) ||
      applicant.email.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F4F8FF] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
              RECRUITMENT DASHBOARD
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#101828] md:text-4xl">
              Applicants
            </h1>

            <p className="mt-2 text-slate-500">
              Review candidates and manage your hiring process.
            </p>
          </div>

          {/* Search */}

          <div className="relative w-full md:w-[330px]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search applicants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-[#101828] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <StatCard
            icon={<FiUsers />}
            title="Total Applicants"
            value="156"
            description="+18 this month"
          />

          <StatCard
            icon={<FiClock />}
            title="Under Review"
            value="48"
            description="Needs review"
          />

          <StatCard
            icon={<FiCheckCircle />}
            title="Shortlisted"
            value="32"
            description="Selected candidates"
          />

          <StatCard
            icon={<FiCalendar />}
            title="Interviews"
            value="14"
            description="Upcoming"
          />

        </div>

        {/* ================= MAIN CARD ================= */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Tabs */}

          <div className="border-b border-slate-100 px-4 pt-5 md:px-6">

            <div className="flex gap-2 overflow-x-auto pb-4">

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

          </div>

          {/* Result Header */}

          <div className="flex flex-col justify-between gap-4 px-4 py-5 sm:flex-row sm:items-center md:px-6">

            <div>
              <h2 className="text-lg font-bold text-[#101828]">
                {activeTab}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {filteredApplicants.length} applicants found
              </p>
            </div>

            <button className="w-fit rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
              Latest First
            </button>

          </div>

          {/* ================= DESKTOP TABLE ================= */}

          <div className="hidden overflow-x-auto md:block">

            <table className="w-full">

              <thead className="border-y border-slate-100 bg-[#F8FAFC]">

                <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">

                  <th className="px-6 py-4">
                    Candidate
                  </th>

                  <th className="px-6 py-4">
                    Position
                  </th>

                  <th className="px-6 py-4">
                    Experience
                  </th>

                  <th className="px-6 py-4">
                    Applied
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-100">

                {filteredApplicants.length > 0 ? (
                  filteredApplicants.map((applicant) => (
                    <ApplicantRow
                      key={applicant.id}
                      applicant={applicant}
                    />
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-16 text-center"
                    >
                      <EmptyState />
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

          {/* ================= MOBILE CARDS ================= */}

          <div className="space-y-4 p-4 md:hidden">

            {filteredApplicants.length > 0 ? (
              filteredApplicants.map((applicant) => (
                <ApplicantCard
                  key={applicant.id}
                  applicant={applicant}
                />
              ))
            ) : (
              <EmptyState />
            )}

          </div>

        </div>

        {/* ================= BOTTOM INFO ================= */}

        <div className="mt-8 rounded-2xl border border-blue-100 bg-[#E8F1FF] p-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
              <FiUsers size={23} />
            </div>

            <div>
              <h3 className="font-bold text-[#101828]">
                Find the right candidate
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Review applications, shortlist candidates and schedule
                interviews to build your perfect team.
              </p>
            </div>

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

        <FiMoreVertical className="text-slate-300 transition group-hover:text-blue-400" />

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
   DESKTOP APPLICANT ROW
========================================================= */

const ApplicantRow = ({ applicant }) => {
  const status = statusStyles[applicant.status];

  return (
    <tr className="group transition hover:bg-[#F8FBFF]">

      {/* Candidate */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
            {applicant.initials}
          </div>

          <div className="min-w-0">

            <h3 className="font-semibold text-[#101828] transition group-hover:text-blue-600">
              {applicant.name}
            </h3>

            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
              <FiMail />
              {applicant.email}
            </p>

          </div>

        </div>

      </td>

      {/* Position */}

      <td className="px-6 py-5">

        <p className="font-semibold text-slate-700">
          {applicant.position}
        </p>

        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
          <FiMapPin />
          {applicant.location}
        </p>

      </td>

      {/* Experience */}

      <td className="px-6 py-5">

        <p className="text-sm font-medium text-slate-600">
          {applicant.experience}
        </p>

      </td>

      {/* Applied Date */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <FiCalendar />
          {applicant.appliedDate}
        </div>

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${status.bg} ${status.text}`}
        >
          {status.icon}
          {applicant.status}
        </span>

      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex justify-end gap-2">

          <button
            title="View Applicant"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <FiEye />
          </button>

          <button
            title="More Options"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <FiMoreVertical />
          </button>

        </div>

      </td>

    </tr>
  );
};


/* =========================================================
   MOBILE APPLICANT CARD
========================================================= */

const ApplicantCard = ({ applicant }) => {
  const status = statusStyles[applicant.status];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md">

      {/* Top */}

      <div className="flex items-start justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
            {applicant.initials}
          </div>

          <div>

            <h3 className="font-bold text-[#101828]">
              {applicant.name}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {applicant.email}
            </p>

          </div>

        </div>

        <button className="text-slate-400 hover:text-blue-600">
          <FiMoreVertical />
        </button>

      </div>

      {/* Position */}

      <div className="mt-5 rounded-xl bg-[#F8FAFC] p-4">

        <p className="text-sm font-semibold text-[#101828]">
          {applicant.position}
        </p>

        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">

          <span className="flex items-center gap-1">
            <FiMapPin />
            {applicant.location}
          </span>

          <span className="flex items-center gap-1">
            <FiBriefcase />
            {applicant.experience}
          </span>

        </div>

      </div>

      {/* Details */}

      <div className="mt-4 grid grid-cols-2 gap-3">

        <div>
          <p className="text-xs text-slate-400">
            Applied
          </p>

          <p className="mt-1 text-sm font-medium text-slate-600">
            {applicant.appliedDate}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Status
          </p>

          <span
            className={`mt-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.text}`}
          >
            {status.icon}
            {applicant.status}
          </span>
        </div>

      </div>

      {/* Actions */}

      <div className="mt-5 flex gap-2">

        <button
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <FiEye />
          View
        </button>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <FiMoreVertical />
        </button>

      </div>

    </div>
  );
};


/* =========================================================
   EMPTY STATE
========================================================= */

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">

      <div className="mb-4 rounded-full bg-blue-50 p-5">
        <FiUsers className="text-2xl text-blue-400" />
      </div>

      <h3 className="text-lg font-semibold text-slate-700">
        No applicants found
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        Try changing your search or selected filter.
      </p>

    </div>
  );
};

export default Applicants;