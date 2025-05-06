"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { groupedSkills } from "@/lib/data";
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
    (
      acc: Record<string, { icon: JSX.Element; skills: string[] }>,
      [category, { icon, skills }]
    ) => {
      const filtered = skills.filter((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

      if (filtered.length > 0) {
        acc[category] = { icon, skills: filtered };
      }
      return acc;
    },
    {}
  );

  const { ref } = useSectionInView("Habilidades", 0.5);

  const groupedPairs = Object.entries(filteredGroupedSkills).reduce(
    (
      acc: [string, { icon: JSX.Element; skills: string[] }][][],
      [category, { icon, skills }],
      idx,
      arr
    ) => {
      if (idx % 2 === 0) {
        acc.push([[category, { icon, skills }]]);
      } else {
        acc[acc.length - 1].push([category, { icon, skills }]);
      }
      return acc;
    },
    []
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-0"
    >
      <SectionHeading>Mis habilidades</SectionHeading>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar habilidades..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white/10 dark:text-white dark:placeholder-white/60"
        />
      </div>

      <div className="space-y-6">
        {groupedPairs.map((pair, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pair.map(([category, { icon, skills }]) => (
              <div key={category} className="p-4">
                <h3 className="text-lg font-bold text-gray-500 dark:text-white text-center mb-2 tracking-tight flex items-center justify-center gap-2">
                  {icon} {category}
                </h3>
                <div className="border rounded-xl p-4 dark:border-white/20">
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
              </div>
            ))}
          </div>
        ))}

        {/* Mensaje cuando no hay habilidades encontradas */}
        {Object.keys(filteredGroupedSkills).length === 0 && (
          <p className="text-center text-gray-500 dark:text-white/60">
            No se encontraron habilidades que coincidan con la búsqueda...
            <br />
            ¡Pero siempre estoy listo para aprender algo nuevo! 😉
          </p>
        )}
      </div>
    </section>
  );
}
