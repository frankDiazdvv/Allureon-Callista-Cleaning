import Footer from "@/app/components/footer";
import TopNavBar from "@/app/components/topNavBar";

export default function AddOns() {
  return (
    <>
      <TopNavBar />

      <main className="bg-light text-dark">

        {/* PAGE HEADER */}
        <section className="py-48 text-center">
          <div className="max-w-3xl mx-auto px-6">

            <h1 className="text-5xl tracking-widest mb-6">
              ADD-ON SERVICES
            </h1>

            <p className="text-gray-700 leading-relaxed">
              Optional service enhancements designed to extend scope, strengthen control, 
              and support evolving operational needs.
            </p>

          </div>
        </section>

        {/* ENHANCED DISINFECTION PROTOCOL */}
        <section
          id="enhanceddisinfection"
          className="py-24 bg-white border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                Enhanced Disinfection Protocol
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Expanded disinfection of high-touch surfaces using EPA-compliant 
                products and elevated frequency options to support heightened hygiene requirements.
              </p>

              <p className="text-sm italic text-dark">
                Supports heightened hygiene requirements with EPA-compliant solutions.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                Facilities with increased hygiene demands
              </p>
            </div>

            <div className="bg-dark text-light p-12">
              <h3 className="tracking-widest text-sm mb-6 opacity-80">
                HIGH-TOUCH HYGIENE
              </h3>

              <p className="text-lg leading-relaxed">
                Targeted disinfection focused on high-traffic touchpoints to maintain 
                elevated cleanliness standards.
              </p>
            </div>

          </div>
        </section>

        {/* DAY PORTER SERVICES */}
        <section
          id="dayporter"
          className="py-24 bg-light border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-mid text-white p-12 order-2 md:order-1">
              <h3 className="tracking-widest text-sm mb-6 opacity-90">
                OPERATIONAL SUPPORT
              </h3>

              <p className="text-lg leading-relaxed">
                On-site presence during business hours to handle immediate cleaning needs 
                and maintain cleanliness throughout the day.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                Day Porter Services
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                On-site operational support during business hours to maintain restrooms, 
                common areas, and immediate cleaning needs as they arise.
              </p>

              <p className="text-sm italic text-dark">
                Immediate response to daily cleaning requirements.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                Active facilities during business hours
              </p>
            </div>

          </div>
        </section>

        {/* HIGH DUSTING & DETAIL CLEANING */}
        <section
          id="highdusting"
          className="py-24 bg-white border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                High Dusting & Detail Cleaning
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Targeted cleaning of elevated and hard-to-reach areas, including vents, 
                ledges, and structural surfaces beyond routine scope.
              </p>

              <p className="text-sm italic text-dark">
                Goes beyond standard cleaning to maintain detailed environments.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                Facilities with high ceilings or detailed architectural elements
              </p>
            </div>

            <div className="bg-dark text-light p-12">
              <h3 className="tracking-widest text-sm mb-6 opacity-80">
                DEEP DETAIL
              </h3>

              <p className="text-lg leading-relaxed">
                Thorough attention to hard-to-reach areas that standard cleaning typically overlooks.
              </p>
            </div>

          </div>
        </section>

        {/* FLOOR CARE PROGRAMS */}
        <section
          id="floorcare"
          className="py-24 bg-light border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-mid text-white p-12 order-2 md:order-1">
              <h3 className="tracking-widest text-sm mb-6 opacity-90">
                SPECIALIZED MAINTENANCE
              </h3>

              <p className="text-lg leading-relaxed">
                Professional floor care tailored to your specific flooring types and traffic levels.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                Floor Care Programs
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Specialized floor maintenance including machine scrubbing, carpet extraction, 
                and surface restoration tailored to flooring type and condition.
              </p>

              <p className="text-sm italic text-dark">
                Keeps floors looking their best and lasting longer.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                Any facility with hard floors or carpeted areas
              </p>
            </div>

          </div>
        </section>

        {/* RESTROOM PREMIUM CARE */}
        <section
          id="restroompremium"
          className="py-24 bg-white border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                Restroom Premium Care
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Enhanced restroom sanitation protocols with increased attention to hygiene, 
                odor control, and presentation standards.
              </p>

              <p className="text-sm italic text-dark">
                Maintains the highest standards of restroom cleanliness and appearance.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                High-traffic restrooms and facilities focused on guest experience
              </p>
            </div>

            <div className="bg-dark text-light p-12">
              <h3 className="tracking-widest text-sm mb-6 opacity-80">
                RESTROOM EXCELLENCE
              </h3>

              <p className="text-lg leading-relaxed">
                Elevated sanitation and presentation for restrooms that make a strong impression.
              </p>
            </div>

          </div>
        </section>

        {/* CONSUMABLES MANAGEMENT */}
        <section
          id="consumables"
          className="py-24 bg-light border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-mid text-white p-12 order-2 md:order-1">
              <h3 className="tracking-widest text-sm mb-6 opacity-90">
                SUPPLY ASSURANCE
              </h3>

              <p className="text-lg leading-relaxed">
                Reliable management of essential supplies so your operations never face interruptions.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                Consumables Management
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Supply and inventory management of essential restroom and facility consumables 
                to ensure uninterrupted daily operations.
              </p>

              <p className="text-sm italic text-dark">
                Never run out of critical supplies again.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                All facilities looking to streamline operations
              </p>
            </div>

          </div>
        </section>

        {/* INITIAL DEEP CLEANING / POST-CONSTRUCTION */}
        <section
          id="initialdeepcleaning"
          className="py-24 bg-white border-t border-gray-200"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl tracking-wide mb-6 text-dark">
                Initial Deep Cleaning / Post-Construction
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Comprehensive cleaning to reset and prepare environments for operational 
                readiness following construction or onboarding.
              </p>

              <p className="text-sm italic text-dark">
                Perfect reset for new or renovated spaces.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
              </p>

              <p className="text-sm mt-2">
                New construction, renovations, or space onboarding
              </p>
            </div>

            <div className="bg-dark text-light p-12">
              <h3 className="tracking-widest text-sm mb-6 opacity-80">
                FRESH START
              </h3>

              <p className="text-lg leading-relaxed">
                Thorough deep cleaning to ensure your facility starts clean and ready for use.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}