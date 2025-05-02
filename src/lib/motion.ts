import { motion } from "framer-motion";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const MotionDiv = motion.div;
export const MotionNav = motion.nav;
