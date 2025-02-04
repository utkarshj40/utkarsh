import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utkarsh Jain Portfolio",
  description: "This is My Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="top"
        className={`${inter.className} relative bg-white text-black-wala  dark:bg-black-wala dark:text-[#c7c7c7]`}
      >
        <ThemeContextProvider>
          <>{children}</>
          {/* Scroll to top */}
          <ScrollToTop />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
