import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.scss";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Torsha Chaudhuri - Designer | Portfolio",
  description: "Portfolio Website of Torsha Chaudhuri",
  openGraph: {
    title: "Torsha Chaudhuri - Portfolio",
    type: "website",
    url: "https://torsha-chaudhuri-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </Head>
      <body
        style={{
          background: "#031926",
          color: "#F4E9CD",
          scrollBehavior: "smooth",
        }}
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
