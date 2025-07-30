import React from "react";
import DocLayout from "../components/DocLayout";

interface ExploreContentDocs {
  onBack?: () => void;
}

const ExploreContent: React.FC<ExploreContentDocs> = ({ onBack }) => (
  <DocLayout title="Explore Content" onBack={onBack}>
    <p className="mb-6 text-gray-700 text-lg">
      Discover amazing artworks from creators around the world. ArtShare's
      explore feature helps you find trending content, latest uploads, and
      personalized recommendations based on your interests.
    </p>

    <section className="mb-8">
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        How to Explore Content
      </h2>
      <ol className="space-y-4">
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            1
          </span>
          <div>
            <p className="font-medium text-gray-900">
              Navigate to the Explore Page
            </p>
            <p className="text-gray-600">
              Click the "Explore" button in the main navigation or use the
              search icon in the header.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            2
          </span>
          <div>
            <p className="font-medium text-gray-900">Choose Your Feed</p>
            <p className="text-gray-600">
              Switch between "Trending", "Latest", and "For You" tabs to see
              different content streams.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            3
          </span>
          <div>
            <p className="font-medium text-gray-900">Filter by Category</p>
            <p className="text-gray-600">
              Use the category filters to narrow down content by type: Digital
              Art, Photography, Illustrations, etc.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex flex-shrink-0 justify-center items-center bg-purple-100 rounded-full w-8 h-8 font-semibold text-purple-600">
            4
          </span>
          <div>
            <p className="font-medium text-gray-900">Interact with Content</p>
            <p className="text-gray-600">
              Like, comment, and follow creators whose work inspires you. This
              helps improve your recommendations.
            </p>
          </div>
        </li>
      </ol>
    </section>

    <div className="bg-blue-50 mb-6 p-4 border border-blue-200 rounded-lg">
      <h3 className="mb-2 font-semibold text-blue-900">💡 Pro Tip</h3>
      <p className="text-blue-800">
        The "For You" feed gets better over time as you interact with content.
        Like and follow creators you enjoy to get more personalized
        recommendations!
      </p>
    </div>

    <section>
      <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
        Understanding Content Types
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <div className="bg-purple-500 mt-2 rounded-full w-2 h-2"></div>
          <div>
            <p className="font-medium text-gray-900">Featured Artwork</p>
            <p className="text-gray-600">
              Highlighted pieces selected by our curation team
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="bg-purple-500 mt-2 rounded-full w-2 h-2"></div>
          <div>
            <p className="font-medium text-gray-900">Community Uploads</p>
            <p className="text-gray-600">
              Original creations shared by ArtShare users
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="bg-purple-500 mt-2 rounded-full w-2 h-2"></div>
          <div>
            <p className="font-medium text-gray-900">AI-Generated Art</p>
            <p className="text-gray-600">
              Creative pieces made using our AI tools
            </p>
          </div>
        </li>
      </ul>
    </section>
  </DocLayout>
);

export default ExploreContent;
