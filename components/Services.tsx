import Image from "next/image"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const services = [
  {
    title: "Microcement Floors & Walls",
    image: "/microcement.webp",
    description:
      "Seamless decorative cement-based finishes for bathrooms, kitchens, living rooms, feature walls, staircases, countertops, and commercial interiors. Available in natural earthy tones, greys, whites, and custom finishes.",
  },
  {
    title: "Venetian Plaster",
    image: "/venetian-plaster.webp",
    description:
      "Elegant wall finishes with soft movement, depth, and natural texture. Ideal for feature walls, TV walls, reception areas, restaurants, hotels, and luxury interiors.",
  },
  {
    title: "Epoxy Flooring",
    image: "/epoxy-flooring.webp",
    description:
      "Durable epoxy systems for warehouses, garages, workshops, hospitals, showrooms, parking areas, factories, and commercial floors. Options include self-leveling systems, flake floors, anti-slip coatings, and heavy-duty finishes.",
  },
  {
    title: "Waterproofing Systems",
    image: "/waterproofing.webp",
    description:
      "Professional waterproofing solutions for bathrooms, balconies, rooftops, swimming pools, basements, kitchens, and all wet areas using proven coating and cementitious systems.",
  },
  {
    title: "Protective Coatings",
    image: "/protective-coating.webp",
    description:
      "Clear sealers and polyurethane coatings designed to protect concrete and decorative finishes while enhancing durability and appearance.",
  },
  {
    title: "E Casacrete Microcement Products",
    image: "/casacrete.png",
    description:
      "Premium decorative microcement systems for modern seamless surfaces, designed for floors, walls, bathrooms, and interior or exterior decorative finishes.",
  },
]

export default function ServicesCards() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Our Professional Services
          </h2>

          <p className="mt-4 text-white/70 text-lg">
            We provide premium epoxy flooring solutions designed for
            durability, beauty, and long-lasting performance across
            residential, commercial, and industrial spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}