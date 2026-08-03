export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  website?: string;
  highlights: string[];
  skills: string[];
  award?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  skills: { name: string; level: number; description?: string; tags?: string[] }[];
}

export interface EyBadge {
  id: string;
  title: string;
  primaryText?: string;
  subText?: string;
  year: string;
  type: string;
  description?: string;
  verifyUrl: string;
  color: string;
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  techStack: string[];
  featured: boolean;
  image: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
