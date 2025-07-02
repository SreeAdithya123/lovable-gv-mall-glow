import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">G.L.R Shopping Mall</h3>
              <p className="text-primary-foreground/80 text-lg">
                Celebrating tradition, embracing style. Your trusted partner for 
                every special moment and everyday elegance.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>G.L.R Shopping Mall, Main Rd, Nidadavole, Andhra Pradesh 534301, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@gvmall.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Women's Collection
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Men's Fashion
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Home Furnishings
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Festival Collection
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Customer Care</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Size Guide
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Exchange Policy
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Care Instructions
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Store Locator
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright & Links */}
            <div className="text-center md:text-right">
              <div className="text-sm text-primary-foreground/60 mb-2">
                © 2022 Gurram Venkateshwarlu Textiles Pvt. Ltd. All rights reserved.
              </div>
              <div className="flex gap-6 justify-center md:justify-end text-sm">
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;