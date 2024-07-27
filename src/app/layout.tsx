import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import AppBar from "@/components/app-bar/app-bar";
import { UserContextProvider } from "@/contexts/user-context";
import Toast from "@/components/Toast";

const switzer = localFont({ src: "../../public/fonts/Switzer-Variable.woff2" });

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
      <body className={switzer.className + " flex min-h-screen justify-center bg-body"}>
        <Toast />
        <UserContextProvider>
          {children}
          <AppBar />
        </UserContextProvider>
      </body>
    </html>
  );
}
