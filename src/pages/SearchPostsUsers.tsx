import DocLayout from "../components/DocLayout";

const SearchPostsUsers: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Search Posts & Users" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Find exactly what you're looking for with ArtShare's powerful search and
      filter system. Search for specific artworks, discover new creators, or
      explore content by keywords and tags.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Using the Search System
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Access the Search Bar</p>
            <p className="text-gray-600">
              Click the search icon in the header or use the keyboard shortcut
              Ctrl+K (Cmd+K on Mac).
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Choose Search Type</p>
            <p className="text-gray-600">
              Select "Posts", "Users", or "All" from the dropdown to focus your
              search.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Enter Your Query</p>
            <p className="text-gray-600">
              Type keywords, usernames, or tags. Use quotes for exact phrases
              and # for hashtags.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Apply Filters</p>
            <p className="text-gray-600">
              Use the filter panel to narrow results by date, category, file
              type, or creator verification status.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Advanced Search Tips
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              Search Operators
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">
                  "exact phrase"
                </code>{" "}
                - Search for exact matches
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">#hashtag</code>{" "}
                - Find posts with specific tags
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">@username</code>{" "}
                - Search for specific users
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">
                  type:photo
                </code>{" "}
                - Filter by content type
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">Filter Options</h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Date Range:</strong> Today, this week, this month,
                custom
              </li>
              <li>
                • <strong>Content Type:</strong> Photos, illustrations, AI art,
                videos
              </li>
              <li>
                • <strong>Creator Status:</strong> Verified, pro users, new
                creators
              </li>
              <li>
                • <strong>Engagement:</strong> Most liked, most commented,
                trending
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-yellow-900">🔍 Search Pro Tip</h3>
      <p className="text-yellow-800">
        Save frequent searches by clicking the bookmark icon next to your search
        results. Access saved searches from the search dropdown menu.
      </p>
    </div>
    Use code with caution.
  </DocLayout>
);

export default SearchPostsUsers;
