"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    customers: 0,
    suppliers: 0,
    items: 0,
    sales: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [customersRes, suppliersRes] = await Promise.all([
        api.get("/customer"),
        api.get("/supplier"),
      ]);

      setStats({
        customers: customersRes.data.data.length,
        suppliers: suppliersRes.data.data.length,
        items: 0,
        sales: 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-black">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Customers</h2>
          <p className="mt-4 text-4xl font-bold text-black">
            {stats.customers}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Suppliers</h2>
          <p className="mt-4 text-4xl font-bold text-black">
            {stats.suppliers}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Items</h2>
          <p className="mt-4 text-4xl font-bold text-black">
            {stats.items}
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Sales</h2>
          <p className="mt-4 text-4xl font-bold text-black">
            ₹{stats.sales}
          </p>
        </div>

      </div>

    </div>
  );
}