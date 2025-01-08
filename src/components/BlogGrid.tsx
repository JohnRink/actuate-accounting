import { BlogPost } from "./BlogPost";

interface BlogGridProps {
  blogPosts: Array<{
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    imageUrl: string;
    author: string;
    expanded?: boolean;
  }>;
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