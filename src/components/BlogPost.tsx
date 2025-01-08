import { formatDistance } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    imageUrl: string;
    author: string;
    expanded?: boolean;
  };
  onToggleExpansion: (postId: number) => void;
}

export const BlogPost = ({ post, onToggleExpansion }: BlogPostProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg">
        <img
          src="/lovable-uploads/d48741ef-3592-4fd2-817e-82a7203655f1.png"
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
        <CardTitle className="text-lg font-serif text-olive">{post.title}</CardTitle>
        <div className="text-sm text-olive-light mb-4">By {post.author}</div>
        <CardDescription className="text-olive-light whitespace-pre-line">
          {post.expanded ? post.description : `${post.description.slice(0, 150)}...`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          onClick={() => onToggleExpansion(post.id)}
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
  );
};