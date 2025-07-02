import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import categorySareesImage from "@/assets/category-sarees.jpg";
import categoryMensImage from "@/assets/category-mens.jpg";
import categoryFurnishingsImage from "@/assets/category-furnishings.jpg";
import categoryKidsImage from "@/assets/category-kids.jpg";
import categoryCasualImage from "@/assets/category-casual.jpg";
import categoryNightwearImage from "@/assets/category-nightwear.jpg";

const categories = [
  {
    id: "sarees",
    title: "Women's Collection",
    description: "Elegant sarees & traditional wear",
    image: categorySareesImage,
    link: "/women"
  },
  {
    id: "mens",
    title: "Men's Fashion",
    description: "Kurtas, sherwanis & formal wear",
    image: categoryMensImage,
    link: "/men"
  },
  {
    id: "furnishings",
    title: "Home Furnishings",
    description: "Textiles, cushions & decoratives",
    image: categoryFurnishingsImage,
    link: "/home"
  },
  {
    id: "kids",
    title: "Kids Wear",
    description: "Adorable outfits for little ones",
    image: categoryKidsImage,
    link: "/kids"
  },
  {
    id: "casual",
    title: "T-Shirts & Jeans",
    description: "Trendy casual wear collection",
    image: categoryCasualImage,
    link: "/casual"
  },
  {
    id: "nightwear",
    title: "Night Wear for Kids",
    description: "Comfortable sleepwear & pajamas",
    image: categoryNightwearImage,
    link: "/nightwear"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections for every celebration and occasion
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-warm transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="hero"
                    className="backdrop-blur-sm"
                  >
                    Shop {category.title}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;