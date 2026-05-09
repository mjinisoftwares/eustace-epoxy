import ContactSection from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Eustace Epoxy Ltd for high-quality epoxy flooring and waterproofing solutions in Nairobi, Kenya.",
};
export default function ContactPage() {
    return (
        <div>
          <ContactSection />
        </div>
    );
}