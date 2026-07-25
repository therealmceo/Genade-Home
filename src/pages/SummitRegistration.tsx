import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  AlertCircle,
  Clock,
  Award,
  Users
} from "lucide-react";

export default function SummitRegistration() {
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/Fe5BZsqVteM9n9TzS5ybp0?s=cl&p=i&ilr=0&amv=1";
  const GENADE_EMAIL = "info@genadehome.com";

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityState, setCityState] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [hearAboutOther, setHearAboutOther] = useState("");

  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [challenges, setChallenges] = useState<string[]>([]);
  const [challengeOther, setChallengeOther] = useState("");
  const [hopeToGain, setHopeToGain] = useState("");

  // UI States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const hearAboutOptions = [
    "Instagram",
    "Facebook",
    "WhatsApp",
    "Referral from a friend/colleague",
    "Other"
  ];

  const descriptionOptions = [
    "Practicing real estate professional",
    "Aspiring realtor (just starting out)",
    "Considering real estate as a secondary source of income",
    "General public — exploring a career or wealth-building opportunity"
  ];

  const experienceOptions = [
    "Not applicable / just starting out",
    "Less than 1 year",
    "1–3 years",
    "4–7 years",
    "8+ years"
  ];

  const challengeOptions = [
    "Handling rejection",
    "Slow sales / inconsistent income",
    "Building a long-term, sustainable career",
    "Getting started / breaking into the industry",
    "Other"
  ];

  const handleChallengeToggle = (option: string) => {
    if (challenges.includes(option)) {
      setChallenges(challenges.filter((item) => item !== option));
    } else {
      setChallenges([...challenges, option]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Required fields validation (Q1, Q2, Q3, Q6)
    if (!fullName.trim()) {
      setValidationError("Please enter your Full Name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationError("Please enter a valid Email Address.");
      return;
    }
    if (!phone.trim()) {
      setValidationError("Please enter your Phone / WhatsApp Number.");
      return;
    }
    if (!description) {
      setValidationError("Please select which option best describes you.");
      return;
    }

    // Compose formatted text for email notification / mailto
    const finalHearAbout = hearAbout === "Other" && hearAboutOther.trim() 
      ? `Other (${hearAboutOther.trim()})` 
      : hearAbout;

    const finalChallenges = challenges.map(c => c === "Other" && challengeOther.trim() ? `Other (${challengeOther.trim()})` : c).join(", ");

    const emailSubject = encodeURIComponent(`New Summit Registration: ${fullName}`);
    const emailBody = encodeURIComponent(
      `ABUJA REALTORS SUCCESS LAUNCHPAD SUMMIT REGISTRATION\n\n` +
      `SECTION 1: YOUR DETAILS\n` +
      `1. Full Name: ${fullName}\n` +
      `2. Email Address: ${email}\n` +
      `3. Phone / WhatsApp Number: ${phone}\n` +
      `4. City / State: ${cityState || "N/A"}\n` +
      `5. How heard: ${finalHearAbout || "N/A"}\n\n` +
      `SECTION 2: YOUR REAL ESTATE JOURNEY\n` +
      `6. Describes you: ${description}\n` +
      `7. Experience: ${experience || "N/A"}\n` +
      `8. Challenges: ${finalChallenges || "None selected"}\n` +
      `9. Hope to gain: ${hopeToGain || "N/A"}\n\n` +
      `Submitted at: ${new Date().toLocaleString()}`
    );

    // Trigger mailto link silently in background or window
    const mailtoUrl = `mailto:${GENADE_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open mailto trigger
    window.location.href = mailtoUrl;

    // Show success screen
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Header Banner */}
      <div className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-secondary text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Sparkles size={14} /> Official Registration Form
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white mb-3 leading-tight">
              ABUJA REALTORS SUCCESS LAUNCHPAD
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-secondary font-bold text-lg md:text-xl">
              <span className="flex items-center gap-1.5 bg-white/10 px-4 py-1 rounded-full border border-white/10">
                <Award size={18} /> Summit
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-4 py-1 rounded-full border border-white/10 text-white">
                <Calendar size={18} className="text-secondary" /> Saturday, 4 October 2026
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-4 py-1 rounded-full border border-white/10 text-white">
                <MapPin size={18} className="text-secondary" /> Abuja, Nigeria
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-6 sm:p-10">
                <p className="text-gray-600 text-center text-sm md:text-base mb-8 pb-6 border-b border-gray-100">
                  Please complete the registration form below. Fields marked with an asterisk (<span className="text-red-500 font-bold">*</span>) are required.
                </p>

                {validationError && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-center gap-3 text-red-700 text-sm font-medium">
                    <AlertCircle className="shrink-0 text-red-500" size={20} />
                    <span>{validationError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* SECTION 1: Your Details */}
                  <div className="bg-gray-50/80 p-6 sm:p-8 rounded-xl border border-gray-200/80">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h2 className="text-xl font-serif font-bold text-primary">
                        SECTION 1: Your Details
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      Basic contact information so we can confirm your registration.
                    </p>

                    <div className="space-y-6">
                      {/* Q1: Full Name */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          1. Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Q2: Email Address */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          2. Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                          <input
                            type="email"
                            required
                            placeholder="e.g. name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Q3: Phone / WhatsApp Number */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          3. Phone / WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 08012345678"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Q4: City / State of Residence */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          4. City / State of Residence
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                          <input
                            type="text"
                            placeholder="e.g. Abuja, FCT"
                            value={cityState}
                            onChange={(e) => setCityState(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Q5: How did you hear about this event? */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          5. How did you hear about this event?
                        </label>
                        <div className="space-y-2.5">
                          {hearAboutOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                                hearAbout === opt 
                                  ? "bg-primary/5 border-primary text-primary font-medium shadow-sm" 
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="hearAbout"
                                value={opt}
                                checked={hearAbout === opt}
                                onChange={(e) => setHearAbout(e.target.value)}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <span className="text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                        {hearAbout === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify how you heard about us"
                            value={hearAboutOther}
                            onChange={(e) => setHearAboutOther(e.target.value)}
                            className="mt-3 w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Your Real Estate Journey */}
                  <div className="bg-gray-50/80 p-6 sm:p-8 rounded-xl border border-gray-200/80">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h2 className="text-xl font-serif font-bold text-primary">
                        SECTION 2: Your Real Estate Journey
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      This helps our speakers understand who is in the room and prepare content that speaks directly to you.
                    </p>

                    <div className="space-y-6">
                      {/* Q6: Which best describes you? */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          6. Which best describes you? <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2.5">
                          {descriptionOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-start gap-3 p-3.5 rounded-lg border transition-all cursor-pointer ${
                                description === opt 
                                  ? "bg-primary/5 border-primary text-primary font-medium shadow-sm" 
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="description"
                                required
                                value={opt}
                                checked={description === opt}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-4 h-4 mt-0.5 text-primary focus:ring-primary border-gray-300"
                              />
                              <span className="text-sm leading-snug">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q7: Years of Experience */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          7. If you are already practicing, how many years of experience do you have?
                        </label>
                        <div className="space-y-2.5">
                          {experienceOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                                experience === opt 
                                  ? "bg-primary/5 border-primary text-primary font-medium shadow-sm" 
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="experience"
                                value={opt}
                                checked={experience === opt}
                                onChange={(e) => setExperience(e.target.value)}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <span className="text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Q8: Biggest Challenge */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-1">
                          8. What is your biggest challenge right now?
                        </label>
                        <p className="text-xs text-gray-500 mb-3">(Select all that apply)</p>
                        <div className="space-y-2.5">
                          {challengeOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                                challenges.includes(opt) 
                                  ? "bg-primary/5 border-primary text-primary font-medium shadow-sm" 
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                value={opt}
                                checked={challenges.includes(opt)}
                                onChange={() => handleChallengeToggle(opt)}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                              />
                              <span className="text-sm">{opt}</span>
                            </label>
                          ))}
                        </div>
                        {challenges.includes("Other") && (
                          <input
                            type="text"
                            placeholder="Please describe your challenge"
                            value={challengeOther}
                            onChange={(e) => setChallengeOther(e.target.value)}
                            className="mt-3 w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                          />
                        )}
                      </div>

                      {/* Q9: What do you hope to gain */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          9. In one or two sentences, what do you hope to gain from this summit?
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Share your goals and expectations for the summit..."
                          value={hopeToGain}
                          onChange={(e) => setHopeToGain(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm resize-y"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-primary text-secondary hover:bg-opacity-95 font-serif font-bold text-lg py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send size={20} />
                      <span>Submit Registration</span>
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-3">
                      By submitting, your registration details will be logged and submitted directly to Genade Homes.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Post-Registration Confirmation View */
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-center p-8 sm:p-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 size={48} />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">
                Registration Successful!
              </h2>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200/80 mb-8 max-w-xl mx-auto text-left space-y-4">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                  Thank you for registering, in order not to miss out on any information about the event. Kindly join the WhatsApp group to stay updated.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Join now, WhatsApp group have a membership cap. Be part of the group now.
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <a
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-lg py-4 px-8 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <MessageSquare size={24} fill="currentColor" />
                  <span>Join Official WhatsApp Group</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-gray-500 underline hover:text-primary transition-colors block mx-auto pt-2"
                >
                  Edit or submit another response
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
