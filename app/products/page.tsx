import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description: "Premium decorative and industrial flooring products including epoxy resin, microcement, and waterproofing systems in Nairobi, Kenya.",
};
export default function Products() {
    return (
        <div>
            <ProductCard />
        </div>
    );
}