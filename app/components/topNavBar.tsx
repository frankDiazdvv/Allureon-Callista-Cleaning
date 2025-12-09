'use client';

import Image from "next/image";
import navLogo from "../../public/logoAC.png";
import { useEffect, useState } from "react";

export default function TopNavBar() {

  const [scrolled, setScrolled] = useState(false);

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
      px-24 z-[200] text-white transition-all duration-300
      ${scrolled ? "py-2 bg-black/80 backdrop-blur-md" : "py-4 bg-gradient-to-b from-black/70 to-transparent"}`}
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
      <div className="flex flex-row gap-8 text-lg">
        <a className="hover:text-gray-300" href="#about">About Us</a>
        <a className="hover:text-gray-300" href="#services">Services</a>
        <a className="hover:text-gray-300" href="#testimonials">Testimonials</a>
        <a className="hover:text-gray-300" href="#contact">Contact Us</a>
      </div>
    </div>
  );
}
