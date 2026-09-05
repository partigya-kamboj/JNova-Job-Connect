import React, { useState } from "react";
import {
  FiUser,
  FiLock,
  FiBell,
  FiCreditCard,
  FiMapPin,
  FiGlobe,
  FiShield,
  FiSave,
  FiChevronRight,
} from "react-icons/fi";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const [notifications, setNotifications] = useState({
    newApplicants: true,
    jobAlerts: true,
    emailUpdates: true,
    marketing: false,
  });

  const tabs = [
    {
      name: "Account",
      icon: <FiUser />,
    },
    {
      name: "Security",
      icon: <FiLock />,
    },
    {
      name: "Notifications",
      icon: <FiBell />,
    },
    {
      name: "Billing",
      icon: <FiCreditCard />,
    },
  ];

  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F8FF] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Company Dashboard
          </p>

          <h1 className="text-3xl font-bold text-[#101828] sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 text-base text-[#64748B]">
            Manage your account, security, notifications and billing preferences.
          </p>
        </div>

        {/* Main Settings Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Sidebar */}
          <div className="h-fit rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm">

            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                  activeTab === tab.name
                    ? "bg-[#E8F1FF] text-blue-600"
                    : "text-[#475467] hover:bg-[#F4F8FF]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </span>

                <FiChevronRight
                  className={`text-sm ${
                    activeTab === tab.name
                      ? "text-blue-600"
                      : "text-[#98A2B3]"
                  }`}
                />
              </button>
            ))}

            {/* Additional Links */}
            <div className="mt-4 border-t border-[#E5E7EB] pt-4">

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[#475467] transition hover:bg-[#F4F8FF]">
                <FiMapPin className="text-lg" />
                <span className="font-medium">Company Location</span>
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[#475467] transition hover:bg-[#F4F8FF]">
                <FiGlobe className="text-lg" />
                <span className="font-medium">Language</span>
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[#475467] transition hover:bg-[#F4F8FF]">
                <FiShield className="text-lg" />
                <span className="font-medium">Privacy</span>
              </button>

            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">

            {/* ACCOUNT */}
            {activeTab === "Account" && (
              <div className="space-y-6">

                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-[#101828]">
                      Account Information
                    </h2>

                    <p className="mt-1 text-sm text-[#64748B]">
                      Update your company account details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#344054]">
                        Company Name
                      </label>

                      <input
                        type="text"
                        defaultValue="JobNova"
                        className="w-full rounded-xl border border-[#D0D5DD] bg-white px-4 py-3 text-[#101828] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#344054]">
                        Company Email
                      </label>

                      <input
                        type="email"
                        defaultValue="company@jobnova.com"
                        className="w-full rounded-xl border border-[#D0D5DD] bg-white px-4 py-3 text-[#101828] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#344054]">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        defaultValue="+91 98765 43210"
                        className="w-full rounded-xl border border-[#D0D5DD] bg-white px-4 py-3 text-[#101828] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#344054]">
                        Website
                      </label>

                      <input
                        type="text"
                        defaultValue="www.jobnova.com"
                        className="w-full rounded-xl border border-[#D0D5DD] bg-white px-4 py-3 text-[#101828] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-[#344054]">
                        Company Address
                      </label>

                      <textarea
                        rows="4"
                        defaultValue="Chandigarh, India"
                        className="w-full resize-none rounded-xl border border-[#D0D5DD] bg-white px-4 py-3 text-[#101828] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                      <FiSave />
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-[#101828]">
                    Delete Account
                  </h2>

                  <p className="mt-1 text-sm text-[#64748B]">
                    Permanently delete your company account and all associated data.
                  </p>

                  <button className="mt-5 rounded-xl border border-red-300 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50">
                    Delete Account
                  </button>
                </div>

              </div>
            )}

            {/* SECURITY */}
            {activeTab === "Security" && (
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#101828]">
                    Security
                  </h2>

                  <p className="mt-1 text-sm text-[#64748B]">
                    Keep your company account secure.
                  </p>
                </div>

                <div className="space-y-5">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#344054]">
                      Current Password
                    </label>

                    <input
                      type="password"
                      placeholder="Enter current password"
                      className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#344054]">
                      New Password
                    </label>

                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#344054]">
                      Confirm New Password
                    </label>

                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                      <FiLock />
                      Update Password
                    </button>
                  </div>

                </div>

                {/* Two Factor */}
                <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[#101828]">
                        Two-Factor Authentication
                      </h3>

                      <p className="mt-1 text-sm text-[#64748B]">
                        Add an extra layer of security to your account.
                      </p>
                    </div>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                      Enable
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* NOTIFICATIONS */}
            {activeTab === "Notifications" && (
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#101828]">
                    Notification Preferences
                  </h2>

                  <p className="mt-1 text-sm text-[#64748B]">
                    Choose which notifications you want to receive.
                  </p>
                </div>

                <div className="divide-y divide-[#E5E7EB]">

                  {[
                    {
                      key: "newApplicants",
                      title: "New Applicants",
                      description:
                        "Get notified when candidates apply to your jobs.",
                    },
                    {
                      key: "jobAlerts",
                      title: "Job Alerts",
                      description:
                        "Receive updates about your posted jobs.",
                    },
                    {
                      key: "emailUpdates",
                      title: "Email Updates",
                      description:
                        "Receive important account updates by email.",
                    },
                    {
                      key: "marketing",
                      title: "Marketing & Promotions",
                      description:
                        "Receive JobNova news, offers and promotional updates.",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between gap-4 py-5"
                    >
                      <div>
                        <h3 className="font-semibold text-[#101828]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-[#64748B]">
                          {item.description}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          handleNotificationChange(item.key)
                        }
                        className={`relative h-6 w-11 flex-shrink-0 rounded-full transition ${
                          notifications[item.key]
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
                            notifications[item.key]
                              ? "left-6"
                              : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}

                </div>

                <div className="mt-6 flex justify-end">
                  <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                    <FiSave />
                    Save Preferences
                  </button>
                </div>

              </div>
            )}

            {/* BILLING */}
            {activeTab === "Billing" && (
              <div className="space-y-6">

                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">

                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-[#101828]">
                      Billing & Subscription
                    </h2>

                    <p className="mt-1 text-sm text-[#64748B]">
                      Manage your subscription and payment details.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-[#E8F1FF] p-5">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                      <div>
                        <p className="text-sm font-medium text-blue-600">
                          CURRENT PLAN
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-[#101828]">
                          Free Plan
                        </h3>

                        <p className="mt-1 text-sm text-[#64748B]">
                          Suitable for getting started with JobNova.
                        </p>
                      </div>

                      <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                        Upgrade Plan
                      </button>

                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-4 font-semibold text-[#101828]">
                      Payment Method
                    </h3>

                    <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] p-4">

                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E8F1FF] text-xl text-blue-600">
                          <FiCreditCard />
                        </div>

                        <div>
                          <p className="font-semibold text-[#101828]">
                            No payment method
                          </p>

                          <p className="text-sm text-[#64748B]">
                            Add a payment method to continue.
                          </p>
                        </div>
                      </div>

                      <button className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-[#E8F1FF]">
                        Add
                      </button>

                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;