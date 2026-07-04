"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import toast from "react-hot-toast";
import SupplierModal from "@/components/SupplierModal";

export default function SupplierPage() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const fetchSuppliers = async () => {
    try {
      const { data } = await api.get("/supplier");
      setSuppliers(data.data);
    } catch (error) {
      toast.error("Failed to fetch suppliers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this supplier?")) return;

    try {
      const { data } = await api.delete(`/supplier/${id}`);

      toast.success(data.message);

      fetchSuppliers();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete failed."
      );
    }
  };

  return (
    <div className="p-8 text-black">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Supplier
        </h1>

        <button
          onClick={() => {
            setSelectedSupplier(null);
            setOpenModal(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Supplier
        </button>

      </div>

      <SupplierModal
    isOpen={openModal}
    onClose={() => {
        setOpenModal(false);
        setSelectedSupplier(null);
    }}
    onSuccess={fetchSuppliers}
    supplier={selectedSupplier}
/>

      {loading ? (
        <p>Loading...</p>
      ) : suppliers.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center shadow">
          <h2 className="text-2xl font-semibold">
            No Suppliers Found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first supplier.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">State</th>
                <th className="p-4 text-left">Opening Balance</th>
                <th className="p-4 text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {suppliers.map((supplier) => (

                <tr
                  key={supplier.id}
                  className="border-t"
                >

                  <td className="p-4">{supplier.name}</td>

                  <td className="p-4">{supplier.phone}</td>

                  <td className="p-4">{supplier.state}</td>

                  <td className="p-4">
                    ₹{supplier.openingBalance}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => {
                          setSelectedSupplier(supplier);
                          setOpenModal(true);
                        }}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(supplier.id)
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}