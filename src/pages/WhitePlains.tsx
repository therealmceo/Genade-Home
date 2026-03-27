import { motion } from "motion/react";
import { CheckCircle2, MapPin, Building2, ArrowRight, FileText, Calendar, MessageSquare, ShieldCheck, Gem, TrendingUp } from "lucide-react";

export default function WhitePlains() {
  const WHATSAPP_LINK = "https://wa.link/lt4ohs";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="White Plains Galadimawa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Galadimawa, Abuja
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              WHITE PLAINS — <span className="text-secondary">Premium Living</span> in One of Abuja’s Most Established Locations
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              White Plains is designed for buyers who want more than just a house — it’s for those who value space, comfort, prestige, and location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
              >
                <Calendar size={20} />
                <span>Schedule Tour</span>
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all"
              >
                <MessageSquare size={20} />
                <span>Speak With Advisor</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Prime Galadimawa", "Premium Design", "Secure Environment", "Ready for Living"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A Home That Matches Your Lifestyle</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-primary">3-Bedroom + BQ</span>
                  <span className="text-3xl font-serif font-bold text-secondary">₦150M</span>
                </div>
                <p className="text-gray-600 mb-6 font-medium">
                  Spacious, well-designed, and built for modern living.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    "Generous living areas", "Contemporary finish", "Private compound", "Boys’ quarters (BQ)", "Secure parking"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">Flexible Entry Deposit</span>
                    <span className="text-xl font-serif font-bold text-secondary">₦55M</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Complete payment in structured phases.</p>
                </div>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors"
              >
                <span>Check Availability</span>
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Luxury Interior" className="rounded-2xl shadow-xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Modern Kitchen" className="rounded-2xl shadow-xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Galadimawa */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Location That Works for Everyday Life</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Galadimawa is already a recognized residential hub in Abuja. You’re not waiting for development — it’s already happening.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin />, title: "City Center", desc: "Close proximity to the city center." },
              { icon: <TrendingUp />, title: "Stability", desc: "Strong property value stability." },
              { icon: <Building2 />, title: "Environment", desc: "Established residential environment." },
              { icon: <ShieldCheck />, title: "Certainty", desc: "Buying into certainty, not speculation." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-secondary mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Designed for a Certain Kind of Buyer</h2>
            <p className="text-gray-600">White Plains is ideal for those who value comfort, accessibility, and prestige.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Professionals working within Abuja", "Families seeking a permanent home", "Buyers upgrading to premium living", "Investors targeting high-value returns", "Diaspora buyers wanting a ready base"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:border-secondary transition-colors">
                <div className="flex justify-center mb-4">
                  <Gem className="text-secondary" size={32} />
                </div>
                <span className="font-bold text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Luxury Living" className="rounded-2xl shadow-2xl relative z-10" referrerPolicy="no-referrer" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">More Than a House — A Standard of Living</h2>
              <ul className="space-y-6">
                {[
                  "Coming home to space and calm", "Hosting in a home you’re proud of", "Enjoying privacy within a secure environment", "Living close to everything that matters"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="bg-primary text-secondary p-2 rounded-lg mt-1">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-600 italic">It’s about how your life feels every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Urgency */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary p-10 rounded-3xl text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">Built With Confidence</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-secondary" size={18} />
                  <span>Verified property documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-secondary" size={18} />
                  <span>Transparent transaction process</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-secondary" size={18} />
                  <span>Professional delivery standard</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Limited Units Available</h3>
              <p className="text-gray-600 mb-8">
                Homes in prime locations don’t stay on the market for long. Buyers looking for quality and location move fast.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
              >
                <MessageSquare size={20} />
                <span>Reserve Unit Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Schedule Your Viewing Today</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Step into a home that reflects your level. If you value comfort, accessibility, and prestige — this fits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <Calendar size={20} />
              <span>Schedule Tour</span>
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all"
            >
              <MessageSquare size={20} />
              <span>Speak With Advisor</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
