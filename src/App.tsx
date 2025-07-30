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
  return (
    <Routes>
      <Route path="/" element={<DocumentationApp />} />
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
      <Route path="/docs/write-blog-articles" element={<WriteBlogArticles />} />
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
      <Route path="/docs/content-automation" element={<ContentAutomation />} />
    </Routes>
  );
}

export default App;
