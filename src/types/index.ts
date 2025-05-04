export interface NavItem {
  id: string;
  label: string;
}

export interface Service {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface SoftSkill {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  content: string;
  tags: string[];
  image: string;
  slug: string;
  liveUrl: string;
  backendUrl?: string;
  githubUrl?: string;
  features: string[];
  techStack: {
    name: string;
    icon: string;
  }[];
}
