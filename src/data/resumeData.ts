import { ExperienceItem, EducationItem, SkillCategory, EyBadge, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: "Talvinder Singh",
  title: "Associate Design Manager | Graphic Design, UX Strategy & AI Workflow Acceleration",
  company: "Ernst & Young Global Limited (EY)",
  location: "New Delhi, India (Relocation Ready to Germany / EU)",
  phone: "+91-981-811-2866",
  email: "talvinder8689@gmail.com",
  linkedIn: "https://www.linkedin.com/in/talvindersingh8189/",
  portfolioUrl: "https://sites.google.com/view/talvindersinghportfolio",
  status: "Available for EU Relocation (Germany EU Blue Card Eligible)",
  yearsExperience: "15+",
  projectsCompleted: "40+",
  eyAwardsCount: "5+",
  clientSatisfaction: "100%",
  bio: "With over 15 years of deep expertise bridging hands-on graphic design and user-centric UX strategy, I leverage a strong command of modern AI tools to accelerate creative workflows, scale digital production, and enhance design precision. As an Associate Design Manager at EY, I combine strategic vision with advanced AI tools to boost design velocity, elevate visual quality, and deliver high-impact digital experiences."
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
    description: "Consistently recognized by EY executive leadership for outstanding technical leadership, AI agent innovation, and elevating user experience standards firm-wide."
  },
  {
    title: "Exceptional Client Services Award",
    period: "2022",
    organization: "Ernst & Young Global Limited",
    description: "Awarded for delivering flawless enterprise platforms with 100% on-time execution, brand adherence, and high stakeholder satisfaction."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-ey",
    company: "Ernst & Young Global Limited",
    website: "https://www.ey.com/en_in",
    location: "Gurgaon, India",
    role: "Associate Design Manager",
    period: "06/2017 – Present",
    award: "Achiever Extraordinaire (2023-2026)",
    highlights: [
      "Lead high-impact graphic design, visual branding, and user-centric UX/UI strategies across enterprise platforms, directly aligning visual craft with business KPIs.",
      "Partner with global EY leadership as a strategic advisor, translating complex business requirements into intuitive digital products and high-impact brand solutions.",
      "Pioneer AI-augmented workflows and custom agent prototyping in Copilot and Replit environments, significantly accelerating creative velocity and product delivery.",
      "Architect scalable design systems, enterprise SharePoint platforms, and interactive digital assets for global service lines.",
      "Serve as a core EY Brand Ambassador, leading digital accessibility (WCAG compliance) initiatives and high-end print media production while mentoring design teams.",
      "Orchestrate cross-functional collaboration across engineering, product management, and business units, validating design choices with performance metrics to drive business ROI."
    ],
    skills: ["Graphic Design", "UI/UX Design", "AI Workflow Acceleration", "SharePoint Online", "Adobe Creative Cloud", "Figma", "Brand Strategy"]
  },
  {
    id: "exp-wns",
    company: "WNS Global Services Pvt. Ltd.",
    website: "https://www.wns.com/",
    location: "Gurgaon, India",
    role: "Deputy Manager Design",
    period: "06/2014 – 06/2017",
    highlights: [
      "Led and mentored a multidisciplinary team of designers and developers, driving agile project execution for key US, UK, and European enterprise accounts.",
      "Served as strategic design lead for a major UK retail brand, overseeing end-to-end e-commerce experiences, product packaging, and nationwide digital campaigns.",
      "Spearheaded omnichannel visual initiatives, including smartscreen video animations, interactive microsites, and in-store point-of-sale displays.",
      "Architected executive pitch decks, corporate presentations, and product promotional videos that connected creative storytelling with core business goals.",
      "Managed multi-platform content lifecycles and web operations, ensuring flawless brand consistency across web, print, video, and social channels."
    ],
    skills: ["Team Leadership", "Key Account Strategy", "Omnichannel Campaigns", "Executive Presentations", "Multimedia & Video", "Brand Operations"]
  },
  {
    id: "exp-orient",
    company: "Orient Electricals",
    website: "https://orientelectric.com/",
    location: "Noida, India",
    role: "Executive Graphic Designer",
    period: "08/2013 – 06/2014",
    highlights: [
      "Led end-to-end ATL, BTL, and TTL marketing campaigns, shaping product packaging, large-format outdoor media, in-store kiosks, and transit signage.",
      "Mentored and managed a 3-member design team, streamlining creative workflows, setting timelines, and keeping output tightly aligned with business goals.",
      "Managed digital channels, website operations, and UI design for Android and iOS mobile apps during key product rollouts and promotional offers.",
      "Oversaw end-to-end print production and quality control, visiting production plants across India to ensure exact color accuracy, material quality, and brand standards.",
      "Partnered with global sales, marketing, and logistics teams to coordinate branch requirements and drive smooth dispatch of POP/POS materials for major dealer events."
    ],
    skills: ["ATL/BTL/TTL Campaigns", "Team Leadership", "Packaging & Print Production", "Mobile App UI", "Quality Control", "POP/POS Logistics"]
  },
  {
    id: "exp-havells",
    company: "Havells India LTD",
    website: "https://havells.com/",
    location: "Noida, India",
    role: "Senior Graphic Designer",
    period: "02/2012 – 08/2013",
    highlights: [
      "Conceptualized and executed end-to-end ATL and BTL campaigns for domestic appliances and fans, spanning national outdoor media, transit advertising, retail kiosks, and product packaging.",
      "Governed digital experience touchpoints across official websites, mobile apps, and social channels to enhance product discovery and brand engagement.",
      "Directed the full print production lifecycle and packaging operations, partnering with domestic and global vendors to ensure exact color fidelity and material specifications.",
      "Coordinated with sales teams, regional branches, and warehouses to streamline the logistics and nationwide dispatch of POP/POS collaterals for major product launches.",
      "Mentored a 3-member design team, managing project timelines, resource allocation, and interactive prototyping to consistently deliver high-impact visual assets."
    ],
    skills: ["ATL/BTL Campaigns", "Product Packaging", "Team Leadership", "Vendor & Print Governance", "Digital Touchpoints", "POP/POS Logistics"]
  },
  {
    id: "exp-spice",
    company: "Spice Labs",
    website: "https://spice-connect.com/about/",
    location: "Noida, India",
    role: "Creative Graphic Designer",
    period: "12/2010 – 02/2012",
    highlights: [
      "Spearheaded the end-to-end UI/UX design lifecycle for 15+ iOS and Android applications, translating user research and feedback into wireframes, user flows, and interactive storyboards.",
      "Designed eye-catching app store assets and lightweight UI graphics that enhanced store optimization, driving higher download rates and user retention.",
      "Partnered closely with project managers, developers, and QA teams to navigate iOS/Android platform constraints and deliver seamless app enhancements on schedule.",
      "Produced comprehensive UX flow decks and dynamic product promotional videos with voiceovers to effectively communicate design concepts to executive leadership and engineering teams.",
      "Delivered omnichannel marketing collaterals—including roadshow graphics, standees, posters, and web assets—to support nationwide mobile app launches."
    ],
    skills: ["Mobile UI/UX Design", "App Store Optimization", "Wireframing & Prototyping", "Multimedia Production", "Cross-Functional Collaboration", "Print & Marketing Assets"]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "edu-1",
    degree: "6-Month Diploma in Digital Marketing (Grade A)",
    institution: "iFEEL - Institute for Future Education Entrepreneurship and Leadership",
    year: "2017",
    note: "Completed 6-month intensive program with Grade A distinction focusing on digital growth and analytics."
  },
  {
    id: "edu-2",
    degree: "Bachelor of Arts (Second Division)",
    institution: "Delhi University",
    year: "2007",
    note: "Graduated with Second Division, demonstrating strong analytical reasoning and strategic communication skills."
  },
  {
    id: "edu-3",
    degree: "Diploma in Computer Applications and Programming",
    institution: "Recognized Technical Institute",
    year: "2004",
    note: "Awarded by Prestigious Scholarship for academic excellence."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cat-ux",
    category: "UX & Digital Strategy",
    iconName: "Figma",
    skills: [
      { name: "Figma", level: 98, description: "Advanced design systems, interactive prototypes, auto-layout, wireframes." },
      { name: "User Research & Testing", level: 92, description: "Heuristic evaluation, persona mapping, usability testing & feedback loops." },
      { name: "Design Thinking Workshops", level: 95, description: "Miro & Mural facilitated co-creation sessions with global executives." },
      { name: "Adobe Creative Cloud", level: 96, description: "Photoshop, Illustrator, InDesign, XD for high-fidelity assets." }
    ]
  },
  {
    id: "cat-ai",
    category: "AI & Enterprise Automation",
    iconName: "Cpu",
    skills: [
      { name: "Custom Copilot AI Agents", level: 95, description: "Microsoft Copilot Studio & custom prompt engineering for enterprise workflows." },
      { name: "Replit AI Workflows", level: 90, description: "Rapid prototyping and automated agent orchestration for consulting teams." },
      { name: "Adobe Express", level: 92, description: "AI-powered quick creative workflows, social campaign assets, and rapid template design for enterprise communication." },
      { name: "Workflow Automation", level: 94, description: "Replacing repetitive manual consulting tasks with autonomous digital agents." }
    ]
  },
  {
    id: "cat-marketing",
    category: "Marketing & Design",
    iconName: "Palette",
    skills: [
      { name: "Adobe Photoshop", level: 96, description: "High-fidelity digital design, image editing, UI graphics & marketing collateral.", tags: ["Digital Design", "UI Graphics", "Image Manipulation"] },
      { name: "Adobe Illustrator", level: 95, description: "Vector graphics, brand icon systems, logos, packaging & scalability.", tags: ["Vector Artwork", "Brand Identity", "Logo Design"] },
      { name: "Adobe InDesign", level: 92, description: "Publication layouts, multi-page brochures, brand guidelines, print collateral.", tags: ["Brochure Design", "Typography", "Editorial Layout"] },
      { name: "Print Media Knowledge", level: 94, description: "Pre-press execution, CMYK color profiles, offset & digital print preparation, paper stocks, and large-format branding.", tags: ["Pre-press", "CMYK Specs", "Offset Print", "Large Format", "Packaging", "Bleed & Trim"] },
      { name: "Social Media Marketing", level: 93, description: "Multi-channel paid and organic campaigns, conversion funnel optimization, ad budget management, and performance analytics.", tags: ["Brand Campaign", "CPA", "PPC", "ROAS", "A/B Testing", "Audience Targeting", "Content Strategy"] },
      { name: "Marketing Strategy", level: 92, description: "Digital campaign planning, market research, brand positioning, performance analytics, multi-channel growth.", tags: ["Campaign Strategy", "Brand Positioning", "Performance Analytics"] },
      { name: "Microsoft PowerPoint", level: 96, description: "Executive presentation decks, pitch books, strategic visual storytelling.", tags: ["Pitch Decks", "Executive Presentations"] },
      { name: "Microsoft Excel", level: 90, description: "Data analysis, spreadsheets, executive reporting, business documentation.", tags: ["Data Analysis", "Reporting"] },
      { name: "Microsoft Word", level: 90, description: "Professional documentation, client proposals, brand templates & reports.", tags: ["Proposals", "Templates"] }
    ]
  },
  {
    id: "cat-web",
    category: "Web Architecture & SharePoint",
    iconName: "Layout",
    skills: [
      { name: "SharePoint Online (O365)", level: 96, description: "Enterprise intranet portal architecture, page layouts, security & metadata." },
      { name: "HTML5, CSS3", level: 94, description: "Clean modern frontend markup, responsive design, futuristic dark layouts." },
      { name: "JavaScript & Bootstrap", level: 88, description: "Client-side scripting, DOM manipulation, responsive UI frameworks." }
    ]
  },
  {
    id: "cat-media",
    category: "Multimedia & Video Production",
    iconName: "Video",
    skills: [
      { name: "Adobe Premiere Pro", level: 90, description: "Corporate video editing, promotional reels, leadership presentations." },
      { name: "Adobe After Effects", level: 88, description: "Motion graphics, UI animation, title sequences, visual FX." },
      { name: "Adobe Audition", level: 90, description: "Professional audio editing, voiceover cleaning, podcasts, and sound design for video assets." }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-copilot-agent",
    title: "Enterprise Copilot AI & UX Workflow System",
    category: "ux-design",
    client: "EY Consulting Practice",
    summary: "Architected a custom AI Copilot agent and enterprise UX workflow system in Replit & SharePoint, transforming executive reporting and client deliverables.",
    problem: "Consultants were spending 15+ hours weekly synthesizing lengthy client documents and manually creating executive status decks.",
    solution: "Architected a custom prompt-engineered AI agent integrated into EY's secure Copilot workspace, featuring instant summary generation and automated slide outlines.",
    outcomes: [
      "Reduced report creation time by 60%",
      "Adopted across 500+ senior consultants",
      "Recognized with EY Artificial Intelligence Engineering Bronze Badge 2025"
    ],
    techStack: ["Copilot Studio", "Figma", "User Research", "Wireframing", "SharePoint"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-design-thinking",
    title: "Executive Design Thinking & Interactive Wireframing",
    category: "ux-design",
    client: "EY Global Clients",
    summary: "Facilitated high-stakes co-creation design workshops using Figma and Miro to align C-suite executives on complex digital transformation product strategies.",
    problem: "Diverse executive stakeholders held conflicting priorities for key digital transformation initiatives.",
    solution: "Designed interactive Miro workshop templates and rapid Figma wireframes to test assumptions live in 2-day design sprints.",
    outcomes: [
      "Aligned C-suite vision in under 48 hours",
      "Accelerated project kickoff phase by 4 weeks",
      "Awarded EY Innovation Design Thinking Badge"
    ],
    techStack: ["Figma", "Miro", "Design Thinking", "User Research", "Wireframing"],
    featured: true,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-marketing-collateral-wns",
    title: "Global Brand & Campaign Marketing Collateral Suite",
    category: "marketing-collateral",
    client: "WNS Global Services (USA & UK Accounts)",
    summary: "Directed multi-channel marketing campaigns, promotional microsites, and localized advertising collateral pipelines across international accounts.",
    problem: "USA & UK client campaigns required rapid turnaround across varied localized web formats and digital advertising channels.",
    solution: "Established modular marketing design systems, digital campaign assets, and automated brand collateral pipelines.",
    outcomes: [
      "100% on-time delivery across 25+ simultaneous campaign deliverables",
      "Boosted engagement rate by 35% on digital campaign landing pages"
    ],
    techStack: ["Adobe Photoshop", "Illustrator", "Digital Collateral", "Microsites", "Campaign Strategy"],
    featured: true,
    image: "https://images.unsplash.com/photo-1542744094-3a31216915e2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-marketing-collateral-havells",
    title: "Multi-Channel Retail & Digital Marketing Campaigns",
    category: "marketing-collateral",
    client: "Havells India & Orient Electricals",
    summary: "Created high-converting marketing collateral ecosystems, point-of-sale displays, hoardings, and digital advertising assets for nationwide product launches.",
    problem: "New appliance product lines needed aggressive market penetration across competitive retail and digital channels.",
    solution: "Produced vibrant, color-accurate marketing collaterals, digital banners, standees, and retail promotional graphics.",
    outcomes: [
      "Rolled out across 1,000+ retail distribution outlets in India",
      "Achieved 28% increase in retail point-of-sale engagement"
    ],
    techStack: ["Marketing Collateral", "Point of Sale", "Large Format", "Campaign Assets", "Photoshop"],
    featured: false,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-fmeg-packaging",
    title: "FMEG Product Packaging & Brand Graphics Ecosystem",
    category: "graphic-design",
    client: "Havells India & Orient Electricals",
    summary: "Designed comprehensive brand graphics, vector illustration systems, packaging layouts, and pre-press graphics for domestic appliances.",
    problem: "Legacy packaging lacked visual pop and failed to stand out on retail shelves.",
    solution: "Engineered scalable vector brand identities, custom packaging dies, CMYK color-accurate pre-press files, and retail graphic assets.",
    outcomes: [
      "Zero pre-press errors across 50+ packaging variants",
      "Flawless vendor production with 100% brand guideline adherence"
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "Pre-Press CMYK", "Packaging Design", "Vector Graphics"],
    featured: true,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-graphic-design-identity",
    title: "Corporate Visual Identity & Large-Format Brand Systems",
    category: "graphic-design",
    client: "Spice Labs & Corporate Clients",
    summary: "Conceptualized and executed end-to-end visual identity systems, corporate iconography, event graphics, and large-format brand displays.",
    problem: "Fast-moving mobile and event campaigns required cohesive high-impact visual branding under tight deadlines.",
    solution: "Crafted unified typography, vector illustration libraries, standees, and promotional posters for nationwide roadshows.",
    outcomes: [
      "Delivered 100+ production-ready graphic design assets",
      "Streamlined brand recognition across print and digital media"
    ],
    techStack: ["Graphic Design", "Brand Identity", "Iconography", "InDesign", "Illustrator"],
    featured: false,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-motion-graphics-suite",
    title: "Dynamic Motion Graphics & Brand Video Animation Suite",
    category: "motion-graphics",
    client: "Havells India & WNS Global Services",
    summary: "Engineered high-impact 2D/3D kinetic typography, animated promotional videos, UI micro-animations, and broadcast motion graphics sequences.",
    problem: "Digital campaigns and product launches required captivating animated content to stand out on social media and digital displays.",
    solution: "Designed After Effects animation templates, kinetic text compositions, logo stings, and sound-synchronized promo videos.",
    outcomes: [
      "Increased video completion rate by 45% across social ad channels",
      "Standardized motion graphics guidelines across brand teams"
    ],
    techStack: ["Adobe After Effects", "Premiere Pro", "Kinetic Typography", "Motion Graphics", "UI Animation"],
    featured: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-document-design-decks",
    title: "Executive Presentation & Publication Document Architecture",
    category: "document-design",
    client: "Ernst & Young Global Limited",
    summary: "Engineered high-stakes executive pitch decks, multi-page corporate publications, and standardized enterprise document templates.",
    problem: "EY leadership required sophisticated, brand-compliant document layouts for high-value client proposals and global service line publications.",
    solution: "Designed custom PowerPoint pitch books, InDesign brochure systems, and Word document templates with strict typographic hierarchy.",
    outcomes: [
      "Adopted across global consulting teams for C-suite pitches",
      "Reduced proposal formatting time by 50%"
    ],
    techStack: ["Document Design", "PowerPoint", "Adobe InDesign", "Editorial Layout", "Typography"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-document-design-sharepoint",
    title: "SharePoint Enterprise Document & Portal Layouts",
    category: "document-design",
    client: "EY Consulting Practice",
    summary: "Architected structured document layout taxonomies and portal information hierarchy within SharePoint Online for global knowledge management.",
    problem: "Enterprise documents were scattered across unorganized drives without visual hierarchy or searchable metadata.",
    solution: "Created clear page templates, document layout standards, and automated cataloging taxonomies.",
    outcomes: [
      "Organized 10,000+ enterprise documents",
      "Improved document retrieval speed by 70%"
    ],
    techStack: ["SharePoint", "Information Architecture", "Document Layout", "O365", "Metadata"],
    featured: false,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-3d-game-design-assets",
    title: "Interactive 3D Game Environments & Motion Asset Suite",
    category: "3d-game-design",
    client: "Spice Labs & Mobile Gaming Studio",
    summary: "Designed 3D game assets, level concepts, interactive environment textures, and dynamic motion graphics for mobile gaming titles.",
    problem: "Mobile games needed lightweight, high-performance 3D visual assets optimized for mobile GPUs.",
    solution: "Created low-poly 3D models, UV textured game environments, UI overlays, and After Effects motion animation sequences.",
    outcomes: [
      "Engineered 3D assets for mobile games downloaded by millions",
      "Maintained 60fps rendering performance on target devices"
    ],
    techStack: ["3D Modeling", "Game Design", "After Effects", "Motion Graphics", "Photoshop"],
    featured: true,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-3d-game-design-concepts",
    title: "3D Concept Visualization & Motion Prototyping",
    category: "3d-game-design",
    client: "Creative Media Tech",
    summary: "Produced 3D spatial concept visualizations, motion graphic teasers, and interactive UI prototypes for immersive game experiences.",
    problem: "New game concepts needed compelling 3D visual previews for stakeholder funding and player pre-registration.",
    solution: "Developed rendered 3D scenes, particle effects, game UI HUDs, and motion trailers.",
    outcomes: [
      "Secured 100% greenlight approval from creative directors",
      "Elevated visual fidelity across game promo trailers"
    ],
    techStack: ["3D Game Design", "Render Pipeline", "Premiere Pro", "UI HUDs", "Motion FX"],
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  }
];
