import TopNavBar from "@/app/components/topNavBar";

export default function ServicePrograms() {
  return (
    <>
        <TopNavBar />
    
        <main className="bg-light text-dark">

        {/* PAGE HEADER */}
        <section className="py-48 text-center">
            <div className="max-w-3xl mx-auto px-6">

            <h1 className="text-5xl tracking-widest mb-6">
                SERVICE PROGRAMS
            </h1>

            <p className="text-gray-700 leading-relaxed">
                Three structured service tiers designed to match the operational,
                presentation, and compliance requirements of modern facilities.
            </p>

            </div>
        </section>


        {/* CORE CARE */}
        <section
            id="corecare"
            className="py-24 bg-white border-t border-gray-200"
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
                <h2 className="text-3xl tracking-wide mb-6 text-dark">
                CoreCare
                </h2>

                <p className="text-gray-700 mb-8 leading-relaxed">
                Reliable baseline cleaning with standard touchpoints and
                routine quality assurance that keeps the facility consistently clean.
                </p>

                <ul className="space-y-3 text-sm mb-10">
                <li>• Reliable baseline facility cleaning</li>
                <li>• Standard touchpoint sanitation</li>
                <li>• Standard QA and inspection checks</li>
                </ul>

                <p className="text-sm italic text-dark">
                CoreCare keeps the facility consistently clean.
                </p>

                <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
                </p>

                <p className="text-sm mt-2">
                Small offices / low-traffic environments
                </p>

            </div>

            <div className="bg-dark text-light p-12">
                <h3 className="tracking-widest text-sm mb-6 opacity-80">
                FOUNDATION TIER
                </h3>

                <p className="text-lg leading-relaxed">
                A dependable service baseline designed for facilities that
                require consistent cleanliness without additional operational
                complexity.
                </p>
            </div>

            </div>
        </section>


        {/* EXECUTIVE CARE */}
        <section
            id="executivecare"
            className="py-24 bg-light border-t border-gray-200"
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-mid text-white p-12 order-2 md:order-1">
                <h3 className="tracking-widest text-sm mb-6 opacity-90">
                PRESENTATION TIER
                </h3>

                <p className="text-lg leading-relaxed">
                Monthly scheduled detailing resets that prevent operational
                “drift” and maintain presentation zones at a consistently
                high standard.
                </p>
            </div>

            <div className="order-1 md:order-2">

                <h2 className="text-3xl tracking-wide mb-6 text-dark">
                ExecutiveCare
                </h2>

                <p className="text-gray-700 mb-8 leading-relaxed">
                Designed for facilities where appearance and presentation
                matter. Scheduled detailing ensures spaces stay sharp and
                consistently maintained.
                </p>

                <ul className="space-y-3 text-sm mb-10">
                <li>• Monthly scheduled detail refresh</li>
                <li>• Prevents operational “drift”</li>
                <li>• Presentation-zone focus</li>
                <li>• Increased inspection cadence</li>
                </ul>

                <p className="text-sm italic text-dark">
                ExecutiveCare keeps the facility consistently presentation-ready.
                </p>

                <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
                </p>

                <p className="text-sm mt-2">
                Small to mid-size facilities with higher traffic
                </p>

            </div>

            </div>
        </section>


        {/* COMPLIANCE CARE */}
        <section
            id="compliancecare"
            className="py-24 bg-white border-t border-gray-200"
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>

                <h2 className="text-3xl tracking-wide mb-6 text-dark">
                ComplianceCare
                </h2>

                <p className="text-gray-700 mb-8 leading-relaxed">
                A comprehensive service tier designed for regulated
                environments where documentation, traceability,
                and audit readiness are essential.
                </p>

                <ul className="space-y-3 text-sm mb-10">
                <li>• CoreCare + ExecutiveCare services</li>
                <li>• Monthly detail refresh included</li>
                <li>• Cadence increases based on risk level</li>
                <li>• Compliance documentation</li>
                <li>• Audit-ready reporting</li>
                </ul>

                <p className="text-sm italic text-dark">
                ComplianceCare keeps the facility audit-ready and defensible.
                </p>

                <p className="mt-8 text-xs uppercase tracking-widest text-mid">
                Best For
                </p>

                <p className="text-sm mt-2">
                Government, regulated, or medical environments
                </p>

            </div>

            <div className="bg-dark text-light p-12">
                <h3 className="tracking-widest text-sm mb-6 opacity-80">
                COMPLIANCE TIER
                </h3>

                <p className="text-lg leading-relaxed">
                Advanced compliance controls with operational traceability
                and reporting designed for environments that must meet
                strict regulatory expectations.
                </p>
            </div>

            </div>
        </section>

        </main>
    </>
    
  );
}