import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import SocialProof from "@/components/SocialProof";
import VideoTeaser from "@/components/VideoTeaser";
import StoreVisit from "@/components/StoreVisit";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <SocialProof />
      <VideoTeaser />
      <StoreVisit />
      <Footer />
      <StickyBar />
    </main>
  );
};

export default Index;
