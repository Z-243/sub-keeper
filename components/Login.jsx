"use client";

import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const params = useSearchParams();
  const isReg = params.get("register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistration, setIsRegistration] = useState(isReg);
  const [error, setError] = useState(null);
  const [authenticating, setAuthenticating] = useState(false);

  const { signup, login } = useAuth();

  async function handleAuthenticate() {
    if (
      !email ||
      !email.includes("@") ||
      password.length < 8 ||
      authenticating
    ) {
      setError("Invalid input");
      return;
    }
    setError(null);
    setAuthenticating(true);
    try {
      if (isRegistration) {
        // register a user
        await signup(email, password);
      } else {
        // login a user
        await login(email, password);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <div
      className="w-full max-w-md mx-auto mt-16 p-6 rounded-xl 
    bg-white shadow-md 
    dark:bg-gradient-to-br dark:from-slate-600 dark:via-gray-800 dark:to-slate-600 
    dark:shadow-none transition-colors duration-300"
    >
      <h2
        className="text-2xl sm:text-3xl font-semibold text-center 
    text-emerald-600 dark:text-emerald-500 mb-6"
      >
        {isRegistration ? "Sign Up" : "Log In"}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-4"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 
        dark:border-gray-700 dark:bg-neutral-800 dark:text-white 
        rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="px-4 py-2 border border-gray-300 
        dark:border-gray-700 dark:bg-neutral-800 dark:text-white 
        rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500"
          required
        />

        {error && (
          <div className="w-full max-w-md mx-auto mb-1 px-4 py-3 rounded-md bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border border-red-300 dark:border-red-700 shadow-sm">
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <button
          onClick={handleAuthenticate}
          disabled={authenticating}
          className="w-full py-2 rounded-md bg-gradient-to-r 
        from-emerald-500 to-cyan-500 text-white font-medium 
        hover:opacity-80 transition cursor-pointer"
        >
          {authenticating ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <button
          onClick={() => {
            setIsRegistration(!isRegistration);
            setError(null);
          }}
          className="mt-1 text-emerald-600 dark:text-emerald-500 hover:underline font-medium cursor-pointer"
        >
          {isRegistration ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
