
import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import ServicesCards from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import MapComponent from "@/components/Map";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/contact";
import IndustriesSection from "@/components/Service2";
import Brands from "@/components/Brands";

export default function Home() {
  return (
<div className="">

  <Hero />
  <Brands />
  <AboutSection />  
  <ServicesCards />
   <Reviews />
   <ProductCard />
  <WhyChooseUs />
  <IndustriesSection />
  <ContactSection />
  <MapComponent />
 

</div>
  );
}
