import { ISocial, IWorkExperience } from "../types/types";

export const socials: ISocial[] = [
  {
    name: "GitHub",
    link: "",
    icon: "github",
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
