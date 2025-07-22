import { DM_Sans, Inter } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Paramount Consultants",
  description: "Strategic Solutions for Modern Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, dmSans.variable)}>{children}</body>
    </html>
  );
}
