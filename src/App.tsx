import { useState } from "react";
import { Book } from "lucide-react";
import DocumentationApp from "./pages/DocumentationApp";
import { Route, Routes } from "react-router-dom";

// Import your documentation components
import ExploreContent from "./pages/ExploreContent";
import BlogCategories from "./pages/BlogCategories";
import SearchPostsUsers from "./pages/SearchPostsUsers";
import ManagePostsCollections from "./pages/ManagePostsCollections";
import CreatePost from "./pages/CreatePost";
import GenerateImagesAI from "./pages/GenerateImagesAI";
import EditImages from "./pages/EditImages";
import WriteBlogArticles from "./pages/WriteBlogArticles";
import NotificationSystem from "./pages/NotificationSystem";
import UserProfileInsights from "./pages/UserProfileInsights";
import SubscriptionManagement from "./pages/SubscriptionManagement";
import ContentAutomation from "./pages/ContentAutomation";

function App() {
  const [showDocs, setShowDocs] = useState(false);

  if (showDocs) {
    return (
      <Routes>
        <Route
          path="/"
          element={<DocumentationApp onClose={() => setShowDocs(false)} />}
        />
        {/* Add routes for your documentation pages */}
        <Route path="/docs/explore-content" element={<ExploreContent />} />
        <Route path="/docs/blog-categories" element={<BlogCategories />} />
        <Route path="/docs/search-posts-users" element={<SearchPostsUsers />} />
        <Route
          path="/docs/manage-posts-collections"
          element={<ManagePostsCollections />}
        />
        <Route path="/docs/create-post" element={<CreatePost />} />
        <Route path="/docs/generate-images-ai" element={<GenerateImagesAI />} />
        <Route path="/docs/edit-images" element={<EditImages />} />
        <Route
          path="/docs/write-blog-articles"
          element={<WriteBlogArticles />}
        />
        <Route
          path="/docs/notification-system"
          element={<NotificationSystem />}
        />
        <Route
          path="/docs/user-profile-insights"
          element={<UserProfileInsights />}
        />
        <Route
          path="/docs/subscription-management"
          element={<SubscriptionManagement />}
        />
        <Route
          path="/docs/content-automation"
          element={<ContentAutomation />}
        />
      </Routes>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 font-bold text-transparent text-4xl">
            ArtShare Platform
          </h1>
          <p className="text-gray-600 text-lg">
            A creative platform for exploring, creating, and managing visual
            content
          </p>
        </div>
        <button
          onClick={() => setShowDocs(true)}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg text-white hover:scale-105 transition-all duration-200 transform"
        >
          <Book size={24} />
          View Documentation System
        </button>
        <p className="mt-4 text-gray-500 text-sm">
          Click above to explore the complete documentation for all ArtShare
          features
        </p>
      </div>
    </div>
  );
}

export default App;
