import { Resend } from "resend";

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
    const cityState = sanitize(body.cityState?.trim());
    const hearAbout = sanitize(body.hearAbout?.trim());
    const description = sanitize(body.description?.trim());
    const experience = sanitize(body.experience?.trim());
    const hopeToGain = sanitize(body.hopeToGain?.trim());

    let challenges = "";
    if (Array.isArray(body.challenges)) {
      challenges = body.challenges.map((c: unknown) => sanitize(String(c))).join(", ");
    } else if (typeof body.challenges === "string") {
      challenges = sanitize(body.challenges);
    }

    // Server-side required field validation
    if (!fullName) {
      return res.status(400).json({ success: false, message: "Full Name is required." });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "A valid Email Address is required." });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: "Phone / WhatsApp Number is required." });
    }
    if (!description) {
      return res.status(400).json({ success: false, message: "Please select an option describing your status." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[ERROR] RESEND_API_KEY environment variable is not defined.");
      return res.status(500).json({
        success: false,
        message: "Server configuration issue: RESEND_API_KEY is not configured on the server. Please add it to your Vercel environment variables.",
      });
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.RECIPIENT_EMAIL || "Genadehomes@gmail.com";
    const senderEmail = process.env.SENDER_EMAIL || "Abuja Realtors Summit <onboarding@resend.dev>";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0F2A1D; color: #D4AF37; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 800; tracking: 1px;">ABUJA REALTORS SUCCESS LAUNCHPAD</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #ffffff;">Official Summit Registration Form Submission</p>
        </div>

        <div style="padding: 24px; color: #1a202c; line-height: 1.6;">
          <div style="background-color: #f8fafc; border-left: 4px solid #D4AF37; padding: 14px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px;">SECTION 1: Participant Contact Details</h3>
            <p style="margin: 4px 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="margin: 4px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #0F2A1D; text-decoration: underline;">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Phone / WhatsApp:</strong> ${phone}</p>
            <p style="margin: 4px 0;"><strong>City / State:</strong> ${cityState || "N/A"}</p>
            <p style="margin: 4px 0;"><strong>How Heard About Summit:</strong> ${hearAbout || "N/A"}</p>
          </div>

          <div style="background-color: #f8fafc; border-left: 4px solid #0F2A1D; padding: 14px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
            <h3 style="margin: 0 0 10px 0; color: #0F2A1D; font-size: 16px;">SECTION 2: Real Estate Background</h3>
            <p style="margin: 4px 0;"><strong>Profile / Status:</strong> ${description}</p>
            <p style="margin: 4px 0;"><strong>Years of Experience:</strong> ${experience || "N/A"}</p>
            <p style="margin: 4px 0;"><strong>Biggest Challenge(s):</strong> ${challenges || "None selected"}</p>
            <p style="margin: 4px 0;"><strong>Hope to Gain:</strong> ${hopeToGain || "N/A"}</p>
          </div>
        </div>

        <div style="background-color: #edf2f7; padding: 14px; text-align: center; font-size: 12px; color: #4a5568;">
          Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })} (WAT)
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: `New Summit Registration: ${fullName}`,
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
      message: "Registration submitted and email delivered successfully.",
      id: response.data?.id,
    });
  } catch (error: any) {
    console.error("[SERVER ERROR]", error);
    return res.status(500).json({
      success: false,
      message: "An internal error occurred while processing your registration. Please try again.",
    });
  }
}
