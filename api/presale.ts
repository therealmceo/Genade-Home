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

    // 1. Identity & contact
    const fullName = sanitize(body.fullName?.trim());
    const email = sanitize(body.email?.trim());
    const phone = sanitize(body.phone?.trim());
    const country = sanitize(body.country?.trim());

    // 2. Investors Classification
    const socialHandle = sanitize(body.socialHandle?.trim());
    const investorType = sanitize(body.investorType?.trim());
    const investingOnBehalfOf = sanitize(body.investingOnBehalfOf?.trim());

    // 3. Investment details
    const investmentTier = sanitize(body.investmentTier?.trim());
    const paymentMethod = sanitize(body.paymentMethod?.trim());

    // 4. Compliance / KYC & Legal
    const agreeKyc = Boolean(body.agreeKyc);
    const acknowledgeNoSolicitation = Boolean(body.acknowledgeNoSolicitation);
    const readTermsSheet = Boolean(body.readTermsSheet);

    // 5. Optional information
    const hearAbout = sanitize(body.hearAbout?.trim());
    const referralCode = sanitize(body.referralCode?.trim());
    const notes = sanitize(body.notes?.trim());

    // Validation
    if (!fullName) {
      return res.status(400).json({ success: false, message: "Full Legal Name is required." });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "A valid Email Address is required." });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: "Phone Number with country code is required." });
    }
    if (!country) {
      return res.status(400).json({ success: false, message: "Country of Residence / Citizenship is required." });
    }
    if (!investorType) {
      return res.status(400).json({ success: false, message: "Please select your Investor Classification (Individual or Entity)." });
    }
    if (!investingOnBehalfOf) {
      return res.status(400).json({ success: false, message: "Please specify whether you are investing on behalf of yourself or others." });
    }
    if (!investmentTier) {
      return res.status(400).json({ success: false, message: "Please select an intended investment tier." });
    }
    if (!paymentMethod) {
      return res.status(400).json({ success: false, message: "Please select your preferred payment method." });
    }
    if (!agreeKyc) {
      return res.status(400).json({ success: false, message: "You must agree to complete KYC/AML verification if selected." });
    }
    if (!acknowledgeNoSolicitation) {
      return res.status(400).json({ success: false, message: "You must acknowledge that this is an interest form and does not guarantee allocation." });
    }
    if (!readTermsSheet) {
      return res.status(400).json({ success: false, message: "Please confirm that you have read the terms sheet." });
    }

    const apiKey = getEnv("RESEND_API_KEY") || getEnv("RESEND_KEY");
    if (!apiKey) {
      console.error("[ERROR] RESEND_API_KEY is not defined in process.env at runtime.");
      return res.status(500).json({
        success: false,
        message: "Server configuration issue: RESEND_API_KEY is not configured on the server. Please check your Vercel environment variables.",
      });
    }

    const resend = new Resend(apiKey);
    const recipientEmail = getEnv("RECIPIENT_EMAIL", "Genadehomes@gmail.com");
    const senderEmail = getEnv("SENDER_EMAIL", "Genade Pre-Presale <onboarding@resend.dev>");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0F2A1D; color: #D4AF37; padding: 26px; text-align: center;">
          <div style="display: inline-block; background-color: #D4AF37; color: #0F2A1D; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-bottom: 8px;">
            Confidential Pre-Presale Inquiry
          </div>
          <h2 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff;">GENADE PRE-PRESALE PACKAGE FORM</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #D4AF37;">High-Value Investor Interest & Allocation Request</p>
        </div>

        <div style="padding: 24px; color: #1a202c; line-height: 1.6;">
          
          <!-- 1. Identity & Contact -->
          <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 16px; margin-bottom: 18px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">1. Identity & Contact Details</h3>
            <p style="margin: 5px 0;"><strong>Full Legal Name:</strong> ${fullName}</p>
            <p style="margin: 5px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #0F2A1D; font-weight: bold;">${email}</a></p>
            <p style="margin: 5px 0;"><strong>Phone Number (with country code):</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Country of Residence / Citizenship:</strong> ${country}</p>
          </div>

          <!-- 2. Investor Classification -->
          <div style="background-color: #f8fafc; border-left: 4px solid #0F2A1D; padding: 16px; margin-bottom: 18px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">2. Investor Classification</h3>
            <p style="margin: 5px 0;"><strong>Instagram / LinkedIn Handle:</strong> ${socialHandle || "Not provided"}</p>
            <p style="margin: 5px 0;"><strong>Investor Entity Type:</strong> ${investorType}</p>
            <p style="margin: 5px 0;"><strong>Investing On Behalf Of:</strong> ${investingOnBehalfOf}</p>
          </div>

          <!-- 3. Investment Details -->
          <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 16px; margin-bottom: 18px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">3. Investment Details</h3>
            <p style="margin: 5px 0;"><strong>Intended Investment Amount:</strong> <span style="display: inline-block; background-color: #0F2A1D; color: #D4AF37; padding: 3px 10px; border-radius: 4px; font-weight: bold;">${investmentTier}</span></p>
            <p style="margin: 5px 0;"><strong>Preferred Payment Method:</strong> ${paymentMethod}</p>
          </div>

          <!-- 4. Compliance & Legal -->
          <div style="background-color: #f8fafc; border-left: 4px solid #0F2A1D; padding: 16px; margin-bottom: 18px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">4. Compliance, KYC & Legal Acknowledgments</h3>
            <p style="margin: 5px 0;"><strong>KYC/AML Verification Agreement:</strong> ${agreeKyc ? "Agreed and Verified" : "Not agreed"}</p>
            <p style="margin: 5px 0;"><strong>No-Solicitation / No-Guarantee Acknowledgment:</strong> ${acknowledgeNoSolicitation ? "Confirmed" : "Not confirmed"}</p>
            <p style="margin: 5px 0;"><strong>Terms Sheet Read Confirmation:</strong> ${readTermsSheet ? "Confirmed" : "Not confirmed"}</p>
          </div>

          <!-- 5. Additional Information -->
          <div style="background-color: #f8fafc; border-left: 4px solid #718096; padding: 16px; margin-bottom: 18px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">5. Additional Information</h3>
            <p style="margin: 5px 0;"><strong>How Heard About Project:</strong> ${hearAbout || "N/A"}</p>
            <p style="margin: 5px 0;"><strong>Referral Code / Source:</strong> ${referralCode || "None"}</p>
            <p style="margin: 5px 0;"><strong>Questions / Comments:</strong></p>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-top: 4px; font-style: italic;">
              ${notes ? notes.replace(/\n/g, "<br/>") : "None"}
            </div>
          </div>

        </div>

        <div style="background-color: #edf2f7; padding: 14px; text-align: center; font-size: 12px; color: #4a5568;">
          Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })} (WAT) • Genade Homes Pre-Presale Allocation Desk
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: `[PRE-PRESALE INTEREST] ${fullName} (${investmentTier})`,
      html: htmlContent,
      replyTo: email,
    });

    if (response.error) {
      console.error("[RESEND ERROR]", response.error);
      return res.status(500).json({
        success: false,
        message: response.error.message || "Failed to deliver email through Resend.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Pre-presale interest form submitted successfully.",
      id: response.data?.id,
    });
  } catch (error: any) {
    console.error("[SERVER ERROR]", error);
    return res.status(500).json({
      success: false,
      message: "An internal error occurred while processing your interest form. Please try again.",
    });
  }
}
