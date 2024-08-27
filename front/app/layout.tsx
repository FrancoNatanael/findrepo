import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "findrepo",
  description: "Find GitHub repo by interests",
  icons: {
    icon: './icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`py-6 w-[80%] m-auto ${inter.className}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
