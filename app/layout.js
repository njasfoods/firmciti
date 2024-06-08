import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Web Development, Software Integration, & Business Process Automation | Trexiti",
  description:
    "Expert web development, seamless software integration, and efficient business process automation services. Boost your business efficiency with our tailored solutions.",
  keywords:
    "web development, software integration, business process automation, web design, app development, enterprise solutions",
  author: "Trexiti",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  charset: "UTF-8",
  language: "en",
  ogTitle:
    "Web Development, Software Integration, & Business Process Automation | Trexiti",
  ogDescription:
    "Expert web development, seamless software integration, and efficient business process automation services. Boost your business efficiency with our tailored solutions.",
  ogType: "website",
  ogUrl: "https://www.trexiti.online",
  ogImage: "https://www.trexiti.online/images/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Web Development, Software Integration, & Business Process Automation | Trexiti",
  twitterDescription:
    "Expert web development, seamless software integration, and efficient business process automation services. Boost your business efficiency with our tailored solutions.",
  twitterImage: "https://www.trexiti.online/images/twitter-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
