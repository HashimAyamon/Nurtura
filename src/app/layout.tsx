import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar, {  } from "./components/NavBar";
import NavBarBottom from "@/app/components/NavBarBottom";
import MainNav from "@/app/components/MainNav";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NurTura",
  description: "BY HASHIM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <NavBarBottom/>
        <MainNav/>
        {children}
      </body>
    </html>
  );
}
