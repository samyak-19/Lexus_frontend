"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import toast from "react-hot-toast";
import CustomerModal from "@/components/CustomerModal";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const fetchCustomers = async () => {
    try {
      const { data } = await api.get("/customer");
      setCustomers(data.data);
    } catch (error) {
      toast.error("Failed to fetch customers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this customer?")) return;

    try {
      const { data } = await api.delete(`/customer/${id}`);

      toast.success(data.message);

      fetchCustomers();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Delete failed."
      );
    }
  };

  return (
    <div className="p-8 text-black">

      <div className="flex justify-between items-center mb-8 text-black">

        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <button
          onClick={() => {
            setSelectedCustomer(null);
            setOpenModal(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Customer
        </button>

      </div>

      <CustomerModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedCustomer(null);
        }}
        onSuccess={fetchCustomers}
        customer={selectedCustomer}
      />

      {loading ? (
        <p>Loading...</p>
      ) : customers.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center shadow text-gray-800">
          <h2 className="text-2xl font-semibold">
            No Customers Found
          </h2>

          <p className="text-gray-500 mt-2">
            Create your first customer.
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

              {customers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-t"
                >

                  <td className="p-4">{customer.name}</td>

                  <td className="p-4">{customer.phone}</td>

                  <td className="p-4">{customer.state}</td>

                  <td className="p-4">
                    ₹{customer.openingBalance}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => {
                          setSelectedCustomer(customer);
                          setOpenModal(true);
                        }}
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(customer.id)
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