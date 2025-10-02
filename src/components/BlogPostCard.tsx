import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image?: string;
  featured?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  const cardClasses = featured 
    ? "blog-card lg:col-span-2 lg:flex lg:items-center lg:space-x-8" 
    : "blog-card group hover:scale-[1.02]";

  return (
    <article className={cardClasses}>
      {post.image && (
        <div className={`${featured ? "lg:w-1/2" : ""} overflow-hidden rounded-lg`}>
          <img 
            src={post.image} 
            alt={post.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              featured ? "h-64 lg:h-80" : "h-48"
            }`}
          />
        </div>
      )}
      
      <div className={`${featured ? "lg:w-1/2" : ""} ${post.image ? "mt-6 lg:mt-0" : ""}`}>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <span className="bg-blog-accent/10 text-blog-accent px-3 py-1 rounded-full font-medium">
            {post.category}
          </span>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{post.publishDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h2 className={`font-bold leading-tight mb-3 group-hover:text-primary transition-colors ${
          featured ? "text-2xl lg:text-3xl" : "text-xl"
        }`}>
          <Link to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{post.author}</span>
          </div>
          
          <Button variant="ghost" size="sm" className="group/btn">
            <Link to={`/post/${post.id}`} className="flex items-center">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;