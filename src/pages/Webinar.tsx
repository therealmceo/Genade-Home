import { motion } from "motion/react";
import { CheckCircle2, XCircle, MessageSquare, ArrowRight, Play, Users, Clock, ShieldCheck, Star, MapPin, TrendingUp } from "lucide-react";
import { cn } from "@/src/lib/utils";

const WHATSAPP_LINK = "https://wa.me/+2348143999430";

const testimonials = [
  {
    quote: "I never saw myself as a ‘sales person’, but this system made it simple. I closed my first deal through my office contact.",
    author: "Chinedu",
    role: "Civil Servant"
  },
  {
    quote: "What shocked me is that I didn’t need to quit my job. I just started using what I already had — my network.",
    author: "Amina",
    role: "Banker"
  },
  {
    quote: "I’ve tried other side hustles before, but this is the first one that actually made sense in Nigeria.",
    author: "Tunde",
    role: "Engineer"
  }
];

export default function Webinar() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1920"
            alt="Professional at Work"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-8">
              How Smart 9–5 Professionals Are Quietly Building a <span className="text-secondary">Second Income Stream</span> From Real Estate — Without Quitting Their Jobs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how to turn your network into a consistent income machine using a proven real estate system (even if you’ve never sold anything before)
            </p>

            <div className="space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-secondary text-primary px-10 py-5 rounded-full font-black text-xl flex items-center justify-center space-x-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <Play size={24} fill="currentColor" />
                <span>JOIN FREE LIVE WEBINAR NOW</span>
              </a>
              <p className="text-sm text-secondary font-bold animate-pulse">
                Limited slots available — secure your spot instantly
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-secondary" size={18} />
                <span>100% Free Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-secondary" size={18} />
                <span>Online (Join from anywhere)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-secondary" size={18} />
                <span>Limited Seats Only</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relatable Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">You’ve done everything right…</h2>
            <div className="space-y-4 mb-10">
              {[
                "You got a good job",
                "You earn a steady salary",
                "You try to manage your money well"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 text-xl font-medium text-gray-700">
                  <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-2xl font-serif italic text-primary mb-8 text-center">
              “Salary alone won’t give me the life I want.”
            </p>
            <div className="bg-primary text-white p-8 rounded-2xl text-center">
              <p className="text-lg leading-relaxed">
                And the truth is… Most professionals don’t lack opportunity — They lack a clear, structured system that actually works in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What They Will Learn */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">💡 What You’ll Discover Inside This FREE Webinar</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The “Hidden Asset” You Already Have", desc: "Turn your workplace, contacts, and everyday interactions into income — without being pushy" },
              { title: "The Exact System We Use", desc: "How regular professionals are closing real estate deals without prior experience" },
              { title: "How to Start Without Capital", desc: "No buying land. No huge investment. Just leverage" },
              { title: "The Biggest Mistakes 9–5ers Make", desc: "Why most side hustles fail — and how to avoid it" },
              { title: "How to Build a Second Income Stream", desc: "Without quitting your job or disrupting your lifestyle" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-primary font-bold mb-6">
                  {i + 1}
                </div>
                <h4 className="font-bold text-primary text-xl mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Is For / Not For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For */}
            <div className="bg-green-50 p-12 rounded-[3rem] border border-green-100">
              <h3 className="font-serif text-3xl font-bold text-green-900 mb-8 flex items-center space-x-3">
                <span>👀 This Is Perfect For You If:</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "You are a working professional",
                  "You want a legitimate second income",
                  "You’re tired of scams and want something real",
                  "You have contacts but don’t know how to monetize them",
                  "You want to start without risking your savings"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-green-800 font-medium">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div className="bg-red-50 p-12 rounded-[3rem] border border-red-100">
              <h3 className="font-serif text-3xl font-bold text-red-900 mb-8 flex items-center space-x-3">
                <span>🚫 This Is NOT For You If:</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "You’re looking for get-rich-quick schemes",
                  "You’re not willing to learn or take action",
                  "You’re not serious about increasing your income"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-red-800 font-medium">
                    <XCircle className="text-red-600 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Positioning */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-8">This is not just another webinar.</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            This is a practical, Nigeria-tested system that shows you:
          </p>
          <div className="space-y-6 mb-12">
            {[
              "How to position yourself in real estate",
              "How to plug into an existing structure",
              "How to earn from deals you didn’t even own"
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center space-x-4 text-2xl font-bold text-secondary">
                <ArrowRight size={28} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-3xl font-serif italic">This is not theory. This is what is working right now.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">💬 What Others Are Saying</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative">
                <Star className="text-secondary absolute top-6 right-6 opacity-20" size={32} />
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

      {/* Urgency + Live Training */}
      <section className="py-24 bg-secondary text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-8">⚠️ This is a LIVE training — not a recording</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: MessageSquare, title: "Ask Questions" },
              { icon: TrendingUp, title: "Real-time Clarity" },
              { icon: Users, title: "Limited Slots" }
            ].map((item, i) => (
              <div key={i} className="bg-white/50 p-8 rounded-2xl border border-primary/10">
                <item.icon className="mx-auto mb-4" size={32} />
                <h4 className="font-bold text-xl">{item.title}</h4>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold">Limited slots to ensure quality interaction</p>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="font-serif text-4xl font-bold mb-8 text-secondary">🎁 When You Attend Live, You’ll Get:</h2>
              <ul className="space-y-6">
                {[
                  "A simple roadmap to your first deal",
                  "Access to the Genade Affiliate Program (with training)",
                  "Opportunity to plug into a working system"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 text-xl font-medium">
                    <CheckCircle2 className="text-secondary shrink-0" size={28} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8">You have absolutely nothing to lose.</h2>
          <p className="text-xl text-gray-600 mb-12">Just show up, learn, and decide if it’s for you.</p>

          <div className="space-y-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-primary text-secondary px-12 py-6 rounded-full font-black text-2xl flex items-center justify-center space-x-4 hover:scale-105 transition-transform shadow-2xl"
            >
              <MessageSquare size={32} />
              <span>CLICK HERE TO JOIN THE WHATSAPP GROUP NOW</span>
            </a>
            <p className="text-gray-500 font-medium">Instant access. Limited slots.</p>
          </div>

          <div className="mt-20 border-t border-gray-200 pt-12">
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">At the end of 2026…</h3>
            <p className="text-xl text-gray-600 mb-8">
              You’ll either still depend on your salary — Or you’ll be glad you took this step.
            </p>
            <p className="text-2xl font-bold text-primary">The difference? One decision.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
