import React, { useState } from "react";
import { FiEdit,FiEye,FiCheckCircle,FiBriefcase, FiUsers, FiMapPin,FiMail,FiPhone, FiGlobe, FiCalendar, FiLinkedin,FiArrowUpRight, FiStar,} from "react-icons/fi";
import logoImage from "../assets/JobNova.png";
const CompanyProfile = () => {
const [showPreview, setShowPreview] = useState(false);
const jobs = [
{
 id: 1,
      title: "Frontend Developer",
      location: "Mohali, Punjab",
      type: "Full Time",
      applicants: 24,
    },
    {
      id: 2,
      title: "React Developer",
      location: "Gurgaon, Haryana",
      type: "Full Time",
      applicants: 18,
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Internship",
      applicants: 12,
    },
  ];
const benefits = [
    "Flexible Working Hours",
    "Work From Home",
    "Learning & Development",
    "Health Insurance",
    "Performance Bonuses",
    "Friendly Work Environment",
  ];
  return (
    <div className="min-h-screen bg-[#F4F8FF] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"> <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">COMPANY DASHBOARD </p>
        <h1 className="text-3xl font-bold tracking-tight text-[#101828] md:text-4xl"></h1>Company Profile</h1>
        <p className="mt-2 text-slate-500">Manage your company information and attract the right candidates </p></div>
        <div className="flex gap-3">
          <button onClick={() => setShowPreview(!showPreview)} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"  >
              <FiEye />
              {showPreview ? "Hide Preview" : "Preview"} </button>
 <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              <FiEdit /> Edit Profile</button></div></div>
<div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <div className="h-36 bg-gradient-to-r from-blue-300 to-blue-600 md:h-44">
            <div className="h-full bg-white/5" /> </div>
<div className="px-5 pb-6 md:px-8">
  <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
    <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end">
 <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-4 border-white bg-white p-1 shadow-md">
  <img
    src={logoImage}
    alt="JobNova Logo"
    className="h-full w-full object-contain scale-110"
  />
</div>
                <div className="pb-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h2 className="text-2xl font-bold text-[#101828]">
                      JobNova
                    </h2>

                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      <FiCheckCircle />
                      Verified
                    </span>

                  </div>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Find Jobs. Build Tomorrow.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= STATS ================= */}

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <StatCard
            icon={<FiBriefcase />}
            title="Active Jobs"
            value="8"
          />

          <StatCard
            icon={<FiUsers />}
            title="Total Applicants"
            value="156"
          />

          <StatCard
            icon={<FiCheckCircle />}
            title="Hired"
            value="24"
          />

          <StatCard
            icon={<FiStar />}
            title="Profile Rating"
            value="4.8"
          />

        </div>

        {/* ================= PREVIEW ================= */}

        {showPreview && (
          <div className="mb-8 rounded-2xl border border-blue-100 bg-[#E8F1FF] p-5 md:p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FiEye />
              </div>

              <div>
                <h3 className="font-bold text-[#101828]">
                  Company Profile Preview
                </h3>

                <p className="text-sm text-slate-600">
                  This is how candidates can view your company profile.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* ================= LEFT ================= */}

          <div className="space-y-6 lg:col-span-2">

            {/* About */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

              <div className="mb-5 flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold text-[#101828]">
                    About JobNova
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Company overview
                  </p>
                </div>

                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                  <FiEdit />
                </button>

              </div>

              <p className="text-sm leading-7 text-slate-600">
                JobNova is a modern job platform designed to connect talented
                professionals with the right career opportunities. We help
                companies discover skilled candidates and build successful
                teams through a simple and efficient hiring experience.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our goal is to make the job search and recruitment process
                easier, faster and more accessible for everyone.
              </p>

            </section>

            {/* Open Positions */}

            <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>
                  <h3 className="text-xl font-bold text-[#101828]">
                    Open Positions
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Current opportunities at JobNova
                  </p>
                </div>

                <a
                  href="/my-jobs"
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View All
                  <FiArrowUpRight />
                </a>

              </div>

              <div className="divide-y divide-slate-100">

                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 transition hover:bg-[#F8FBFF] md:p-6"
                  >

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <FiBriefcase size={21} />
                        </div>

                        <div>

                          <h4 className="font-bold text-[#101828] transition hover:text-blue-600">
                            {job.title}
                          </h4>

                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">

                            <span className="flex items-center gap-1">
                              <FiMapPin />
                              {job.location}
                            </span>

                            <span className="flex items-center gap-1">
                              <FiBriefcase />
                              {job.type}
                            </span>

                          </div>

                        </div>

                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">

                        <div>
                          <p className="text-xs text-slate-400">
                            Applicants
                          </p>

                          <p className="mt-1 font-bold text-[#101828]">
                            {job.applicants}
                          </p>
                        </div>

                        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                          <FiArrowUpRight />
                        </button>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </section>

            {/* Benefits */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

              <div className="mb-6">

                <h3 className="text-xl font-bold text-[#101828]">
                  Why Work With Us?
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Benefits and perks
                </p>

              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F8FAFC] p-4 transition hover:border-blue-100 hover:bg-blue-50"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <FiCheckCircle />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {benefit}
                    </span>

                  </div>
                ))}

              </div>

            </section>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-6">

            {/* Company Details */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-5">

                <h3 className="text-xl font-bold text-[#101828]">
                  Company Details
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Basic information
                </p>

              </div>

              <div className="space-y-5">

                <InfoItem
                  icon={<FiBriefcase />}
                  label="Industry"
                  value="Information Technology"
                />

                <InfoItem
                  icon={<FiUsers />}
                  label="Company Size"
                  value="51 - 200 Employees"
                />

                <InfoItem
                  icon={<FiCalendar />}
                  label="Founded"
                  value="2024"
                />

                <InfoItem
                  icon={<FiMapPin />}
                  label="Headquarters"
                  value="Mohali, Punjab, India"
                />

              </div>

            </section>

            {/* Contact */}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-5">

                <h3 className="text-xl font-bold text-[#101828]">
                  Contact Information
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  How candidates can reach you
                </p>

              </div>

              <div className="space-y-4">

                <ContactItem
                  icon={<FiMail />}
                  value="careers@jobnova.com"
                />

                <ContactItem
                  icon={<FiPhone />}
                  value="+91 98765 43210"
                />

                <ContactItem
                  icon={<FiGlobe />}
                  value="www.jobnova.com"
                />

                <ContactItem
                  icon={<FiLinkedin />}
                  value="linkedin.com/company/jobnova"
                />

              </div>

            </section>

            {/* Profile Strength */}

            <section className="rounded-2xl border border-blue-100 bg-[#E8F1FF] p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold text-blue-600">
                    PROFILE STRENGTH
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-[#101828]">
                    85%
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FiCheckCircle size={22} />
                </div>

              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">

                <div className="h-full w-[85%] rounded-full bg-blue-600" />

              </div>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Complete your company profile to attract more qualified
                candidates.
              </p>

              <button className="mt-4 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Complete Profile
              </button>

            </section>

          </div>

        </div>

      </div>
    </div>
  );
};


/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md">

      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-bold text-[#101828]">
        {value}
      </h3>

    </div>
  );
};


/* =========================================================
   INFO ITEM
========================================================= */

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700">
          {value}
        </p>
      </div>

    </div>
  );
};


/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ icon, value }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] p-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="break-all text-sm font-medium text-slate-600">
        {value}
      </p>

    </div>
  );
};

export default CompanyProfile;
