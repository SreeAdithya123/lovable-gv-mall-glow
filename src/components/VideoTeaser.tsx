import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
import storeInteriorImage from "@/assets/store-interior.jpg";

const VideoTeaser = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                See Celebrations Come to Life
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Take a virtual tour of our beautiful store and witness the joy of our customers 
                as they find their perfect outfit for every special moment.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                </div>
                <span>Premium quality fabrics and materials</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                </div>
                <span>Expert styling and fitting assistance</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                </div>
                <span>Traditional craftsmanship meets modern design</span>
              </div>
            </div>

            {/* CTA */}
            <Button 
              variant="cta"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Video Thumbnail */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-glow group cursor-pointer">
              <img 
                src={storeInteriorImage}
                alt="GV Mall store interior showcasing beautiful collections"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full shadow-elegant">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">50K+ views</span>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-6 right-6 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                2:30
              </div>
            </div>

            {/* Floating Decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTeaser;