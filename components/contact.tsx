"use client"

import { useState } from "react"
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "254703210873"
    const message = `*New Quote Request from Eustace Epoxy Ltd website*
--------------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Service:* ${formData.service || "Not selected"}
*Location:* ${formData.location || "Not provided"}
*Details:* ${formData.details}
--------------------------------------------`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary">
            Contact Eustace Epoxy Ltd
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get a free quotation, site visit, or product consultation for epoxy
            flooring, microcement, waterproofing, Venetian plaster, and
            protective coating systems across Kenya.
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
              Fill in the form below and our team will respond within the
              shortest time. We also offer site visits across Nairobi and
              surrounding counties.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+254..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <Label>Service Required</Label>
              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Epoxy Flooring">Epoxy Flooring</SelectItem>
                  <SelectItem value="Microcement Floors & Walls">
                    Microcement Floors & Walls
                  </SelectItem>
                  <SelectItem value="Venetian Plaster">
                    Venetian Plaster
                  </SelectItem>
                  <SelectItem value="Waterproofing Systems">
                    Waterproofing Systems
                  </SelectItem>
                  <SelectItem value="Protective Coatings">
                    Protective Coatings
                  </SelectItem>
                  <SelectItem value="Industrial Flooring">
                    Industrial Flooring
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Project Location</Label>
              <Input
                id="location"
                placeholder="e.g. Nairobi, Kitengela, Mombasa..."
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="details">Project Details</Label>
              <Textarea
                id="details"
                rows={4}
                placeholder="Describe your project, size, surface type, or requirements..."
                value={formData.details}
                onChange={handleChange}
                required
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 pt-2">
              <Button
                type="submit"
                className="bg-secondary hover:opacity-90 w-full text-white text-base font-semibold"
              >
                Request Quote
              </Button>

              <a
                href={`https://wa.me/254703210873`}
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
          <p>
            <strong>Call / WhatsApp:</strong> +254 703 210 873
          </p>
          <p>
            <strong>Email:</strong> info@eustacepoxy.com
          </p>
          <p>
            <strong>Location:</strong> Kitengela, Kajiado County, Kenya
          </p>
        </div>
      </div>
    </section>
  )
}