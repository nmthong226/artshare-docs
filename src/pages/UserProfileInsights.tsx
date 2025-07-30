import DocLayout from "../components/DocLayout";

const UserProfileInsights: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="User Profile & Behavior Insights" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Understand and optimize your presence on ArtShare with comprehensive
      profile management and detailed insights into how your content performs
      and how your audience engages with your work.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Profile Management
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Complete Your Profile</p>
            <p className="text-gray-600">
              Add a profile photo, bio, location, and links to your other
              platforms. Complete profiles get 3x more followers.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Showcase Your Best Work</p>
            <p className="text-gray-600">
              Pin your top 3 posts to the top of your profile. Update these
              regularly to keep your profile fresh.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Organize Your Collections
            </p>
            <p className="text-gray-600">
              Create themed collections that showcase different aspects of your
              work or interests.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Set Privacy Preferences</p>
            <p className="text-gray-600">
              Control who can see your activity, message you, and view your
              collections.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Understanding Your Analytics
      </h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">📊 Profile Views</h3>
          <p className="text-gray-600 text-sm">
            Track who's viewing your profile and when peak viewing times occur.
          </p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            💝 Engagement Metrics
          </h3>
          <p className="text-gray-600 text-sm">
            See likes, comments, shares, and saves across all your content.
          </p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            👥 Audience Insights
          </h3>
          <p className="text-gray-600 text-sm">
            Learn about your followers' interests, locations, and activity
            patterns.
          </p>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Growing Your Presence
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              📈 Content Strategy
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Post consistently (3-5 times per week)</li>
              <li>• Share work-in-progress content</li>
              <li>• Engage with other creators' work</li>
              <li>• Use trending tags and challenges</li>
              <li>• Collaborate with other artists</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              🤝 Community Building
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Respond to comments promptly</li>
              <li>• Share others' work you admire</li>
              <li>• Participate in community discussions</li>
              <li>• Offer constructive feedback</li>
              <li>• Join creator programs and challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Privacy and Safety Settings
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Account Privacy</p>
            <p className="text-gray-600">
              Choose between public, private, or creator-only visibility for
              your profile and posts.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Content Protection</p>
            <p className="text-gray-600">
              Enable watermarks, download restrictions, and right-click
              protection for your original work.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Blocking and Reporting</p>
            <p className="text-gray-600">
              Use blocking tools for unwanted interactions and report
              inappropriate content or behavior.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <div className="bg-purple-50 p-4 border border-purple-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-purple-900">📊 Analytics Tip</h3>
      <p className="text-purple-800">
        Check your insights weekly to understand what content resonates with
        your audience. Use this data to inform your content strategy and posting
        schedule.
      </p>
    </div>
  </DocLayout>
);

export default UserProfileInsights;
