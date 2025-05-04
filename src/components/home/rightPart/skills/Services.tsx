"use client";
import { services } from "@/lib/data/skills";
import { motion } from "framer-motion";

import { Rocket } from "lucide-react";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-card h-fit rounded-2xl p-4 shadow-md"
    >
      <div className="mb-6 flex items-center gap-4">
        <Rocket className="text-primary h-8 w-8" />
        <h3 className="text-2xl font-bold">Development Services</h3>
      </div>

      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.title} className="group flex items-start gap-4">
            <div className="bg-primary/10 group-hover:bg-primary/20 rounded-xl p-3 transition-all">
              <service.icon />
            </div>
            <div>
              <h4 className="font-semibold">{service.title}</h4>
              <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
