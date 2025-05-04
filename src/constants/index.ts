import { NavItem } from "@/types";
import { Mail } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { id: "github", url: "#", icon: FaGithub },
  { id: "linkedin", url: "#", icon: FaLinkedin },
  { id: "twitter", url: "#", icon: FaTwitter },
  { id: "email", url: "#", icon: Mail },
];
