import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube Analytics Hub",
  description: "Real-time YouTube channel tracking and publishing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
