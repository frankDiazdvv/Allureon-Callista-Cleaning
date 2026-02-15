"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    zip: "",
    sqFootage: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        zip: formData.zip,
        sqFootage: formData.sqFootage,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Thank you for your inquiry. We will contact you shortly.");

    } else {
      alert("Something went wrong. Try again later!");
    }
    setFormData({ name: "", email: "", phone: "", service: "", zip: "", sqFootage: "", message: "" });
  };

  return (
    <section className="py-24 scroll-mt-32 bg-light" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-widest mb-6">
            SCHEDULE A FACILITY WALKTHROUGH
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us your location and facility type. We’ll confirm scope, standards, and next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-wide mb-2 font-medium">
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wide mb-2 font-medium">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-wide mb-2 font-medium">
                PHONE *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wide mb-2 font-medium">
                FACILITY TYPE
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="corporate">Corporate Offices</option>
                <option value="retail">Retail Spaces</option>
                <option value="banks">Banks & Institutions</option>
                <option value="manufacturing">Manufacturing Facilities</option>
                <option value="luxury">Luxury Buildings</option>
              </select>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-wide mb-2 font-medium">
                LOCATION/ZIP *
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm tracking-wide mb-2 font-medium">
                SQUARE FOOTAGE(RANGE) *
              </label>
              <input
                type="text"
                name="sqFootage"
                value={formData.sqFootage}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm tracking-wide mb-2 font-medium">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-400 focus:border-dark focus:outline-none resize-none"
            ></textarea>

            <p className="italic text-dark/70">Expect a respond within 1-2 business days*</p>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-dark text-white px-12 py-4 text-sm tracking-widest font-medium hover:bg-dark/80 transition cursor-pointer"
            >
              SUBMIT INQUIRY
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
