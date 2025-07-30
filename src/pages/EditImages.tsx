import DocLayout from "../components/DocLayout";

const EditImages: React.FC<{ onBack?: () => void }> = ({ onBack }) => (
  <DocLayout title="Edit Images" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Perfect your images with ArtShare's comprehensive editing tools. Whether
      you're fine-tuning photos, adjusting AI-generated art, or creating
      composite images, our editor helps you achieve professional results.
    </p>
    Generated code
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Accessing the Image Editor
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">From Upload Flow</p>
            <p className="text-gray-600">
              After uploading an image, click "Edit" before publishing your
              post.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">From Existing Posts</p>
            <p className="text-gray-600">
              Click the edit icon on any of your posts and select "Edit Image".
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">From AI Generation</p>
            <p className="text-gray-600">
              After generating an AI image, use the "Edit" button to fine-tune
              the result.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Essential Editing Tools
      </h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            🔧 Basic Adjustments
          </h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>• Crop and rotate</li>
            <li>• Brightness and contrast</li>
            <li>• Saturation and vibrance</li>
            <li>• Exposure and highlights</li>
          </ul>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            🎨 Creative Filters
          </h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>• Vintage and film effects</li>
            <li>• Black and white conversions</li>
            <li>• Color grading presets</li>
            <li>• Artistic style filters</li>
          </ul>
        </div>
        <div className="bg-white p-4 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            ⚡ Advanced Features
          </h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>• Background removal</li>
            <li>• Object erasure</li>
            <li>• Selective color editing</li>
            <li>• Custom overlays and text</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Editing Workflow Tips
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Start with Basic Corrections
            </p>
            <p className="text-gray-600">
              Crop, straighten, and adjust exposure before applying creative
              effects.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Use Non-Destructive Editing
            </p>
            <p className="text-gray-600">
              All edits are saved as layers, so you can always revert changes or
              adjust previous steps.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Preview Before Saving</p>
            <p className="text-gray-600">
              Use the before/after toggle to compare your edits with the
              original image.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-blue-100 rounded-full w-8 h-8 font-semibold text-blue-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Save Multiple Versions</p>
            <p className="text-gray-600">
              Export different versions for different platforms or keep both
              edited and original versions.
            </p>
          </div>
        </li>
      </ol>
    </section>
    <div className="bg-red-50 p-4 border border-red-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-red-900">💾 Save Reminder</h3>
      <p className="text-red-800">
        Always save your work before closing the editor! Use Ctrl+S (Cmd+S)
        frequently or enable auto-save in editor settings.
      </p>
    </div>
  </DocLayout>
);

export default EditImages;
