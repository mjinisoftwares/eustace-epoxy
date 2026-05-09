import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="bg-white py-20">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            About Us
          </h3>
          <p className="mt-4 text-primary/70 text-lg">
          Eustace Epoxy Ltd is a company based in Nairobi specializing in microcement, epoxy flooring venetian plaster, waterproofing and protective coating systems. We help homeowners, designers, contractors and businesses create seamless, durable, modern surfaces for both residential and commercial spaces.
          
           </p>
        </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-16">
        
        {/* Left Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/about.webp"
            alt="About Eustace Epoxy"
            width={600}
            height={700}
            className="w-full object-cover border border-2 border-accent"
          />

      
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">  
    
              <hr className="text-2xl font-bold text-accent mb-12"></hr>
               
          <h3 className="max-w-xl text-3xl font-bold leading-tight text-primary ">
            Epoxy Flooring & Waterproofing Company in Nairobi, Kenya
          </h3>

        <p className="mt-6 text-base leading-relaxed text-gray-600">
        We provide durable, stylish, and easy-to-maintain epoxy flooring solutions for residential, commercial, and industrial spaces. From garages and warehouses to swimming pools and showrooms, our
        epoxy floors are built for strength, safety, and modern appeal.
        </p>
          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-primary">
                Durable Flooring
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Strong, seamless, and resistant to chemicals, stains, and wear.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-primary">
                Modern Finishes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Stylish epoxy designs that elevate homes and commercial spaces.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Learn More
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}