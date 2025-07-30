import DocLayout from "../components/DocLayout";

const ManagePostsCollections: React.FC<{ onBack?: () => void }> = ({
  onBack,
}) => (
  <DocLayout title="Manage Posts & Collections" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Keep your creative work organized with ArtShare's post and collection
      management tools. Whether you're organizing your own creations or curating
      collections of inspiring work, these tools help you stay organized and
      showcase your taste.
    </p>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Managing Your Posts
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Access Your Dashboard</p>
            <p className="text-gray-600">
              Go to your profile and click "Manage Posts" or navigate to the
              Dashboard from the main menu.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">View Post Analytics</p>
            <p className="text-gray-600">
              See views, likes, comments, and engagement metrics for each of
              your posts.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Edit or Update Posts</p>
            <p className="text-gray-600">
              Click the edit icon to modify descriptions, tags, or visibility
              settings for any post.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Organize with Tags</p>
            <p className="text-gray-600">
              Add or edit tags to help others discover your work and keep your
              portfolio organized.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Creating and Managing Collections
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Create a New Collection</p>
            <p className="text-gray-600">
              Click "New Collection" from your profile or use the "+" button
              when viewing any post.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Add Posts to Collections
            </p>
            <p className="text-gray-600">
              Use the "Add to Collection" button on any post, or drag and drop
              from your dashboard.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Set Collection Privacy</p>
            <p className="text-gray-600">
              Choose between Public, Unlisted, or Private visibility for each
              collection.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Share Your Collections</p>
            <p className="text-gray-600">
              Generate shareable links or embed codes for your public
              collections.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <div className="bg-purple-50 p-4 border border-purple-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-purple-900">
        📂 Organization Tip
      </h3>
      <p className="text-purple-800">
        Create collections for different themes, projects, or moods. Use
        descriptive names and cover images to make your collections more
        discoverable and engaging.
      </p>
    </div>
  </DocLayout>
);

export default ManagePostsCollections;
