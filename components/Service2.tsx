import Image from "next/image"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const industries = [
  {
    title: "Industrial Spaces",
    image: "/Industry-Epoxy.jpg",
    description:
      "Durable epoxy flooring systems for factories, warehouses, workshops, and industrial facilities exposed to heavy machinery and high traffic.",
  },
  {
    title: "Swimming Pools",
    image: "/swimo.jpg",
    description:
      "Waterproof and slip-resistant epoxy finishes ideal for swimming pools, pool decks, and wet recreational spaces.",
  },
  {
    title: "Flake Flooring",
    image: "/Microcement-Flakes.jpg",
    description:
      "Decorative flake flooring solutions for garages, homes, and commercial spaces with a durable textured finish.",
  },
  {
    title: "Parking Areas",
    image: "/Epoxy-Parking.jpg",
    description:
      "Heavy-duty epoxy flooring for parking lots and garages that resists stains, chemicals, moisture, and daily traffic.",
  },
  {
    title: "Playgrounds",
    image: "/Epoxy-plays.jpg",
    description:
      "Safe, hygienic, and slip-resistant flooring systems for playgrounds and children’s recreational areas.",
  },
//   {
//     title: "Commercial Interiors",
//     image: "/industries/commercial.jpg",
//     description:
//       "Modern decorative finishes for offices, restaurants, hotels, showrooms, and retail spaces.",
//   },
//   {
//     title: "Hospitals & Clinics",
//     image: "/industries/hospital.jpg",
//     description:
//       "Seamless hygienic flooring solutions designed for hospitals, laboratories, clinics, and healthcare facilities.",
//   },
//   {
//     title: "Residential Homes",
//     image: "/industries/residential.jpg",
//     description:
//       "Elegant epoxy and microcement finishes for kitchens, bathrooms, living spaces, staircases, and feature walls.",
//   },
//   {
//     title: "Restaurants & Hotels",
//     image: "/industries/hotel.jpg",
//     description:
//       "Luxury decorative finishes and durable flooring systems designed for hospitality and entertainment spaces.",
//   },
]

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Flooring & Surface Solutions for Every Space
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            Eustace Epoxy Ltd delivers durable, seamless, and decorative
            flooring systems for residential, commercial, and industrial
            environments across Kenya.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary">
                  {industry.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}