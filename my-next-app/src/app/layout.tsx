// app/layout.tsx
import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "Giggle Mart",
  description: "Built with Next.js and Clerk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Navbar ko yahan render karen */}
        {children}   {/* Page content yahan render hoga */}
        <Footer />   {/* Footer bhi yahan */}
      </body>
    </html>
  );
}