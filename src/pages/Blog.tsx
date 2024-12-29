import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { CreateBlogPost } from "@/components/CreateBlogPost";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlusCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";

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
  // This would typically come from an authentication system
  const isCreator = true; // For demonstration, you would replace this with actual auth logic

  const togglePostExpansion = (postId: number) => {
    setBlogPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? { ...post, expanded: !post.expanded }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-sand-light">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-olive mb-4">
            Blog & Publications
          </h1>
          <p className="text-olive-light text-lg max-w-2xl mx-auto">
            Stay updated with our latest insights, industry trends, and expert perspectives on digital transformation and business innovation.
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

        {showCreatePost && isCreator && (
          <div className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-serif font-bold text-olive mb-6">Create New Post</h2>
            <CreateBlogPost />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-olive-light">{post.category}</span>
                  <span className="text-sm text-olive-light">
                    {formatDistance(new Date(post.date), new Date(), { addSuffix: true })}
                  </span>
                </div>
                <CardTitle className="text-xl font-serif text-olive">{post.title}</CardTitle>
                <CardDescription className="text-olive-light">
                  {post.expanded ? post.description : `${post.description.slice(0, 150)}...`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  onClick={() => togglePostExpansion(post.id)}
                  className="flex items-center gap-2 text-olive hover:text-olive-dark"
                >
                  {post.expanded ? (
                    <>
                      Read less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read more <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;