import { Button } from "@/components/ui/button";
import { PlusCircle, XCircle } from "lucide-react";

interface BlogHeaderProps {
  showCreatePost: boolean;
  setShowCreatePost: (show: boolean) => void;
  isCreator: boolean;
}

export const BlogHeader = ({
  showCreatePost,
  setShowCreatePost,
  isCreator,
}: BlogHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-serif font-bold text-olive mb-4">
        Blog & Publications
      </h1>
      <p className="text-olive-light text-lg max-w-2xl mx-auto">
        Stay updated with our latest insights, industry trends, and expert
        perspectives on digital transformation and business innovation.
      </p>
      {isCreator && (
        <Button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className="mt-6"
          variant="outline"
        >
          {showCreatePost ? (
            <>
              <XCircle className="mr-2 h-4 w-4" />
              Cancel
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Post
            </>
          )}
        </Button>
      )}
    </div>
  );
};