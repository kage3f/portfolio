
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
}
