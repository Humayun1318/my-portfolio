// import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

// const SocialMediaLink = () => {
//   return (
//     <div className="flex items-center gap-4">
//       <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
//         <FaTwitter className="h-5 w-5 hover:text-blue-500" />
//       </a>
//       <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//         <FaLinkedin className="h-5 w-5 hover:text-blue-700" />
//       </a>
//       <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
//         <FaGithub className="h-5 w-5 hover:text-gray-700 dark:hover:text-white" />
//       </a>
//     </div>
//   );
// };

// export default SocialMediaLink;

// components/home/leftPart/socialMediaLink/SocialMediaLink.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/constants";

export default function SocialMediaLink() {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("text-muted-foreground hover:text-foreground transition-colors")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          <link.icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
}
