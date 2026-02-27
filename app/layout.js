import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingPetals from "@/components/FloatingPetals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white relative`}
      >
        {/* Background Animation Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingPetals />
        </div>

        {/* Main Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
