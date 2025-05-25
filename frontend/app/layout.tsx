import "./globals.css";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DSC Darmstadt",
  description: "Website for the Developer Student Club Darmstadt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
