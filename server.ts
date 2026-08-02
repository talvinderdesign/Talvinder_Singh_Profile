import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, EY_BADGES, EY_AWARDS, SKILL_CATEGORIES } from "./src/data/resumeData";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
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

      const systemInstruction = `You are "Tal.AI", the custom AI Strategy Twin and interactive digital agent representing Talvinder Singh, Senior UX Consultant at Ernst & Young (EY).
Your mission is to answer recruiters, hiring managers, and clients about Talvinder's experience, skills, EY awards, EU Blue Card eligibility, and AI agent projects in a professional, polite, and persuasive tone.

Here are facts about Talvinder Singh:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Current Role: Senior UX Consultant (Associate Manager) at Ernst & Young (EY) since June 2017.
- Location: New Delhi, India. OPEN TO RELOCATION to Germany / Europe and eligible for EU Blue Card.
- Total Experience: Over 15 years in UI/UX Strategy, Enterprise SharePoint Architecture, Custom AI Agent Development (Copilot & Replit), and Multimedia.
- EY Badges: EY Artificial Intelligence Engineering (2025), EY Cybersecurity (2024), EY Innovation Design Thinking (2021), EY Digital (2021).
- EY Awards: Achiever Extraordinaire Award (4 consecutive years 2023, 2024, 2025, 2026), Exceptional Client Services Award.
- Core Technical Skills: Figma, Microsoft Copilot AI Agent Development, Replit AI Workflows, SharePoint Online (O365) Architecture, Adobe CC, Motion Graphics, Design Thinking Workshops.
- Contact: Email ${PERSONAL_INFO.email}, Phone ${PERSONAL_INFO.phone}.

Keep your answers concise, structured with bullet points where appropriate, futuristic in tone, and helpful. Directly emphasize why Talvinder is a high-value strategic hire for lead UX / AI transformation roles.`;

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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

function getSimulatedAiResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("germany") || q.includes("blue card") || q.includes("relocat")) {
    return "Talvinder is actively open to relocation to Germany and Europe! He holds a recognized University Degree (Bachelor of Arts from Delhi University + Digital Marketing Certification) and is fully eligible for the EU Blue Card scheme with 15+ years of strategic IT/UX consulting experience.";
  }
  if (q.includes("ey") || q.includes("award") || q.includes("achiever")) {
    return "At Ernst & Young (EY), Talvinder is a Senior UX Consultant and Associate Manager. He has won the prestigious 'Achiever Extraordinaire' award for 4 consecutive years (2023-2026) and holds 4 EY Bronze Badges: AI Engineering (2025), Cybersecurity (2024), Innovation Design Thinking (2021), and Digital (2021).";
  }
  if (q.includes("ai") || q.includes("copilot") || q.includes("replit")) {
    return "Talvinder specializes in bridging UI/UX Strategy with AI Automation. At EY, he partners with executive leadership to engineer custom AI workflow agents inside Copilot and Replit environments, reducing document synthesis and status report prep times by up to 60%.";
  }
  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone")) {
    return `You can reach Talvinder directly at ${PERSONAL_INFO.email} or call +91-981-811-2866. You can also use the interactive contact form on this site or connect via LinkedIn.`;
  }
  return `Talvinder Singh is a Senior UX Consultant at EY with 15+ years of experience leading UI/UX Strategy, AI Copilot Integration, Enterprise SharePoint Platforms, and Multimedia design. Feel free to ask about his EU Blue Card eligibility, EY projects, or UX methodology!`;
}

startServer();
