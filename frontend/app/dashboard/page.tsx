'use client';

import { useSession } from "../../context/SessionContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, isAuthenticated } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/(auth)/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b border-teal-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                WorkFlow HRMS
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Welcome, {user?.name || user?.email}
              </p>
            </div>
            <button
              onClick={() => {}}
              className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
            >
              Profile
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Attendance Card */}
          <Link href="/attendance">
            <div className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg dark:bg-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Attendance
                  </p>
                  <p className="mt-2 text-2xl font-bold text-teal-600 dark:text-teal-400">
                    Present
                  </p>
                </div>
                <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900">
                  <svg
                    className="h-6 w-6 text-teal-600 dark:text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Leave Card */}
          <Link href="/leave">
            <div className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg dark:bg-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Leave Balance
                  </p>
                  <p className="mt-2 text-2xl font-bold text-orange-600 dark:text-orange-400">
                    12 days
                  </p>
                </div>
                <div className="rounded-full bg-orange-100 p-3 dark:bg-orange-900">
                  <svg
                    className="h-6 w-6 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Documents Card */}
          <Link href="/documents">
            <div className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg dark:bg-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Documents
                  </p>
                  <p className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                    5/7
                  </p>
                </div>
                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Payslip Card */}
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Latest Payslip
                </p>
                <p className="mt-2 text-2xl font-bold text-purple-600 dark:text-purple-400">
                  June 2024
                </p>
              </div>
              <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
            Quick Actions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <button className="rounded-lg border-2 border-teal-200 bg-white px-4 py-3 text-center font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-teal-700 dark:bg-slate-700 dark:text-teal-400 dark:hover:bg-slate-600">
              Clock In
            </button>
            <button className="rounded-lg border-2 border-orange-200 bg-white px-4 py-3 text-center font-medium text-orange-600 transition-colors hover:bg-orange-50 dark:border-orange-700 dark:bg-slate-700 dark:text-orange-400 dark:hover:bg-slate-600">
              Request Leave
            </button>
            <button className="rounded-lg border-2 border-blue-200 bg-white px-4 py-3 text-center font-medium text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-700 dark:bg-slate-700 dark:text-blue-400 dark:hover:bg-slate-600">
              Upload Document
            </button>
            <button className="rounded-lg border-2 border-purple-200 bg-white px-4 py-3 text-center font-medium text-purple-600 transition-colors hover:bg-purple-50 dark:border-purple-700 dark:bg-slate-700 dark:text-purple-400 dark:hover:bg-slate-600">
              View Payslip
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
