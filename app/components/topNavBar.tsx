'use client';

import Image from "next/image";
import navLogo from "../../public/AllCallLogo.svg";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 right-0
          flex justify-between items-center
          px-6 lg:px-20
          transition-all duration-300
          z-50
          ${scrolled
            ? "py-2 bg-dark backdrop-blur-md"
            : "py-4 bg-linear-to-b from-black/70 to-transparent"}
        `}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image
            src={navLogo}
            alt="Allureon Callista Logo"
            width={scrolled ? 210 : 250}
            height={scrolled ? 170 : 200}
            className="transition-all duration-300 cursor-pointer"
          />
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex gap-8 text-lg text-light">
          <a href="#about">Why Us</a>
          <a href="#services">Services</a>
          {/* <a href="#team">Meet the Team</a> */}
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Portal */}
      <MobileMenu open={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
