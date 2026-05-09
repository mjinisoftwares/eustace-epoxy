import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const products = [
  {
    title: "Hydropel Waterproofing Membrane",
    description:
      "Floor and wall bonding solution for tiles on cementitious renders, screeds, and concrete surfaces. Provides strong adhesion and long-lasting waterproof protection for wet and structural areas.",
    image: "/HYDOPEL-WATERPROOFING-MEMBRANE.png",
    tags: ["Waterproofing", "Tile Bonding", "Concrete"],
  },
  {
    title: "Epoxy Resin Hardener",
    description:
      "Industrial epoxy resin hardener used in epoxy flooring systems, coatings, and heavy-duty applications. Ensures strong curing, durability, and chemical resistance.",
    image: "/EPOXY-RESIN-HARDNER.png",
    tags: ["Industrial", "Resin System", "Heavy Duty"],
  },
  {
    title: "SikaTop Seal 107 KE",
    description:
      "Polymer-modified cementitious waterproofing system designed for flexible waterproofing of bathrooms, water tanks, balconies, basements, and wet areas.",
    image: "/SIKATOP-SEAL-107.png",
    tags: ["Waterproofing", "Cementitious", "Flexible"],
  },
  {
    title: "Kelakim Tile Adhesive",
    description:
      "High-performance tile adhesive for floor and wall applications. Suitable for concrete, screeds, and professional tile installations with strong bonding strength.",
    image: "/Kalekim-3001-IZOSTOP-1.png",
    tags: ["Tile Adhesive", "Strong Bond", "Construction"],
  },
]

export default function EpoxyProductsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-primary">
            Epoxy Flooring & Waterproofing Products
          </h2>
          <p className="mt-4 text-gray-600">
            High-performance construction chemicals and epoxy systems used in
            industrial, commercial, and residential flooring, waterproofing,
            and surface protection across Kenya.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:gap-12  sm:grid-cols-2 lg:grid-cols-3  ">

          {products.map((product, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border  border-secondary/20 bg-white shadow-md overflow-hidden transition hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-84 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}

                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">
                  {product.title}
                </h3>

                <p className="mt-2 text-base text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* TAGS */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-1 rounded-xl bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
         <Link href="/contact">
           <Button
                  className="mt-8 text-white bg-secondary hover:bg-accent/80 cursor-pointer"
                >
                  Request Quote
                </Button>
           
           </Link>
              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-primary">
            Need Bulk Epoxy Products or Site Supply?
          </h3>
          <p className="mt-2 text-gray-600">
            We supply and apply epoxy systems, waterproofing materials, and
            industrial coatings across Kenya.
          </p>
<Link href="/contact">
          <Button className="mt-8 bg-primary hover:bg-secondary cursor-pointer text-white">
            Contact Eustace Epoxy Ltd
          </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}