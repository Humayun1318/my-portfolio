// components/Footer.tsx
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ProfessionalFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        {/* Branding Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Tech Innovator</h3>
          <p className="text-muted-foreground text-sm">Bridging ideas with technical execution</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Explore</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="/projects" className="hover:text-primary text-sm transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary text-sm transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary text-sm transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Technical Resources */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Resources</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="/docs" className="hover:text-primary text-sm transition-colors">
              Documentation
            </Link>
            <Link href="/blog" className="hover:text-primary text-sm transition-colors">
              Technical Blog
            </Link>
            <Link href="/tools" className="hover:text-primary text-sm transition-colors">
              Development Tools
            </Link>
          </nav>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:bg-muted rounded-lg p-2 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="hover:bg-muted rounded-lg p-2 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="hover:bg-muted rounded-lg p-2 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
