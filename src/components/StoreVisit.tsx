import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const StoreVisit = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Drop In and Say Hi
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Visit our beautiful store and experience the warmth of traditional Indian hospitality. 
                Our expert team is ready to help you find the perfect outfit for any occasion.
              </p>
            </div>

            {/* Store Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    GV Mall, Fashion Street<br />
                    Hyderabad, Telangana 500001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                  <p className="text-muted-foreground">
                    +91 123 456 7890<br />
                    info@gvmall.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Store Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Sat: 10:00 AM - 9:00 PM<br />
                    Sunday: 11:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-muted to-secondary rounded-3xl p-8 shadow-elegant h-[500px] flex items-center justify-center group hover:shadow-warm transition-all duration-300">
              {/* Map Placeholder */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Find Us Here</h3>
                <p className="text-muted-foreground">
                  Interactive map will load when you click "Get Directions"
                </p>
                <Button variant="ghost" className="mt-4">
                  View on Google Maps
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreVisit;