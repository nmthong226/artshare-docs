import DocLayout from "../components/DocLayout";

const WriteBlogArticles: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Write Deep-Dive Blog Articles" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Share your expertise and insights through ArtShare's long-form blog
      platform. Whether you're writing tutorials, sharing creative processes, or
      discussing industry trends, our rich editor helps you create engaging,
      professional articles.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Starting Your Article
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Access the Blog Editor</p>
            <p className="text-gray-600">
              Navigate to "Create" → "Write Article" or click "New Article" from
              your blog dashboard.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Choose a Template</p>
            <p className="text-gray-600">
              Select from pre-designed templates: Tutorial, Review, Interview,
              or start with a blank canvas.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Craft Your Headline</p>
            <p className="text-gray-600">
              Write a compelling title that clearly communicates the value and
              topic of your article.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Add a Featured Image</p>
            <p className="text-gray-600">
              Upload a high-quality cover image that represents your article's
              content and grabs attention.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Rich Editor Features
      </h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            📝 Text Formatting
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Headers and subheaders (H1-H6)</li>
            <li>• Bold, italic, and strikethrough</li>
            <li>• Bulleted and numbered lists</li>
            <li>• Block quotes and code blocks</li>
            <li>• Custom text colors and highlights</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            🔗 Media & Embeds
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Image galleries and carousels</li>
            <li>• Video embeds (YouTube, Vimeo)</li>
            <li>• Links to other posts and profiles</li>
            <li>• Interactive polls and Q&A</li>
            <li>• Code syntax highlighting</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Article Structure Best Practices
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <ol className="space-y-3">
          <li>
            <strong>Hook:</strong> Start with an engaging opening that draws
            readers in
          </li>
          <li>
            <strong>Introduction:</strong> Clearly state what the article will
            cover and why it matters
          </li>
          <li>
            <strong>Body Sections:</strong> Break content into digestible
            sections with clear headers
          </li>
          <li>
            <strong>Visual Elements:</strong> Include images, examples, or
            diagrams every 2-3 paragraphs
          </li>
          <li>
            <strong>Actionable Content:</strong> Provide concrete tips, steps,
            or takeaways
          </li>
          <li>
            <strong>Conclusion:</strong> Summarize key points and include a
            call-to-action
          </li>
        </ol>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Publishing and Promotion
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-green-100 rounded-full w-8 h-8 font-semibold text-green-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Set SEO Details</p>
            <p className="text-gray-600">
              Add meta description, tags, and URL slug for better search
              visibility.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-green-100 rounded-full w-8 h-8 font-semibold text-green-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Choose Publication Settings
            </p>
            <p className="text-gray-600">
              Select immediate publishing or schedule for later. Set article
              category and visibility.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-green-100 rounded-full w-8 h-8 font-semibold text-green-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Share Across Platforms</p>
            <p className="text-gray-600">
              Use built-in sharing tools to promote your article on social media
              and other platforms.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <div className="bg-blue-50 p-4 border border-blue-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-blue-900">✍️ Writing Tip</h3>
      <p className="text-blue-800">
        Use the reading time estimator to keep articles focused. Aim for 5-15
        minutes of reading time for optimal engagement with creative content.
      </p>
    </div>
  </DocLayout>
);

export default WriteBlogArticles;
