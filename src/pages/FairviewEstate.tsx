import { motion } from "motion/react";
import { CheckCircle2, MapPin, Building2, ArrowRight, FileText, Calendar, MessageSquare, ShieldCheck, LayoutGrid, TrendingUp } from "lucide-react";

const plotOptions = [
  { size: "300sqm", price: "Contact for Price", build: "Designed for a 4-bedroom terrace duplex" },
  { size: "350sqm", price: "₦6.5M", build: "Designed for a 4-bedroom terrace duplex (more spacious layout)" },
  { size: "450sqm", price: "₦8.25M", build: "Designed for a 5-bedroom fully detached duplex" },
];

export default function FairviewEstate() {
  const WHATSAPP_LINK = "https://wa.link/8sqaag";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Fairview Estate" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Abuja, Nigeria
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              FAIRVIEW ESTATE — <span className="text-secondary">Smart Living.</span> Structured Design. A Home You’ll Be Proud Of.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Fairview Estate is built for buyers who want more than just a plot — it’s for those ready to own a well-planned home in a residential environment designed for comfort, order, and long-term value.
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
              "Planned Estate", "Modern Duplex Living", "Structured Layout", "Homeowner Focused"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Fairview Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Designed for Real Homes, Not Just Land</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fairview Estate focuses on structured development — where every plot size aligns with a specific type of home. You’re not guessing what to build — it’s already aligned.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Better Organization", desc: "Planned for community growth." },
                  { title: "Consistent Value", desc: "Structured estates maintain value." },
                  { title: "Attractive Environment", desc: "Designed for residential harmony." },
                  { title: "Resale Potential", desc: "A place people want to buy in." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-secondary/20 p-1 rounded-full text-secondary mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Fairview Estate Plan" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden md:block">
                <p className="text-secondary font-bold text-xl">Structured Living</p>
                <p className="text-white/80 text-sm">Order, comfort, and value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Plots */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Choose What Fits Your Lifestyle</h2>
            <p className="text-gray-600">All plots are within a properly planned residential layout.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plotOptions.map((plot, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-primary">{plot.size}</span>
                  <span className="text-2xl font-serif font-bold text-secondary">{plot.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">{plot.build}</p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary/5 text-primary py-3 rounded-lg text-center font-bold hover:bg-primary hover:text-white transition-all block"
                >
                  Check Availability
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fairview */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Reasonable Price Entry", "Modern Home Design", "Structured Environment", "Long-term Value Growth"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                    <TrendingUp className="text-secondary mb-3" size={24} />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">A Balanced Entry Into Premium Living</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fairview Estate sits in a position that allows you to enter at a reasonable price, build a modern home, and enjoy a structured environment. It’s where affordability meets quality planning.
              </p>
              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-xl">
                <p className="text-secondary font-bold italic">"Buying now positions you ahead. Early buyers always benefit more as structured estates fill up."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Who This Is For</h2>
            <p className="text-gray-600">If you’re ready to move from “thinking” to “owning,” this fits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Families planning to build", "Young professionals transitioning", "Investors targeting residential builds", "Buyers upgrading from smaller properties", "Diaspora buyers securing property"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center space-x-4">
                <div className="bg-primary text-secondary p-2 rounded-lg">
                  <LayoutGrid size={20} />
                </div>
                <span className="font-bold text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Buy With Confidence</h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            With Genade Homes, your purchase is structured and transparent. We ensure clear documentation and a professional allocation process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-primary p-8 rounded-2xl text-white">
              <h4 className="font-bold text-secondary mb-4">Trust & Security</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ Transparent allocation</li>
                <li>✔ Clear documentation</li>
                <li>✔ Professional process</li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-primary">
              <h4 className="font-bold mb-4">Payment Options</h4>
              <ul className="space-y-3 text-sm text-primary/80">
                <li>• Outright payment</li>
                <li>• Structured payment options</li>
                <li>• Easy reservation process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Secure Your Plot at Fairview Estate Today</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Take the next step toward owning a properly planned home in Abuja. The best positions are always taken early.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
      </section>
    </div>
  );
}
