import { Heart } from "lucide-react";

const BlogFooter = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Designed with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by</span>
            <span className="font-semibold text-primary">Priya</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 BlogSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;