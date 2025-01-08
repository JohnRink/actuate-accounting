import { BlogPost } from "./BlogPost";
import type { BlogPost as BlogPostType } from "@/data/blogPosts";

interface BlogGridProps {
  blogPosts: BlogPostType[];
  onToggleExpansion: (postId: number) => void;
}

export const BlogGrid = ({ blogPosts, onToggleExpansion }: BlogGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} onToggleExpansion={onToggleExpansion} />
      ))}
    </div>
  );
};