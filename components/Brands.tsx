"use client"

import Image from "next/image"
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"

const logos = [
  "/cat.png",
  "/CAMCO.png",
  "/fairo.png",
  "/KUTRR.png",
  "/JM.png",
  "/dy.png",

]

export default function Brands() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* Heading */}
        <div className="mb-10 text-center">
        
          <h2 className="mb-2 text-3xl font-bold text-primary md:text-4xl">
            Clients We&apos;ve Worked With
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
            Trusted by leading organizations across Kenya for reliable and high-quality flooring solutions.
          </p>
        </div>

        {/* Logos */}
        <Marquee>
          <MarqueeContent speed={35}>
            {logos.map((logo, index) => (
              <MarqueeItem
                key={index}
                className="mx-8 flex items-center justify-center"
              >
                <div className="relative h-40 w-40 transition duration-300 ">
                  <Image
                    src={logo}
                    alt="Brand Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>

          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
        </Marquee>
      </div>
    </section>
  )
}