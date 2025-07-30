import DocLayout from "../components/DocLayout";

const GenerateImagesAI: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Generate Images with AI" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Unleash your creativity with ArtShare's AI image generation tools.
      Transform your ideas into stunning visual art using advanced AI models
      that understand artistic styles, techniques, and creative concepts.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Getting Started with AI Generation
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">Access the AI Studio</p>
            <p className="text-gray-600">
              Click "AI Generate" in the main menu or use the magic wand icon in
              the creation toolbar.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Choose Your Model</p>
            <p className="text-gray-600">
              Select from different AI models: Realistic, Artistic, Anime, or
              Sketch styles.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Write Your Prompt</p>
            <p className="text-gray-600">
              Describe what you want to create in detail. Be specific about
              style, colors, mood, and composition.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Adjust Settings</p>
            <p className="text-gray-600">
              Fine-tune aspect ratio, quality, and creativity level using the
              advanced settings panel.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            5
          </span>
          <div>
            <p className="font-medium text-gray-900">Generate and Refine</p>
            <p className="text-gray-600">
              Click generate and wait 10-30 seconds. Create variations or edit
              your prompt to refine results.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Writing Effective Prompts
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              ✅ Good Prompts Include
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Specific subjects and objects</li>
              <li>• Art style or technique</li>
              <li>• Color palette or mood</li>
              <li>• Composition details</li>
              <li>• Lighting and atmosphere</li>
              <li>• Quality descriptors (detailed, sharp, vivid)</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              ❌ Avoid These Issues
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Vague or generic descriptions</li>
              <li>• Contradictory style instructions</li>
              <li>• Too many competing elements</li>
              <li>• Unclear subject focus</li>
              <li>• Overly complex compositions</li>
              <li>• Requesting copyrighted characters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Example Prompts
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-1 font-medium text-gray-900">Realistic Portrait</p>
          <p className="text-gray-600 text-sm italic">
            "A professional headshot of a young woman with curly hair, soft
            natural lighting, shallow depth of field, shot with 85mm lens, warm
            color grading"
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-1 font-medium text-gray-900">Fantasy Landscape</p>
          <p className="text-gray-600 text-sm italic">
            "Mystical floating islands connected by chains, purple sunset sky,
            ancient ruins, ethereal lighting, digital painting style, highly
            detailed"
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-1 font-medium text-gray-900">Abstract Art</p>
          <p className="text-gray-600 text-sm italic">
            "Abstract geometric composition with flowing organic shapes, vibrant
            blue and orange color palette, modern minimalist style, high
            contrast"
          </p>
        </div>
      </div>
    </section>
    <div className="bg-indigo-50 p-4 border border-indigo-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-indigo-900">🎨 AI Art Tip</h3>
      <p className="text-indigo-800">
        Experiment with different models for the same prompt! Each AI model
        interprets prompts differently, giving you diverse creative options for
        the same concept.
      </p>
    </div>
  </DocLayout>
);

export default GenerateImagesAI;
