import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone } from "lucide-react";
import heroCoupleImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">4.8★ Rating • 1M+ Happy Customers</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Celebrate Every{" "}
                <span className="text-accent animate-glow">Moment</span>
                <br />
                at G.L.R Shopping Mall
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl">
                Your one-stop destination for fashion, furnishings & fun.
                Where tradition meets modern style.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/30"
              >
                <MapPin className="w-5 h-5" />
                Visit Store
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-4 text-primary-foreground/80 justify-center lg:justify-start">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call us: +91 123 456 7890</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroCoupleImage} 
                alt="Happy couple in traditional Indian attire celebrating"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-elegant animate-float">
              <span className="font-semibold">Festival Ready!</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background text-foreground px-4 py-2 rounded-full shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <span className="font-semibold">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;