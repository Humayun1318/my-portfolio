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
  { id: "github", url: "https://github.com/Humayun1318", icon: FaGithub },
  { id: "linkedin", url: "https://www.linkedin.com/in/humayun-kabir-b14a65160", icon: FaLinkedin },
  { id: "twitter", url: "https://x.com/c5070f901d2345b", icon: FaTwitter },
  { id: "email", url: "mailto:humayunkabir6267@gmail.com", icon: Mail },
];
