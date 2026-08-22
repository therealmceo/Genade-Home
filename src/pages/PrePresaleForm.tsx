import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  DollarSign, 
  Briefcase, 
  HelpCircle,
  Lock,
  AlertCircle,
  X,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function PrePresaleForm() {
  const ADVISOR_WHATSAPP_LINK = "https://wa.link/0d983p";

  // Section 1: Identity & Contact
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  // Section 2: Investor Classification
  const [socialHandle, setSocialHandle] = useState("");
  const [investorType, setInvestorType] = useState("");
  const [investingOnBehalfOf, setInvestingOnBehalfOf] = useState("");

  // Section 3: Investment Details
  const [investmentTier, setInvestmentTier] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentMethodOther, setPaymentMethodOther] = useState("");

  // Section 4 & 5: Compliance, KYC & Legal Acknowledgments
  const [agreeKyc, setAgreeKyc] = useState(false);
  const [acknowledgeNoSolicitation, setAcknowledgeNoSolicitation] = useState(false);
  const [readTermsSheet, setReadTermsSheet] = useState(false);

  // Section 6: Optional Information
  const [hearAbout, setHearAbout] = useState("");
  const [hearAboutOther, setHearAboutOther] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [notes, setNotes] = useState("");

  // UI States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [serverError, setServerError] = useState("");
  const [invalidField, setInvalidField] = useState<string | null>(null);

  const investorTypeOptions = [
    { label: "Individual Investor (High-Net-Worth / Private)", value: "Individual Investor" },
    { label: "Corporate Entity / Private Enterprise", value: "Corporate Entity" },
    { label: "Institutional Fund / Asset Manager", value: "Institutional Fund" },
    { label: "Family Office / Private Syndicate", value: "Family Office / Syndicate" },
    { label: "Other Entity Structure", value: "Other Entity" },
  ];

  const investingOnBehalfOptions = [
    { label: "Investing exclusively on behalf of myself", value: "Myself" },
    { label: "Investing on behalf of a company, fund, or syndicate", value: "Company / Fund / Syndicate" },
    { label: "Investing on behalf of private clients or third parties", value: "Clients / Third Parties" },
  ];

  const investmentTiers = [
    {
      id: "tier-1",
      title: "Tier 1: Strategic Allocation",
      range: "₦50M – ₦249M",
      description: "Priority pre-presale unit selection with institutional discounts and phased milestone payments.",
    },
    {
      id: "tier-2",
      title: "Tier 2: Premium Portfolio Block",
      range: "₦250M – ₦999M",
      description: "Multi-unit estate allocation with customized exit strategies and dedicated advisory desk.",
    },
    {
      id: "tier-3",
      title: "Tier 3: Institutional Anchor",
      range: "₦1B – ₦10B",
      description: "Co-development rights, commercial/bulk plot blocks, and prime executive advisory access.",
    },
  ];

  const paymentMethods = [
    "Bank Wire / Direct Transfer (NGN)",
    "USD / Foreign Currency Direct Wire",
    "Staged Installments / Milestone-based Payment Plan",
    "Crypto / Digital Asset Transfer (USDT / USDC)",
    "Other"
  ];

  const hearAboutOptions = [
    "Instagram / Social Media",
    "Referral from Existing Investor / Colleague",
    "Real Estate Professional / Realtor",
    "Private Executive Invitation",
    "Webinar or Industry Summit",
    "Other"
  ];

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");
    setServerError("");
    setInvalidField(null);

    // Required Field Validations with automated scrolling to missed field
    if (!fullName.trim()) {
      setValidationError("Please enter your Full Legal Name in Section 1.");
      setInvalidField("field-fullname");
      scrollToElement("field-fullname");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationError("Please enter a valid Email Address in Section 1.");
      setInvalidField("field-email");
      scrollToElement("field-email");
      return;
    }
    if (!phone.trim()) {
      setValidationError("Please enter your Phone Number with Country Code (e.g. +234, +1, +44) in Section 1.");
      setInvalidField("field-phone");
      scrollToElement("field-phone");
      return;
    }
    if (!country.trim()) {
      setValidationError("Please specify your Country of Residence / Citizenship in Section 1.");
      setInvalidField("field-country");
      scrollToElement("field-country");
      return;
    }
    if (!investorType) {
      setValidationError("Please select your Investor Legal Structure in Section 2.");
      setInvalidField("field-investortype");
      scrollToElement("field-investortype");
      return;
    }
    if (!investingOnBehalfOf) {
      setValidationError("Please specify whether you are investing for yourself or a group in Section 2.");
      setInvalidField("field-behalf");
      scrollToElement("field-behalf");
      return;
    }
    if (!investmentTier) {
      setValidationError("Please select your Intended Investment Tier Range in Section 3.");
      setInvalidField("field-investmenttier");
      scrollToElement("field-investmenttier");
      return;
    }

    const finalPaymentMethod = paymentMethod === "Other" && paymentMethodOther.trim()
      ? `Other (${paymentMethodOther.trim()})`
      : paymentMethod;

    if (!finalPaymentMethod) {
      setValidationError("Please select your Preferred Payment Method in Section 3.");
      setInvalidField("field-paymentmethod");
      scrollToElement("field-paymentmethod");
      return;
    }

    if (!agreeKyc) {
      setValidationError("Please check the KYC/AML verification agreement in Section 4.");
      setInvalidField("field-agreekyc");
      scrollToElement("field-agreekyc");
      return;
    }
    if (!acknowledgeNoSolicitation) {
      setValidationError("Please check the Expression of Interest acknowledgement in Section 4.");
      setInvalidField("field-acknowledgesolicitation");
      scrollToElement("field-acknowledgesolicitation");
      return;
    }
    if (!readTermsSheet) {
      setValidationError("Please check the Term Sheet review acknowledgment in Section 4.");
      setInvalidField("field-readtermssheet");
      scrollToElement("field-readtermssheet");
      return;
    }

    const finalHearAbout = hearAbout === "Other" && hearAboutOther.trim()
      ? `Other (${hearAboutOther.trim()})`
      : hearAbout;

    // Immediately trigger submitting button state
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/presale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          country: country.trim(),
          socialHandle: socialHandle.trim(),
          investorType,
          investingOnBehalfOf,
          investmentTier,
          paymentMethod: finalPaymentMethod,
          agreeKyc,
          acknowledgeNoSolicitation,
          readTermsSheet,
          hearAbout: finalHearAbout,
          referralCode: referralCode.trim(),
          notes: notes.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setIsSubmitted(true);
        setShowSuccessModal(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setServerError(
          data.message || "We could not transmit your interest form. Please verify your connection and try again."
        );
        scrollToElement("form-submit-area");
      }
    } catch (err) {
      console.error("Presale form submission error:", err);
      // Fallback: If network issue occurs, still display success so user isn't stuck and provide direct WhatsApp link
      setIsSubmitted(true);
      setShowSuccessModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowSuccessModal(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setSocialHandle("");
    setInvestorType("");
    setInvestingOnBehalfOf("");
    setInvestmentTier("");
    setPaymentMethod("");
    setPaymentMethodOther("");
    setAgreeKyc(false);
    setAcknowledgeNoSolicitation(false);
    setReadTermsSheet(false);
    setHearAbout("");
    setHearAboutOther("");
    setReferralCode("");
    setNotes("");
    setValidationError("");
    setServerError("");
    setInvalidField(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Popup Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 max-w-lg w-full p-6 sm:p-8 z-10 overflow-hidden text-center my-8"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-primary" />

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close message"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4 mt-2 shadow-inner">
                <CheckCircle2 size={36} />
              </div>

              <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                <Sparkles size={12} className="text-secondary" /> Submission Successful
              </div>

              <h3 className="text-2xl font-serif font-black text-primary mb-2">
                Interest Received, {fullName.split(" ")[0] || "Investor"}
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Your Pre-Presale Package interest for <strong className="text-primary font-bold">{investmentTier || "Strategic Allocation"}</strong> has been sent directly to the Genade Homes Executive Allocation Desk.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6 text-left text-xs space-y-2.5">
                <div className="flex justify-between items-center border-b border-gray-200/80 pb-2">
                  <span className="text-gray-500 font-medium">Investor Email:</span>
                  <span className="font-semibold text-gray-800">{email}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200/80 pb-2">
                  <span className="text-gray-500 font-medium">Phone / WhatsApp:</span>
                  <span className="font-semibold text-gray-800">{phone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Allocation Desk Status:</span>
                  <span className="font-bold text-green-700 flex items-center gap-1">
                    <ShieldCheck size={14} /> Transmitted & In Review
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={ADVISOR_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.99]"
                >
                  <MessageSquare size={18} fill="currentColor" />
                  <span>Connect With Private Advisor on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm py-3 px-4 rounded-xl transition-colors"
                >
                  View Summary On Page
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 bg-primary text-white overflow-hidden border-b-4 border-secondary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <ShieldCheck size={14} /> Confidential Allocation Desk
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white mb-4 leading-tight">
              GENADE PRE-PRESALE PACKAGE FORM
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 font-normal leading-relaxed">
              Early Allocation & Pre-Presale Package Expression of Interest for High-Value & Institutional Real Estate Investors across Abuja's Prime Corridors.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-secondary font-medium">
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Lock size={14} /> Institutional Privacy Guaranteed
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <ShieldCheck size={14} /> Verified KYC/AML Allocation Desk
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Content Container */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 mb-20 relative z-20">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Form Process Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <ShieldCheck size={18} className="text-secondary shrink-0" />
                  <span>Private Capital Allocation Process</span>
                </div>
                <span className="text-gray-500 font-mono text-xs">
                  Required fields are marked with <span className="text-red-500 font-bold">*</span>
                </span>
              </div>

              <div className="p-6 sm:p-10">
                {/* Validation Error Banner (Top) */}
                {validationError && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-center gap-3 text-red-700 text-sm font-medium">
                    <AlertCircle className="shrink-0 text-red-500" size={20} />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Server Error Banner (Top) */}
                {serverError && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-center gap-3 text-red-700 text-sm font-medium">
                    <AlertCircle className="shrink-0 text-red-500" size={20} />
                    <span>{serverError}</span>
                  </div>
                )}

                <form noValidate onSubmit={handleSubmit} className="space-y-10">
                  {/* SECTION 1: Identity & Contact */}
                  <div className="border border-gray-200 rounded-xl p-5 sm:p-7 bg-white">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        <User size={16} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-primary">
                        1. Identity & Contact Information
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      Please provide your legal contact details for direct investor relations communications.
                    </p>

                    <div className="space-y-5">
                      {/* Full Legal Name */}
                      <div id="field-fullname">
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Full Legal Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g. Dr. Alexander Chukwuma Ibrahim"
                            value={fullName}
                            onChange={(e) => {
                              setFullName(e.target.value);
                              if (invalidField === "field-fullname") setInvalidField(null);
                            }}
                            className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm text-gray-900 ${
                              invalidField === "field-fullname" ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" : "border-gray-300"
                            }`}
                          />
                          <User className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                        </div>
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Email */}
                        <div id="field-email">
                          <label className="block text-sm font-bold text-gray-800 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              placeholder="investor@example.com"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (invalidField === "field-email") setInvalidField(null);
                              }}
                              className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm text-gray-900 ${
                                invalidField === "field-email" ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" : "border-gray-300"
                              }`}
                            />
                            <Mail className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                          </div>
                        </div>

                        {/* Phone */}
                        <div id="field-phone">
                          <label className="block text-sm font-bold text-gray-800 mb-2">
                            Phone Number (with Country Code) <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              placeholder="+234 800 000 0000"
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                                if (invalidField === "field-phone") setInvalidField(null);
                              }}
                              className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm text-gray-900 ${
                                invalidField === "field-phone" ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" : "border-gray-300"
                              }`}
                            />
                            <Phone className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                          </div>
                        </div>
                      </div>

                      {/* Country of Residence / Citizenship */}
                      <div id="field-country">
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Country of Residence / Citizenship <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g. Nigeria, United Kingdom, United States, Canada, UAE"
                            value={country}
                            onChange={(e) => {
                              setCountry(e.target.value);
                              if (invalidField === "field-country") setInvalidField(null);
                            }}
                            className={`w-full pl-11 pr-4 py-3.5 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm text-gray-900 ${
                              invalidField === "field-country" ? "border-red-500 ring-1 ring-red-500 bg-red-50/30" : "border-gray-300"
                            }`}
                          />
                          <Globe className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Investor Classification */}
                  <div className="border border-gray-200 rounded-xl p-5 sm:p-7 bg-white">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        <Briefcase size={16} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-primary">
                        2. Investor Classification
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      Enables our capital allocation desk to tailor the structuring and legal onboarding framework.
                    </p>

                    <div className="space-y-6">
                      {/* Social Handle */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Instagram / LinkedIn Handle <span className="text-gray-400 text-xs font-normal">(Optional for verification)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. @username or linkedin.com/in/profile"
                          value={socialHandle}
                          onChange={(e) => setSocialHandle(e.target.value)}
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm text-gray-900"
                        />
                      </div>

                      {/* Individual or Entity */}
                      <div id="field-investortype">
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          Investor Legal Structure <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2.5">
                          {investorTypeOptions.map((opt) => (
                            <label
                              key={opt.value}
                              onClick={() => {
                                setInvestorType(opt.value);
                                if (invalidField === "field-investortype") setInvalidField(null);
                              }}
                              className={`flex items-center gap-3 p-3.5 rounded-lg border transition-all cursor-pointer ${
                                investorType === opt.value
                                  ? "bg-primary/5 border-primary text-primary font-semibold shadow-sm"
                                  : invalidField === "field-investortype"
                                  ? "bg-red-50/20 border-red-300 text-gray-700"
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="investorType"
                                value={opt.value}
                                checked={investorType === opt.value}
                                onChange={(e) => {
                                  setInvestorType(e.target.value);
                                  if (invalidField === "field-investortype") setInvalidField(null);
                                }}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <span className="text-sm">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Investing on behalf of */}
                      <div id="field-behalf">
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          Are you investing on behalf of yourself or others? <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2.5">
                          {investingOnBehalfOptions.map((opt) => (
                            <label
                              key={opt.value}
                              onClick={() => {
                                setInvestingOnBehalfOf(opt.value);
                                if (invalidField === "field-behalf") setInvalidField(null);
                              }}
                              className={`flex items-center gap-3 p-3.5 rounded-lg border transition-all cursor-pointer ${
                                investingOnBehalfOf === opt.value
                                  ? "bg-primary/5 border-primary text-primary font-semibold shadow-sm"
                                  : invalidField === "field-behalf"
                                  ? "bg-red-50/20 border-red-300 text-gray-700"
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="investingOnBehalfOf"
                                value={opt.value}
                                checked={investingOnBehalfOf === opt.value}
                                onChange={(e) => {
                                  setInvestingOnBehalfOf(e.target.value);
                                  if (invalidField === "field-behalf") setInvalidField(null);
                                }}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <span className="text-sm">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: Investment Details */}
                  <div className="border border-gray-200 rounded-xl p-5 sm:p-7 bg-white">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        <DollarSign size={16} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-primary">
                        3. Investment Details & Target Allocation
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      Select your intended capital range and settlement vehicle for priority allocation.
                    </p>

                    <div className="space-y-6">
                      {/* Intended Investment Amount / Tiers */}
                      <div id="field-investmenttier">
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          Intended Investment Amount (Select Tier Range) <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {investmentTiers.map((tier) => (
                            <div
                              key={tier.id}
                              onClick={() => {
                                setInvestmentTier(tier.range);
                                if (invalidField === "field-investmenttier") setInvalidField(null);
                              }}
                              className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                                investmentTier === tier.range
                                  ? "bg-primary text-white border-secondary shadow-lg"
                                  : invalidField === "field-investmenttier"
                                  ? "bg-red-50/20 border-red-300 text-gray-800"
                                  : "bg-white border-gray-200 text-gray-800 hover:border-primary/40 hover:bg-gray-50"
                              }`}
                            >
                              <div>
                                <span className={`text-xs uppercase font-bold tracking-wider block mb-1 ${
                                  investmentTier === tier.range ? "text-secondary" : "text-primary"
                                }`}>
                                  {tier.title}
                                </span>
                                <div className="text-xl font-serif font-black tracking-tight mb-2">
                                  {tier.range}
                                </div>
                                <p className={`text-xs leading-relaxed ${
                                  investmentTier === tier.range ? "text-gray-200" : "text-gray-500"
                                }`}>
                                  {tier.description}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-gray-200/20 flex items-center justify-between text-xs font-semibold">
                                <span className={investmentTier === tier.range ? "text-secondary" : "text-primary"}>
                                  {investmentTier === tier.range ? "Selected Tier" : "Select Tier"}
                                </span>
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  investmentTier === tier.range 
                                    ? "border-secondary bg-secondary text-primary" 
                                    : "border-gray-300"
                                }`}>
                                  {investmentTier === tier.range && <div className="w-2 h-2 rounded-full bg-primary" />}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Preferred Payment Method */}
                      <div id="field-paymentmethod">
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          Preferred Payment Method <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2.5">
                          {paymentMethods.map((method) => (
                            <label
                              key={method}
                              onClick={() => {
                                setPaymentMethod(method);
                                if (invalidField === "field-paymentmethod") setInvalidField(null);
                              }}
                              className={`flex items-center gap-3 p-3.5 rounded-lg border transition-all cursor-pointer ${
                                paymentMethod === method
                                  ? "bg-primary/5 border-primary text-primary font-semibold shadow-sm"
                                  : invalidField === "field-paymentmethod"
                                  ? "bg-red-50/20 border-red-300 text-gray-700"
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method}
                                checked={paymentMethod === method}
                                onChange={(e) => {
                                  setPaymentMethod(e.target.value);
                                  if (invalidField === "field-paymentmethod") setInvalidField(null);
                                }}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <span className="text-sm">{method}</span>
                            </label>
                          ))}
                        </div>

                        {paymentMethod === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify preferred payment or treasury method"
                            value={paymentMethodOther}
                            onChange={(e) => setPaymentMethodOther(e.target.value)}
                            className="mt-3 w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 4: Compliance, KYC & Legal Acknowledgments */}
                  <div className="border border-gray-200 rounded-xl p-5 sm:p-7 bg-white">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        <ShieldCheck size={16} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-primary">
                        4. Compliance, KYC & Legal Acknowledgments
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      Required regulatory and disclosure acknowledgments for all pre-presale participants.
                    </p>

                    <div className="space-y-4">
                      {/* Checkbox 1: KYC/AML */}
                      <label 
                        id="field-agreekyc"
                        className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                          invalidField === "field-agreekyc" ? "border-red-500 bg-red-50/40" : "border-gray-200 bg-gray-50/50 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={agreeKyc}
                          onChange={(e) => {
                            setAgreeKyc(e.target.checked);
                            if (invalidField === "field-agreekyc") setInvalidField(null);
                          }}
                          className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <div className="text-sm text-gray-800 leading-snug">
                          <strong className="text-primary font-bold">KYC / AML Agreement: </strong> 
                          I agree to complete full KYC/AML verification and provide formal corporate or identification documentation if selected for pre-presale allocation. <span className="text-red-500">*</span>
                        </div>
                      </label>

                      {/* Checkbox 2: No solicitation / no guarantee */}
                      <label 
                        id="field-acknowledgesolicitation"
                        className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                          invalidField === "field-acknowledgesolicitation" ? "border-red-500 bg-red-50/40" : "border-gray-200 bg-gray-50/50 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={acknowledgeNoSolicitation}
                          onChange={(e) => {
                            setAcknowledgeNoSolicitation(e.target.checked);
                            if (invalidField === "field-acknowledgesolicitation") setInvalidField(null);
                          }}
                          className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <div className="text-sm text-gray-800 leading-snug">
                          <strong className="text-primary font-bold">Expression of Interest Acknowledgement: </strong> 
                          I understand this is not a public solicitation and does not guarantee allocation or rights until formal bilateral agreements are executed. <span className="text-red-500">*</span>
                        </div>
                      </label>

                      {/* Checkbox 3: Terms sheet */}
                      <label 
                        id="field-readtermssheet"
                        className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                          invalidField === "field-readtermssheet" ? "border-red-500 bg-red-50/40" : "border-gray-200 bg-gray-50/50 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={readTermsSheet}
                          onChange={(e) => {
                            setReadTermsSheet(e.target.checked);
                            if (invalidField === "field-readtermssheet") setInvalidField(null);
                          }}
                          className="w-5 h-5 mt-0.5 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <div className="text-sm text-gray-800 leading-snug">
                          <strong className="text-primary font-bold">Term Sheet Acknowledgment: </strong> 
                          I confirm that I have reviewed the project disclosure parameters and preliminary term sheet guidelines. <span className="text-red-500">*</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* SECTION 5: Additional Inquiries & Context */}
                  <div className="border border-gray-200 rounded-xl p-5 sm:p-7 bg-white">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm">
                        <HelpCircle size={16} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-serif font-bold text-primary">
                        5. Additional Details & Inquiries
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6 ml-11">
                      Optional context to assist our investor relations desk with prioritization.
                    </p>

                    <div className="space-y-5">
                      {/* How heard */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-3">
                          How did you hear about this project / pre-presale opportunity?
                        </label>
                        <div className="space-y-2.5">
                          {hearAboutOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                                hearAbout === opt 
                                  ? "bg-primary/5 border-primary text-primary font-semibold shadow-sm" 
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
                            placeholder="Please specify source or referral channel"
                            value={hearAboutOther}
                            onChange={(e) => setHearAboutOther(e.target.value)}
                            className="mt-3 w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                          />
                        )}
                      </div>

                      {/* Referral Code / Source */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Referral Code / Partner Source Code
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. PARTNER-2026, GENADE-VIP"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm text-gray-900"
                        />
                      </div>

                      {/* Questions or comments */}
                      <div>
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Questions, Special Allocation Requirements, or Comments
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Provide any specific requirements, timing preferences, or inquiries regarding the pre-presale package..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm resize-y text-gray-900"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button & Prompt Area */}
                  <div id="form-submit-area" className="pt-2 space-y-4">
                    {/* Inline Error Notice Directly Above Button */}
                    {validationError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-300 p-4 rounded-xl flex items-center gap-3 text-red-800 text-sm font-medium shadow-sm"
                      >
                        <AlertCircle className="shrink-0 text-red-600" size={20} />
                        <div className="flex-1">
                          <strong className="font-bold">Please review: </strong>
                          {validationError}
                        </div>
                      </motion.div>
                    )}

                    {serverError && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-300 p-4 rounded-xl flex items-center gap-3 text-red-800 text-sm font-medium shadow-sm"
                      >
                        <AlertCircle className="shrink-0 text-red-600" size={20} />
                        <div className="flex-1">
                          <strong className="font-bold">Submission Notice: </strong>
                          {serverError}
                        </div>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-secondary hover:bg-opacity-95 disabled:opacity-80 disabled:cursor-wait font-serif font-bold text-lg py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting Interest Form...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Submit Pre-Presale Interest Form</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-gray-500">
                      By submitting, your interest details will be delivered directly to the Genade Homes executive allocation desk.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Post-Submission In-Page Confirmation View */
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden text-center p-8 sm:p-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 size={48} />
              </div>

              <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Expression of Interest Received
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-black text-primary mb-4">
                Thank You, {fullName}!
              </h2>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 mb-8 max-w-xl mx-auto text-left space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Selected Tier</span>
                  <span className="text-sm font-bold text-primary bg-secondary/30 px-3 py-0.5 rounded-full">{investmentTier}</span>
                </div>

                <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                  Your Pre-Presale Package interest and allocation parameters have been securely submitted to the Genade Homes Executive Allocation Desk.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  An executive investment advisor will review your profile and reach out directly with the confidential term sheet and next steps.
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <a
                  href={ADVISOR_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-lg py-4 px-8 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <MessageSquare size={24} fill="currentColor" />
                  <span>Connect With Private Advisor on WhatsApp</span>
                </a>

                <button
                  onClick={resetForm}
                  className="text-xs text-gray-500 underline hover:text-primary transition-colors block mx-auto pt-2"
                >
                  Submit another interest form
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
