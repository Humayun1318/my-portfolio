/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code } from "lucide-react";
import { technicalSkills } from "@/lib/data/skills";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function TechnicalSkills() {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-md">
      <div className="mb-8 flex items-center gap-4">
        <Code className="text-primary h-8 w-8" />
        <h3 className="text-2xl font-bold">Technical Proficiencies</h3>
      </div>

      <div className="space-y-6">
        {technicalSkills.map((category) => (
          <div key={category.name} className="space-y-4">
            <div className="flex items-center gap-3 border-b pb-3">
              <category.icon className="text-primary h-6 w-6" />
              <h4 className="text-lg font-semibold">{category.name}</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {category.items.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillItem({ skill }: { skill: any }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-muted/10 rounded-lg p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={skill.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-sm"
                />
                <span className="font-medium break-all">{skill.name}</span>
              </div>
            </div>
            <div className="bg-muted relative h-2 w-full rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                className={`absolute h-full rounded-full ${skill.color}`}
              />
            </div>
            <div className="text-muted-foreground mt-1 text-right text-xs">{skill.proficiency}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {skill.status === "learning" ? (
            <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-600">
              Learning
            </span>
          ) : (
            <span className="">{skill.proficiency}</span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
