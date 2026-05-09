import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/microcement.webp')",
        }}      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:px-0 bg-primary/75 rounded-xl">
      

        {/* Heading */}
        <h1 className="max-w-4xl  md:text-4xl text-2xl font-bold leading-snug tracking-tight text-white ">
          Durable, Elegant & Modern{" "}
          <span className="text-secondary">
            Epoxy Flooring & Waterproof
          </span>{" "}
          Solutions For Homes & Businesses
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
          Transform your residential, commercial, and industrial spaces
          with high-quality epoxy flooring designed for beauty,
          durability, and long-lasting performance.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="rounded-xl border border-accent px-6 py-3 text-sm text-white hover:bg-secondary"
          >
            Get Quote
          </Link>

          <Link
            href="/contact"
            className="rounded-xl bg-secondary px-6  py-3 text-sm text-white hover:opacity-90"
          >
            Contact
          </Link>
        </div>

      </div>
         </section>
  )
}