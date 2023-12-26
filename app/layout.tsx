import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.scss";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: any = {
  title: "Torsha Chaudhuri - Graphic Designer Portfolio",
  description:
    "Explore Torsha Chaudhuri's graphic design portfolio showcasing her expertise in visual brand identity, presentation design, UI/UX, print design, video editing, and motion graphics.",
  openGraph: {
    title: "Torsha Chaudhuri - Graphic Designer Portfolio",
    type: "website",
    url: "https://torsha-chaudhuri-portfolio.vercel.app",
    description:
      "Check out Torsha Chaudhuri's graphic design portfolio and discover her innovative work in visual brand identity, presentation design, UI/UX, print design, video editing, and motion graphics.",
    image: {
      url: "https://media.licdn.com/dms/image/D5603AQGpj-oCYBfjxw/profile-displayphoto-shrink_800_800/0/1687751136547?e=1708560000&v=beta&t=Y3kjMnn9UOvNrbwd6RFnaX6U3ZzKR6YHqAb-83NXLGw",
      alt: "Torsha Chaudhuri - Graphic Designer",
    },
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
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.image.url} />
        <meta property="og:image:alt" content={metadata.openGraph.image.alt} />

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
