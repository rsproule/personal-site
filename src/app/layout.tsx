import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

const berkeleyMono = localFont({
  src: "../../public/font/BerkeleyMono-Regular.otf",
  variable: "--font-berkeley-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Sproule",
  description: "rfs stuff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={berkeleyMono.variable}>
        <main className="mx-auto w-full max-w-3xl px-6 py-8 text-left sm:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
