"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    setCompanyName(localStorage.getItem("companyName") || "");
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("companyId");
    localStorage.removeItem("companyName");

    router.push("/login");
  };


  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white">

        <div className="border-b border-slate-700 p-6">

          <h1 className="text-2xl font-bold">
            Smart ERP
          </h1>

          <p className="text-sm text-slate-400 mt-2">
  {companyName}
</p>

        </div>

        <nav className="p-4 space-y-2">

          <Link
            href="/dashboard"
            className="block rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            🏠 Dashboard
          </Link>

          <div className="pt-4">

            <h2 className="px-4 text-xs uppercase text-slate-500">
              Masters
            </h2>

            <Link
              href="/dashboard/masters/customers"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800"
            >
              👤 Customers
            </Link>

            <Link
              href="/dashboard/masters/suppliers"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800"
            >
              🚚 Suppliers
            </Link>

            <Link
              href="/dashboard/masters/items"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800"
            >
              📦 Items
            </Link>

          </div>

          <div className="pt-4">

            <h2 className="px-4 text-xs uppercase text-slate-500">
              Transactions
            </h2>

            <Link
              href="/dashboard/transactions/sales"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800"
            >
              💰 Sales
            </Link>

            <Link
              href="/dashboard/transactions/purchase"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800"
            >
              🛒 Purchase
            </Link>

          </div>

          <div className="pt-4">

            <h2 className="px-4 text-xs uppercase text-slate-500">
              Reports
            </h2>

            <Link
              href="/dashboard/reports"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800"
            >
              📊 Reports
            </Link>

          </div>

        </nav>

        <div className="absolute bottom-5 left-4 right-4">

          <button
            onClick={logout}
            className="w-30 rounded-lg bg-red-600 py-3 hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </aside>

      {/* Main */}
      <main className="flex-1 bg-gray-100">

        {children}

      </main>

    </div>
  );
}