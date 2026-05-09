import IndustriesSection from "@/components/Service2";
import ServicesCards from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epoxy Contractors in Nairobi | Waterproofing Solutions Nairobi",
  description: "Transform your residential, commercial, and industrial spaces with high-quality epoxy flooring and waterproofing solutions designed for beauty, durability, and long-lasting performance.",
};
export default function ServicesPage() {
    return (
    <section>
     
      <ServicesCards />
      <IndustriesSection />
    </section>
  )
}