import DocLayout from "../components/DocLayout";

const SubscriptionManagement: React.FC<{ onBack?: () => void }> = ({
  onBack,
}) => (
  <DocLayout title="Subscription & Plan Management" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Make the most of ArtShare with our flexible subscription plans. Whether
      you're a casual creator or a professional artist, we have plans that fit
      your needs and budget.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Available Plans
      </h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">Free Plan</h3>
          <ul className="space-y-2 mb-4 text-gray-600 text-sm">
            <li>• 10 posts per month</li>
            <li>• Basic editing tools</li>
            <li>• Community features</li>
            <li>• 1GB storage</li>
          </ul>
          <p className="font-bold text-gray-900 text-lg">$0/month</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 border-2 border-purple-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-purple-900">Creator Pro</h3>
          <ul className="space-y-2 mb-4 text-purple-700 text-sm">
            <li>• Unlimited posts</li>
            <li>• Advanced AI tools</li>
            <li>• Priority support</li>
            <li>• 100GB storage</li>
            <li>• Analytics dashboard</li>
          </ul>
          <p className="font-bold text-purple-900 text-lg">$12/month</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">Studio</h3>
          <ul className="space-y-2 mb-4 text-gray-600 text-sm">
            <li>• Everything in Pro</li>
            <li>• Team collaboration</li>
            <li>• Custom branding</li>
            <li>• 1TB storage</li>
            <li>• API access</li>
          </ul>
          <p className="font-bold text-gray-900 text-lg">$29/month</p>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Managing Your Subscription
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Access Billing Settings</p>
            <p className="text-gray-600">
              Go to Profile Menu → Settings → Billing & Subscriptions to view
              your current plan.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Upgrade or Downgrade</p>
            <p className="text-gray-600">
              Click "Change Plan" to see available options. Changes take effect
              at your next billing cycle.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Update Payment Methods</p>
            <p className="text-gray-600">
              Add, edit, or remove credit cards and payment methods. Set up
              automatic billing for convenience.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">View Usage and History</p>
            <p className="text-gray-600">
              Track your storage usage, API calls, and download your billing
              history and receipts.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Billing and Payment Information
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              💳 Payment Options
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Major credit and debit cards</li>
              <li>• PayPal and digital wallets</li>
              <li>• Bank transfers (annual plans)</li>
              <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              📅 Billing Cycles
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Monthly billing (charged monthly)</li>
              <li>• Annual billing (2 months free)</li>
              <li>• Automatic renewals with email reminders</li>
              <li>• Pro-rated upgrades and downgrades</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Cancellation and Refunds
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-red-100 rounded-full w-8 h-8 font-semibold text-red-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Cancel Anytime</p>
            <p className="text-gray-600">
              No contracts or cancellation fees. Cancel from your billing
              settings and retain access until period ends.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-red-100 rounded-full w-8 h-8 font-semibold text-red-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">
              30-Day Money-Back Guarantee
            </p>
            <p className="text-gray-600">
              Full refund available within 30 days of your first subscription
              purchase.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-red-100 rounded-full w-8 h-8 font-semibold text-red-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Data Export</p>
            <p className="text-gray-600">
              Download all your content and data before cancellation. Account
              deletion is permanent after 90 days.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <div className="bg-orange-50 p-4 border border-orange-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-orange-900">💰 Save Money Tip</h3>
      <p className="text-orange-800">
        Annual billing saves you 20% compared to monthly payments. Plus, you'll
        get early access to new features and priority customer support.
      </p>
    </div>
  </DocLayout>
);

export default SubscriptionManagement;
