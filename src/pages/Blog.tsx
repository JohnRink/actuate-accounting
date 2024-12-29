import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistance } from "date-fns";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Digital Transformation in Modern Business",
    description: "Explore how digital transformation is reshaping business operations and customer experiences in the modern era.",
    date: "2024-02-20",
    category: "Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "The Future of Work: Remote Teams and Digital Tools",
    description: "Discover how remote work is changing the workplace landscape and the tools that make it possible.",
    date: "2024-02-15",
    category: "Future of Work",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Businesses",
    description: "Learn essential cybersecurity practices to protect your business in an increasingly digital world.",
    date: "2024-02-10",
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
];

const Blog = () => {
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
        </div>

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
                <CardTitle className="text-xl font-serif text-olive hover:text-olive-dark cursor-pointer">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-olive-light">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-olive hover:text-olive-dark font-medium">
                  Read more →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;