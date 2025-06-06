/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import type React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        onClick={() => {
          if (item === "Home") {
            router.push("/");
          }
        }}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="shadow-input relative flex justify-center gap-8 space-x-4 rounded-full border border-transparent bg-white px-8 py-6 dark:border-white/[0.2] dark:bg-black"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  fullstack,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  fullstack: string | undefined;
}) => {
  return (
    <a href={href} className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
      <Image
        src={src || "/placeholder.svg"}
        width={140}
        height={70}
        alt={title}
        className="w-full max-w-[140px] shrink-0 rounded-md shadow-2xl sm:w-auto"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
          {`${fullstack ? " (Fullstack)" : ""}`}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="cursor-pointer text-neutral-700 hover:text-black dark:text-neutral-200">
      {children}
    </a>
  );
};
