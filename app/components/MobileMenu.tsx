'use client';

import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`
        fixed inset-0 bg-dark
        flex items-center justify-center
        transition-transform duration-500 ease-in-out
        z-[9999]
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white z-[10000]"
        aria-label="Close menu"
      >
        <X className="w-8 h-8" />
      </button>

      <ul className="flex flex-col items-center gap-10 text-2xl font-light tracking-widest">
        {[
          { label: "About Us", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Meet the Team", href: "#team" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact Us", href: "#contact" },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              className="text-gray-200 hover:text-white transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
