import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FC } from "react";

//poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900", "100", "200", "300"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayotProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayotProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;