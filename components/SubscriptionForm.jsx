"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function SubscriptionForm(props) {
  const {
    inputSectionRef,
    onSubmit,
    closeInput,
    formData,
    handleChangeInput,
    handleResetForm,
  } = props;

  const { handleAddSubscription, adding } = useAuth();

  function handleFormSubmit(e) {
    e.preventDefault(); //prevents page reload
    handleAddSubscription(formData);
    handleResetForm();
    closeInput();
  }

  return (
    <section
      ref={inputSectionRef}
      className="w-full max-w-3xl mx-auto px-4 py-10 sm:px-6 lg:px-8"
    >
      <h2 className="font-mono text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Add Your Subscription
      </h2>

      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Subscription Name */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Subscription Name
          </span>
          <input
            value={formData.name}
            onChange={handleChangeInput}
            type="text"
            name="name"
            placeholder="e.g. Amazon Prime, Spotify"
            required
            className="input"
          />
        </label>

        {/* Category */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </span>
          <select
            value={formData.category}
            onChange={handleChangeInput}
            name="category"
            className="input"
          >
            {[
              "Business & SaaS",
              "Cloud Storage",
              "Dating & Social",
              "Design & Creative",
              "E-commerce & Sub Boxes",
              "Education",
              "Entertainment",
              "Finance & Budgeting",
              "Food & Meal Plans",
              "Gaming",
              "Health & Fitness",
              "Kids & Learning",
              "Music",
              "News & Magazines",
              "Other",
              "Productivity",
              "Software",
              "Sports & Wellness",
              "Streaming Services",
              "Travel & Transport",
              "Utilities & Tools",
              "VPN & Security",
              "Web Services",
            ].map((cat, catIndex) => {
              return <option key={catIndex}>{cat}</option>;
            })}
          </select>
        </label>

        {/* Cost */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Cost
          </span>
          <input
            value={formData.cost}
            onChange={handleChangeInput}
            type="number"
            name="cost"
            step="0.01"
            placeholder="12.99"
            required
            className="input"
          />
        </label>

        {/* Currency */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Currency
          </span>
          <select
            value={formData.currency}
            onChange={handleChangeInput}
            name="currency"
            className="input"
          >
            {[
              "AED", // UAE Dirham
              "AUD", // Australian Dollar
              "BRL", // Brazilian Real
              "CAD", // Canadian Dollar
              "CHF", // Swiss Franc
              "CNY", // Chinese Yuan
              "DKK", // Danish Krone
              "EUR", // Euro
              "GBP", // British Pound Sterling
              "HKD", // Hong Kong Dollar
              "IDR", // Indonesian Rupiah
              "ILS", // Israeli New Shekel
              "INR", // Indian Rupee
              "JPY", // Japanese Yen
              "KRW", // South Korean Won
              "MXN", // Mexican Peso
              "MYR", // Malaysian Ringgit
              "NGN", // Nigerian Naira
              "NOK", // Norwegian Krone
              "NZD", // New Zealand Dollar
              "PHP", // Philippine Peso
              "PLN", // Polish Zloty
              "RUB", // Russian Ruble
              "SAR", // Saudi Riyal
              "SEK", // Swedish Krona
              "SGD", // Singapore Dollar
              "THB", // Thai Baht
              "TRY", // Turkish Lira
              "USD", // US Dollar
              "ZAR", // South African Rand
            ].map((curr, currIndex) => {
              return <option key={currIndex}>{curr}</option>;
            })}
          </select>
        </label>

        {/* Billing Frequency */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Billing Frequency
          </span>
          <select
            value={formData.billingFrequency}
            onChange={handleChangeInput}
            name="billingFrequency"
            className="input"
          >
            {["Monthly", "Semi-Annually", "Yearly", "Quaterly", "One-time"].map(
              (bill, billIndex) => {
                return <option key={billIndex}>{bill}</option>;
              }
            )}
          </select>
        </label>

        {/* Payment Method */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Payment Method
          </span>
          <select
            value={formData.paymentMethod}
            onChange={handleChangeInput}
            name="paymentMethod"
            className="input"
          >
            {[
              "Amazon Pay",
              "Apple Pay",
              "Bank Transfer",
              "Cash",
              "Check",
              "Credit Card",
              "Crypto",
              "Debit Card",
              "Direct Debit",
              "Gift Card",
              "Google Pay",
              "Mobile Carrier Billing",
              "Other",
              "PayPal",
              "Razorpay",
              "Samsung Pay",
              "Stripe",
              "UPI",
            ].map((pay, payIndex) => {
              return <option key={payIndex}>{pay}</option>;
            })}
          </select>
        </label>

        {/* Start Date */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Subscription Start Date
          </span>
          <input
            value={formData.startDate}
            onChange={handleChangeInput}
            type="date"
            name="startDate"
            required
            className="input"
          />
        </label>

        {/* Status */}
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Status
          </span>
          <select
            value={formData.status}
            onChange={handleChangeInput}
            name="status"
            className="input"
          >
            {[
              "Active",
              "Archived",
              "Awaiting Cancellation",
              "Cancelled",
              "Expired",
              "Failed Payment",
              "Grace Period",
              "Paused",
              "Pending Activation",
              "Refunded",
              "Renewing",
              "Suspended",
              "Trial",
            ].map((stat, statIndex) => {
              return <option key={statIndex}>{stat}</option>;
            })}
          </select>
        </label>

        {/* Notes - spans full width */}
        <label className="md:col-span-2 flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Notes
          </span>
          <textarea
            value={formData.notes}
            onChange={handleChangeInput}
            name="notes"
            placeholder="e.g. Comes with free trial, Family plan – 4 members using"
            className="input h-28 resize-none"
          />
        </label>

        {/* Buttons - full width */}
        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button
            onClick={closeInput}
            type="button"
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={adding}
            className={`px-4 py-2 rounded-md ${
              adding
                ? "bg-emerald-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            } text-white font-medium transition`}
          >
            {adding ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Saving...
              </span>
            ) : (
              "Add Subscription"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
