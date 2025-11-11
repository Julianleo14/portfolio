import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./styles/globals.css";
import React from "react";
import MyHeader from "@/app/header";

const nunito = Geist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Julian's Portfolio",
  description: "Created with NEXTJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <header>
          <MyHeader />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
