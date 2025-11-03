
import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";


import { Great_Vibes, Poppins } from "next/font/google";

const vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});



export const metadata = {
  title: "Saniya Khan | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}