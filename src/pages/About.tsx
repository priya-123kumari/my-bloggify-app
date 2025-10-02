import BlogHeader from "@/components/BlogHeader";
import { Button } from "@/components/ui/button";
//import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">About BlogSpace</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We're a community-driven platform where passionate writers share their insights, 
                experiences, and perspectives on technology, design, and creativity.
              </p>
              <p className="text-lg text-muted-foreground/80 mt-4">
                Designed with ❤️ by <span className="font-semibold text-primary">Priya</span>
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that everyone has a story worth telling. BlogSpace provides a platform 
                  for writers to share their knowledge, connect with readers, and contribute to meaningful 
                  conversations in the tech and design community.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our goal is to foster a community where learning is continuous, ideas are shared freely, 
                  and creativity flourishes through the power of written word.
                </p>
              </div>
              
              <div className="blog-card p-8">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to share your story with our growing community of readers and writers?
                </p>
                <Button variant="blog-hero" size="lg" className="w-full">
                  Start Writing Today
                </Button>
              </div>
            </div>
            
            
                
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;