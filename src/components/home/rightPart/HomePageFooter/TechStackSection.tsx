"use client";
import { motion } from "framer-motion";
import { FiFigma, FiCode, FiCloud } from "react-icons/fi";

const TechStackSection = () => {
  return (
    <motion.section
      className="dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-4">
        <motion.div
          className="dark:bg-gray-850 p-8 md:p-10 dark:border-gray-700"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="flex gap-4">
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
                <FiFigma className="text-2xl text-blue-500 dark:text-blue-400" />
              </div>
              <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/30">
                <FiCode className="text-2xl text-purple-500 dark:text-purple-400" />
              </div>
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/30">
                <FiCloud className="text-2xl text-green-500 dark:text-green-400" />
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-100">
                Crafted with Care
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                Designed with flexibility in Figma and developed in Visual Studio Code by yours
                truly. Built using{" "}
                <span className="font-medium text-black dark:text-white">Next.js</span> and styled
                with <span className="font-medium text-black dark:text-white">Tailwind CSS</span>.
                Deployed seamlessly with{" "}
                <span className="font-medium text-black dark:text-white">Vercel</span>. All
                typography is set in the{" "}
                <span className="font-medium text-black dark:text-white">Inter </span>
                typeface for a clean and modern look.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStackSection;
