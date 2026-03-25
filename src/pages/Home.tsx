import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, MessageSquare, MapPin, ShieldCheck, TrendingUp, Users, Star } from "lucide-react";
import { cn } from "@/src/lib/utils";

const WHATSAPP_LINK = "https://wa.me/+2348143999430";

const heroImages = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1600607687940-c52af036999c?auto=format&fit=crop&q=80&w=1920"
];

const estates = [
  {
    name: "Primesgate Residence",
    location: "Airport Road, Before Centenary City, Abuja",
    title: "FCDA C of O | Presale",
    prices: [
      "150sqm: three bedroom terrace duplex",
      "250sqm: four bedroom semi detached duplex",
      "350sqm: four bedroom fully detached duplex",
      "500sqm: five bedroom fully detached duplex",
      "1000sqm: six unit of three bedroom block of flat"
    ],
    description: "A strategically located estate along the Airport Road growth corridor, designed for future homeowners and investors positioning early.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    link: "/primesgate"
  },
  {
    name: "The Verdant",
    location: "Behind Centenary City, Kuje, Abuja",
    title: "Presale",
    prices: [
      "180sqm: 2 bedroom semi detached bungalow",
      "250sqm: 3 bedroom fully detached bungalow"
    ],
    description: "An emerging residential community in the fast-developing Kuje axis, ideal for buyers seeking affordable entry into Abuja property.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    name: "Addis City",
    location: "Sheretti Kabusa, Abuja",
    title: "FCDA C of O Fully Paid",
    prices: [
      "150sqm: three bedroom terrace duplex",
      "250sqm: four bedroom semi detached duplex",
      "350sqm: four bedroom fully detached duplex",
      "500sqm: five bedroom fully detached duplex",
      "750sqm: six unit of two bedroom block of flat"
    ],
    description: "A fully secured estate in Kabusa offering structured residential planning within one of Abuja’s expanding urban belts.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    name: "White Plains",
    location: "Galadimawa, Abuja",
    title: "Finished Home",
    prices: [
      "3-Bedroom + BQ — ₦150M",
      "Deposit — ₦55M"
    ],
    description: "A premium residential development in Galadimawa designed for buyers seeking finished homes in a prime city location.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    name: "Peace Ville",
    location: "Lokogoma, Abuja",
    title: "FCDA Approved",
    prices: [
      "3-Bedroom Block — ₦70M (Presale)"
    ],
    description: "A family-friendly development in Lokogoma combining accessibility with residential comfort.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    name: "Vine City",
    location: "Apo Wassa, Abuja",
    title: "Presale",
    prices: [
      "450sqm: five bedroom fully detached duplex"
    ],
    description: "A premium residential community in the strategic Apo Wassa axis, offering high-value positioning within Abuja’s urban belt.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    name: "Fairview Estate",
    location: "Kuje, Abuja",
    title: "Presale",
    prices: [
      "300sqm: four bedroom terrace duplex",
      "350sqm: four bedroom terrace duplex",
      "450sqm: five bedroom fully detached duplex"
    ],
    description: "A modern residential development in Kuje designed for comfort and contemporary living.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const testimonials = [
  {
    quote: "Choosing Genade Homes was the best decision I’ve made as a property owner. From the first site visit to the day I got my keys, everything was seamless and transparent.",
    author: "Mrs. Chioma Adewale",
    role: "Homeowner, Abuja"
  },
  {
    quote: "Moving to Abuja was a big step for us, but Genade Homes made it feel like home from day one. The location works perfectly for my work, the airport is close, and the construction quality is excellent.",
    author: "Sandra Nwachukwu",
    role: "Homeowner, Kabusa"
  }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              alt="Real Estate Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Sustainable Communities. <br />
              <span className="text-secondary">Strategic Locations.</span> <br />
              Homes That Last.
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl text-gray-100 mb-10 leading-relaxed drop-shadow-md"
            >
              At Genade Homes, we create residential communities across Abuja’s growth corridors — places where people don’t just buy property, but truly belong.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/primesgate"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform shadow-lg"
              >
                <span>Explore Properties</span>
                <ArrowRight size={20} />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-all"
              >
                <span>Book Inspection</span>
              </a>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                "FCDA-approved locations",
                "Verified documentation",
                "Strategic growth zones",
                "Flexible purchase options"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-white font-medium text-sm">
                  <CheckCircle2 className="text-secondary shrink-0" size={16} />
                  <span className="drop-shadow-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Communities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Explore Genade Homes Estates</h2>
            <p className="text-gray-600 text-lg">
              Every Genade Homes project is positioned within Abuja’s real expansion direction — not guesswork, not speculation. Just smart, future-ready locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estates.map((estate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={estate.image}
                    alt={estate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {estate.title}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-primary mb-1">{estate.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{estate.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 mb-6">
                    {estate.prices.map((price, j) => (
                      <p key={j} className="text-sm font-semibold text-primary/80">{price}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {estate.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white py-3 rounded-lg text-center text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      View Estate
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-primary text-primary py-3 rounded-lg text-center text-sm font-bold hover:bg-primary hover:text-white transition-all"
                    >
                      Request Brochure
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5+ Strategic Locations Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary leading-tight">
                5+ <span className="text-secondary">STRATEGIC</span> <br />
                LOCATIONS
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We've carefully selected over five prime locations across Abuja's most promising growth corridors. From the bustling Airport Road to the serene Kuje axis, our estates are positioned where value meets lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Airport Road", "Kuje", "Kabusa", "Galadimawa", "Lokogoma", "Apo Wassa"].map((loc, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-primary">
                    {loc}
                  </span>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-secondary font-bold text-lg hover:translate-x-2 transition-transform"
              >
                <span>View All Locations</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=600"
                  alt="Strategic Location 1"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600"
                  alt="Strategic Location 2"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 pt-12"
              >
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600"
                  alt="Strategic Location 3"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600"
                  alt="Strategic Location 4"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Genade Homes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6 leading-tight">Built for Real Living</h2>
              <p className="text-gray-600 text-lg mb-10">
                We don’t create speculative layouts or random land divisions. We plan communities people can actually live in — comfortably, securely, and confidently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: "Strategic Locations", desc: "Every project sits within Abuja’s genuine growth direction." },
                  { icon: ShieldCheck, title: "Secure Documentation", desc: "FCDA approvals, C of O, or R of O verified." },
                  { icon: TrendingUp, title: "Livable Design", desc: "Communities planned around residential use." },
                  { icon: Users, title: "Long-Term Value", desc: "We focus on future desirability, not quick sales." }
                ].map((feature, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-secondary">
                      <feature.icon size={24} />
                    </div>
                    <h4 className="font-bold text-primary">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1592595894519-32b56929562b?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Architecture"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-primary font-bold text-lg mb-2">"Smart property ownership works by securing position before full maturity."</p>
                <p className="text-primary/60 text-sm">— Genade Homes Approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">What Buyers Are Saying</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 relative">
                <Star className="text-secondary absolute top-10 right-10 opacity-20" size={48} />
                <p className="text-xl italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-secondary text-lg">{t.author}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">How to Buy</h2>
            <p className="text-gray-600">Securing a Genade Homes Property Is Straightforward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Request brochure or availability",
              "Schedule inspection",
              "Choose plot or home",
              "Select payment plan",
              "Receive allocation & documentation"
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center relative group hover:bg-primary transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold mx-auto mb-4 group-hover:bg-white">
                  {i + 1}
                </div>
                <p className="text-sm font-bold text-primary group-hover:text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-900 rounded-[3rem] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Start Your Property Journey With Genade Homes</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Whether you’re buying land, investing, or purchasing a home, our team will guide you from inquiry to ownership.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/primesgate"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Explore Available Properties
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Speak With Advisor
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Book Inspection
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
