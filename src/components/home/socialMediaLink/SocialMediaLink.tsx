import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaLink = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="h-5 w-5 hover:text-blue-500" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="h-5 w-5 hover:text-blue-700" />
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-5 w-5 hover:text-gray-700 dark:hover:text-white" />
      </a>
    </div>
  );
};

export default SocialMediaLink;
