import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, EY_BADGES, EY_AWARDS, SKILL_CATEGORIES } from "./src/data/resumeData";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health Check Endpoints
  app.get(["/api/health", "/healthz", "/_health"], (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Strategy Assistant endpoint using Gemini
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: "Message is required." });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback simulated intelligent response if GEMINI_API_KEY is not configured yet
        const text = getSimulatedAiResponse(message);
        res.json({ reply: text, simulated: true });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are "Tal.AI", the custom AI Design & Career Twin representing Talvinder Singh, Senior Graphic Designer (Associate Design Manager at Ernst & Young EY).
Your mission is to answer recruiters, hiring managers, and art directors about Talvinder's 15+ years of Graphic Design craftsmanship, Digital Design, Social Media Creatives & Marketing Collaterals, Corporate Identity (CI/CD), Print Production & Prepress, Motion Graphics, EU Blue Card eligibility, and immediate relocation readiness in a professional, confident, and persuasive tone.

Here are facts about Talvinder Singh:
- Name: ${PERSONAL_INFO.name}
- Target Role: Senior Graphic Designer / Lead Graphic Designer / Graphic Design Lead.
- Current Role: Senior Graphic Designer (Associate Design Manager title) at Ernst & Young (EY) since June 2017. Prior senior graphic design roles at WNS Global Services (Tesco account), Havells India, and Orient Electric.
- Location: New Delhi, India. Available for immediate relocation (Berlin, Munich, Frankfurt, Hamburg, Düsseldorf, Stuttgart, Cologne, etc. / Hybrid / Onsite / Remote).
- Work Authorization: Fully eligible for the EU Blue Card. Holds recognized university degrees & 15+ years verifiable senior design industry record.
- Languages: English (Fluent / C2 Business Level), German (A1/A2 Basic, actively learning).
- Core Craft & Skills:
  * Digital Design, Social Media & Marketing Collaterals: High-impact multi-format social ad suites (Meta, LinkedIn, YouTube), GDN display banners, executive pitch decks (PowerPoint), responsive landing visuals, Figma asset systems.
  * Corporate Identity (CI/CD): Brand design manuals, typography systems, editorial layout (InDesign), annual reports, whitepapers, executive presentations.
  * Print Production & Prepress: PDF/X-4 compliance, CMYK/Pantone (PMS) color separation, packaging die-lines, bleed, trapping, large-format OOH billboards, trade fair / exhibition booth displays, POS/POP displays.
  * Motion Graphics & Video: After Effects 2D animation, kinetic typography, Premiere Pro video editing, audio mixing.
  * AI Acceleration: Adobe Firefly, Photoshop Generative AI, prompt workflows accelerating creative asset generation 3x-5x.
- Software Arsenal: Adobe InDesign, Adobe Illustrator, Adobe Photoshop, Adobe Creative Cloud, Figma, After Effects, Premiere Pro, PowerPoint, SharePoint.
- EY Honors: 4x consecutive 'Achiever Extraordinaire Award' (2023, 2024, 2025, 2026), 4 EY Bronze Badges (AI Engineering 2025, Cybersecurity 2024, Innovation 2021, Digital 2021).
- Contact: Email ${PERSONAL_INFO.email}, Phone ${PERSONAL_INFO.phone}.

Keep your answers concise, structured with bullet points where appropriate, and highlight his suitability for graphic design, marketing collateral design, in-house creative departments, brand identity, and publication roles.`;

      const contents = [];
      
      // Append brief context history if provided
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history.slice(-6)) {
          contents.push({
            role: item.sender === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }]
          });
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const aiResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = aiResponse.text || "I am glad to assist you with information regarding Talvinder's profile!";
      res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Error in /api/chat:", err);
      // Graceful fallback
      const fallbackText = getSimulatedAiResponse(req.body?.message || "");
      res.json({ reply: fallbackText, fallback: true });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(`Received contact message from ${name} (${email}): [${subject}] ${message}`);
    res.json({
      success: true,
      message: `Thank you ${name}! Your message has been routed to Talvinder Singh (${PERSONAL_INFO.email}). He will reply shortly.`
    });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  const handleShutdown = () => {
    console.log("Shutting down server gracefully...");
    server.close(() => {
      process.exit(0);
    });
  };

  process.on("SIGTERM", handleShutdown);
  process.on("SIGINT", handleShutdown);
}

function getSimulatedAiResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("germany") || q.includes("blue card") || q.includes("relocat") || q.includes("europe")) {
    return "Talvinder is prepared for immediate relocation! He holds a recognized University Degree (Bachelor of Arts from Delhi University + Arena Animation Graphic Design Diploma) and is fully eligible for fast-track EU Blue Card skilled employment. He communicates fluently in English (C2) and is actively developing German language proficiency.";
  }
  if (q.includes("digital") || q.includes("social") || q.includes("marketing") || q.includes("ad") || q.includes("figma")) {
    return "Talvinder excels in high-impact Digital Graphic Design, Social Media Creatives, and Marketing Collaterals. He creates multi-format social graphic suites for Meta (Instagram/Facebook), LinkedIn, and Google Display Network, develops promotional web/landing assets in Figma, and designs executive C-suite pitch decks (PowerPoint).";
  }
  if (q.includes("print") || q.includes("prepress") || q.includes("production") || q.includes("indesign") || q.includes("packaging")) {
    return "Talvinder has over 15 years of end-to-end print and prepress expertise. He is a master of Adobe InDesign, Illustrator, and Photoshop, adhering to ISO print standards, PDF/X-4 output, CMYK/Pantone spot color management, bleed/trapping, packaging die-lines, and large-format exhibition graphics & OOH.";
  }
  if (q.includes("brand") || q.includes("ci/cd") || q.includes("corporate design") || q.includes("identity")) {
    return "Corporate Identity (CI/CD) and Brand Design are core pillars of Talvinder's craft. He has built and governed comprehensive brand guideline manuals, typographic grid systems, annual reports, executive pitch decks, and brand marketing collaterals for global brands including EY, Tesco, Havells, and Orient.";
  }
  if (q.includes("ey") || q.includes("award") || q.includes("achiever")) {
    return "At Ernst & Young (EY), Talvinder has served as Associate Design Manager (Senior Graphic Designer) and was awarded the prestigious 'Achiever Extraordinaire Award' for 4 consecutive years (2023–2026). He also earned 4 EY Bronze Badges across AI Engineering, Cybersecurity, Innovation, and Digital Media.";
  }
  if (q.includes("ai") || q.includes("firefly") || q.includes("workflow")) {
    return "Talvinder integrates cutting-edge AI creative workflows (Adobe Firefly, Photoshop Generative Fill, AI Prompt Architecture) to accelerate creative concepting, moodboarding, and asset localization by 3x-5x while preserving strict typographic and corporate brand fidelity.";
  }
  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone")) {
    return `You can reach Talvinder directly at ${PERSONAL_INFO.email} or by phone at ${PERSONAL_INFO.phone}. He is actively interviewing for Senior Graphic Designer, Lead Graphic Designer, and Graphic Design Lead positions!`;
  }
  return `Talvinder Singh is a Senior Graphic Designer with 15+ years of experience in Digital Design, Social Media Creatives, Marketing Collaterals, Corporate Identity (CI/CD), Print Production & Prepress, and Motion Graphics. He is eligible for the EU Blue Card with immediate relocation availability. Feel free to ask about his portfolio, technical tools, or experience!`;
}

startServer().catch((err) => {
  console.error("Fatal error starting server:", err);
  process.exit(1);
});
