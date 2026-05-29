import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactMapSection from "@/components/home/ContactMapSection";
import { LocalBusinessSchema, ProductSchema, FAQSchema } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <ProductSchema />
      <FAQSchema />
      <HeroSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <ReviewsSection />
      <FAQSection />
      <ContactMapSection />
    </>
  );
}
