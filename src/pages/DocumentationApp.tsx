import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Book,
  Search,
  Image,
  Edit3,
  FileText,
  Bell,
  User,
  CreditCard,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    id: "explore-content",
    title: "Explore Content",
    icon: Search,
    description: "Browse trending, latest, and recommended artworks",
    path: "/docs/explore-content",
  },
  {
    id: "blog-categories",
    title: "Blog Categories",
    icon: Book,
    description: "Navigate categorized blog content",
    path: "/docs/blog-categories",
  },
  {
    id: "search-posts-users",
    title: "Search Posts & Users",
    icon: Search,
    description: "Use search and filter system effectively",
    path: "/docs/search-posts-users",
  },
  {
    id: "manage-posts-collections",
    title: "Manage Posts & Collections",
    icon: FileText,
    description: "Organize personal posts and curated collections",
    path: "/docs/manage-posts-collections",
  },
  {
    id: "create-post",
    title: "Create a Post",
    icon: Edit3,
    description: "Upload content, write descriptions, and publish",
    path: "/docs/create-post",
  },
  {
    id: "generate-images-ai",
    title: "Generate Images with AI",
    icon: Zap,
    description: "Create art using AI models with text prompts",
    path: "/docs/generate-images-ai",
  },
  {
    id: "edit-images",
    title: "Edit Images",
    icon: Image,
    description: "Crop, filter, and customize your images",
    path: "/docs/edit-images",
  },
  {
    id: "write-blog-articles",
    title: "Write Deep-Dive Blog Articles",
    icon: FileText,
    description: "Long-form content creation and formatting",
    path: "/docs/write-blog-articles",
  },
  {
    id: "notification-system",
    title: "Notification System",
    icon: Bell,
    description: "Understand and manage app alerts",
    path: "/docs/notification-system",
  },
  {
    id: "user-profile-insights",
    title: "User Profile & Insights",
    icon: User,
    description: "Manage settings, profile views, and activity",
    path: "/docs/user-profile-insights",
  },
  {
    id: "subscription-management",
    title: "Subscription & Plan Management",
    icon: CreditCard,
    description: "Sign up for plans, upgrade, and billing info",
    path: "/docs/subscription-management",
  },
  {
    id: "content-automation",
    title: "Content Automation",
    icon: Zap,
    description: "Use AI and scheduling to automate posting",
    path: "/docs/content-automation",
  },
];

interface DocumentationAppProps {
  onClose?: () => void;
}

const DocumentationApp: React.FC<DocumentationAppProps> = () => {
  const navigate = useNavigate();
  const handleNavigateToMainApp = () => {
    navigate("/https://artsharezone-black.vercel.app/explore");
  };
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="mx-auto px-2 xs:px-6 sm:px-14 py-8 max-w-5xl container">
        {/* Header */}
        <div className="flex md:flex-row flex-col justify-between items-center space-y-2 min-md:space-y-0 mb-8">
          <div>
            <h1 className="bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-transparent text-4xl">
              ArtShare Documentation
            </h1>
            <p className="mt-2 text-gray-600">
              Learn how to use the most of your creative platform
            </p>
          </div>
          <button
            onClick={handleNavigateToMainApp}
            className="flex items-center gap-2 bg-white shadow-sm p-2 rounded-lg w-full xs:w-fit font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to App
          </button>
        </div>

        {/* Feature Grid */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link to={feature.path} key={feature.id}>
                <div className="group bg-white shadow-sm hover:shadow-md p-6 border border-gray-100 hover:border-purple-200 rounded-xl transition-all duration-200 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-100 group-hover:from-purple-200 to-blue-100 group-hover:to-blue-200 p-3 rounded-lg transition-colors">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Tips */}
        <div className="bg-white shadow-sm mt-12 p-8 border border-gray-100 rounded-xl">
          <h2 className="mb-4 font-semibold text-gray-900 text-2xl">
            Getting Started Tips
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium text-gray-900">
                New to ArtShare?
              </h3>
              <p className="text-gray-600 text-sm">
                Start with "Create a Post" to upload your first artwork, then
                explore "Generate Images with AI" to discover our creative
                tools.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-medium text-gray-900">
                Looking to grow?
              </h3>
              <p className="text-gray-600 text-sm">
                Check out "Content Automation" and "User Profile & Insights" to
                optimize your presence and reach more creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationApp;
