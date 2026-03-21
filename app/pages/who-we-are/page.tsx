import TopNavBar from "../../components/topNavBar";
import ContactForm from "../../components/contactusform";
import { ArrowRight, ShieldCheck, Gem, Users } from "lucide-react";
import Link from "next/link";
import Footer from "@/app/components/footer";

export default function WhoWeAre() {
  return (
    <>
      <TopNavBar />

      {/* HERO */}
      <section className="bg-dark text-light py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <p className="tracking-widest uppercase text-sm opacity-70 mb-6">
            About Allureon Callista
          </p>

          <h1 className="text-4xl md:text-5xl tracking-wide font-light mb-6">
            Precision. Accountability. Quiet Excellence.
          </h1>

          <p className="text-lg opacity-80">
            We exist to deliver executive-ready environments for organizations
            where appearance, reliability, and operational discipline matter.
          </p>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-light py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl tracking-widest text-dark mb-8">
              WHO WE ARE
            </h2>

            <p className="text-gray-700 mb-6">
              Allureon Callista exists to make excellence
              visible, verifiable, and sustainable in
              professional environments where work and
              purpose converge.
            </p>

            <p className="text-gray-700 mb-6">
              We deliver consistency through documented
              standards, routine verification, and measurable
              performance, so outcomes hold across zones,
              shifts, and changing conditions.
            </p>
            
          </div>

          <div className="bg-dark text-light p-10">
            <h3 className="text-xl tracking-wide mb-6">
              Our Commitment
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <ShieldCheck className="w-5 h-5 mt-0.5" />
                Fully licensed, insured, and compliance-oriented
              </li>

              <li className="flex gap-3">
                <Gem className="w-5 h-5 mt-0.5" />
                White-glove standards designed for executive environments
              </li>

              <li className="flex gap-3">
                <Users className="w-5 h-5 mt-0.5" />
                Professionally trained teams with verified QA oversight
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="bg-dark text-light py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl tracking-widest mb-10">
            OUR PHILOSOPHY
          </h2>

          <p className="text-lg opacity-90 mb-12 font-semibold">
            We believe environments influence behavior,
            culture, and performance.
          </p>

          <p className="opacity-80 mb-10">
            When standards are clear and consistently upheld,
            trust strengthens and risk declines
          </p>

          <p className="opacity-80">
            Our work is guided by disciplined execution and
            thoughtful design - because spaces that function with
            clarity allow people and organizations to perform at
            their highest level.
          </p>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-light py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h3 className="text-3xl tracking-wide mb-6">
            Experience the Allureon Standard
          </h3>

          <p className="text-gray-700 mb-10">
            Schedule a facility walkthrough and discover how structured
            cleaning programs can elevate your workplace environment.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-dark text-light px-8 py-4 text-sm tracking-widest hover:bg-dark/80 transition"
          >
            Schedule Walkthrough
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>
      <ContactForm />

      {/* FOOTER */}
      <Footer/>
    </>
  );
}