import { useAuth } from "@/context/AuthContext";
import { getDaysUntilNextCharge, subscriptions } from "@/utils";

export default function SubscriptionDisplay(props) {
  const { handleShowInput, handleEditSubscription, isAddEntry } = props;
  const { handleDeleteSubscription, userData } = useAuth();

  if (!userData?.subscriptions) {
    return null;
  }

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="font-mono text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Your Subscriptions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.subscriptions.map((sub, subIndex) => {
          const {
            name,
            category,
            cost,
            currency,
            billingFrequency,
            startDate,
            notes,
            status,
          } = sub;

          return (
            <div
              key={subIndex}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-md dark:shadow-slate-500 border border-gray-200 dark:border-neutral-800 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className=" text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {name}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    status === "Active"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400"
                      : "bg-gray-200 text-gray-700 dark:bg-gray-700/30 dark:text-gray-300"
                  }`}
                >
                  {status}
                </span>
              </div>

              {/* Category */}
              <p className="italic text-sm text-gray-600 dark:text-gray-400">
                {category}
              </p>

              {/* Cost */}
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  ${cost}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currency}
                </p>
              </div>
              <small className="text-gray-500 dark:text-gray-400">
                per {billingFrequency}
              </small>

              {/* Renewal Info */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <p className="font-medium">Started</p>
                  <h4>{startDate}</h4>
                </div>
                <div>
                  <p className="font-medium">Due in</p>
                  <h4>
                    {getDaysUntilNextCharge(startDate, billingFrequency)} days
                  </h4>
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-neutral-700 my-2" />

              {/* Notes */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {notes}
              </p>

              {/* Actions */}
              <div className="flex justify-between mt-auto gap-2 pt-4">
                <button
                  onClick={() => {
                    handleEditSubscription(subIndex);
                  }}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-lg transition cursor-pointer"
                >
                  <i className="fa-solid fa-pen-to-square mr-2"></i>
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDeleteSubscription(subIndex);
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-lg transition cursor-pointer"
                >
                  <i className="fa-solid fa-trash mr-2"></i>
                  Delete
                </button>
              </div>
            </div>
          );
        })}

        {/* Add Subscription Button */}
        <button
          onClick={handleShowInput}
          className="flex flex-col items-center justify-center border-2 border-dashed border-emerald-400 dark:border-emerald-500 
      rounded-xl p-6 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 
      transition text-sm font-medium cursor-pointer"
        >
          <i className="fa-solid fa-plus text-xl mb-2"></i>
          <h5 className="font-mono">Add Subscription</h5>
        </button>
      </div>
    </section>
  );
}
