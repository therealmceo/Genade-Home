import { motion } from "motion/react";
import { CheckCircle2, MapPin, Building2, ArrowRight, FileText, Calendar, MessageSquare, TrendingUp } from "lucide-react";

export default function VineCity() {
  const WHATSAPP_LINK = "https://wa.me/+2348143999430";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Vine City Apo Wassa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Apo Wassa, Abuja
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              VINE CITY — <span className="text-secondary">Position Yourself</span> in One of Abuja’s Most Strategic Corridors
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Vine City is a premium residential community located within the fast-rising Apo Wassa axis — a location attracting smart buyers who understand where Abuja is heading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
              >
                <FileText size={20} />
                <span>Request Brochure</span>
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all"
              >
                <Calendar size={20} />
                <span>Book Inspection</span>
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
              "Strategic Location", "Premium Positioning", "Growth Potential", "Ideal Investment"
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Secure a Premium Plot</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">450sqm</span>
                  <span className="text-3xl font-serif font-bold text-secondary">₦19.2M</span>
                </div>
                <p className="text-gray-600 mb-6">
                  A well-sized plot designed for a spacious residential home or high-value investment build.
                </p>
                <ul className="space-y-3">
                  {[
                    "Luxury home development", "Duplex or custom home design", "Long-term land banking", "Future resale or rental positioning"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury Home" className="rounded-xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern Architecture" className="rounded-xl h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Apo Wassa */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">A Location Smart Buyers Are Watching Closely</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Apo Wassa is quickly becoming one of Abuja’s most strategic expansion zones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin />, title: "Proximity", desc: "Close to Apo and central districts." },
              { icon: <Building2 />, title: "Infrastructure", desc: "Increasing infrastructure development." },
              { icon: <TrendingUp />, title: "Demand", desc: "Rising residential demand." },
              { icon: <CheckCircle2 />, title: "Supply", desc: "Limited premium land supply." }
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

      {/* Why Vine City */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Premium Residential" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Built for Long-Term Value</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Vine City is positioned as a premium residential community — not just another layout. This is where thoughtful buyers secure early.
              </p>
              <ul className="space-y-4">
                {[
                  "Better planning & infrastructure", "Stronger resale value potential", "More attractive environment", "Higher long-term desirability"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-1 rounded-full">
                      <CheckCircle2 className="text-secondary" size={18} />
                    </div>
                    <span className="font-medium text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Who This Is For</h2>
            <p className="text-gray-600">Vine City fits those who focus on quality location and future value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "High-income professionals", "Investors seeking premium land", "Developers building luxury homes", "Diaspora buyers securing Abuja property", "Buyers upgrading their portfolio"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <span className="font-bold text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Logic */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Why This Makes Sense Financially</h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Premium locations behave differently. They appreciate faster, attract higher-quality buyers, and maintain stronger long-term value. Buying at ₦19.2M today is about positioning before price adjustments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-primary p-8 rounded-2xl text-white">
              <h4 className="font-bold text-secondary mb-4">Payment Options</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>• Outright payment</li>
                <li>• Structured payment plans</li>
                <li>• Easy reservation process</li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-primary">
              <h4 className="font-bold mb-4">Trust & Security</h4>
              <ul className="space-y-3 text-sm text-primary/80">
                <li>✔ Transparent allocation</li>
                <li>✔ Clear documentation</li>
                <li>✔ Structured process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="City" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Secure Your Plot at Vine City Today</h2>
            <p className="text-gray-300 mb-10 text-lg">
              If you’re looking for premium positioning in Abuja, this is your move. Strategic locations like Apo Wassa attract serious buyers early.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
              >
                <MessageSquare size={20} />
                <span>Speak With Advisor</span>
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all"
              >
                <Calendar size={20} />
                <span>Book Inspection</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
