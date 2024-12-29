import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CreateBlogPost } from "@/components/CreateBlogPost";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogGrid } from "@/components/BlogGrid";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  expanded?: boolean;
}

const Blog = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const isCreator = true; // For demonstration, you would replace this with actual auth logic

  const togglePostExpansion = (postId: number) => {
    setBlogPosts((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, expanded: !post.expanded } : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <BlogHeader
          showCreatePost={showCreatePost}
          setShowCreatePost={setShowCreatePost}
          isCreator={isCreator}
        />

        {showCreatePost && isCreator && (
          <div className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-serif font-bold text-olive mb-6">
              Create New Post
            </h2>
            <CreateBlogPost />
          </div>
        )}

        <BlogGrid blogPosts={blogPosts} onToggleExpansion={togglePostExpansion} />
      </main>
    </div>
  );
};

export default Blog;