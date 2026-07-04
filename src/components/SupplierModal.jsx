"use client";
import api from "@/services/api";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

export default function SupplierModal({ isOpen, onClose,  onSuccess, supplier, }) {

    const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  state: "",
  gstNumber: "",
  openingBalance: "",
});

    useEffect(() => {
  if (supplier) {
    setForm({
      name: supplier.name || "",
      email: supplier.email || "",
      phone: supplier.phone || "",
      address: supplier.address || "",
      state: supplier.state || "",
      gstNumber: supplier.gstNumber || "",
      openingBalance: supplier.openingBalance || "",
    });
  }
}, [supplier]); 

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    let response;

    if (supplier) {

      response = await api.put(
        `/supplier/${supplier.id}`,
        form
      );

    } else {

      response = await api.post(
        "/supplier",
        form
      );

    }

    toast.success(response.data.message);

    onSuccess();

    onClose();

    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      gstNumber: "",
      openingBalance: "",
    });

  } catch (error) {

    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Something went wrong"
    );

  }
};

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white w-full max-w-2xl rounded-xl p-8 mx-auto mt-20 shadow-xl"
            overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start text-black"
        >

            <h2 className="text-2xl font-bold mb-6 text-black">
                {supplier ? "Edit Supplier" : "Add Supplier"}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 text-black"
            >

                <input
                    name="name"
                    placeholder="Supplier Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <input
                    name="state"
                    placeholder="State"
                    value={form.state}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <input
                    name="gstNumber"
                    placeholder="GST Number"
                    value={form.gstNumber}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                />

                <input
                    type="number"
                    name="openingBalance"
                    placeholder="Opening Balance"
                    value={form.openingBalance}
                    onChange={handleChange}
                    className="border rounded-lg p-3"
                    />

                <textarea
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    className="border rounded-lg p-3 col-span-2"
                />

                <div className="col-span-2 flex justify-end gap-4">

                    <button
                        type="button"
                        onClick={onClose}
                        className="px-5 py-2 rounded-lg border"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                       {supplier ? "Update Supplier" : "Create Supplier"}
                    </button>

                </div>

            </form>

        </Modal>
    
    );

}