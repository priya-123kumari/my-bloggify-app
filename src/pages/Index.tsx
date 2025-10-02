import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogPostCard from "@/components/BlogPostCard";
import BlogFooter from "@/components/BlogFooter";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";

const Index = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      
      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Story</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our editor's pick for this week - a story that stands out from the crowd
              </p>
            </div>
            <BlogPostCard post={featuredPost} featured />
          </div>
        </section>
      )}
      
      {/* Recent Posts Section */}
      <section className="py-16 lg:py-24 bg-blog-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Stories</h2>
              <p className="text-lg text-muted-foreground">
                Discover the latest insights and perspectives from our community
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/posts" className="flex items-center">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 blog-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1,200+</h3>
              <p className="text-muted-foreground">Published Stories</p>
            </div>
            
            <div className="text-center p-8 blog-card">
              <div className="w-16 h-16 bg-blog-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blog-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Active Writers</p>
            </div>
            
            <div className="text-center p-8 blog-card">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our community of writers and share your unique perspective with readers around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Writing Today
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <BlogFooter />
    </div>
  );
};

export default Index;
