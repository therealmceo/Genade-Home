import { motion } from "motion/react";
import { CheckCircle2, MapPin, Mountain, Wind, ShieldCheck, TrendingUp, Users, Star, ArrowRight, Calendar, CreditCard, FileText } from "lucide-react";
import { cn } from "@/src/lib/utils";

const ADVISOR_LINK = "https://wa.link/0d983p";
const INSPECTION_LINK = "https://wa.link/1jtbqx";
const WHATSAPP_LINK = "https://wa.link/jy1wau";

const plotSizes = [
  { size: "150sqm", type: "three bedroom terrace duplex", price: "₦7,481,250" },
  { size: "250sqm", type: "four bedroom semi detached duplex", price: "₦12,468,750" },
  { size: "350sqm", type: "four bedroom fully detached duplex", price: "₦14,960,937" },
  { size: "500sqm", type: "five bedroom fully detached duplex", price: "₦25,000,000" },
  { size: "1000sqm", type: "six unit of three bedroom block of flat", price: "₦50,000,000" }
];

const testimonials = [
  {
    quote: "Choosing Genade Homes was the best decision I’ve made as a property owner. From the first site visit to the day I got my keys, the process was seamless and transparent. The team truly cares about quality, sustainability, and customer satisfaction.",
    author: "Mrs. Chioma Adewale",
    role: "Homeowner, Abuja"
  },
  {
    quote: "Moving to Abuja was a big step for us, but Genade Homes made it feel like home from day one. The location is perfect for my work, the airport is close by, and the quality of construction is exceptional. It’s more than a house—it’s peace of mind.",
    author: "Sandra Nwachukwu",
    role: "Homeowner, Kabusa"
  }
];

export default function Primesgate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920"
            alt="Mountain Landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Limited Availability: 46 Plots Remaining
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              PRIMESGATE <span className="text-secondary">ESTATE</span>
            </h1>
            <p className="text-2xl text-white font-medium mb-4">
              Own a Mountain-Surrounded Residential Plot Along Abuja Airport Road
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Allocation Ongoing. Verified R of O Title. Airport Road Growth Corridor. Mountain-Surrounded Landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={INSPECTION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform shadow-xl"
              >
                <span>Book a FREE Inspection</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Buyers are Moving Early */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-primary leading-tight">Why Smart Buyers Are Securing Primesgate Now</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Most land in Abuja is just flat earth divided into plots. Primesgate is different. It sits within a rare mountain-surrounded terrain along the rapidly expanding Airport Road corridor — a location already attracting residential growth and long-term positioning buyers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Smart Abuja property buyers don’t wait for full development. They secure early in locations that combine growth direction, strong title, and distinctive environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Verified R of O title",
                  "Airport Road growth corridor",
                  "Mountain-surrounded landscape",
                  "Planned residential layout",
                  "Flexible payment options"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-primary font-semibold">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <a
                  href={INSPECTION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                  Book a FREE Inspection
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
                alt="Mountain Terrain"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl shadow-lg max-w-[200px] text-center">
                <p className="text-primary font-black text-4xl mb-1">46</p>
                <p className="text-primary/70 text-xs font-bold uppercase tracking-wider">Plots Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Terrain Advantage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">A Natural Terrain You Cannot Recreate Later</h2>
            <p className="text-gray-600 text-lg">
              Most estates flatten land. Primesgate preserves terrain. The estate is surrounded by natural mountain formations that create a distinctive natural setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Mountain, title: "Scenic Elevation" },
              { icon: Wind, title: "Fresh Air Flow" },
              { icon: ShieldCheck, title: "Visual Privacy" },
              { icon: TrendingUp, title: "Recreation Potential" },
              { icon: Users, title: "Landscape Identity" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-primary text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Built Around Nature */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1000"
                alt="Community Nature"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-serif text-4xl font-bold text-primary">A Residential Community Designed Around Terrain</h2>
              <p className="text-gray-600 text-lg">
                Primesgate is planned as more than plots. It is conceived as a terrain-integrated lifestyle community.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mountain size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Curated Hiking Trails</h4>
                    <p className="text-gray-500 text-sm">The surrounding mountains will be developed into safe hiking paths for residents — free access.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Cable Car Mobility Concept</h4>
                    <p className="text-gray-500 text-sm">Future internal cable transport planned to ease movement across terrain while preserving landscape.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-8 rounded-2xl text-white">
                <h4 className="font-serif text-2xl font-bold mb-4 text-secondary">Future Lifestyle Amenities</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-secondary" size={18} />
                    <span>Love garden</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-secondary" size={18} />
                    <span>Science museum</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-secondary" size={18} />
                    <span>Games court</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-secondary" size={18} />
                    <span>Eco-friendly relaxation centre</span>
                  </li>
                </ul>
                <p className="mt-6 font-bold text-secondary">Nature + Community + Comfort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Sizes & Pricing */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Available Plot Sizes</h2>
            <p className="text-gray-400">All plots are within planned residential demarcation. You choose actual position within layout.</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plotSizes.map((plot, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center hover:bg-white/10 transition-all group">
                  <h3 className="font-serif text-3xl font-bold mb-2 text-secondary">{plot.size}</h3>
                  <p className="text-xl font-bold text-white mb-4">{plot.price}</p>
                  <p className="text-lg font-medium mb-8 text-white/70">{plot.type}</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-primary py-4 rounded-xl font-bold group-hover:bg-secondary transition-colors"
                  >
                    Reserve Now
                  </a>
                </div>
              ))}
            </div>

          <div className="mt-16 bg-white/5 p-10 rounded-3xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-6 text-secondary">Flexible Payment Options</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CreditCard className="text-secondary" size={20} />
                    <span>Outright payment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Calendar className="text-secondary" size={20} />
                    <span>3-month plan (no interest)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="text-secondary" size={20} />
                    <span>6-month plan (interest applies)</span>
                  </li>
                </ul>
                <p className="mt-8 text-sm text-gray-400 italic">Plots are secured upon payment commitment due to limited remaining units.</p>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl font-bold text-secondary">Verified Title & Security</h3>
                <p className="text-gray-300">One of the biggest Abuja land risks is documentation. Primesgate operates with verified R of O and structured allocation.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center space-x-2">
                    <FileText className="text-secondary" size={16} />
                    <span className="text-sm">Allocation Docs</span>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center space-x-2">
                    <ShieldCheck className="text-secondary" size={16} />
                    <span className="text-sm">Ownership Records</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">What Buyers Are Saying</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative">
                <Star className="text-secondary absolute top-10 right-10 opacity-20" size={48} />
                <p className="text-lg italic mb-8 leading-relaxed text-gray-700">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-primary text-lg">{t.author}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">Reserve Your Primesgate Plot</h2>
          <p className="text-gray-600 text-lg mb-12">
            Only 46 plots remain. Complete the form below to confirm availability, schedule inspection, or reserve your plot.
          </p>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="+234..." />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-32" placeholder="I'm interested in the 500sqm plot..."></textarea>
              </div>
              <div className="md:col-span-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-secondary py-4 rounded-xl font-bold text-center hover:bg-primary/90 transition-colors"
                >
                  Submit Reservation via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
