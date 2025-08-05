"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function GoTo() {
  const { currentUser, logout } = useAuth();

  const isAuthenticated = !!currentUser;
  const router = useRouter();

  const path = usePathname();

  if (currentUser && path !== "/dashboard") {
    return (
      <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-emerald-400 text-white px-4 py-2 rounded-xl hover:brightness-110 transition-all cursor-pointer font-mono"
        >
          Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
      {path === "/" && (
        <>
          <Link href="/dashboard?register=true">
            <p className="text-white hidden sm:block hover:opacity-60 font-medium transition-colors font-mono">
              Sign Up
            </p>
          </Link>
          <Link href="/dashboard">
            <button className="bg-emerald-400 text-white px-4 py-2 rounded-xl hover:brightness-110 transition-all cursor-pointer font-mono">
              Log In
            </button>
          </Link>
        </>
      )}

      {isAuthenticated && path === "/dashboard" && (
        <button
          onClick={logout}
          className="bg-emerald-400 text-white px-4 py-2 rounded-xl hover:brightness-110 transition-all cursor-pointer font-mono"
        >
          Logout
        </button>
      )}
    </div>
  );
}
