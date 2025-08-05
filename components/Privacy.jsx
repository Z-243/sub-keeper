export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our subscription tracking app. By
          using the app, you agree to the practices outlined in this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Account Information:</strong> We collect your email address
            and authentication credentials when you sign up or log in.
          </li>
          <li>
            <strong>Subscription Data:</strong> You may enter subscription
            details such as service name, price, frequency, and payment method.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect anonymous usage data to
            improve app performance and user experience.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc ml-6">
          <li>To display and manage your subscriptions and spending.</li>
          <li>To provide customer support if needed.</li>
          <li>To improve app functionality and user experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Data Storage & Security
        </h2>
        <p>
          Your data is securely stored using Firebase. We implement appropriate
          security measures to protect your information against unauthorized
          access, loss, or misuse.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
        <p>
          We do <strong>not</strong> sell, trade, or share your personal or
          financial data with third parties. Your data is private and used
          solely within the app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          We may use third-party services like Firebase for authentication and
          data storage. These services may collect and store information as
          described in their own privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy as needed. If significant changes
          are made, we will notify users within the app.
        </p>
      </section>
    </div>
  );
}
