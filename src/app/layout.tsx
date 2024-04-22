import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erin Shien Smith",
  description: "Erin Shien Smith's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
