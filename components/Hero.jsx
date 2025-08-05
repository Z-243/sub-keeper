import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-12 px-3 py-3 md:grid-cols-2 md:gap-16">
      {/* text section */}
      <div className="order-1 md:order-2 flex flex-col justify-center gap-6">
        <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
          Master your subscription
          <br /> spending
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#030615"
            className="inline-block h-6 w-6 pl-2 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-9-9m9 9A9 9 0 0012 3v9h9z"
            />
          </svg>
        </h1>

        <p className=" text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md">
          SubKeeper makes it easy to measure and manage your subscriptions
        </p>

        <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-60 transition cursor-pointer text-white font-semibold px-6 py-2 rounded-lg w-fit transition-all shadow">
          <Link href={"/dashboard"}>Get Started &rarr;</Link>
        </button>

        <small className="text-sm text-gray-500 dark:text-gray-400">
          Absolutely free. No credit card required.
        </small>
      </div>

      {/* visual display */}
      <div className="order-2 md:order-1 grid grid-cols-2 gap-6 pt-0 md:pt-10">
        {/* column 1 */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex aspect-video rounded-md bg-emerald-200/40 dark:bg-emerald-900/30 gap-4 p-2">
            <div className="flex flex-col gap-2 flex-1">
              <div className="bg-emerald-600/40 dark:bg-emerald-500/30 rounded-md py-4" />
              <div className="bg-emerald-600/40 dark:bg-emerald-500/30 rounded-md w-5/5 py-1" />
              <div className="bg-emerald-600/40 dark:bg-emerald-500/30 rounded-md w-2/3 py-1" />
            </div>
            <div className="bg-emerald-300/30 dark:bg-emerald-700/30 rounded-md w-1/3 py-8" />
          </div>

          <div className="flex aspect-video rounded-md bg-cyan-200/40 dark:bg-cyan-900/30 gap-4 p-2">
            <div className="flex flex-col gap-2 flex-1">
              <div className="bg-cyan-600/40 dark:bg-cyan-500/30 rounded-md py-4" />
              <div className="bg-cyan-600/40 dark:bg-cyan-500/30 rounded-md w-5/5 py-1" />
              <div className="bg-cyan-600/40 dark:bg-cyan-500/30 rounded-md w-2/3 py-1" />
            </div>
            <div className="bg-cyan-300/30 dark:bg-cyan-700/30 rounded-md w-1/3 py-8" />
          </div>
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-4">
          <div className="flex aspect-video rounded-md bg-emerald-200/40 dark:bg-emerald-900/30 gap-4 p-2">
            <div className="flex flex-col gap-2 flex-1">
              <div className="bg-emerald-600/40 dark:bg-emerald-500/30 rounded-md py-4" />
              <div className="bg-emerald-600/40 dark:bg-emerald-500/30 rounded-md w-5/5 py-1" />
              <div className="bg-emerald-600/40 dark:bg-emerald-500/30 rounded-md w-2/3 py-1" />
            </div>
            <div className="bg-emerald-300/30 dark:bg-emerald-700/30 rounded-md w-1/3 py-8" />
          </div>

          <div className="flex aspect-video rounded-md bg-cyan-200/40 dark:bg-cyan-900/30 gap-4 p-2">
            <div className="flex flex-col gap-2 flex-1">
              <div className="bg-cyan-600/40 dark:bg-cyan-500/30 rounded-md py-4" />
              <div className="bg-cyan-600/40 dark:bg-cyan-500/30 rounded-md w-5/5 py-1" />
              <div className="bg-cyan-600/40 dark:bg-cyan-500/30 rounded-md w-2/3 py-1" />
            </div>
            <div className="bg-cyan-300/30 dark:bg-cyan-700/30 rounded-md w-1/3 py-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
