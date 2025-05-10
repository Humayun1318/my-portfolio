import { Service, SoftSkill } from "@/types";
import { Code, Rocket, Users, BrainCircuit, Server, LayoutTemplate } from "lucide-react";
import mongoose from "../../../public/mongoose.svg";

export const LOGOS = {
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  tailwind: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  mongoose: mongoose,
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  daisyui:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  shadcn: "https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/og.jpg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  graphql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
};

export const technicalSkills = [
  {
    name: "Frontend Engineering",
    icon: LayoutTemplate,
    items: [
      {
        name: "JavaScript",
        icon: LOGOS.javascript,
        proficiency: "Strong",
        level: 90,
        color: "bg-green-500",
      },
      {
        name: "React",
        icon: LOGOS.react,
        proficiency: "Strong",
        level: 85,
        color: "bg-green-500",
      },
      {
        name: "Tailwind CSS",
        icon: LOGOS.tailwind,
        proficiency: "Expert",
        level: 95,
        color: "bg-green-700",
      },
      {
        name: "Bootstrap",
        icon: LOGOS.bootstrap,
        proficiency: "Expert",
        level: 95,
        color: "bg-green-700",
      },
      {
        name: "Next.js",
        icon: LOGOS.nextjs,
        proficiency: "Medium",
        level: 70,
        color: "bg-blue-500",
        status: "learning",
      },
      {
        name: "Redux",
        icon: LOGOS.redux,
        proficiency: "Medium",
        level: 70,
        color: "bg-blue-500",
        status: "learning",
      },
    ],
  },
  {
    name: "Backend Systems",
    icon: Server,
    items: [
      {
        name: "Node.js",
        icon: LOGOS.nodejs,
        proficiency: "Medium",
        level: 70,
        color: "bg-blue-500",
        status: "learning",
      },
      {
        name: "MongoDB",
        icon: LOGOS.mongodb,
        proficiency: "Basic",
        level: 50,
        color: "bg-orange-400",
        status: "learning",
      },
      {
        name: "Express",
        icon: LOGOS.express,
        proficiency: "Medium",
        level: 70,
        color: "bg-blue-500",
        status: "learning",
      },
      {
        name: "Mongoose",
        icon: LOGOS.mongoose,
        proficiency: "Basic",
        level: 50,
        color: "bg-orange-400",
        status: "learning",
      },
    ],
  },
  {
    name: "Tools & Libraries",
    icon: Code,
    items: [
      {
        name: "Git",
        icon: LOGOS.git,
        proficiency: "Strong",
        level: 80,
        color: "bg-green-500",
      },
      {
        name: "daisyUI",
        icon: LOGOS.daisyui,
        proficiency: "Strong",
        level: 80,
        color: "bg-blue-500",
      },
      {
        name: "shadcn/ui",
        icon: LOGOS.shadcn,
        proficiency: "Medium",
        level: 70,
        color: "bg-blue-500",
        status: "learning",
      },
      {
        name: "GitHub",
        icon: LOGOS.github,
        proficiency: "Expert",
        level: 90,
        color: "bg-green-700",
      },
    ],
  },
];

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    icon: Code,
    description: "End-to-end web application development with modern architecture",
  },
  {
    title: "UI/UX Implementation",
    icon: LayoutTemplate,
    description: "Pixel-perfect interface development with responsive design",
  },
  {
    title: "Performance Optimization",
    icon: Rocket,
    description: "Speed and efficiency enhancements for existing applications",
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Technical Passion",
    icon: BrainCircuit,
    description: "Continuous exploration of emerging technologies",
  },
  {
    title: "Collaborative Spirit",
    icon: Users,
    description: "Effective team communication and knowledge sharing",
  },
  {
    title: "Adaptive Learning",
    icon: BrainCircuit,
    description: "Quickly master new tools and workflows",
  },
  {
    title: "Problem Solving",
    icon: Code,
    description: "Analytical approach to complex technical challenges",
  },
];
