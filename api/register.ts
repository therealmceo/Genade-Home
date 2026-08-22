import { Resend } from "resend";
import dotenv from "dotenv";

// Load local environment variables if available
dotenv.config();

/**
 * Safely retrieves an environment variable dynamically at runtime.
 * Bracket notation process.env[key] prevents static build-time inlining/replacement.
 */
function getEnv(key: string, defaultValue: string = ""): string {
  const possibleKeys = [
    key,
    `VITE_${key}`,
    `VERCEL_${key}`,
    `NEXT_PUBLIC_${key}`,
  ];

  for (const k of possibleKeys) {
    const val = process.env[k];
    if (val && typeof val === "string" && val.trim().length > 0) {
      return val.trim().replace(/^["']|["']$/g, "");
    }
  }

  return defaultValue;
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed. Please use POST.",
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    const fullName = sanitize(body.fullName?.trim());
    const email = sanitize(body.email?.trim());
    const phone = sanitize(body.phone?.trim());

    // Basic shared validation
    if (!fullName) {
      return res.status(400).json({ success: false, message: "Full Name is required." });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "A valid Email Address is required." });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: "Phone / WhatsApp Number is required." });
    }

    const apiKey = getEnv("RESEND_API_KEY") || getEnv("RESEND_KEY");
    const recipientEmail = getEnv("RECIPIENT_EMAIL", "Genadehomes@gmail.com");

    const isPresaleForm = body.formType === "presale" || !!body.investmentTier || !!body.investorType;

    let subject = "";
    let senderEmail = "";
    let htmlContent = "";

    if (isPresaleForm) {
      // Handle Pre-Presale Package Submission
      const country = sanitize(body.country?.trim());
      const socialHandle = sanitize(body.socialHandle?.trim());
      const investorType = sanitize(body.investorType?.trim());
      const investingOnBehalfOf = sanitize(body.investingOnBehalfOf?.trim());
      const investmentTier = sanitize(body.investmentTier?.trim());
      const paymentMethod = sanitize(body.paymentMethod?.trim());
      const agreeKyc = Boolean(body.agreeKyc);
      const acknowledgeNoSolicitation = Boolean(body.acknowledgeNoSolicitation);
      const readTermsSheet = Boolean(body.readTermsSheet);
      const hearAbout = sanitize(body.hearAbout?.trim());
      const referralCode = sanitize(body.referralCode?.trim());
      const notes = sanitize(body.notes?.trim());

      subject = `[PRE-PRESALE INTEREST] ${fullName} - ${investmentTier || "Allocation Request"}`;
      senderEmail = getEnv("SENDER_EMAIL", "Genade Pre-Presale <onboarding@resend.dev>");

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0F2A1D; color: #D4AF37; padding: 24px; text-align: center; border-bottom: 3px solid #D4AF37;">
            <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">GENADE HOMES PRE-PRESALE PACKAGE</h2>
            <p style="margin: 6px 0 0 0; font-size: 14px; color: #ffffff;">Confidential Investor Allocation & Expression of Interest</p>
          </div>

          <div style="padding: 28px; color: #1a202c; line-height: 1.6;">
            <!-- 1. Identity & Contact -->
            <div style="background-color: #f8fafc; border-left: 4px solid #0F2A1D; padding: 18px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">1. Identity & Contact</h3>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Full Legal Name:</strong> ${fullName}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #0F2A1D; text-decoration: underline;">${email}</a></p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Phone / WhatsApp:</strong> ${phone}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Country of Residence:</strong> ${country || "Not specified"}</p>
            </div>

            <!-- 2. Classification -->
            <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 18px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">2. Investor Classification</h3>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Investor Legal Structure:</strong> ${investorType || "Not specified"}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Investing On Behalf Of:</strong> ${investingOnBehalfOf || "Not specified"}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Social / LinkedIn Handle:</strong> ${socialHandle || "None provided"}</p>
            </div>

            <!-- 3. Investment Details -->
            <div style="background-color: #f8fafc; border-left: 4px solid #0F2A1D; padding: 18px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">3. Investment Allocation & Terms</h3>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Intended Investment Tier:</strong> <span style="background-color: #fef08a; color: #713f12; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${investmentTier || "Not selected"}</span></p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Preferred Payment Method:</strong> ${paymentMethod || "Not specified"}</p>
            </div>

            <!-- 4. Compliance & Acknowledgments -->
            <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 18px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">4. Compliance & Legal Confirmations</h3>
              <p style="margin: 6px 0; font-size: 13px;"><strong>KYC / AML Agreement:</strong> ${agreeKyc ? "Confirmed (Agreed to provide verification docs)" : "Pending"}</p>
              <p style="margin: 6px 0; font-size: 13px;"><strong>No Solicitation Acknowledgment:</strong> ${acknowledgeNoSolicitation ? "Confirmed (EOI only, bilateral agreement required)" : "Pending"}</p>
              <p style="margin: 6px 0; font-size: 13px;"><strong>Term Sheet Review:</strong> ${readTermsSheet ? "Confirmed (Reviewed preliminary guidelines)" : "Pending"}</p>
            </div>

            <!-- 5. Additional Context -->
            <div style="background-color: #f8fafc; border-left: 4px solid #0F2A1D; padding: 18px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">5. Additional Inquiries & Context</h3>
              <p style="margin: 6px 0; font-size: 14px;"><strong>How Heard About Opportunity:</strong> ${hearAbout || "Not specified"}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Referral / Partner Code:</strong> ${referralCode || "None"}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Inquiries / Special Notes:</strong><br><span style="white-space: pre-wrap; font-size: 13px; color: #334155;">${notes || "None provided"}</span></p>
            </div>
          </div>

          <div style="background-color: #edf2f7; padding: 14px; text-align: center; font-size: 12px; color: #4a5568; border-top: 1px solid #e2e8f0;">
            Transmitted on ${new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })} (WAT) to Genade Homes Allocation Desk
          </div>
        </div>
      `;
    } else {
      // Handle Standard Summit Registration
      const cityState = sanitize(body.cityState?.trim());
      const hearAbout = sanitize(body.hearAbout?.trim());

      subject = `New Summit Registration: ${fullName}`;
      senderEmail = getEnv("SENDER_EMAIL", "Abuja Realtors Summit <onboarding@resend.dev>");

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0F2A1D; color: #D4AF37; padding: 24px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">ABUJA REALTORS SUCCESS LAUNCHPAD</h2>
            <p style="margin: 6px 0 0 0; font-size: 14px; color: #ffffff;">Official Summit Registration Details</p>
          </div>

          <div style="padding: 24px; color: #1a202c; line-height: 1.6;">
            <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 18px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0F2A1D; font-size: 17px;">Participant Details</h3>
              <p style="margin: 6px 0; font-size: 15px;"><strong>Full Name:</strong> ${fullName}</p>
              <p style="margin: 6px 0; font-size: 15px;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #0F2A1D; text-decoration: underline;">${email}</a></p>
              <p style="margin: 6px 0; font-size: 15px;"><strong>Phone / WhatsApp:</strong> ${phone}</p>
              <p style="margin: 6px 0; font-size: 15px;"><strong>City / State:</strong> ${cityState || "N/A"}</p>
              <p style="margin: 6px 0; font-size: 15px;"><strong>How Heard About Summit:</strong> ${hearAbout || "N/A"}</p>
            </div>
          </div>

          <div style="background-color: #edf2f7; padding: 14px; text-align: center; font-size: 12px; color: #4a5568;">
            Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })} (WAT)
          </div>
        </div>
      `;
    }

    if (!apiKey) {
      console.warn("[WARN] RESEND_API_KEY is not defined. Processing submission in preview mode for:", fullName);
      return res.status(200).json({
        success: true,
        message: isPresaleForm ? "Pre-presale interest form submitted successfully." : "Summit registration recorded successfully.",
        id: "preview-" + Date.now(),
      });
    }

    const resend = new Resend(apiKey);
    const response = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject,
      html: htmlContent,
      replyTo: email,
    });

    if (response.error) {
      console.error("[RESEND ERROR]", response.error);
      return res.status(200).json({
        success: true,
        message: isPresaleForm ? "Pre-presale interest received." : "Summit registration received.",
        warning: response.error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: isPresaleForm 
        ? "Pre-presale interest submitted and delivered to executive allocation desk."
        : "Registration submitted and email delivered successfully.",
      id: response.data?.id,
    });
  } catch (error: any) {
    console.error("[SERVER ERROR]", error);
    return res.status(500).json({
      success: false,
      message: "An internal error occurred while processing your request. Please try again.",
    });
  }
}
