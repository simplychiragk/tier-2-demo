import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MedCare Clinic — Your Family's Health, Our Priority",
  description:
    "Compassionate, comprehensive healthcare for your entire family. General medicine, pediatrics, vaccinations, and more in New Delhi.",
  keywords: [
    "clinic",
    "healthcare",
    "doctor",
    "pediatrics",
    "general medicine",
    "vaccination",
    "MedCare",
    "New Delhi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
