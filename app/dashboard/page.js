"use client";

import Login from "@/components/Login";
import SubscriptionDisplay from "@/components/SubscriptionDisplay";
import SubscriptionForm from "@/components/SubscriptionForm";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import { useAuth } from "@/context/AuthContext";
import { Suspense, useRef, useState } from "react";

const blankSubscription = {
  name: "",
  category: "Entertainment",
  cost: "",
  currency: "USD",
  billingFrequency: "Monthly",
  nextBillingData: "",
  paymentMethod: "Credit Card",
  startDate: "",
  renewalType: "",
  notes: "",
  status: "Active",
};

export default function DashboardPage() {
  const { handleDeleteSubscription, userData, currentUser, loading } =
    useAuth();
  const isAuthenticated = !!currentUser;
  const [isAddEntry, setIsAddEntry] = useState(false);
  const [formData, setFormData] = useState(blankSubscription);

  const inputSectionRef = useRef(null);

  function handleChangeInput(e) {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  }

  function handleEditSubscription(index) {
    const data = userData.subscriptions.find((val, valIndex) => {
      return valIndex === index;
    });
    setFormData(data);
    handleDeleteSubscription(index);
    setIsAddEntry(true);
  }

  function handleResetForm() {
    setFormData(blankSubscription);
  }

  function handleToggleInput() {
    setIsAddEntry(!isAddEntry);
    setTimeout(() => {
      inputSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Login />
      </Suspense>
    );
  }

  return (
    <>
      <SubscriptionSummary />
      <SubscriptionDisplay
        handleEditSubscription={handleEditSubscription}
        handleShowInput={isAddEntry ? () => {} : handleToggleInput}
        isAddEntry={isAddEntry}
      />
      {isAddEntry && (
        <SubscriptionForm
          inputSectionRef={inputSectionRef}
          handleResetForm={handleResetForm}
          closeInput={handleToggleInput}
          formData={formData}
          handleChangeInput={handleChangeInput}
        />
      )}
    </>
  );
}
