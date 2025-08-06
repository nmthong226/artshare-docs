import DocLayout from "../components/DocLayout";

const CreatePost: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Create a Post" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Share your creative work with the ArtShare community! Whether you're
      uploading original artwork, sharing work-in-progress shots, or posting
      finished pieces, our creation tools help you present your work beautifully
      and reach the right audience.
    </p>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Creating Your First Post
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Start Creating</p>
            <p className="text-gray-600">
              Click the "+" button in the navigation or "Create Post" from your
              dashboard.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Upload Your Content</p>
            <p className="text-gray-600">
              Drag and drop files or click to browse. Supports JPG, PNG, GIF,
              MP4, and more formats up to 100MB.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Write a Compelling Description
            </p>
            <p className="text-gray-600">
              Share the story behind your work, your process, or inspiration.
              Use formatting tools for emphasis.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Add Tags and Categories</p>
            <p className="text-gray-600">
              Help others discover your work with relevant tags. Choose the most
              appropriate category.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            5
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Set Visibility and Publish
            </p>
            <p className="text-gray-600">
              Choose your audience (Public, Followers, or Private) and hit
              publish!
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Best Practices for Posts
      </h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">📝 Writing Tips</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Keep descriptions engaging but concise (150-300 words)</li>
            <li>• Share your creative process or inspiration</li>
            <li>• Ask questions to encourage comments</li>
            <li>• Use line breaks for better readability</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            🏷️ Tagging Strategy
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Use 3-8 relevant tags per post</li>
            <li>• Mix broad and specific tags</li>
            <li>• Include technique and style tags</li>
            <li>• Research trending tags in your category</li>
          </ul>
        </div>
      </div>
    </section>
    <div className="bg-orange-50 p-4 border border-orange-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-orange-900">🎨 Creative Tip</h3>
      <p className="text-orange-800">
        Include behind-the-scenes content like sketches, work-in-progress shots,
        or tool setups. The community loves seeing the creative process!
      </p>
    </div>
  </DocLayout>
);

export default CreatePost;
