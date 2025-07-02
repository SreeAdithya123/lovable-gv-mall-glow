import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X } from "lucide-react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.3; // Show after scrolling 30% of viewport height
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-glow p-4 transform transition-transform duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-5 h-5" />
          <span className="font-medium">Ready to celebrate? Start shopping now!</span>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="festive"
            size="sm"
            className="text-sm px-6"
          >
            Shop Now
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;