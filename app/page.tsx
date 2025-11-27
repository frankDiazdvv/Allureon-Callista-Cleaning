import TopNavBar from "./components/topNavBar";
import {
  ShieldCheck,
  Gem,
  Users,
  SprayCan,
  Building2,
  Store,
  Landmark,
  Factory,
  Building,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <TopNavBar />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center text-white">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/AllCal_hero_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4">
          <p className="text-lg tracking-wide uppercase mb-2 opacity-80">
            Where Excellence Meets Precision
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide drop-shadow-xl">
            THE ART OF REFINED TRANSFORMATION
          </h1>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white text-center" id="about">
        <h2 className="text-4xl font-semibold mb-12">WHY CHOOSE US</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 text-black/80">
          <div>
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="font-semibold text-lg">Certified & Compliant</h3>
          </div>

          <div>
            <Gem className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="font-semibold text-lg">Luxury-Level Detailing</h3>
          </div>

          <div>
            <Users className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="font-semibold text-lg">Professionally Trained Teams</h3>
          </div>

          <div>
            <SprayCan className="w-12 h-12 mx-auto mb-4 text-black" />
            <h3 className="font-semibold text-lg">Cutting-Edge Equipment</h3>
          </div>
        </div>
      </section>

      {/* OUR SIGNATURE SERVICES */}
      <section className="py-24 bg-gray-50 text-center" id="services">
        <h2 className="text-4xl font-semibold mb-12">OUR SIGNATURE SERVICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-12 text-black/80">
          <div>
            <Building2 className="w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">Corporate Offices</p>
          </div>

          <div>
            <Store className="w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">Retail Spaces</p>
          </div>

          <div>
            <Landmark className="w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">Banks & Institutions</p>
          </div>

          <div>
            <Factory className="w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">Manufacturing Facilities</p>
          </div>

          <div>
            <Building className="w-12 h-12 mx-auto mb-4" />
            <p className="font-medium">Luxury Buildings</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-12 mt-20" id="contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                contact@allcal.com
              </li>

              <li className="flex items-center gap-3">
                <Building2 className="w-5 h-5" />
                Miami, FL
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          © {new Date().getFullYear()} Allureon Callista. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
