import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogGrid } from "@/components/BlogGrid";
import { blogPosts as initialBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);

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
        <BlogHeader />
        <BlogGrid blogPosts={blogPosts} onToggleExpansion={togglePostExpansion} />
      </main>
    </div>
  );
};

export default Blog;