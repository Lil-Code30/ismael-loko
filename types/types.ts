export type IProjects = {
  id: string;
  title: string;
  featured: boolean;
  description: string;
  features: string[];
  thumbnail: string;
  images?: string[];
  link?: string;
  github: string;
  stacks: IStack[];
};

export type IStack = {
  name: string;
  url: string;
  icon: string;
  color: string;
};

export type ISocial = {
  name: string;
  link: string;
  icon: string;
};

export type IWorkExperience = {
  position: string;
  company: string;
  companyLink?: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
};

export type IEducation = {
  degree: string;
  school: string;
  schoolLink?: string;
  location: string;
  period: string;
  description?: string;
};
