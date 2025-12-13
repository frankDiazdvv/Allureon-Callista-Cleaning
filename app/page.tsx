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
  Linkedin,
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
        <div className="relative z-10 text-center px-4 max-w-full mx-auto">
          <p className="md:text-lg tracking-widest uppercase mb-4 opacity-90">
            Where Excellence Meets Precision
          </p>

          <h1 className="flex flex-wrap justify-center text-2xl xs:text-4xl md:text-5xl lg:text-7xl font-light tracking-wide drop-shadow-xl mb-6">
            THE ART OF REFINED TRANSFORMATION
          </h1>

          <p className="flex flex-wrap justify-center text-lg md:text-2xl font-light opacity-90 mb-8">
            Elevating spaces through meticulous care and unparalleled attention
            to detail
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 mt-8 md:mt-0 text-sm tracking-widest font-medium hover:bg-gray-100 transition"
          >
            REQUEST CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white text-center scroll-mt-32" id="about">
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
      <section className="py-24 bg-gray-50 text-center scroll-mt-32" id="services">
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
      <section className="py-24 bg-white scroll-mt-32" id="process">
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
      <section className="py-24 bg-gray-50 scroll-mt-32" id="testimonials">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
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
                <span>info@allureoncallista.com</span>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (407) 808-0148</span>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Orlando, FL</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium tracking-wide mb-6">
              Connect With Us
            </h3>
            <ul className="space-y-4 text-sm">
              {/* Instagram */}
              <li className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 fill-current text-gray-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                <span>@allureoncallista</span>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                {/* YouTube */}
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 fill-current text-gray-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>AllureonCallista</span>
              </li>

              <li className="flex items-start gap-3 text-gray-400">

                <Linkedin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>AllueonCallista</span>
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
