"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import manuImg from "@/public/manu-devanddel.webp";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const yearsOfExperience = new Date().getFullYear() - 2021;

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-5xl mx-auto px-6 sm:mt-28"
    >
      <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-center sm:justify-between mb-12">
        {/* Text section */}
        <motion.div
          className="text-center sm:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl font-bold  mb-1  ">Hola, soy</p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Manuel Muñoz
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-sans tracking-wide italic">
            Full-Stack Developer
          </h2>
          <p className="text-lg sm:text-xl max-w-xl">
            Cuento con más de{" "}
            <span className="font-medium">
              {yearsOfExperience} años de experiencia
            </span>{" "}
            en desarrollo de software, aplicando{" "}
            <span className="italic">buenas prácticas</span> y{" "}
            <span className="italic">metodologías ágiles</span> para construir
            soluciones{" "}
            <span className="underline">
              eficientes, escalables y de calidad
            </span>
            .
          </p>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={manuImg}
            alt="Retrato de Manuel"
            width={192}
            height={192}
            quality={95}
            priority
            className="rounded-full object-cover border-4 border-white shadow-lg dark:border-gray-800 w-32 h-32 sm:w-48 sm:h-48"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-3xl sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contacto");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/manuel-munoz-sanz/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ManuelMunozSanz"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}
