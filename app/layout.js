import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "SubKeeper",
  description: "Smart Sub Tracking",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-row justify-between gap-2 sm:gap-4">
        <Link href="/">
          <div className="group transition-all duration-300 cursor-pointer text-center sm:text-left">
            <h1 className="font-mono text-2xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-white">
              ꩜SubKeeper
            </h1>
            <p className="font-mono text-xs sm:text-sm text-white opacity-80">
              Smart Sub Tracking
            </p>
          </div>
        </Link>
        <GoTo />
      </div>
    </header>
  );

  const footer = (
    <footer className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
      <div className="border-t border-white/20 w-full" />

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between gap-6 text-sm sm:text-base">
        {/* Branding and Install */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <h4 className="text-lg">SubKeeper</h4>
            <span className="opacity-50">|</span>
            <button
              disabled
              className="bg-white/10 text-white/70 px-3 py-1 rounded cursor-not-allowed"
            >
              Install App
            </button>
          </div>
          <p className="text-white/80 text-xs sm:text-sm">
            &copy; 2025 SubKeeper
            <br />
            All rights reserved
          </p>
        </div>

        {/* Help & Feedback */}
        <div className="space-y-1">
          <p>
            Facing issues?{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              Get help
            </a>
          </p>
          <p>
            Suggestions?{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-white"
            >
              Share feedback
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1">
          <Link
            href="/privacy"
            className="hover:underline underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/tos"
            className="hover:underline underline-offset-2 hover:text-white"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <Head />
      <AuthProvider>
        {/* flex flex-col min-h-screen */}
        <body className="font-sans flex flex-col min-h-screen">
          {header}
          <main
            className="flex flex-col gap-8 grow px-4 pt-8 pb-12 sm:px-6 lg:px-8
          md:pb-24 lg:pb-34
          bg-gradient-to-br from-white via-sky-50 to-emerald-50 text-gray-800 dark:from-neutral-900 dark:via-slate-800 dark:to-emerald-950 dark:text-gray-100"
          >
            {children}
          </main>
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
