import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Smart ERP",
  description: "ERP Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}