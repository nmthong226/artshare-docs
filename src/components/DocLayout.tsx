import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface DocLayoutProps {
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
}

const DocLayout: React.FC<DocLayoutProps> = ({ title, children }) => (
  <div className="flex bg-gradient-to-br from-slate-50 to-blue-50 w-full min-h-screen">
    <div className="mx-auto px-4 py-8 max-w-4xl container">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 mb-4 text-purple-600 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to all guides
        </Link>
        <h1 className="mb-2 font-bold text-gray-900 text-2xl">
          ArtShare Documentation – {title}
        </h1>
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-20 h-1"></div>
      </div>

      {/* Content */}
      <div className="max-w-none prose prose-lg">{children}</div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-gray-200 border-t">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-purple-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to all guides
          </Link>
          <p className="text-gray-500 text-sm">
            Need more help? Contact our{" "}
            <a href="#" className="text-purple-600 hover:text-purple-700">
              support team
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DocLayout;
