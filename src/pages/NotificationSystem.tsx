import DocLayout from "../components/DocLayout";

const NotificationSystem: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Notification System" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Stay connected with your creative community through ArtShare's smart
      notification system. Get updates about likes, comments, follows, and
      important platform news without feeling overwhelmed.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Understanding Your Notifications
      </h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            🔔 Activity Notifications
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Likes and reactions on your posts</li>
            <li>• Comments and replies</li>
            <li>• New followers and mentions</li>
            <li>• Collection additions</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            📢 Platform Updates
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Feature announcements</li>
            <li>• Community challenges</li>
            <li>• Creator spotlight opportunities</li>
            <li>• System maintenance alerts</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Managing Notification Settings
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Access Notification Settings
            </p>
            <p className="text-gray-600">
              Go to Profile Menu → Settings → Notifications, or click the gear
              icon in the notifications panel.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Choose Notification Types
            </p>
            <p className="text-gray-600">
              Toggle on/off different categories: Interactions, Follows,
              Comments, System Updates, etc.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Set Delivery Methods</p>
            <p className="text-gray-600">
              Configure how you receive notifications: In-app only, email, push
              notifications, or combinations.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Create Custom Filters</p>
            <p className="text-gray-600">
              Set up filters for specific users, keywords, or post types to
              reduce notification volume.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Notification Management Tips
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              🎯 Recommended Settings
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Enable: Direct mentions and replies</li>
              <li>• Enable: New followers from verified accounts</li>
              <li>• Limit: Bulk like notifications (daily digest)</li>
              <li>• Disable: General platform announcements</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              ⏰ Timing Controls
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Set quiet hours (e.g., 10 PM - 8 AM)</li>
              <li>• Bundle similar notifications</li>
              <li>• Enable weekend mode for creators</li>
              <li>• Use vacation mode when away</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-green-50 p-4 border border-green-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-green-900">🔕 Focus Tip</h3>
      <p className="text-green-800">
        Use "Do Not Disturb" mode when working on important projects. You'll
        still receive critical notifications but won't be interrupted by routine
        activity.
      </p>
    </div>
  </DocLayout>
);

export default NotificationSystem;
