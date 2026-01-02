'use client';

import Image from "next/image";
import navLogo from "../../public/logoAC_main.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopNavBar() {

  const [scrolled, setScrolled] = useState(false);
  const [ isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {  
      setScrolled(window.scrollY > 500); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
     <div
      className={`fixed top-0 left-0 right-0 flex flex-row justify-between items-center 
      w-dvw px-6 lg:px-24 z-200 text-white transition-all duration-300
      ${scrolled ? "py-2 bg-black/80 backdrop-blur-md" : "py-4 bg-linear-to-b from-black/70 to-transparent"}`}
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image
          src={navLogo}
          alt="Allureon Callista Logo"
          width={scrolled ? 110 : 150}      // shrink the logo
          height={scrolled ? 70 : 100}
          className="cursor-pointer transition-all duration-300"
        />
      </button>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-row gap-8 text-lg">
        <a className="hover:text-gray-300" href="#about">Why Us</a>
        <a className="hover:text-gray-300" href="#services">Services</a>
        <a className="hover:text-gray-300" href="#team">Meet the Team</a>
        <a className="hover:text-gray-300" href="#testimonials">Testimonials</a>
        <a className="hover:text-gray-300" href="#contact">Contact Us</a>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden relative">

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-gray-200 hover:text-white transition z-50"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>

        {/* Full Screen Slide Menu */}
        <div
          className={`
            fixed inset-0 bg-black
            transform transition-transform duration-500 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            flex items-center justify-center z-40
          `}
        >
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
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-200 hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
