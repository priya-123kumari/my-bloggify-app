import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/blog-hero.jpg";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-blog-muted py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Stories that
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blog-accent">
                  {" "}inspire
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover thoughtful articles, insights, and stories from passionate writers around the world. Join our community of readers and creators.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="blog-hero" size="lg" className="group">
                Start Reading
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Write Your Story
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blog-accent rounded-full" />
                <span>1,200+ Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>50+ Writers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-hero)]">
              <img 
                src={heroImage} 
                alt="Blog hero illustration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blog-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;