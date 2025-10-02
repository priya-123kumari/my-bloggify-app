import { useParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const Post = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The story you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/posts" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Link>
            </Button>
            
            {/* Post Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
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
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </header>
            
            {/* Featured Image */}
            {post.image && (
              <div className="mb-12 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            {/* Post Content */}
            <div 
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Post Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">Share this story:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Facebook</Button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;