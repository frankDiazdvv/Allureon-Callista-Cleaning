// import { useState } from "react";
// import {
//   ShieldCheck,
//   Gem,
//   Users,
//   SprayCan,
//   Building2,
//   Store,
//   Landmark,
//   Factory,
//   Building,
//   Mail,
//   Phone,
//   Menu,
//   X,
//   Star,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

// function TopNavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm text-white z-50 border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="text-2xl font-light tracking-widest">
//           ALLUREON CALLISTA
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-sm tracking-wide">
//           <li>
//             <a href="#about" className="hover:text-gray-300 transition">
//               ABOUT
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="hover:text-gray-300 transition">
//               SERVICES
//             </a>
//           </li>
//           <li>
//             <a href="#process" className="hover:text-gray-300 transition">
//               PROCESS
//             </a>
//           </li>
//           <li>
//             <a href="#testimonials" className="hover:text-gray-300 transition">
//               TESTIMONIALS
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-gray-300 transition">
//               CONTACT
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black/95 border-t border-white/10">
//           <ul className="flex flex-col space-y-4 px-6 py-6 text-sm tracking-wide">
//             <li>
//               <a
//                 href="#about"
//                 className="block hover:text-gray-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 ABOUT
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="block hover:text-gray-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 SERVICES
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#process"
//                 className="block hover:text-gray-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 PROCESS
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#testimonials"
//                 className="block hover:text-gray-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 TESTIMONIALS
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="block hover:text-gray-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 CONTACT
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for your inquiry. We will contact you shortly.");
//     setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <TopNavBar />

//       {/* HERO SECTION */}
//       <section className="relative w-full h-screen flex items-center justify-center text-white">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <p className="text-lg tracking-widest uppercase mb-4 opacity-90">
//             Where Excellence Meets Precision
//           </p>

//           <h1 className="text-5xl md:text-7xl font-light tracking-wide drop-shadow-xl mb-6">
//             THE ART OF REFINED TRANSFORMATION
//           </h1>

//           <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
//             Elevating spaces through meticulous care and unparalleled attention
//             to detail
//           </p>

//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm tracking-widest font-medium hover:bg-gray-100 transition"
//           >
//             REQUEST CONSULTATION
//             <ArrowRight className="w-4 h-4" />
//           </a>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-24 bg-white text-center" id="about">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-light tracking-widest mb-6">
//             WHY CHOOSE US
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
//             We deliver an unmatched standard of cleanliness that transforms
//             environments and exceeds expectations
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-black/80">
//             <div className="group">
//               <div className="mb-6 flex justify-center">
//                 <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
//                   <ShieldCheck className="w-12 h-12 text-black" />
//                 </div>
//               </div>
//               <h3 className="font-medium text-lg tracking-wide mb-2">
//                 Certified & Compliant
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Fully licensed and insured with industry certifications
//               </p>
//             </div>

//             <div className="group">
//               <div className="mb-6 flex justify-center">
//                 <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
//                   <Gem className="w-12 h-12 text-black" />
//                 </div>
//               </div>
//               <h3 className="font-medium text-lg tracking-wide mb-2">
//                 Luxury-Level Detailing
//               </h3>
//               <p className="text-sm text-gray-600">
//                 White-glove service with meticulous attention to every surface
//               </p>
//             </div>

//             <div className="group">
//               <div className="mb-6 flex justify-center">
//                 <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
//                   <Users className="w-12 h-12 text-black" />
//                 </div>
//               </div>
//               <h3 className="font-medium text-lg tracking-wide mb-2">
//                 Professionally Trained Teams
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Expert staff with ongoing training and quality assurance
//               </p>
//             </div>

//             <div className="group">
//               <div className="mb-6 flex justify-center">
//                 <div className="p-6 bg-gray-50 group-hover:bg-gray-100 transition">
//                   <SprayCan className="w-12 h-12 text-black" />
//                 </div>
//               </div>
//               <h3 className="font-medium text-lg tracking-wide mb-2">
//                 Cutting-Edge Equipment
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Premium tools and eco-friendly solutions for superior results
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR SIGNATURE SERVICES */}
//       <section className="py-24 bg-gray-50 text-center" id="services">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-light tracking-widest mb-6">
//             OUR SIGNATURE SERVICES
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
//             Tailored solutions for distinguished commercial environments
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-black/80">
//             <div className="group">
//               <div className="mb-4 flex justify-center">
//                 <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
//                   <Building2 className="w-12 h-12" />
//                 </div>
//               </div>
//               <p className="font-medium tracking-wide">Corporate Offices</p>
//             </div>

//             <div className="group">
//               <div className="mb-4 flex justify-center">
//                 <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
//                   <Store className="w-12 h-12" />
//                 </div>
//               </div>
//               <p className="font-medium tracking-wide">Retail Spaces</p>
//             </div>

//             <div className="group">
//               <div className="mb-4 flex justify-center">
//                 <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
//                   <Landmark className="w-12 h-12" />
//                 </div>
//               </div>
//               <p className="font-medium tracking-wide">Banks & Institutions</p>
//             </div>

//             <div className="group">
//               <div className="mb-4 flex justify-center">
//                 <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
//                   <Factory className="w-12 h-12" />
//                 </div>
//               </div>
//               <p className="font-medium tracking-wide">
//                 Manufacturing Facilities
//               </p>
//             </div>

//             <div className="group">
//               <div className="mb-4 flex justify-center">
//                 <div className="p-6 bg-white group-hover:bg-gray-100 transition shadow-sm">
//                   <Building className="w-12 h-12" />
//                 </div>
//               </div>
//               <p className="font-medium tracking-wide">Luxury Buildings</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR PROCESS */}
//       <section className="py-24 bg-white" id="process">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-light tracking-widest mb-6">
//               OUR PROCESS
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               A seamless journey from consultation to completion
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="text-center">
//               <div className="mb-6 flex justify-center">
//                 <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-light">
//                   01
//                 </div>
//               </div>
//               <h3 className="text-xl font-medium tracking-wide mb-3">
//                 Consultation
//               </h3>
//               <p className="text-gray-600">
//                 We assess your space and understand your unique requirements to
//                 create a customized cleaning plan
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="mb-6 flex justify-center">
//                 <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-light">
//                   02
//                 </div>
//               </div>
//               <h3 className="text-xl font-medium tracking-wide mb-3">
//                 Execution
//               </h3>
//               <p className="text-gray-600">
//                 Our trained team delivers meticulous service using premium
//                 equipment and eco-friendly products
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="mb-6 flex justify-center">
//                 <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-light">
//                   03
//                 </div>
//               </div>
//               <h3 className="text-xl font-medium tracking-wide mb-3">
//                 Quality Assurance
//               </h3>
//               <p className="text-gray-600">
//                 We conduct thorough inspections to ensure every detail meets our
//                 exacting standards
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-24 bg-gray-50" id="testimonials">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-light tracking-widest mb-6">
//               CLIENT TESTIMONIALS
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Trusted by leading organizations across Miami
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 shadow-sm">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-black text-black" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 italic">
//                 "Allureon Callista transformed our corporate headquarters. Their
//                 attention to detail is simply unmatched. Every surface gleams."
//               </p>
//               <p className="font-medium">Michael Rodriguez</p>
//               <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
//             </div>

//             <div className="bg-white p-8 shadow-sm">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-black text-black" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 italic">
//                 "We've worked with several cleaning services, but none compare
//                 to the professionalism and quality Allureon brings every time."
//               </p>
//               <p className="font-medium">Sarah Chen</p>
//               <p className="text-sm text-gray-500">
//                 Operations Director, Luxury Retail Group
//               </p>
//             </div>

//             <div className="bg-white p-8 shadow-sm">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-black text-black" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 italic">
//                 "Their team is reliable, thorough, and treats our facility with
//                 the utmost care. Exceptional service from start to finish."
//               </p>
//               <p className="font-medium">David Martinez</p>
//               <p className="text-sm text-gray-500">
//                 Facility Manager, Financial District
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT FORM */}
//       <section className="py-24 bg-white" id="contact">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-light tracking-widest mb-6">
//               REQUEST A CONSULTATION
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Experience the Allureon Callista difference
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm tracking-wide mb-2 font-medium">
//                   NAME *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm tracking-wide mb-2 font-medium">
//                   EMAIL *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm tracking-wide mb-2 font-medium">
//                   PHONE
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm tracking-wide mb-2 font-medium">
//                   SERVICE TYPE
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
//                 >
//                   <option value="">Select a service</option>
//                   <option value="corporate">Corporate Offices</option>
//                   <option value="retail">Retail Spaces</option>
//                   <option value="banks">Banks & Institutions</option>
//                   <option value="manufacturing">Manufacturing Facilities</option>
//                   <option value="luxury">Luxury Buildings</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm tracking-wide mb-2 font-medium">
//                 MESSAGE
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={5}
//                 className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none resize-none"
//               ></textarea>
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-2 bg-black text-white px-12 py-4 text-sm tracking-widest font-medium hover:bg-gray-800 transition"
//               >
//                 SUBMIT INQUIRY
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-black text-white py-16 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
//           <div>
//             <h3 className="text-2xl font-light tracking-widest mb-6">
//               ALLUREON CALLISTA
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Redefining luxury commercial cleaning through precision,
//               excellence, and unwavering commitment to quality.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium tracking-wide mb-6">
//               Quick Links
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <a
//                   href="#about"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#services"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#process"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Our Process
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#testimonials"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Testimonials
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium tracking-wide mb-6">
//               Get in Touch
//             </h3>
//             <ul className="space-y-4 text-sm">
//               <li className="flex items-start gap-3 text-gray-400">
//                 <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                 <span>contact@allcal.com</span>
//               </li>

//               <li className="flex items-start gap-3 text-gray-400">
//                 <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                 <span>(305) 555-0100</span>
//               </li>

//               <li className="flex items-start gap-3 text-gray-400">
//                 <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                 <span>Miami, FL</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
//           <p className="text-gray-500 text-sm">
//             © {new Date().getFullYear()} Allureon Callista. All Rights Reserved.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }