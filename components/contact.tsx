import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary">
            Contact Eustace Epoxy Ltd
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get a free quotation, site visit, or product consultation for epoxy flooring,
            microcement, waterproofing, Venetian plaster, and protective coating systems
            across Kenya.
          </p>
        </div>

        {/* CONTACT CARD */}
        <Card className="mx-auto mt-12 max-w-2xl p-6 md:p-10 shadow-sm border border-secondary">

          {/* INFO */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary">
              Request a Quote or Consultation
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill in the form below and our team will respond within the shortest time.
              We also offer site visits across Nairobi and surrounding counties.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Your full name" required />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input id="phone" type="tel" placeholder="+254..." required />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <Label>Service Required</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="epoxy">Epoxy Flooring</SelectItem>
                  <SelectItem value="microcement">Microcement Floors & Walls</SelectItem>
                  <SelectItem value="venetian">Venetian Plaster</SelectItem>
                  <SelectItem value="waterproofing">Waterproofing Systems</SelectItem>
                  <SelectItem value="coatings">Protective Coatings</SelectItem>
                  <SelectItem value="industrial">Industrial Flooring</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label>Project Location</Label>
              <Input placeholder="e.g. Nairobi, Kitengela, Mombasa..." />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label>Project Details</Label>
              <Textarea
                rows={4}
                placeholder="Describe your project, size, surface type, or requirements..."
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 pt-2">
              <Button className="bg-secondary hover:opacity-90 w-full text-white text-base font-semibold">
                Request Quote
              </Button>

              <a
                href="https://wa.me/254703210873"
                target="_blank"
                className="w-full text-center text-base text-secondary font-semibold underline"
              >
                Or chat on WhatsApp instantly
              </a>
            </div>
          </form>
        </Card>

        {/* CONTACT INFO FOOT */}
        <div className="mt-12 text-center text-sm text-gray-600 space-y-2">
          <p><strong>Call / WhatsApp:</strong> +254 703 210 873</p>
          <p><strong>Email:</strong> info@eustacepoxy.com</p>
          <p><strong>Location:</strong> Kitengela, Nairobi, Kenya</p>
        </div>

      </div>
    </section>
  )
}