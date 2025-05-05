"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { groupedSkills, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const [search, setSearch] = useState("");

  const filteredGroupedSkills = Object.entries(groupedSkills).reduce(
    (acc: Record<string, string[]>, [category, skills]) => {
      const filtered = skills.filter((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {}
  );
  const { ref } = useSectionInView("Habilidades", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white/10 dark:text-white dark:placeholder-white/60"
        />
      </div>

      <div className="space-y-6">
        {Object.entries(filteredGroupedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-gray-500 dark:text-white text-center mb-2 tracking-tight">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800 dark:text-white/80">
              {skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10"
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
        {Object.keys(filteredGroupedSkills).length === 0 && (
          <p className="text-center text-gray-500 dark:text-white/60">
            No skills match your search.
          </p>
        )}
      </div>
    </section>
  );
}
