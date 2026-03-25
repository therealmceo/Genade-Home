import { motion } from "motion/react";
import { CheckCircle2, MapPin, Building2, ArrowRight, FileText, Calendar, MessageSquare, Home, TrendingUp } from "lucide-react";

export default function PeaceVille() {
  const WHATSAPP_LINK = "https://wa.me/+2348143999430";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Peace Ville Lokogoma" 
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
              Lokogoma, Abuja
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              PEACE VILLE — <span className="text-secondary">A Comfortable Home</span> in a Location That Already Works
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Peace Ville is designed for families and individuals who want a proper home in a well-established Abuja district — not somewhere you have to “wait to develop.”
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
              >
                <Calendar size={20} />
                <span>Schedule Inspection</span>
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
              "Located in Lokogoma", "Family-friendly", "Easy City Access", "Comfortable Living"
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Own a Home That Feels Right</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">3-Bedroom Block</span>
                  <span className="text-3xl font-serif font-bold text-secondary">₦70M <span className="text-sm font-sans text-primary/60">(Presale)</span></span>
                </div>
                <p className="text-gray-600 mb-6">
                  A well-designed residential unit built for comfort, practicality, and everyday living.
                </p>
                <ul className="space-y-3">
                  {[
                    "A ready residential structure", "Functional space for family living", "A home in a location with existing demand", "Long-term value without uncertainty"
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
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Family Home" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-2xl hidden md:block">
                <p className="text-primary font-bold text-xl">Presale Advantage</p>
                <p className="text-primary/80 text-sm">Better pricing & selection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lokogoma */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">One of Abuja’s Most Lived-In Residential Areas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Lokogoma has grown into a strong residential hub — not speculation, not projection. It’s already active.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MapPin />, title: "City Center Proximity", desc: "Close to the city center for easy commuting." },
              { icon: <TrendingUp />, title: "High Demand", desc: "Established community with high rental potential." },
              { icon: <Building2 />, title: "Infrastructure", desc: "Good road connectivity and established community." }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Families looking for a comfortable home", "Professionals working in Abuja", "Buyers upgrading from rented apartments", "Investors targeting rental income", "Diaspora buyers wanting a secure base"
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center space-x-4">
                    <div className="bg-primary text-secondary p-2 rounded-lg">
                      <Home size={20} />
                    </div>
                    <span className="font-bold text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Designed for Stability and Convenience</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                If your priority is a home that works for your daily life, Peace Ville fits. It’s not about hype; it’s about how your home actually feels day to day.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-lg text-secondary mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Quiet Atmosphere</h4>
                    <p className="text-sm text-gray-600">A peaceful residential environment for your family.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-lg text-secondary mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Accessible Routes</h4>
                    <p className="text-sm text-gray-600">Easy commuting to key parts of Abuja.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Value */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">A Smart Buy in a Mature Location</h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Unlike emerging areas, Lokogoma provides immediate usability, consistent tenant demand, stable property value, and strong resale potential. This is both a home and a reliable asset.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-primary mb-4">Trust & Security</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✔ Transparent purchase process</li>
                <li>✔ Verified documentation</li>
                <li>✔ Structured delivery</li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-2xl text-primary">
              <h4 className="font-bold mb-4">Presale Advantage</h4>
              <ul className="space-y-3 text-sm text-primary/80">
                <li>• Better pricing today</li>
                <li>• Early unit selection</li>
                <li>• Stronger long-term upside</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Secure Your Unit at Peace Ville Today</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            If you’re ready for a home in a location that already works, this is your move. As development progresses, prices typically adjust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <Calendar size={20} />
              <span>Schedule Inspection</span>
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all"
            >
              <MessageSquare size={20} />
              <span>Reserve Unit</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
