import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Torsha Chaudhuri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#031926",
          color: "#F4E9CD",
        }}
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
