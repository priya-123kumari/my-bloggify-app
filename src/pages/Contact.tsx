import BlogHeader from "@/components/BlogHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
                Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button variant="blog-hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Other ways to reach us</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="blog-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <p className="text-muted-foreground mb-1">Drop us a line anytime</p>
                        <p className="text-primary font-medium">kumaripriya58688@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="blog-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blog-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-blog-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Call Me</h3>
                        <p className="text-muted-foreground mb-1">Reach out directly</p>
                        <p className="text-blog-accent font-medium">+91 9319896255</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="blog-card p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Linkedin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <p className="text-muted-foreground mb-1">Connect professionally</p>
                        <a href="https://www.linkedin.com/in/priya-kumari-3a2900263/" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
                          linkedin.com/in/priya-kumari
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">Connect with Me</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">GitHub:</span>
                      <a href="https://github.com/priya-123kumari" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                        github.com/priya-123kumari
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Email:</span>
                      <span className="text-primary font-medium">kumaripriya58688@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;