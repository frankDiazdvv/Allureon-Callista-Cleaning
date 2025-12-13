'use client';

import Image from "next/image";
import navLogo from "../../public/logoAC.png";
import { Menu } from "lucide-react";
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
        <a className="hover:text-gray-300" href="#about">About Us</a>
        <a className="hover:text-gray-300" href="#services">Services</a>
        <a className="hover:text-gray-300" href="#testimonials">Testimonials</a>
        <a className="hover:text-gray-300" href="#contact">Contact Us</a>
      </div>

      {/* Mobile Links */}
      <div className="flex lg:hidden">
          <div className="cursor-pointer text-gray-200 hover:text-white">
            <Menu className="w-8 h-8" onClick={() => setMenuOpen(!isMenuOpen)}/>
          </div>

          <div 
            className={`
              absolute right-12 mt-12 bg-black rounded-xl transform transition-all ease-out duration-300 
              ${isMenuOpen 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-95 pointer-events-auto"}
            `}
          >
            <ul className="flex flex-col gap-2 p-4">
              <li><a className="hover:text-gray-300" href="#about">About Us</a></li>
              <li><a className="hover:text-gray-300" href="#services">Services</a></li>
              <li><a className="hover:text-gray-300" href="#testimonials">Testimonials</a></li>
              <li><a className="hover:text-gray-300" href="#contact">Contact Us</a></li>
            </ul>
            
            
            
            

          </div>
      </div>
    </div>
  );
}
