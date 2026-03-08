"use client"

import { useRef } from "react"
import { Building2, Store, Landmark, Factory, Building } from "lucide-react"

export default function IndustriesCarousel() {

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-light/10 hover:bg-light/20 text-light px-4 py-2"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-light/10 hover:bg-light/20 text-light px-4 py-2"
      >
        ›
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth px-12 pb-4 scrollbar-hide"      >

        <Industry icon={<Building2 className="w-12 h-12 text-light" />} title="Corporate Offices" />
        <Industry icon={<Store className="w-12 h-12 text-light" />} title="Retail Spaces" />
        <Industry icon={<Landmark className="w-12 h-12 text-light" />} title="Banks & Institutions" />
        <Industry icon={<Factory className="w-12 h-12 text-light" />} title="Manufacturing Facilities" />
        <Industry icon={<Building className="w-12 h-12 text-light" />} title="Luxury Buildings" />

      </div>

    </div>
  )
}

function Industry({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="snap-center flex-shrink-0 w-60 group">

      <div className="p-8 bg-dark border border-light/20 hover:bg-light/10 transition text-center">

        <div className="mb-6 flex justify-center">
          {icon}
        </div>

        <p className="font-medium tracking-wide text-light">
          {title}
        </p>

      </div>

    </div>
  )
}