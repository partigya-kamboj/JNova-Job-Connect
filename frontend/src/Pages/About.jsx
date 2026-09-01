import React from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiTarget,
  FiZap,
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";
import about5 from "../assets/about5.jpg";
import about2 from "../assets/About2.png";

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0A263C] px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white">
            <p className="text-blue-400 font-semibold uppercase tracking-widest mb-4">
              About JobNova
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Find Your
              <br />
              <span className="text-blue-400">
                Dream Career
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 max-w-xl mb-8">
              JobNova is a modern job platform that connects talented
              professionals with the right career opportunities.
            </p>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-white text-[#0A263C] px-7 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              <FiSearch />
              Explore Jobs
            </Link>
          </div>

          {/* First Image */}
          <div>
            <img
              src={about2}
              alt="JobNova workplace"
              className="w-full h-[330px] md:h-[430px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>


      {/* ================= ABOUT JOBNOVA ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Second Image */}
          <div>
            <img
              src={about5}
              alt="JobNova team"
              className="w-full h-[330px] md:h-[430px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A263C] mb-6">
              Connecting Talent With Opportunity
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              At JobNova, we believe finding the right job should be simple
              and stress-free. Our platform helps job seekers discover
              opportunities that match their skills, interests and career goals.
            </p>

            <p className="text-gray-600 leading-8 mb-7">
              Whether you are a fresh graduate looking for your first
              opportunity or an experienced professional searching for your
              next career move, JobNova makes it easier to explore and apply
              for suitable jobs.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-blue-600 text-xl" />
                <span className="text-gray-700">
                  Easy and user-friendly job search
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-blue-600 text-xl" />
                <span className="text-gray-700">
                  Multiple job categories
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-blue-600 text-xl" />
                <span className="text-gray-700">
                  Simple and smooth application experience
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              JobNova
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A263C]">
              Our Growing Community
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FiBriefcase className="mx-auto text-blue-600 text-3xl mb-3" />

              <h3 className="text-3xl font-bold text-[#0A263C]">
                10K+
              </h3>

              <p className="text-gray-500 mt-1">
                Jobs
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FiUsers className="mx-auto text-blue-600 text-3xl mb-3" />

              <h3 className="text-3xl font-bold text-[#0A263C]">
                500+
              </h3>

              <p className="text-gray-500 mt-1">
                Companies
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FiUsers className="mx-auto text-blue-600 text-3xl mb-3" />

              <h3 className="text-3xl font-bold text-[#0A263C]">
                50K+
              </h3>

              <p className="text-gray-500 mt-1">
                Job Seekers
              </p>
            </div>


            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FiCheckCircle className="mx-auto text-blue-600 text-3xl mb-3" />

              <h3 className="text-3xl font-bold text-[#0A263C]">
                95%
              </h3>

              <p className="text-gray-500 mt-1">
                Satisfaction
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= WHY JOBNOVA ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A263C]">
              Why Choose JobNova?
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We make your job-search journey simple, fast and convenient.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {/* Easy Search */}
            <div className="group border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">

              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A263C] transition">
                <FiSearch className="text-blue-600 text-2xl group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#0A263C] mb-3">
                Easy Job Search
              </h3>

              <p className="text-gray-600 leading-7">
                Find suitable jobs quickly using categories and search
                options.
              </p>

            </div>


            {/* Quick Process */}
            <div className="group border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">

              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A263C] transition">
                <FiZap className="text-blue-600 text-2xl group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#0A263C] mb-3">
                Quick Process
              </h3>

              <p className="text-gray-600 leading-7">
                Explore job details and move towards your next opportunity
                without unnecessary complications.
              </p>

            </div>


            {/* Right Opportunities */}
            <div className="group border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition">

              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0A263C] transition">
                <FiTarget className="text-blue-600 text-2xl group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#0A263C] mb-3">
                Right Opportunities
              </h3>

              <p className="text-gray-600 leading-7">
                Discover opportunities that match your skills and career
                goals.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Simple Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0A263C]">
              How JobNova Works
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-10">

            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#0A263C] text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                01
              </div>

              <h3 className="text-xl font-bold text-[#0A263C] mb-3">
                Search
              </h3>

              <p className="text-gray-600">
                Search for jobs based on your skills, interests and preferred
                category.
              </p>
            </div>


            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#0A263C] text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                02
              </div>

              <h3 className="text-xl font-bold text-[#0A263C] mb-3">
                Explore
              </h3>

              <p className="text-gray-600">
                Explore job descriptions, requirements and company details.
              </p>
            </div>


            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#0A263C] text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                03
              </div>

              <h3 className="text-xl font-bold text-[#0A263C] mb-3">
                Apply
              </h3>

              <p className="text-gray-600">
                Apply for the job that best matches your career goals.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#0A263C] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Ready to Find Your Next Opportunity?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Your next career move could be just one search away.
          </p>

          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-white text-[#0A263C] px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            <FiSearch />
            Find Jobs Now
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;