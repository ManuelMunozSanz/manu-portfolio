import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import leaflet3dMarkerImg from "@/public/leaflet-3d-marker.webp";
import classRoomIslandImg from "@/public/classroom-island.webp";
import amigosEnJuegoImg from "@/public/amigos-en-juego.webp";
import { url } from "inspector";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Acerca",
    hash: "#about",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
    roles: [
      {
        title: "IES Clara del Rey, Madrid, España",
        date: "",
        description:
          "Formación técnica especializada en desarrollo de aplicaciones de escritorio y móviles. Con énfasis en diseño de bases de datos y programación orientada a objetos.",
      },
    ],
  },
  {
    title: "Curso de Desarrollo de Aplicaciones Android",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    roles: [
      {
        title: "Universidad Popular Miguel Delibes",
        date: "",
        description:
          "Curso intensivo práctico centrado en el desarrollo de aplicaciones móviles nativas con Android Studio.",
      },
    ],
  },
  {
    title: "Programador en Prácticas Profesionales",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
    roles: [
      {
        title: "Accenture, Madrid, España",
        date: "",
        description:
          "Colaboración en proyectos para grandes empresas en entornos ágiles (Scrum). Desarrollo de funcionalidades con Java, Python y JavaScript, participación en diseño técnico, pruebas unitarias y mantenimiento de código en producción.",
      },
    ],
  },
  {
    title: "Curso de Analista Programador en Aplicaciones Corporativas",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
    roles: [
      {
        title: "Intecssa",
        date: "",
        description:
          "Capacitación avanzada en análisis, diseño y programación de soluciones empresariales con Python, Java y C#. Énfasis en arquitectura de software, buenas prácticas y patrones de diseño aplicados al entorno corporativo.",
      },
    ],
  },
  {
    title: "Dev&Del, S.L.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Actualidad",
    roles: [
      {
        title: "Desarrollador en formación",
        date: "Feb 2022 - Jul 2022",
        description:
          "Participación en el desarrollo de servicios web para el sector asegurador, empleando tecnologías como Java, Spring Boot y Angular.",
      },
      {
        title: "Desarrollador de software",
        date: "Jul 2022 - Dic 2022",
        description:
          "Desarrollo de un sistema OCR para digitalización y procesamiento automático de facturas. Stack tecnológico: Python, Elastic Stack (Elasticsearch, Logstash, Kibana), y Docker.",
      },
      {
        title: "Desarrollador Full-Stack",
        date: "Dic 2022 - Jun 2023",
        description:
          "Diseño y desarrollo de una aplicación web con enfoque en experiencia de usuario, autenticación segura y análisis de amenazas de ransomware. Tecnologías utilizadas: React, Next.js, Node.js, MongoDB.",
      },
      {
        title: "Desarrollador de software - Automatización RPA",
        date: "Jun 2023 - Ene 2024",
        description:
          "Implementación de soluciones de automatización robótica de procesos (RPA) para optimizar flujos empresariales. Desarrollo de bots con C#, Selenium y herramientas RPA.",
      },
      {
        title: "Desarrollador Backend - Arquitectura Spring y DevOps",
        date: "Ene 2024 - Actualidad",
        description:
          "Diseño e implementación de arquitectura backend con Spring Boot para soluciones RPA. Integración de microservicios y despliegues automatizados en Azure DevOps, incluyendo pipelines CI/CD.",
      },
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Amigos en Juego",
    description:
      "App interactiva que conecta a varios jugadores en tiempo real mediante WebSockets. Permite crear salas privadas para poner a prueba cuánto se conocen.",
    tags: ["Node.js", "Next.js", "Express", "Tailwind", "socket.io"],
    imageUrl: amigosEnJuegoImg,
    url: "https://party-quiz-client.vercel.app/",
  },
  {
    title: "Leaflet 3D Marker",
    description:
      "Es un paquete npm diseñado para mejorar tus mapas Leaflet en React, añadiendo la capacidad de integrar fácilmente marcadores 3D. ",
    tags: ["npm", "React", "JavaScript", "TypeScript"],
    imageUrl: leaflet3dMarkerImg,
    url: "https://www.npmjs.com/package/leaflet-3d-marker",
  },
  {
    title: "ClassRoom Island",
    description:
      "Aplicación web para enfocar la educación de una manera diferente. Permite crear un aula virtual donde se aprenderá jugando. (En desarrollo)",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    imageUrl: classRoomIslandImg,
    url: "",
  },
] as const;

export const skillsData = [
  //Web Development
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",

  "Tailwind",
  // Backend Development
  "Java",
  "Python",
  "C#",
  ".NET",
  "Spring",
  "Node.js",
  "Express",

  // Database Management
  "MySQL",
  "SQLite",
  "PostgreSQL",
  "MongoDB",

  // DevOps and Version Control
  "Git",
  "AzureDevOps",
  "GitHub",
  "Docker",
  "CI/CD",

  // ETC
  "Selenium",
] as const;

export const groupedSkills: Record<string, string[]> = {
  "🧑‍💻 Frontend": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Tailwind",
    "Framer Motion",
  ],
  "⚙️ Backend": [
    "Java",
    "Spring Boot",
    "Node.js",
    "Express",
    "C#",
    ".NET",
    "Python",
  ],
  "🛢 Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  "🔧 DevOps & Tools": [
    "Git",
    "GitHub",
    "Azure DevOps",
    "CI/CD",
    "Docker",
    "Elastic (ELK) Stack",
    "Postman",
    "Vercel",
    "Selenium",
  ],
};
