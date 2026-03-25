import { motion } from "motion/react";
import { CheckCircle2, MapPin, Building2, ArrowRight, FileText, Calendar, MessageSquare, ShieldCheck, Leaf, TrendingUp } from "lucide-react";

const plotOptions = [
  { size: "180sqm", price: "₦3.25M", build: "Perfect for a 2-bedroom semi-detached bungalow" },
  { size: "250sqm", price: "₦4.55M", build: "Ideal for a 3-bedroom fully detached bungalow" },
  { size: "500sqm", price: "₦7.80M", build: "Suitable for a 5-bedroom fully detached home or investment build" },
];

export default function TheVerdant() {
  const WHATSAPP_LINK = "https://wa.me/+2348143999430";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="The Verdant Kuje" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
              Kuje, Abuja
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              THE VERDANT — <span className="text-secondary">Affordable Living.</span> Smart Location. Peaceful Environment.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Own a well-positioned residential plot behind Centenary City, Kuje — one of Abuja’s fastest-growing corridors.
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
              "Strategic Kuje", "Growing Community", "Flexible Plot Sizes", "Ideal for Homeowners"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-primary font-bold">
                <CheckCircle2 className="text-secondary shrink-0" size={20} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Designed for Real Living</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The Verdant isn’t just land — it’s a community designed for comfortable, practical living. Here, you’re not buying into noise or congestion. You’re buying into space, calm, and future growth.
              </p>
              <div className="space-y-4">
                {[
                  "Quiet, residential atmosphere", "Accessible commuting to central Abuja", "Family-friendly environment", "Future development potential"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-1 rounded-full text-secondary">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Green Landscape" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl hidden md:block">
                <p className="text-primary font-bold text-xl">Peaceful Living</p>
                <p className="text-primary/80 text-sm">Space, calm, and growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Available Plot Sizes</h2>
            <p className="text-gray-600">All plots are properly laid out within a planned residential environment.</p>
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

      {/* Why Kuje */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Proximity to Centenary City", "Rapid Infrastructure Growth", "Increasing Housing Demand", "Lower Entry Pricing"
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center">
                    <TrendingUp className="text-secondary mb-3" size={24} />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Buyers Are Moving to Kuje</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Kuje is no longer “far.” It is quickly becoming one of Abuja’s most important residential expansion zones. The Verdant is positioned right within this growth path.
              </p>
              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-xl">
                <p className="text-secondary font-bold italic">"Buying here now means entering before full price maturity. Secure future value today."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Is The Verdant Right for You?</h2>
            <p className="text-gray-600">If you’ve been waiting for the “right entry point,” this is it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "First-time home buyers", "Young families", "Investors entering Abuja property", "Buyers looking for affordable land", "Anyone planning to build in 1–3 years"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center space-x-4">
                <div className="bg-primary text-secondary p-2 rounded-lg">
                  <Leaf size={20} />
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
            One of the biggest risks in Abuja real estate is unclear documentation. With Genade Homes, your purchase is structured and transparent.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-primary p-8 rounded-2xl text-white">
              <h4 className="font-bold text-secondary mb-4">Trust & Security</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ Verified ownership process</li>
                <li>✔ Clear allocation system</li>
                <li>✔ Professional documentation</li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-primary">
              <h4 className="font-bold mb-4">Payment Flexibility</h4>
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Secure Your Plot at The Verdant Today</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Take the next step toward owning property in Abuja. Early buyers always benefit the most. Waiting often means paying more later.
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
