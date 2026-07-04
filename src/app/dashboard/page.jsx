export default function DashboardPage() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Customers</h2>
          <p className="mt-4 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Suppliers</h2>
          <p className="mt-4 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Items</h2>
          <p className="mt-4 text-4xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-gray-500">Sales</h2>
          <p className="mt-4 text-4xl font-bold">₹0</p>
        </div>

      </div>

    </div>
  );
}