import DocLayout from "../components/DocLayout";

const BlogCategories: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Blog Categories" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Navigate through ArtShare's rich collection of blog content organized by
      categories. Whether you're looking for tutorials, artist interviews, or
      industry insights, our categorized blog system helps you find exactly what
      you need.
    </p>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Browsing Blog Categories
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Access the Blog Section</p>
            <p className="text-gray-600">
              Click "Blog" in the main navigation to view all blog content.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Browse Categories</p>
            <p className="text-gray-600">
              Use the category sidebar or dropdown menu to filter articles by
              topic.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Sort and Filter</p>
            <p className="text-gray-600">
              Sort by date, popularity, or reading time to find content that
              fits your schedule.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Subscribe to Categories</p>
            <p className="text-gray-600">
              Follow your favorite categories to get notifications when new
              articles are published.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Available Categories
      </h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">Tutorials & Tips</h3>
          <p className="text-gray-600 text-sm">
            Step-by-step guides and creative techniques
          </p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            Artist Spotlights
          </h3>
          <p className="text-gray-600 text-sm">
            Interviews and features on community creators
          </p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">Industry News</h3>
          <p className="text-gray-600 text-sm">
            Latest trends and updates in digital art
          </p>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">AI Art Insights</h3>
          <p className="text-gray-600 text-sm">
            Exploring AI-generated art and tools
          </p>
        </div>
      </div>
    </section>
    <div className="bg-green-50 p-4 border border-green-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-green-900">💡 Reading Tip</h3>
      <p className="text-green-800">
        Bookmark articles you want to read later using the bookmark icon. Access
        your saved articles from your profile menu.
      </p>
    </div>
  </DocLayout>
);

export default BlogCategories;
