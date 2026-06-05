import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface About3Props {
  className?: string
}

const About3 = ({ className }: About3Props) => {
  const title = "About Eustace Epoxy Ltd"

  const description =
    "Eustace Epoxy Ltd is a Nairobi-based surface design and flooring company specializing in epoxy flooring systems, microcement finishes, Venetian plaster, waterproofing solutions, and protective coatings. We deliver modern, durable, and seamless surfaces for residential, commercial, and industrial spaces across Kenya."

  const services = [
    "Epoxy Flooring Systems",
    "Microcement Floors & Walls",
    "Venetian Plaster Finishes",
    "Waterproofing Solutions",
    "PU Protective Coatings",
    "Industrial & Parking Floors",
    "Kitchen & Bathroom Finishes",
  ]

  const images = {
    main: "/about.webp",
    secondary: "/hero2.jpg",
    breakout: "/swimo.jpg",
  }

  const contentSections = [
    {
      title: "Our Vision",
      content:
        "To transform ordinary spaces into modern, durable, and elegant environments using advanced surface finishing systems.\n\nWe focus on combining durability, beauty, and performance in every project — from homes to industrial facilities.\n\nOur finishes are designed to last, perform, and elevate spaces.",
    },
    {
      title: "Our Expertise",
      content:
        "We specialize in epoxy flooring, microcement systems, Venetian plaster, waterproofing, and protective coatings.\n\nOur solutions are used in warehouses, parking areas, hospitals, kitchens, bathrooms, commercial buildings, and luxury interiors.\n\nEvery project is executed with precision, premium materials, and long-term durability.",
    },
  ]

  const achievements = [
    { label: "Epoxy Projects", value: "500+" },
    { label: "Client Reviews", value: "5/5" },
    { label: "Commercial Sites", value: "150+" },
    { label: "Years Experience", value: "10+" },
  ]

  return (
    <section className={cn("py-28 bg-white", className)}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-16">

        {/* HEADER */}
        <div className="mb-14 lg:w-2/3">
          <h1 className="text-4xl font-bold lg:text-5xl text-primary">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>

        {/* SERVICES MARQUEE */}
        <div className="mb-16">
          <Marquee>
            <MarqueeContent speed={40}>
              {services.map((service, idx) => (
                <MarqueeItem
                  key={service + idx}
                  className="mx-2 px-4 py-2 border border-secondary rounded-full text-base text-secondary bg-secondary/10"
                >
                  {service}
                </MarqueeItem>
              ))}
            </MarqueeContent>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </Marquee>
        </div>

        <hr className="my-10 border-gray-200" />

        {/* ================= IMAGE + CONTENT GRID ================= */}
        <div className="grid gap-10 lg:grid-cols-3">

          {/* MAIN IMAGE */}
          <Image
            src={images.main}
            alt="Epoxy flooring industrial"
            className="w-full h-[600px] object-cover rounded-xl lg:col-span-2"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* SIDE BLOCK */}
          <div className="flex flex-col gap-6">

            {/* BREAKOUT IMAGE CARD */}
            <div className="rounded-xl bg-gray-50 p-5">
              <Image
                src={images.breakout}
                alt="Swimming pool epoxy"
                className="h-48 w-full object-cover rounded-lg mb-4"
                width={1200}
                height={800}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <h3 className="text-lg font-semibold text-primary">
                Durable Surface Systems
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Waterproof, chemical-resistant and decorative finishes for modern spaces.
              </p>

              <Button className="mt-4 bg-secondary hover:opacity-90">
                View Projects
              </Button>
            </div>

            {/* SECONDARY IMAGE */}
            <Image
              src={images.secondary}
              alt="Flake flooring finish"
              className="h-[200px] w-full object-cover rounded-xl"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* ================= CONTENT SECTIONS ================= */}
        <div className="grid gap-10 lg:grid-cols-2 mt-20 bg-white">
          {contentSections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold text-primary/95 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* ================= ACHIEVEMENTS ================= */}
     <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
  {/* Decorative Blur */}
  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/10 "></div>
  <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/10 "></div>

  <div className="relative z-10 px-6 py-16 md:px-12 lg:px-20">
    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
        Trusted Excellence
      </span>

      <h2 className="mt-5 text-4xl  font-bold tracking-tight text-gray-900 leading-tight">
        Our Impact in Numbers
      </h2>

      <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
        Delivering premium epoxy flooring, decorative finishes, and
        industrial surface solutions across Kenya.
      </p>
    </div>

    {/* Stats */}
    <div className="mt-14 grid grid-cols gap-5 md:grid-cols-4">
      {achievements.map((item, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Hover Accent */}
          <div className="absolute inset-0 bg-secondary/10 group-hover:opacity-100"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-extrabold text-primary">
              {item.value}
            </h3>

            <div className="mx-auto mt-4 h-1.5 w-14 rounded-full bg-accent"></div>

            <p className="mt-4 text-sm md:text-base font-medium text-gray-600 leading-relaxed">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>  

      </div>
    </section>
  )
}

export { About3 }