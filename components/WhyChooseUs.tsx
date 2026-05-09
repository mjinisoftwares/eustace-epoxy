import {
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  ClipboardCheck,
  PhoneCall,
  BadgeDollarSign,
} from "lucide-react"

const features = [
  {
    title: "Highly Experienced Professionals",
    description:
      "Our skilled team is always ready to assist with durable flooring solutions, maintenance, and repairs that keep your surfaces beautiful and long-lasting.",
    icon: Users,
  },
  {
    title: "Quality Workmanship",
    description:
      "Our work speaks for itself. We use premium materials and highly trained specialists to deliver exceptional concrete and epoxy flooring finishes.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Service",
    description:
      "We prioritize customer satisfaction through reliable communication, professional support, and quality service from start to finish.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Project Management",
    description:
      "From planning and project kickoff to completion, our team works closely with you to ensure every detail is handled professionally.",
    icon: ClipboardCheck,
  },
  {
    title: "Direct Follow-Up",
    description:
      "You deal directly with us — no runaround, no unnecessary delays, just honest communication and reliable service.",
    icon: PhoneCall,
  },
  {
    title: "Straightforward Pricing",
    description:
      "Clear and honest pricing based on actual project needs, giving you accurate estimates with no hidden surprises.",
    icon: BadgeDollarSign,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-secondary">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-snug leading-snug text-primary ">
            Why We&apos;re a Trusted <span className="text-secondary">Epoxy & Waterproofing</span> Company in Nairobi, Kenya
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Eustace Epoxy LTD delivers professional epoxy flooring,
            microcement, waterproofing, and decorative finishes with
            unmatched quality, reliability, and attention to detail.
          </p>
        </div>
        <hr className="border-t border-accent/40 w-1/2 mx-auto mt-2" />

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-secondary/5 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-secondary">
                  <Icon className="h-7 w-7 text-accent" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}