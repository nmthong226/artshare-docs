import DocLayout from "../components/DocLayout";

const ContentAutomation: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Content Automation" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Streamline your creative workflow with ArtShare's powerful automation
      tools. Save time, maintain consistency, and keep your audience engaged
      with AI-powered content scheduling, repurposing, and optimization
      features.
    </p>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Setting Up Content Automation
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Access Automation Studio
            </p>
            <p className="text-gray-600">
              Navigate to Dashboard → Automation or click the robot icon in your
              creator toolbar.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Choose Automation Type</p>
            <p className="text-gray-600">
              Select from Post Scheduling, Content Repurposing, AI-Generated
              Variations, or Smart Collections.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Configure Your Rules</p>
            <p className="text-gray-600">
              Set up triggers, conditions, and actions that define when and how
              automation should work.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Test and Activate</p>
            <p className="text-gray-600">
              Run a test to ensure everything works as expected, then activate
              your automation workflow.
            </p>
          </div>
        </li>
      </ol>
    </section>

    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Automation Features
      </h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            ⏰ Smart Scheduling
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Optimal timing based on audience activity</li>
            <li>• Bulk upload and schedule multiple posts</li>
            <li>• Recurring posts for series or collections</li>
            <li>• Time zone optimization for global reach</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            🔄 Content Repurposing
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Auto-create variations from existing posts</li>
            <li>• Cross-post to multiple platforms</li>
            <li>• Generate thumbnails and previews</li>
            <li>• Extract highlights for social sharing</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            🤖 AI Content Assistant
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Suggest captions and descriptions</li>
            <li>• Auto-tag content based on visual analysis</li>
            <li>• Generate related content ideas</li>
            <li>• Optimize hashtags for discoverability</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h3 className="mb-3 font-semibold text-gray-900">
            📊 Performance Optimization
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• A/B test different posting times</li>
            <li>• Automatically boost high-performing content</li>
            <li>• Pause underperforming scheduled posts</li>
            <li>• Adjust strategy based on analytics</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Creating Automation Workflows
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <h3 className="mb-4 font-semibold text-gray-900">
          Example Workflow: Weekly Art Series
        </h3>
        <ol className="space-y-3">
          <li>
            <strong>Trigger:</strong> Every Monday at 9 AM
          </li>
          <li>
            <strong>Action:</strong> Create a new post from your "Weekly Series"
            collection
          </li>
          <li>
            <strong>AI Enhancement:</strong> Generate caption with series
            hashtags
          </li>
          <li>
            <strong>Cross-post:</strong> Share to Instagram and Twitter with
            adapted formats
          </li>
          <li>
            <strong>Follow-up:</strong> Send reminder to engage with comments
            after 2 hours
          </li>
        </ol>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Monitoring and Adjusting Automation
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Review Automation Reports
            </p>
            <p className="text-gray-600">
              Check weekly reports to see which automations are performing well
              and which need adjustment.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Update Content Sources</p>
            <p className="text-gray-600">
              Regularly refresh your content pools and collections that feed
              into automated workflows.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Adjust Based on Feedback
            </p>
            <p className="text-gray-600">
              Monitor audience engagement and comments to fine-tune your
              automation settings.
            </p>
          </div>
        </li>
      </ol>
    </section>

    <div className="bg-cyan-50 p-4 border border-cyan-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-cyan-900">⚡ Automation Tip</h3>
      <p className="text-cyan-800">
        Start with simple automations like scheduling and gradually add
        complexity. Always maintain some manual posts to keep your content
        feeling personal and authentic.
      </p>
    </div>
  </DocLayout>
);

export default ContentAutomation;
