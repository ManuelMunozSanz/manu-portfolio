"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mí</SectionHeading>

      <p className="mb-3">
        Soy una persona <span className="font-bold">creativa</span> y{" "}
        <span className="font-bold">resolutiva</span>, con facilidad para
        adaptarme a distintos entornos. Siempre me han interesado la{" "}
        <span className="font-bold">tecnología</span> y lo{" "}
        <span className="font-bold">audiovisual</span>, y la programación me
        permite fusionar mis intereses{" "}
        <span className="italic">técnicos y artísticos</span>.
      </p>

      <p className="mb-3">
        Me gusta desarrollar{" "}
        <span className="font-bold">soluciones prácticas</span> con un enfoque{" "}
        <span className="italic">limpio y visualmente cuidado</span>. Presto
        atención a los detalles y doy importancia tanto al{" "}
        <span className="font-bold">código</span> como a la{" "}
        <span className="font-bold">experiencia de usuario</span>. Disfruto del
        trabajo en equipo y de poder{" "}
        <span className="underline">aprender y compartir conocimientos</span>.
      </p>

      <p>
        Fuera del trabajo, disfruto del{" "}
        <span className="font-bold">deporte</span>, la{" "}
        <span className="font-bold">ilustración</span> y crear{" "}
        <span className="font-bold">contenido visual</span>. Me encanta pasar
        tiempo al aire libre con mi perro y compartir buenos ratos con mi gente.
      </p>
    </motion.section>
  );
}
