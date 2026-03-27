import { motion } from "motion/react";
import { CheckCircle2, Target, Shield, Users, ArrowRight, MapPin, Building2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <Shield className="text-secondary" size={32} />,
    title: "Integrity",
    description: "We say what we mean, and we follow through. No hidden agendas, just honest business."
  },
  {
    icon: <Lightbulb className="text-secondary" size={32} />,
    title: "Clarity",
    description: "No hidden processes. No confusion. We ensure you understand every step of your property journey."
  },
  {
    icon: <Users className="text-secondary" size={32} />,
    title: "Responsibility",
    description: "We develop with long-term impact in mind, ensuring our communities thrive for generations."
  },
  {
    icon: <Target className="text-secondary" size={32} />,
    title: "Excellence",
    description: "We aim for quality in every project we deliver, from planning to final execution."
  }
];

const locations = [
  "Airport Road axis", "Kuje", "Kabusa", "Lokogoma", "Galadimawa", "Apo Wassa"
];

export default function About() {
  const WHATSAPP_LINK = "https://wa.me/+2348143999430";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
          >
            Building Communities. Creating Value. <br className="hidden md:block" />
            <span className="text-secondary">Shaping the Future of Living in Abuja.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            At Genade Homes, we don’t just sell land or houses. We create structured residential communities in locations where people can live well today — and still benefit tomorrow.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                A Real Estate Company Built on Clarity and Purpose
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Genade Homes is a property development company focused on delivering well-planned residential estates across Abuja’s growth corridors.
                </p>
                <p className="font-semibold text-primary">
                  We exist for one simple reason: To help people own property they can trust — in locations that make sense.
                </p>
                <p>
                  In a market where many buyers have experienced uncertainty, we’ve built our approach around transparency, structure, and long-term value.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Office" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-2xl hidden md:block">
                <p className="text-primary font-bold text-xl">Transparency First</p>
                <p className="text-primary/80 text-sm">Our core operating principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">We Develop for Real Living</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work goes beyond allocating plots. We design communities that support actual life — not just ownership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Thoughtful Planning", desc: "Every estate is mapped out for optimal flow and utility." },
              { title: "Strategic Positioning", desc: "We select land in Abuja's most promising growth paths." },
              { title: "Residential Layouts", desc: "Designed for families and individuals, not random plotting." },
              { title: "Flexible Options", desc: "From entry-level plots to premium developments." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-secondary mb-4" size={24} />
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white/5 p-4 rounded-lg border border-white/10">
                    <MapPin className="text-secondary" size={18} />
                    <span className="text-sm font-medium">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why We Choose Our Locations Carefully</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Abuja doesn’t grow randomly. It expands through corridors — and understanding those corridors is everything. We don’t chase trends. We position early — where growth is already heading.
              </p>
              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-xl">
                <p className="text-secondary font-bold italic">"Strategic positioning is the difference between a plot of land and a valuable asset."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Built on Structure, Not Speculation</h2>
            <p className="text-gray-600">There’s a difference between selling land and building a real estate solution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Transparency", desc: "Every purchase process is clear and properly documented." },
              { title: "Strategic Thinking", desc: "We select locations based on real growth patterns." },
              { title: "Livable Design", desc: "Our estates are planned for residential use — not random plotting." },
              { title: "Long-Term Value", desc: "We prioritize future desirability, not short-term hype." }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="bg-primary text-secondary p-3 rounded-lg h-fit">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Values</h2>
            <p className="text-gray-600">What guides every decision we make at Genade Homes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl text-center shadow-sm border border-gray-100">
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h4 className="font-bold text-primary mb-3 text-lg">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Let’s Help You Secure the Right Property</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Whether you’re exploring your first purchase or expanding your portfolio, we’re here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-secondary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <span>Speak With Our Team</span>
              <ArrowRight size={20} />
            </a>
            <Link 
              to="/"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <span>Explore Properties</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
