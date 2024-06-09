import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Web Development, Software Integration, & Business Process Automation | Trexiti",
  description:
    "Expert web development, seamless software integration, and efficient business process automation services. Boost your business efficiency with our tailored solutions.",
  keywords:
    "web development, software integration, business process automation, web design, app development, enterprise solutions",
  author: "Trexiti",
  robots: "index, follow",
  charset: "UTF-8",
  language: "en",
  icons: {
    icon: "/favicon.ico",
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
