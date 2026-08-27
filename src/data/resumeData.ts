import { ExperienceItem, EducationItem, SkillCategory, EyBadge, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: "Talvinder Singh",
  title: "Senior Graphic Designer | Digital Design, Social Media & Marketing Collaterals, Brand Identity & Print",
  company: "Ernst & Young Global Limited (EY)",
  location: "New Delhi, India (Available for Relocation)",
  phone: "+91-981-811-2866",
  email: "talvinder8689@gmail.com",
  linkedIn: "https://www.linkedin.com/in/talvindersingh8189/",
  portfolioUrl: "https://sites.google.com/view/talvindersinghportfolio",
  status: "Available for Relocation (EU Blue Card Eligible)",
  yearsExperience: "15+",
  projectsCompleted: "100+",
  eyAwardsCount: "5+",
  clientSatisfaction: "100%",
  languages: [
    { language: "English", level: "B2 Level Fluent (IELTS Approved)" }
  ],
  workAuthorization: "EU Blue Card Eligible — Fast-Track Skilled Employment (Recognized Academic Degree & 15+ Years Senior Industry Record)",
  bio: "Senior Graphic Designer with 15+ years of hands-on design excellence across global enterprises (including Ernst & Young, WNS, Havells, and Orient). I specialize in Digital Design, high-impact Social Media Creatives & Marketing Collaterals, Corporate Identity (CI/CD), end-to-end Print Production & Prepress, and Motion Graphics — leveraging modern AI tools (Adobe Firefly & Generative AI) for 3x–5x faster production velocity while maintaining flawless brand fidelity. Eligible for the EU Blue Card with immediate relocation availability."
};

export const EY_BADGES: EyBadge[] = [
  {
    id: "badge-ai-2025",
    title: "EY Artificial Intelligence Engineering",
    primaryText: "ARTIFICIAL INTELLIGENCE",
    subText: "AI Engineering",
    year: "2025",
    type: "Bronze Badge",
    verifyUrl: "https://www.credly.com/badges/6b149751-14cf-48d5-8a76-f61da370935c/linked_in_profile",
    color: "from-amber-500 to-emerald-500",
    imageUrl: "/badges/ey-ai-2025.png"
  },
  {
    id: "badge-cyber-2024",
    title: "EY Cybersecurity",
    primaryText: "CYBERSECURITY",
    subText: "",
    year: "2024",
    type: "Bronze Badge",
    verifyUrl: "https://www.credly.com/badges/482b647f-a2b7-45c3-9775-aac96108839b/linked_in_profile",
    color: "from-emerald-500 to-cyan-500",
    imageUrl: "/badges/ey-cybersecurity-2024.png"
  },
  {
    id: "badge-innovation-2021",
    title: "EY Innovation Design Thinking",
    primaryText: "INNOVATION",
    subText: "Design thinking",
    year: "2021",
    type: "Bronze Badge",
    verifyUrl: "https://www.credly.com/badges/43f6f832-5e9b-4381-aa4e-38493a547ec2?source=linked_in_profile",
    color: "from-purple-500 to-emerald-500",
    imageUrl: "/badges/ey-innovation-2021.png"
  },
  {
    id: "badge-digital-2021",
    title: "EY Digital",
    primaryText: "DIGITAL",
    subText: "",
    year: "2021",
    type: "Bronze Badge",
    verifyUrl: "https://www.credly.com/badges/2898d023-f0aa-4cb7-a2d5-33dcbd0b10c1?source=linked_in_profile",
    color: "from-blue-500 to-emerald-500",
    imageUrl: "/badges/ey-digital-2021.png"
  }
];

export const EY_AWARDS = [
  {
    title: "Achiever Extraordinaire Award",
    period: "2023 - 2026 (Consecutive 4-Year Winner)",
    organization: "Ernst & Young Global Limited",
    description: "Honored by EY global leadership for 4 consecutive years for exemplary visual design execution, creative leadership, brand governance, and AI workflow integration."
  },
  {
    title: "Exceptional Client Services Award",
    period: "2022",
    organization: "Ernst & Young Global Limited",
    description: "Awarded for delivering flawless enterprise graphic design deliverables, executive pitch books, brand publications, and digital marketing collateral with 100% on-time execution and strict brand fidelity."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-ey",
    company: "Ernst & Young Global Limited (EY)",
    website: "https://www.ey.com/en_in",
    location: "Gurgaon, India (Global Delivery Services)",
    role: "Senior Graphic Designer | Associate Design Manager",
    period: "06/2017 – Present",
    award: "Achiever Extraordinaire (2023-2026)",
    highlights: [
      "Design and deliver high-impact graphic design deliverables, brand identity systems, and marketing collateral across global EY service lines, aligning visual craft with brand standards.",
      "Govern strict Corporate Identity (CI/CD) compliance across thousands of digital touchpoints, executive presentation decks, pitch books, whitepapers, and annual publication layouts.",
      "Pioneer AI-accelerated creative production workflows using Adobe Firefly, Photoshop Generative AI, and custom prompt workflows, reducing design turnaround by 40-60% while maintaining pixel-perfect fidelity.",
      "Architect high-stakes executive pitch presentations (PowerPoint / Keynote / InDesign) and interactive digital publications for C-suite and government stakeholder proposals.",
      "Design scalable digital design systems, vector illustration libraries, and enterprise SharePoint Online portal layouts with strict typographic hierarchy and WCAG accessibility standards.",
      "Mentor and lead junior graphic designers, establishing quality assurance checklists, asset management protocols, and prepress standards."
    ],
    skills: ["Graphic Design", "Corporate Identity (CI/CD)", "Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator", "Editorial & Pitch Books", "AI Creative Workflows", "Brand Governance"]
  },
  {
    id: "exp-wns",
    company: "WNS Global Services Pvt. Ltd.",
    website: "https://www.wns.com/",
    location: "Gurgaon, India",
    role: "Deputy Manager – Graphic Design & Multimedia",
    period: "06/2014 – 06/2017",
    highlights: [
      "Led and mentored a high-performing team of 8 graphic designers and digital artists delivering marketing collaterals, digital graphics, e-commerce assets, and retail packaging for major UK & US enterprise accounts (including Tesco).",
      "Designed digital marketing banners, social media ad creatives, responsive promotional landing page graphics, and in-store point-of-sale (POS/POP) retail displays.",
      "Created corporate pitch decks, interactive brochures, multi-page catalogs, and promotional video animations connecting visual storytelling with clear messaging.",
      "Maintained 100% on-time delivery across 25+ simultaneous design project pipelines while enforcing strict brand guideline adherence.",
      "Streamlined digital asset management (DAM) pipelines and automated template generation for multi-market localized collateral."
    ],
    skills: ["Graphic Design Leadership", "Digital & Print Collateral", "Retail Packaging & POS", "Adobe Creative Cloud", "Pitch Decks", "Motion Graphics", "Brand Operations"]
  },
  {
    id: "exp-orient",
    company: "Orient Electricals",
    website: "https://orientelectric.com/",
    location: "Noida, India",
    role: "Senior Graphic & Print Production Designer",
    period: "08/2013 – 06/2014",
    highlights: [
      "Created comprehensive marketing and print collateral: product packaging die-lines, large-format outdoor hoardings (OOH), transit graphics, retail kiosks, and promotional brochures.",
      "Managed full prepress and print quality assurance, conducting on-site press checks across printing plants to guarantee zero-defect color accuracy (CMYK/Pantone) and substrate quality.",
      "Mentored a 3-member graphic design team, optimizing creative workflows, project milestones, and brand consistency across diverse product categories.",
      "Designed responsive digital marketing banners, promotional website assets, and mobile UI collateral for major consumer electronics rollouts.",
      "Collaborated with regional sales and marketing heads to coordinate the logistics and timely nationwide dispatch of POP/POS marketing collaterals for major dealer events."
    ],
    skills: ["Print Production & Prepress", "Prepress & CMYK Specs", "Packaging Design & Die-Lines", "Marketing Collateral", "Large-Format OOH", "Team Mentorship"]
  },
  {
    id: "exp-havells",
    company: "Havells India LTD",
    website: "https://havells.com/",
    location: "Noida, India",
    role: "Senior Graphic & Packaging Designer",
    period: "02/2012 – 08/2013",
    highlights: [
      "Conceptualized and produced high-impact product packaging, carton dies, technical manuals, and retail promotional graphics for domestic appliances with zero prepress errors across 50+ SKUs.",
      "Designed large-scale outdoor advertising graphics, transit branding, retail display kiosks, and dealer meet marketing collateral.",
      "Directed vendor management and prepress verification, standardizing color separation, spot UV, embossing, and paper stock selection with industrial printing vendors.",
      "Governed brand touchpoints across print, digital ads, and social media channels to maximize brand recall and visual consistency.",
      "Coordinated with sales and regional logistics hubs to streamline nationwide POS collateral distribution."
    ],
    skills: ["Packaging & Die-Cuts", "Prepress Quality Control", "Pantone & Spot Color Management", "Retail Point-of-Sale (POS)", "Brand Identity", "Vendor Management"]
  },
  {
    id: "exp-spice",
    company: "Spice Labs",
    website: "https://spice-connect.com/about/",
    location: "Noida, India",
    role: "Creative Graphic & Mobile Visual Designer",
    period: "12/2010 – 02/2012",
    highlights: [
      "Designed eye-catching app store marketing graphics, feature banners, iconography, and UI visual assets for 15+ mobile applications with millions of downloads.",
      "Created dynamic motion teaser videos, animated promo banners, and social advertising graphics to drive app user engagement.",
      "Produced comprehensive marketing collaterals including event roadshow standees, flyers, posters, and web banners for product launches.",
      "Partnered with product managers and developers to ensure visual assets were optimized for high-density mobile screens and fast load times."
    ],
    skills: ["Digital & Social Graphics", "App Store Optimization (ASO)", "Iconography & Illustration", "Motion Promo Videos", "Adobe Illustrator & Photoshop", "Event Collateral"]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Diploma in Digital Marketing & Growth Strategy (Grade A Distinction)",
    institution: "iFEEL - Institute for Future Education Entrepreneurship and Leadership",
    year: "2017",
    note: "Specialization in digital visual marketing, social media design, brand communication, and creative strategy."
  },
  {
    id: "edu-2",
    degree: "Bachelor of Arts (Recognized University Degree for EU Blue Card)",
    institution: "University of Delhi (Delhi University)",
    year: "2007",
    note: "University degree recognized for fast-track EU Blue Card skilled employment."
  },
  {
    id: "edu-3",
    degree: "Diploma in Computer Applications, Multimedia & Graphic Software",
    institution: "Recognized Technical Institute",
    year: "2004",
    note: "Awarded Merit Scholarship for excellence in digital design, vector illustration, and computer applications."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cat-digital-marketing",
    category: "Digital Design, Social Media & Marketing Collaterals",
    iconName: "Figma",
    skills: [
      { name: "Social Media Creatives & Ad Suites", level: 97, description: "High-converting multi-format social graphics for Meta (Instagram/Facebook), LinkedIn, YouTube, and Google Display Network (GDN).", tags: ["Social Ad Suites", "Meta Ads", "LinkedIn Banners", "Display Creatives", "Promo Graphics"] },
      { name: "Executive Presentations & Pitch Decks", level: 98, description: "High-stakes C-suite PowerPoint presentations, Keynote, interactive PDF pitch books, and strategic visual storytelling.", tags: ["Pitch Decks", "PowerPoint", "Executive Decks", "Infographic Slides", "Interactive PDFs"] },
      { name: "Digital Interface & Figma Graphic Assets", level: 93, description: "Digital interface visual assets, promotional landing page layouts, icon design, and design component libraries in Figma.", tags: ["Figma", "Digital Design", "Landing Pages", "Iconography", "Design Systems"] },
      { name: "Marketing Collateral & Promotional Kits", level: 96, description: "Comprehensive marketing collaterals: brochures, flyers, product one-pagers, event backdrops, roll-up banners, and promotional kits.", tags: ["Marketing Collateral", "Brochures", "Flyers", "Event Graphics", "Promotional Kits"] }
    ]
  },
  {
    id: "cat-graphic-brand",
    category: "Corporate Identity (CI/CD) & Brand Systems",
    iconName: "Palette",
    skills: [
      { name: "Adobe InDesign & Editorial Layout", level: 98, description: "Advanced editorial layout, multi-page brochures, annual reports, corporate whitepapers, master pages & typographic grid systems.", tags: ["Editorial Layout", "Grid Systems", "Typography", "Catalog Design", "Brand Guidelines"] },
      { name: "Adobe Illustrator & Vector Systems", level: 98, description: "Precision vector artwork, logo systems, corporate iconography, packaging die-lines, infographics & scalable brand assets.", tags: ["Vector Art", "Logo Architecture", "Icon Systems", "Infographics", "Packaging Dies"] },
      { name: "Adobe Photoshop & Master Compositing", level: 98, description: "High-end photo retouching, multi-layer compositing, color correction, digital ad creatives & generative asset expansion.", tags: ["Photo Retouching", "Compositing", "Color Grading", "Social Creatives", "Generative Fill"] },
      { name: "Typography & Layout Hierarchy", level: 96, description: "Deep mastery of micro & macro typography, Swiss grid systems, font pairing, legibility, and baseline alignment.", tags: ["Typography", "Typesetting", "Baseline Grids", "Font Pairing", "Hierarchies"] },
      { name: "Corporate Design & Brand Manuals", level: 96, description: "Developing, modernizing, and governing comprehensive Corporate Identity (CI/CD) guidelines across global organizations.", tags: ["CI/CD Guidelines", "Brand Manuals", "Design Governance", "Visual Identity"] }
    ]
  },
  {
    id: "cat-print-prepress",
    category: "Print Production & Prepress Mastery",
    iconName: "Layout",
    skills: [
      { name: "Prepress & Final Artwork Execution", level: 96, description: "Error-free prepress file preparation, PDF/X-4 & PDF/X-1a compliance, bleed & crop marks, trapping, overprint, and 300+ DPI raster checks.", tags: ["Prepress", "Artwork Execution", "PDF/X-4", "Bleed & Crop", "Trapping"] },
      { name: "Color Management (CMYK & Pantone)", level: 95, description: "Standardized color separation, ICC profiles, Pantone Matching System (PMS / Spot Colors), and digital-to-print color fidelity.", tags: ["CMYK", "Pantone / PMS", "Color Separation", "ICC Profiles", "Proofing"] },
      { name: "Packaging Design & Die-Lines", level: 94, description: "Structural packaging layouts, carton die-lines, blister packs, labeling compliance, and barcode/QR integration.", tags: ["Packaging Design", "Die-Lines", "Carton Packaging", "Die-Cuts", "Label Compliance"] },
      { name: "Large-Format & Exhibition Print", level: 94, description: "Trade fair graphics, exhibition booth displays, roll-up banners, OOH billboards, and transit advertising.", tags: ["Exhibition Displays", "Roll-ups", "OOH Billboards", "Large Format Print", "Vehicle Graphics"] },
      { name: "Paper Stocks & Print Finishes", level: 92, description: "Expertise in paper weights/grammages, coating types, spot UV varnish, hot foil stamping, and embossing/debossing.", tags: ["Print Finishes", "Embossing", "Spot UV", "Paper Stocks", "Foil Stamping"] }
    ]
  },
  {
    id: "cat-motion-video",
    category: "Motion Graphics & Video Editing",
    iconName: "Video",
    skills: [
      { name: "Adobe After Effects", level: 92, description: "2D kinetic typography, animated logo stings, social video ads (Reels/Shorts), explainer motion graphics & UI micro-animations.", tags: ["Kinetic Typography", "Motion Graphics", "Logo Animation", "Social Reels", "2D Animation"] },
      { name: "Adobe Premiere Pro", level: 90, description: "Corporate video editing, promotional reels, leadership interviews, color grading, and multi-track pacing.", tags: ["Video Editing", "Color Grading", "Corporate Reels", "Promo Videos"] },
      { name: "Adobe Audition", level: 88, description: "Professional audio clean-up, voiceover normalization, sound effects layering, and podcast audio mastering.", tags: ["Audio Clean-up", "Voiceover Editing", "Sound Design", "Audio Mastering"] }
    ]
  },
  {
    id: "cat-ai-workflows",
    category: "AI Creative Acceleration & Modern Tools",
    iconName: "Cpu",
    skills: [
      { name: "Adobe Firefly & Generative AI", level: 95, description: "Leveraging commercial-safe Adobe Firefly and Photoshop Generative Fill for rapid concept ideation, moodboarding, and high-fidelity asset extension.", tags: ["Adobe Firefly", "Generative Fill", "Concepting", "Moodboards", "Asset Scaling"] },
      { name: "AI Acceleration & Rapid Prototyping", level: 94, description: "Harnessing Microsoft Copilot, Replit, and AI prompt engineering to accelerate digital prototyping, creative asset generation, and workflow automation.", tags: ["Microsoft Copilot", "Replit", "Workflow Automation", "Production Velocity", "Efficiency (3x-5x)"] },
      { name: "SharePoint & Digital Asset Portals", level: 92, description: "Structuring enterprise visual asset management (DAM), intranet brand portals, and design resource repositories.", tags: ["SharePoint Online", "Asset Management", "Brand Portals", "Information Architecture"] }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-ey-brand-governance",
    title: "Global Corporate Design & Executive Publication Suite",
    category: "graphic-design",
    client: "Ernst & Young Global Limited (EY)",
    summary: "Engineered high-stakes corporate publications, annual report layouts, C-suite pitch books, and global Corporate Identity (CI/CD) design systems.",
    problem: "Global consulting service lines required consistent, high-impact publication layouts adhering strictly to international brand standards under tight deadlines.",
    solution: "Developed modular InDesign publication grid templates, standardized typographic hierarchies, and interactive pitch book frameworks adopted firm-wide.",
    outcomes: [
      "Adopted across 500+ global consultants for high-value C-suite client pitches",
      "Reduced publication formatting turnaround time by 50%",
      "Recognized with 4 consecutive EY Achiever Extraordinaire Awards (2023-2026)"
    ],
    techStack: ["Adobe InDesign", "Corporate Identity (CI/CD)", "Typography", "Editorial Layout", "PowerPoint", "Brand Guidelines"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-fmeg-packaging",
    title: "FMEG Product Packaging, Die-Lines & Prepress Ecosystem",
    category: "graphic-design",
    client: "Havells India & Orient Electricals",
    summary: "Designed comprehensive brand graphics, vector packaging layouts, structural die-cuts, and error-free prepress files for domestic consumer appliances.",
    problem: "Legacy packaging lacked shelf impact, and multi-factory printing vendors faced color inconsistencies across offset packaging runs.",
    solution: "Engineered scalable vector brand identities, custom carton packaging dies, CMYK/Pantone color-accurate prepress files (PDF/X-4), and on-site print quality checks.",
    outcomes: [
      "Zero prepress errors across 50+ packaging SKUs",
      "Flawless vendor production with 100% brand guideline adherence and consistent Pantone color fidelity",
      "Rolled out across 1,000+ retail outlets nationwide"
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "Print Production & Prepress", "Packaging Die-Lines", "CMYK/Pantone Specs", "Quality Control"],
    featured: true,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-marketing-collateral-wns",
    title: "Retail & E-Commerce Marketing Collateral Suite",
    category: "marketing-collateral",
    client: "WNS Global Services (UK & US Retail Accounts / Tesco)",
    summary: "Designed multi-format digital promotional graphics, e-commerce banners, social media assets, and retail POS displays.",
    problem: "International retail clients required rapid turnaround across varied localized digital graphic formats and print POS materials.",
    solution: "Established modular graphic design templates, digital asset kits, social media creative suites, and streamlined print collateral files.",
    outcomes: [
      "100% on-time delivery across 25+ simultaneous international design deliverables",
      "Boosted promotional banner engagement rate by 35%"
    ],
    techStack: ["Adobe Photoshop", "Illustrator", "Digital Graphics", "Social Media Ads", "Retail POS", "Marketing Collateral"],
    featured: true,
    image: "https://images.unsplash.com/photo-1542744094-3a31216915e2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-large-format-ooh",
    title: "Large-Format OOH, Exhibition Booths & Brand Graphics",
    category: "marketing-collateral",
    client: "Orient Electricals & Havells India",
    summary: "Created high-impact marketing collaterals, point-of-sale displays, large-format hoardings (OOH), and trade fair exhibition graphics.",
    problem: "Domestic appliance product lines needed high-visibility visual branding across competitive retail and outdoor media channels.",
    solution: "Produced vibrant, color-accurate large-format billboards, transit graphics, dealer meet backdrops, and retail promotional graphics.",
    outcomes: [
      "Deployed across major national highways and 1,000+ retail distribution outlets",
      "Achieved 28% increase in retail point-of-sale engagement"
    ],
    techStack: ["Large Format Print", "OOH Billboards", "Exhibition Displays", "POS/POP", "Photoshop", "Illustrator"],
    featured: false,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-motion-graphics-suite",
    title: "Dynamic Motion Graphics & Brand Video Animation Suite",
    category: "motion-graphics",
    client: "WNS Global Services & Havells India",
    summary: "Engineered high-impact 2D kinetic typography, animated promotional videos, social media reels, logo stings, and broadcast motion sequences.",
    problem: "Digital marketing and product launches required captivating animated content for social media and digital displays.",
    solution: "Designed After Effects animation templates, kinetic text compositions, logo stings, and sound-synchronized promo videos.",
    outcomes: [
      "Increased video completion rate by 45% across social media channels",
      "Standardized motion graphics templates across brand teams"
    ],
    techStack: ["Adobe After Effects", "Premiere Pro", "Kinetic Typography", "Motion Graphics", "Social Video Reels"],
    featured: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-ai-workflow-acceleration",
    title: "AI-Augmented Creative Production & Asset Scaling Workflow",
    category: "graphic-design",
    client: "Ernst & Young Global Limited (EY)",
    summary: "Integrated Adobe Firefly, Photoshop Generative AI, and automated prompt workflows into enterprise graphic design pipelines, boosting production speed.",
    problem: "Creative teams were spending excessive hours on manual photo expansion, background replacement, and multi-format asset resizing.",
    solution: "Pioneered structured generative AI workflows for rapid concept moodboarding, commercial-safe generative asset extension, and automated batch creation.",
    outcomes: [
      "Accelerated creative concept turnaround by 60%",
      "Maintained 100% brand guideline adherence with zero copyright risk",
      "Awarded EY Artificial Intelligence Engineering Bronze Badge 2025"
    ],
    techStack: ["Adobe Firefly", "Photoshop Generative AI", "AI Workflows", "Graphic Design", "Production Velocity"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  }
];

