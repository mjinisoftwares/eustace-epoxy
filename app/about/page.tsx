import {About3} from "@/components/about3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Eustace Epoxy Ltd provides professional epoxy flooring, microcement finishes, Venetian plaster, waterproofing systems, and protective coatings in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <section>
      <About3 />
    </section>
  )
}