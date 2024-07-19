import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import AppBar from "@/components/app-bar/app-bar";

const switzer = localFont({src:"../../public/fonts/Switzer-Variable.woff2"})

export const metadata: Metadata = {
  title: "Ducks",
  description: "Play to Earn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={switzer.className + " bg-body min-h-screen flex justify-center"}>
        {children}
        <AppBar />
      </body>
    </html>
  );
}
