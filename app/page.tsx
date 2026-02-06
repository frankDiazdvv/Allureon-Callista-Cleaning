import TopNavBar from "./components/topNavBar";
import ContactForm from "./components/contactusform";
import InfoCard from "./components/infoCard";
import Image from "next/image";
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
  Facebook
} from "lucide-react";
import Link from "next/link";

export default function Home() {

  const team = [
    {
      name: "Maria Gomez",
      role: "Lead Cleaning Technician",
      image: "/maria.webp",
      experience: [
        "8+ Years in Commercial Cleaning",
        "Certified Floor & Surface Specialist",
        "Team Leadership & QA Oversight",
      ],
      quote: "Excellence is in the details we never overlook.",
    },
    {
      name: "James Wilson",
      role: "Senior Cleaning Technician",
      image: "/james.webp",
      experience: [
        "5+ Years in Office & Bank Cleaning",
        "Expert in Security Protocols & Key Handling",
        "Trained in OSHA Safety Standards",
      ],
      quote: "Proud to keep our clients’ spaces spotless and secure every day.",
    },
    {
      name: "Linda Harris",
      role: "Sanitation Specialist",
      image: "/linda.webp",
      experience: [
        "Healthcare & Facility Sanitation",
        "Advanced Disinfection Protocols",
        "EPA-Approved Chemical Handling",
      ],
      quote: "Clean environments create peace of mind.",
    },
    {
      name: "Robert Lee",
      role: "Day Porter Supervisor",
      image: "/robert.webp",
      experience: [
        "10+ Years Facility Management",
        "On-Site Quality Control",
        "Client Relations & Scheduling",
      ],
      quote: "Consistency and professionalism define our service.",
    },
  ];

  const cardBackgroundColor = "bg-dark";

  
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
        {/* Shadow */}
        <div className="absolute bg-black/50 inset-0"></div>

        {/* Hero Text + Button */}
        <div className="relative lg:absolute lg:left-26 lg:bottom-32 z-10 text-center lg:text-left px-4 md:px-0 max-w-4xl">

          {/* Tagline */}
          <p className="text-sm md:text-base text-light tracking-widest uppercase opacity-80 mb-4">
            The Art of Refined Transformation
          </p>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-light tracking-wide drop-shadow-xl mb-6">
            Executive-ready cleaning with documented standards and verified QA.
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-light opacity-90 mb-10">
            A compliance-driven janitorial partner for organizations that can’t afford variability.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-dark text-light px-8 py-4 text-sm tracking-widest font-medium hover:bg-dark/60 transition"
          >
            Schedule a Facility Walkthrough
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="flex flex-col py-24 bg-dark text-center justify-center scroll-mt-32 min-h-screen" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl tracking-widest text-light mb-6">
            WHY ORGANIZATIONS CHOOSE ALLUREON CALLISTA
          </h2>

          <p className="text-light/80 text-lg max-w-3xl mx-auto mb-16 md:mb-24">
            Built for consistency, accountability, and risk control — with standards you can verify.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-black/80">

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <ShieldCheck className="w-12 h-12 text-light" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2 text-light">
                Compliance & Risk Control
              </h3>
              <InfoCard 
                title="Fully licensed and insured with industry certifications"
                details={[
                  "HazCom / SDS-ready documentation",
                  "Safety-trained teams (OSHA-aligned)",
                  "Controlled access + background checks"                 
                ]}
                bgColor={cardBackgroundColor}
              />
            </div>

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Gem className="w-12 h-12 text-light" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2 text-light">
                Verified quality  
              </h3>
                <InfoCard
                  title="White-glove service"
                  details={[
                    "Routine inspections + corrective actions",
                    "Documented checklists by zone",
                    "Supervisor oversight & QA reporting"
                  ]}

                  bgColor={cardBackgroundColor}
                />
            </div>

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Users className="w-12 h-12 text-light" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2 text-light">
                Asset care for premium surfaces
              </h3>
              <InfoCard
                title="Expert staff with training and quality assurance"
                details={[
                  "Glass, metal, wood, stone & floor care",
                  "Methods designed to protect finishes",
                  "Detail work on “high-visibility” areas"
                ]}
                bgColor={cardBackgroundColor}
              />
            </div>

            <div className="group relative">
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <SprayCan className="w-12 h-12 text-light" />
                </div>
              </div>
              <h3 className="font-medium text-lg tracking-wide mb-2 text-light">
                Operational Reliability
              </h3>
              <InfoCard
                title="Premium tools and eco-friendly solutions"
                details={[
                  "Cross-trained coverage to reduce variability",
                  "Clear scope, frequencies, responsibilities",
                  "Communication protocol for issues & requests"
                ]}
                bgColor={cardBackgroundColor}
              />
            </div>
          </div>
        </div>
      </section>

     {/* Security & Access Protocol */}
      <section className="flex flex-col py-24 bg-light items-center justify-center scroll-mt-32 min-h-screen"
        id="security"
      >
        <div className="max-w-6xl mx-auto px-6 text-center w-full">
          <h2 className="text-4xl tracking-widest text-dark mb-6">
            SECURITY & ACCESS PROTOCOL
          </h2>

          <p className="text-dark text-lg max-w-2xl mx-auto mb-16">
            Clear procedures for keys, alarms, and after-hours access, so your facility stays protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Column 1 */}
            <ul className="space-y-4">
              {[
                "Key / badge handling and return protocol",
                "Alarm arm/disarm procedures aligned to your schedule",
                "After-hours access rules and entry points",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-4 p-4 rounded-lg border border-dark/10 
                            hover:bg-dark/5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-dark shrink-0 group-hover:scale-125 transition" />
                  <span className="text-dark">{item}</span>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              {[
                "Restricted-area guidelines & escalation",
                "Supervisor contact & rapid response",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-4 p-4 rounded-lg border border-dark/10 
                            hover:bg-dark/5 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-dark shrink-0 group-hover:scale-125 transition" />
                  <span className="text-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="italic opacity-80 text-dark mt-12 text-center">
            Background-checked team members available upon request.
          </p>
        </div>
      </section>


      {/* OUR SIGNATURE SERVICES */}
      <section className="flex flex-col py-24 bg-dark text-center justify-center scroll-mt-32 min-h-screen" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl tracking-widest text-light mb-6">
            OUR SIGNATURE SERVICES
          </h2>
          <p className="text-light text-lg max-w-2xl mx-auto mb-16 md:mb-24">
            Tailored solutions for distinguished commercial environments
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-black/80">
            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Building2 className="w-12 h-12 text-light" />
                </div>
              </div>
              <p className="font-medium tracking-wide text-light">Corporate Offices</p>
            </div>

            {/* <div className="p-6 bg-dark hover:bg-light/10 transition shadow-sm">
              <Building2 className="w-12 h-12 text-light" />
              <h4 className="text-light font-medium mb-2">
                Corporate Offices
              </h4>
              <p className="text-sm text-light/80 mb-4">
                Executive-ready, client-facing standards
              </p>

              <p className="text-xs uppercase tracking-widest text-light/60 mb-2">
                Focus Areas
              </p>
              <ul className="text-sm text-light/80 space-y-1">
                <li>• Lobbies & conference rooms</li>
                <li>• Glass & restrooms</li>
                <li>• High-touch points</li>
              </ul>
            </div> */}

            

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Store className="w-12 h-12 text-light" />
                </div>
              </div>
              <p className="font-medium tracking-wide text-light">Retail Spaces</p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Landmark className="w-12 h-12 text-light" />
                </div>
              </div>
              <p className="font-medium tracking-wide text-light">Banks & Institutions</p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Factory className="w-12 h-12 text-light" />
                </div>
              </div>
              <p className="font-medium tracking-wide text-light">
                Manufacturing Facilities
              </p>
            </div>

            <div className="group">
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-dark group-hover:bg-light/10 transition shadow-sm">
                  <Building className="w-12 h-12 text-light" />
                </div>
              </div>
              <p className="font-medium tracking-wide text-light">Luxury Buildings</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="flex flex-col py-24 bg-light items-center justify-center scroll-mt-32 min-h-screen" id="process">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl tracking-widest text-primary mb-6">
              OUR PROCESS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A seamless journey from consultation to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-dark text-white flex items-center justify-center text-2xl font-light">
                  01
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3">
                Walkthrough & Scope Mapping
              </h3>
              <p className="text-gray-600">
                  Define zones, frequencies, risk areas, surfaces, and access rules.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-dark text-white flex items-center justify-center text-2xl font-light">
                  02
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3">
                Standards Implementation

              </h3>
              <p className="text-gray-600">
                Checklists, supplies, training alignment, and service calibration.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-dark text-white flex items-center justify-center text-2xl font-light">
                  03
                </div>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3">
                Verification & Continuous QA
              </h3>
              <p className="text-gray-600">
                Inspections, reporting, corrective actions, and monthly reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      {/* <section className="flex items-center h-dvh py-28 bg-mid scroll-mt-32" id="team">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl tracking-widest text-light mb-4">
              OPERATIONS-LED. STANDARDS-DRIVEN.

          </h2>

          <p className="text-light text-lg max-w-2xl mx-auto mb-20">
            Your account is managed with defined supervision, documented checklists,
            and QA verification, so results don’t depend on who shows up.
            </p>

          <div className="flex flex-wrap justify-center gap-12 relative">
            {team.map((member, index) => (
              <div key={index} className="group relative">

                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-light shadow-lg mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-6 font-medium tracking-wide text-light">
                  {member.name}
                </h3>
                <p className="text-sm text-light">
                  {member.role}
                </p>

                <div className="
                  hidden md:block
                  absolute left-1/2 top-44 -translate-x-1/2
                  w-80 bg-dark text-white
                  rounded-2xl shadow-xl p-6
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                  z-20
                ">  
                  <h4 className="font-medium text-lg">
                    {member.name}
                  </h4>
                  <p className="text-sm opacity-80 mb-4">
                    {member.role}
                  </p>

                  <ul className="text-sm space-y-2 mb-4 text-left">
                    {member.experience.map((item, i) => (
                      <li key={i}><ShieldCheck className="w-4 h-4 inline mr-2" /> {item}</li>
                    ))}
                  </ul>

                  <div className="border-t border-white/20 pt-4 text-sm italic opacity-90 flex gap-2">
                    <Quote className="w-4 h-4 mt-1 flex-shrink-0 text-mid" />
                    <span>{member.quote}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* TESTIMONIALS */}
      <section className="py-24 bg-dark scroll-mt-32" id="testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl tracking-widest text-light mb-6">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-light text-lg max-w-2xl mx-auto">
              Trusted by leading organizations across South Florida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-mid text-mid" />
                ))}
              </div>
              <p className="text-gray-900 mb-6 italic">
                "Allureon Callista transformed our corporate headquarters. Their
                attention to detail is simply unmatched. Every surface gleams."
              </p>
              <p className="font-medium">Michael Rodriguez</p>
              <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
            </div>

            <div className="bg-light p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-mid text-mid" />
                ))}
              </div>
              <p className="text-gray-900 mb-6 italic">
                "We've worked with several cleaning services, but none compare
                to the professionalism and quality Allureon brings every time."
              </p>
              <p className="font-medium">Sarah Chen</p>
              <p className="text-sm text-gray-500">
                Operations Director, Luxury Retail Group
              </p>
            </div>

            <div className="bg-light p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-mid text-mid" />
                ))}
              </div>
              <p className="text-gray-900 mb-6 italic">
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
      <footer className="bg-dark text-primary py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image 
              src="/AC_logo_text_light.png"
              alt="Allureon Callista Logo"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="text-light text-sm leading-relaxed">
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
                  className="text-light hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-light hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-light hover:text-white transition"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-light hover:text-white transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-light hover:text-white transition"
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
              <li className="flex items-start gap-3 text-light">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@allureoncallista.com</span>
              </li>

              <li className="flex items-start gap-3 text-light">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (407) 808-0148</span>
              </li>

              <li className="flex items-start gap-3 text-light">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Orlando • Lake Nona • Central Florida</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium tracking-wide mb-6">
              Connect With Us
            </h3>
            <ul className="flex flex-row gap-4 space-y-4 text-sm">
              {/* Instagram */}
              <li className="flex items-start gap-3 text-light">
                <Link href={"https://www.instagram.com/allureoncallista/"} target="_blank" className="">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 fill-current text-light" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                </Link>
              </li>

              <li className="flex items-start gap-3 text-light">
                {/* YouTube */}
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 fill-current text-light hover:text-red-400 cursor-pointer" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </li>

              <li className="flex items-start gap-3 text-light hover:text-blue-400">
                <Link href="https://www.linkedin.com/company/allureon-callista" target="_blank">
                  <Linkedin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                </Link>
              </li>
              <li className="flex items-start gap-3 text-light hover:text-blue-500">
                <Link href={"https://www.facebook.com/people/Allureon-Callista/61587173250844/?mibextid=wwXIfr&rdid=zVpSGoflAYIVwCPB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FUdX6TEtf%2F%3Fmibextid%3DwwXIfr"} target="_blank">
                  <Facebook className="w-5 h-5 mt-0.5 flex-shrink-0" />
                </Link>  
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-light text-center">
          <ul className="flex flex-row justify-center gap-2 mb-6 text-sm">
            <li><a href="" className="text-light hover:text-white">Privacy Policy |</a></li>
            <li><a href="" className="text-light hover:text-white">Terms of Use |</a></li>
            <li><a href="" className="text-light hover:text-white">Cookie Policy </a></li>
            {/* <li><a href="" className="text-light hover:text-white">Accessibility</a></li> */}
          </ul>
          <p className="text-light text-sm">
            © {new Date().getFullYear()} Allureon Callista, LLC. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
