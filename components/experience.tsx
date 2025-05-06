"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiencia", 0.2);
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-full"
    >
      <span ref={ref} className="block h-1" />{" "}
      <SectionHeading>Mi experiencia</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((company, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={company.date}
            icon={company.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="text-base font-semibold text-[1.1rem] dark:text-white">
              {company.title}
            </h3>
            <div className="mt-2 space-y-5">
              {company.roles.map((role, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-base font-semibold text-gray-600 dark:text-white">
                    {role.title}
                  </h4>
                  <p className="!mt-0 text-xs tracking-wide text-gray-500 dark:text-white/50">
                    {role.date}
                  </p>
                  <p className="!mt-1 text-sm text-gray-600 dark:text-white/75">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
