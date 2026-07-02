export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-8 shadow">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Smart ERP
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border p-3"
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-3 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}