import { motion } from "motion/react";
import { CheckCircle2, MapPin, Building2, ArrowRight, FileText, Calendar, MessageSquare, ShieldCheck, LayoutGrid, TrendingUp } from "lucide-react";

const plotOptions = [
  { size: "150sqm", price: "₦5.85M", build: "Perfect for a 3-bedroom terrace duplex" },
  { size: "250sqm", price: "₦9.75M", build: "Ideal for a 4-bedroom semi-detached duplex" },
  { size: "350sqm", price: "₦13.65M", build: "Suitable for a 4-bedroom fully detached duplex" },
  { size: "500sqm", price: "₦19.5M", build: "Best for a 5-bedroom fully detached duplex" },
  { size: "750sqm", price: "₦37.05M", build: "Excellent for 6 units of 2-bedroom block of flat (rental investment)" },
];

export default function AddisCity() {
  const ADVISOR_LINK = "https://wa.link/0d983p";
  const INSPECTION_LINK = "https://wa.link/1jtbqx";
  const WHATSAPP_LINK = "https://wa.link/a9moco";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Addis City Sheretti" 
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
              Sheretti, Pyankasa, Abuja
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              ADDIS CITY — <span className="text-secondary">Live in a Fully Planned Estate.</span> Own in a Growing Abuja Location.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Addis City is a structured residential development designed for modern living — combining secure title, smart layouts, and a location positioned for steady growth.
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
                href={INSPECTION_LINK}
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
              "FCDA C of O (Paid)", "Structured Layout", "Multiple Options", "Rental Potential"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Addis City Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Not Just Land. A Proper Residential Plan.</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Some estates sell land and leave the rest to chance. Addis City is different. Everything is structured around actual living — from plot sizes to building possibilities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Better Organization", desc: "Planned for community growth." },
                  { title: "Higher Property Value", desc: "Structured estates appreciate faster." },
                  { title: "Stronger Community", desc: "Designed for residential harmony." },
                  { title: "Long-Term Desirability", desc: "A place people want to live in." }
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
              <img src="https://images.unsplash.com/photo-1503387762-592dee58c160?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Estate Plan" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden md:block">
                <p className="text-secondary font-bold text-xl">FCDA C of O</p>
                <p className="text-white/80 text-sm">Fully Paid & Secure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Plots */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Choose Based on Your Lifestyle</h2>
            <p className="text-gray-600">All plots are within a properly demarcated and planned estate layout.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Location Advantage */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Close to Kabusa & Lokogoma", "Increasing Demand", "Infrastructure Growth", "Affordable Entry"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                    <TrendingUp className="text-secondary mb-3" size={24} />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Sheretti, Pyankasa Is a Smart Move</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                This axis is quietly becoming one of Abuja’s strongest residential expansion zones. Buying here now means entering before full price maturity.
              </p>
              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-xl">
                <p className="text-secondary font-bold italic">"Addis City gives you flexibility: build to live, rent, or invest for high-value returns."</p>
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
            <p className="text-gray-600">If you're thinking long-term, this location works.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Families planning to build", "Investors targeting rental income", "Developers building multiple units", "Diaspora buyers securing property", "Buyers upgrading properties"
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
            In Abuja real estate, documentation matters. Addis City comes with clear ownership documentation and a transparent allocation process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-primary p-8 rounded-2xl text-white">
              <h4 className="font-bold text-secondary mb-4">Documentation</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ FCDA C of O (fully paid)</li>
                <li>✔ Transparent allocation</li>
                <li>✔ Clear ownership docs</li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-primary">
              <h4 className="font-bold mb-4">Payment Options</h4>
              <ul className="space-y-3 text-sm text-primary/80">
                <li>• Outright payment</li>
                <li>• Structured payment plans</li>
                <li>• Easy reservation process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Secure Your Plot at Addis City Today</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Take the next step toward owning a structured, secure property in Abuja. Early buyers always have the advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={ADVISOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <MessageSquare size={20} />
              <span>Speak With Advisor</span>
            </a>
            <a 
              href={INSPECTION_LINK}
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
