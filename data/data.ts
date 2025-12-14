import {
  ISocial,
  IWorkExperience,
  IEducation,
  IProjects,
} from "../types/types";
import { icons } from "./icons";
import { v4 as uuidv4 } from "uuid";

export const socials: ISocial[] = [
  {
    name: "GitHub",
    link: "https://github.com/Lil-Code30",
    icon: "github",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/dereal_ismael",
    icon: "twitch",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/loko-ismael/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    link: "https://x.com/dereal_ismael",
    icon: "twitter",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@licode30",
    icon: "youtube",
  },
];

export const workExperiences: IWorkExperience[] = [
  {
    position: "Founder",
    company: "DripCode Studio",
    companyLink: "https://dripcodestudio.com",
    location: "Quebec, Canada (Remote)",
    period: "June 2025 – Present",
    responsibilities: [
      "Founded and operate DripCode Studio, delivering modern websites and web applications",
      "Design and develop clean, user-focused interfaces with attention to performance and accessibility",
      "Architect and implement scalable backend systems",
      "Build and maintain open-source projects and developer tools",
      "Manage end-to-end project lifecycle including planning, development, deployment, and maintenance",
      "Document development processes and projects through live coding and recorded content",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "Git & GitHub",
      "Vercel",
      "OBS Studio",
    ],
    type: "Freelance",
  },
  {
    position: "IT Support Agent – Level 1",
    company: "Ministry of Cybersecurity and Digital Affairs (MCN)",
    companyLink:
      "https://www.quebec.ca/gouvernement/ministeres-organismes/cybersecurite-numerique",
    location: "Quebec, Canada",
    period: "March 2024 – May 2024",
    responsibilities: [
      "Provided Level 1 technical support to users through remote assistance",
      "Escalated and followed up on incident tickets with multiple support teams",
      "Used diagnostic tools to identify and troubleshoot technical issues",
      "Accurately documented time spent, troubleshooting steps, and resolutions in ServiceNow",
    ],
    technologies: [
      "ServiceNow",
      "Remote Support Tools",
      "Windows OS",
      "IT Ticketing Systems",
    ],
    type: "Contract",
  },
  {
    position: "IT Technician (Intern)",
    company: "OPEQ (Ordinateur pour les écoles du Québec)",
    companyLink: "https://www.opeq.qc.ca",
    location: "Quebec, Canada",
    period: "September 2023 – October 2023",
    responsibilities: [
      "Diagnosed computers based on customer orders and technical requirements",
      "Installed and configured operating systems",
      "Repaired defective computer hardware components",
      "Replaced laptop and desktop screens",
    ],
    technologies: [
      "Windows OS",
      "Hardware Troubleshooting",
      "Computer Repair",
      "System Installation",
    ],
    type: "Internship",
  },
];

export const education: IEducation[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Université du Québec à Rimouski",
    schoolLink: "https://www.uqar.ca",
    location: "Lévis Campus, Quebec, Canada",
    period: "August 2025 – In Progress",
    description:
      "Pursuing a comprehensive degree in computer science with focus on software development.",
  },
  {
    degree: "Diploma in IT Support",
    school: "CFP Marie-Rollet",
    schoolLink: "https://cfpmr.com/",
    location: "Quebec City, Quebec, Canada",
    period: "Jan. 2023 – May 2024",
    description:
      "Completed professional diploma in IT support with practical skills in system administration and technical troubleshooting.",
  },
];
