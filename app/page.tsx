import TopNavBar from "./components/topNavBar";
import ContactForm from "./components/contactusform";
import InfoCard from "./components/infoCard";
import Image from "next/image";
import Footer from "./components/footer";
import EmblaCarousel from "./components/carousel/EmblaCarousel";

import { EmblaOptionsType } from "embla-carousel"
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
  ArrowRight,
  Star,
  Phone,
  Facebook
} from "lucide-react";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
  {
    content: (
      <div
        className="relative p-14 border border-dark text-center flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('./corporate_offices.jpeg')",
          minHeight: "400px",
          minWidth: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p className="font-semibold tracking-wide text-light text-2xl">
            Corporate Offices
          </p>
        </div>
      </div>
      )
      },
      {
        content: (
      <div
        className="relative p-14 border border-dark text-center flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('./exec_environment.jpeg')",
          minHeight: "400px",
          minWidth: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p className="font-semibold tracking-wide text-light text-2xl">
            Executive Environments
          </p>
        </div>
      </div>
    )
  },
  {
    content: (
      <div
        className="relative p-14 border border-dark text-center flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('./bank_institution.jpeg')",
          minHeight: "400px",
          minWidth: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p className="font-semibold tracking-wide text-light text-2xl">
            Bank & Government Facilities
          </p>
        </div>
      </div>
    )
  },
  {
    content: (
      <div
        className="relative p-14 border border-dark text-center flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('./manufacturing.jpeg')",
          minHeight: "400px",
          minWidth: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p className="font-semibold tracking-wide text-light text-2xl">
            Manufacturing Facilities
          </p>
        </div>
      </div>
    )
  },
  {
    content: (
      <div
        className="relative p-14 border border-dark text-center flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('./medical.jpeg')",
          minHeight: "400px",
          minWidth: "400px"
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p className="font-semibold tracking-wide text-light text-2xl">
            Medical Offices
          </p>
        </div>
      </div>
    )
  }
]

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

  const cardBackgroundColor = "bg-light/20";

  
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
            Built for Consistency. Designed for Trust.
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

      {/* THE DIFFERENCE | WHY US */}
      <section className="flex flex-col py-24 bg-dark text-center justify-center scroll-mt-32 min-h-screen" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl tracking-widest text-light mb-10">
            THE DIFFERENCE
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

     {/* Compliance & Standards */}
      <section className="flex flex-col py-24 bg-light items-center justify-center scroll-mt-32 min-h-screen"
        id="compliance"
      >
        <div className="max-w-6xl mx-auto px-6 text-center w-full">
          <h2 className="text-4xl tracking-widest text-dark mb-10">
            COMPLIANCE & STANDARDS
          </h2>

          <p className="text-dark text-lg max-w-2xl mx-auto mb-16">
            Compliance is not an add-on to our operations; it is embedded in how we work. Our standards are designed for highly controlled environments, 
            where documentation, consistency and accountability are required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Column 1 */}
            <ul className="space-y-4">
              {[
                "SDS backed chemical controls and approved product use",
                "PPE & safety protocol reinforced through oversight",
                "Restricted-area access rules aligned to site security requirements",
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
                "Infection prevention methodology by area type (routine + targeted)",
                "Incident & exception documentation to maintain audit readiness",
                "Verification records that support defensible, consistent execution",
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

          {/* <p className="italic opacity-80 text-dark mt-12 text-center">
            Background-checked team members available upon request.
          </p> */}
        </div>
      </section>


      {/* INDUSTRIES WE SERVE */}
      <section
        className="flex flex-col py-24 bg-dark text-center justify-center scroll-mt-32 min-h-screen"
        id="industries"
      >

        <div className="max-w-full mx-auto md:px-24 p-12 text-center w-full">

          <h2 className="text-4xl tracking-widest text-light mb-10">
            INDUSTRIES WE SERVE
          </h2>

          <p className="text-light text-lg max-w-2xl mx-auto mb-16 md:mb-24">
            Tailored solutions for distinguished commercial environments
          </p>

          <EmblaCarousel slides={SLIDES} options={{ loop: true }} />
        </div>
      </section>

      {/* OUR SIGNATURE PROCESS */}
      <section className="flex flex-col pt-24 bg-light items-center justify-center scroll-mt-32 min-h-screen" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl tracking-widest text-primary mb-10">
              OUR SIGNATURE PROCESS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Structure - Clarity - Accountability
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

      {/* SERVICE PROGRAMS */}
      <section className="bg-light pb-42 pt-24 md:pt-8 ">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl tracking-widest text-dark mb-6">
              SERVICE PROGRAMS
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Three structured service tiers designed to match the operational
              needs of modern organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* CORECARE */}
            <div className="group bg-white border border-gray-200 p-10 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <p className="text-xs tracking-widest text-mid uppercase mb-4">
                Essential and reliable
              </p>

              <h3 className="text-2xl tracking-wide text-dark mb-8">
                CoreCare
              </h3>

              <Link
                href="/pages/service-programs#corecare"
                className="inline-block bg-dark text-light px-6 py-3 text-xs tracking-widest hover:bg-mid transition"
              >
                Explore More
              </Link>

            </div>


            {/* EXECUTIVECARE */}
            <div className="group bg-white border border-gray-200 p-10 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <p className="text-xs tracking-widest text-mid uppercase mb-4">
                Elevated Presentation
              </p>

              <h3 className="text-2xl tracking-wide text-dark mb-8">
                ExecutiveCare
              </h3>

              <Link
                href="/pages/service-programs#executivecare"
                className="inline-block bg-dark text-white px-6 py-3 text-xs tracking-widest hover:bg-mid transition"
              >
                Explore More
              </Link>

            </div>


            {/* COMPLIANCECARE */}
            <div className="group bg-white border border-gray-200 p-10 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <p className="text-xs tracking-widest text-mid uppercase mb-4">
                Controlled Environment
              </p>

              <h3 className="text-2xl tracking-wide text-dark mb-8">
                ComplianceCare
              </h3>

              <Link
                href="/pages/service-programs#compliancecare"
                className="inline-block bg-dark text-light px-6 py-3 text-xs tracking-widest hover:bg-mid transition"
              >
                Explore More
              </Link>

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
      {/* <section className="py-24 bg-dark scroll-mt-32" id="testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl tracking-widest text-light mb-10">
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
      </section> */}

      {/* CONTACT FORM */}
      <ContactForm/>

      {/* FOOTER */}
      <Footer/>
    </>
  );
}
