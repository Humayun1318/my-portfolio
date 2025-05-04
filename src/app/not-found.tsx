"use client";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
      <div className="w-full max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mx-auto mb-8"
        >
          <div className="relative inline-block">
            <Rocket className="h-32 w-32 text-purple-400" strokeWidth={1} />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-8xl font-bold text-transparent">
            404
          </h1>
          <p className="mb-6 text-2xl text-gray-200">Oops! Lost in the digital cosmos?</p>
          <p className="mb-8 text-gray-400">
            The page you&#39;re looking for has been abducted by aliens. Let&#39;s get you back
            home!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="mx-auto flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/30"
          >
            Beam Me Home
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="h-2 w-2 rounded-full bg-purple-400 opacity-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
