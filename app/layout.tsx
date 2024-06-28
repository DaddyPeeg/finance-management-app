import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Breakpoints from "@/components/Breakpoints";
import { QueryProvider } from "@/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finanace Management App",
  description:
    "Take charge of your finances effortlessly with our intuitive Finance Management App. Track expenses, set budgets, and achieve financial goals with ease. Gain insights with detailed reports and smart recommendations tailored to your spending habits. Simplify your financial life today with our powerful, user-friendly app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <QueryProvider>{children}</QueryProvider>
          {process.env.NODE_ENV === "development" && <Breakpoints />}
        </body>
      </html>
    </ClerkProvider>
  );
}
