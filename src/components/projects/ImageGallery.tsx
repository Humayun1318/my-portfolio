"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden rounded-2xl border"
    >
      <div className="relative aspect-video">
        <Image src={images[0]} alt="Project screenshot" fill className="object-cover" />
      </div>
    </motion.div>
  );
}
