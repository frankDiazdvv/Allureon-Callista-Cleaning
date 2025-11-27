'use client';

import Image from "next/image";
import navLogo from "../../public/AllCal_logo.jpeg";

export default function TopNavBar() {
  return (
    <div className="fixed top-0 right-0 left-0 flex flex-row justify-between items-center px-24 py-4 bg-linear-to-b from-black/70 to-transparent text-white z-[200]">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image
          src={navLogo}
          alt="Allureon Callista Logo"
          width={150}
          height={100}
          className="cursor-pointer"
        />
      </button>

      {/* Links - Desktop View */}
      <div className="flex flex-row gap-8 text-lg">
        <a className="hover:text-gray-300" href="#services">Services</a>
        <a className="hover:text-gray-300" href="#pricing">Pricing</a>
        <a className="hover:text-gray-300" href="#about">About Us</a>
        <a className="hover:text-gray-300" href="#contact">Contact Us</a>
      </div>
    </div>
  );
}
