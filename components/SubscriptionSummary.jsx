import { useAuth } from "@/context/AuthContext";
import { calculateSubscriptionMetrics, subscriptions } from "@/utils";

export default function SubscriptionSummary() {
  const { userData } = useAuth();

  if (!userData) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const summary = calculateSubscriptionMetrics(userData.subscriptions);

  const emojis = [
    "💰",
    "🏋",
    "🧘",
    "🏃‍♂️",
    "🦾",
    "🚀",
    "💅🏻",
    "🥹",
    "❤️",
    "🐌",
    "👍🏼",
    "🔍",
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="font-mono text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Subscription Analytics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(summary).map((metric, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md bg-white dark:bg-neutral-800 dark:shadow-slate-500 transition-colors duration-300"
          >
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1 capitalize">
              <span className="mr-2">{emojis[index % emojis.length]}</span>
              {metric.replaceAll("_", " ")}
            </p>
            <h4 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
              {summary[metric]}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
