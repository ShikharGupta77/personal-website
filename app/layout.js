import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shikhar Gupta Portfolio",
  description: "Shikhar Gupta's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
  );
}
