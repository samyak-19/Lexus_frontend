"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import toast from "react-hot-toast";
import CompanyModal from "@/components/CompanyModal";

export default function CompanyPage() {
  const router = useRouter();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const fetchCompanies = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/company", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCompanies(data.data);
    } catch (error) {
      toast.error("Failed to load companies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this company?")) return;

    try {
      const token = localStorage.getItem("token");

      const { data } = await api.delete(`/company/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(data.message);

      fetchCompanies();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete failed."
      );
    }
  };

  const handleOpenCompany = (company) => {
    localStorage.setItem("companyId", company.id);
    localStorage.setItem("companyName", company.name);

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 text-black">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Select Company
        </h1>

        <button
          onClick={() => {
            setSelectedCompany(null);
            setOpenModal(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Create Company
        </button>

      </div>

      <CompanyModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedCompany(null);
        }}
        onSuccess={fetchCompanies}
        company={selectedCompany}
      />

      {loading ? (
        <p>Loading...</p>
      ) : companies.length === 0 ? (
        <div className="bg-white p-10 rounded-xl text-center">
          <h2 className="text-2xl font-semibold">
            No Companies Found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first company.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {companies.map((company) => (

            <div
              key={company.id}
              className="bg-white rounded-xl shadow p-6"
            >

              <h2 className="text-xl font-bold">
                {company.name}
              </h2>

              <p className="mt-2 text-gray-600">
                {company.state}
              </p>

              <p className="text-sm mt-1">
                GST: {company.gstNumber || "N/A"}
              </p>

              <div className="mt-6 flex flex-col gap-3">

                <button
                  onClick={() => handleOpenCompany(company)}
                  className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Open Company
                </button>

                <div className="flex gap-3">

                  <button
                    onClick={() => {
                      setSelectedCompany(company);
                      setOpenModal(true);
                    }}
                    className="flex-1 bg-yellow-500 text-white py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(company.id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}