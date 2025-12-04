import TopNavBar from "./components/topNavBar";
import ContactForm from "./components/contactusform";
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
  Clock,
  CheckCircle2,
  PhoneCall,
  Quote,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <TopNavBar />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center text-white">
        {/* Video + Shadow */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/AllCal_hero_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text + Button */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-lg tracking-widest uppercase mb-4 opacity-90">
            Where Excellence Meets Precision
          </p>

          <h1 className="text-5xl md:text-7xl font-light tracking-wide drop-shadow-xl mb-6">
            THE ART OF REFINED TRANSFORMATION
          </h1>

          <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
            Elevating spaces through meticulous care and unparalleled attention
            to detail
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm tracking-widest font-medium hover:bg-gray-100 transition"
          >
            REQUEST CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white text-center" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-widest mb-6">
            WHY CHOOSE US
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            We deliver an unmatched standard of cleanliness that transforms
            environments and exceeds expectations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-black/80">

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
                  <ShieldCheck className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2">
                Certified & Compliant
              </h3>
              <div className="absolute top-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 
                              text-center text-sm bg-stone-900 p-4 rounded-xl shadow">
                <p className="text-lg text-yellow-500 mb-2">
                  Fully licensed and insured with industry certifications
                </p>
                <ul className="text-sm text-gray-100 space-y-1 text-left mx-auto w-fit">
                  <li>• OSHA 30 – General Industry</li>
                  <li>• EPA – Safe Use of Chemicals</li>
                  <li>• Bloodborne Pathogens Training</li>
                  <li>• HazCom / SDS Management</li>
                  <li>• ISSA CIMS (In Progress)</li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
                  <Gem className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2">
                Luxury-Level Detailing
              </h3>
               <div className="absolute top-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 
                              text-center text-sm bg-stone-900 p-4 rounded-xl shadow">
                  <p className="text-lg text-yellow-500 mb-2">
                    White-glove service
                  </p>
                  <ul className="text-sm text-gray-100 space-y-1 text-left mx-auto w-fit">
                    <li>• Meticulous Cleaning of Elevators and Stairs</li>
                    <li>• Metal/Stone Marble Floor Poloshing</li>
                    <li>• Crystal Clear Glass Cleaning</li>
                    <li>• Glossy Wood Restoration</li>
                    <li>• Luxury Buildings</li>
                  </ul>
                </div>
            </div>

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
                  <Users className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2">
                Professionally Trained Teams
              </h3>
              <div className="absolute top-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 
                              text-center text-sm bg-stone-900 p-4 rounded-xl shadow">
                <p className="text-lg text-yellow-500 mb-2">
                  Expert staff with training and quality assurance
                </p>
                <ul className="text-sm text-gray-100 space-y-1 text-left mx-auto w-fit">
                  <li>• Background Checks</li>
                  <li>• Cross-Training Programs</li>
                  <li>• Supervisor Workshops</li>
                  <li>• Safety Protocol Updates</li>
                  <li>• Quality Assurance Initiatives</li>
                </ul>
              </div>
            </div>

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
                  <SprayCan className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2">
                Cutting-Edge Equipment
              </h3>
              <div className="absolute top-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 
                              text-center text-sm bg-stone-900 p-4 rounded-xl shadow">
                <p className="text-lg text-yellow-500 mb-2">
                  Premium tools and eco-friendly solutions
                </p>
                <ul className="text-sm text-gray-100 space-y-1 text-left mx-auto w-fit">
                  <li>• Advanced Cleaning Technology</li>
                  <li>• High-Performance Machinery</li>
                  <li>• Eco-Friendly Cleaning Agents</li>
                  <li>• Energy-Efficiency Solutions</li>
                  <li>• Reusable Supply Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SIGNATURE SERVICES */}
      <section className="py-24 bg-gray-50 text-center" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-widest mb-6">
            OUR SIGNATURE SERVICES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Tailored solutions for distinguished commercial environments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-black/80">
            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
                  <Building2 className="w-12 h-12" />
                </div>
              </div>
              <p className="font-medium tracking-wide">Corporate Offices</p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
                  <Store className="w-12 h-12" />
                </div>
              </div>
              <p className="font-medium tracking-wide">Retail Spaces</p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
                  <Landmark className="w-12 h-12" />
                </div>
              </div>
              <p className="font-medium tracking-wide">Banks & Institutions</p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
                  <Factory className="w-12 h-12" />
                </div>
              </div>
              <p className="font-medium tracking-wide">
                Manufacturing Facilities
              </p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
                  <Building className="w-12 h-12" />
                </div>
              </div>
              <p className="font-medium tracking-wide">Luxury Buildings</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-widest mb-6">
              OUR PROCESS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A seamless journey from consultation to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-light">
                  01
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3">
                Consultation
              </h3>
              <p className="text-gray-600">
                We assess your space and understand your unique requirements to
                create a customized cleaning plan
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-light">
                  02
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3">
                Execution
              </h3>
              <p className="text-gray-600">
                Our trained team delivers meticulous service using premium
                equipment and eco-friendly products
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-light">
                  03
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                We conduct thorough inspections to ensure every detail meets our
                exacting standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50" id="testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-widest mb-6">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by leading organizations across Miami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Allureon Callista transformed our corporate headquarters. Their
                attention to detail is simply unmatched. Every surface gleams."
              </p>
              <p className="font-medium">Michael Rodriguez</p>
              <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We've worked with several cleaning services, but none compare
                to the professionalism and quality Allureon brings every time."
              </p>
              <p className="font-medium">Sarah Chen</p>
              <p className="text-sm text-gray-500">
                Operations Director, Luxury Retail Group
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Their team is reliable, thorough, and treats our facility with
                the utmost care. Exceptional service from start to finish."
              </p>
              <p className="font-medium">David Martinez</p>
              <p className="text-sm text-gray-500">
                Facility Manager, Financial District
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm/>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-light tracking-widest mb-6">
              ALLUREON CALLISTA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining luxury commercial cleaning through precision,
              excellence, and unwavering commitment to quality.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wide mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 hover:text-white transition"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wide mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>contact@allcal.com</span>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(305) 555-0100</span>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Miami, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Allureon Callista. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
