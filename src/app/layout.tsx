import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/shared/Nav";
import Footer from "@/Components/shared/Footer";
import WorkProvider from "@/context/WorkProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fit-Log",
  description: "Daily workout planner and progress tracker",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`$${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full px-5 md:px-0 flex flex-col bg-black">
        <WorkProvider>
          <Nav />
          {children}
          <ToastContainer/>
          <Footer />
        </WorkProvider>
      </body>
    </html>
  );
}
