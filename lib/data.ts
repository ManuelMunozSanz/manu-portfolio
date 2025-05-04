import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import leaflet3dMarkerImg from "@/public/leaflet-3d-marker.webp";
import classRoomIslandImg from "@/public/classroom-island.webp";
import amigosEnJuegoImg from "@/public/amigos-en-juego.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Amigos en Juego",
    description:
      "App interactiva que conecta a varios jugadores en tiempo real mediante WebSockets. Permite crear salas privadas para poner a prueba cuánto se conocen.",
    tags: ["Node.js", "Next.js", "Express", "Tailwind", "socket.io"],
    imageUrl: amigosEnJuegoImg,
  },
  {
    title: "Leaflet 3D Marker",
    description:
      "Es un paquete npm diseñado para mejorar tus mapas Leaflet en React, añadiendo la capacidad de integrar fácilmente marcadores 3D. ",
    tags: ["npm", "React", "JavaScript", "TypeScript"],
    imageUrl: leaflet3dMarkerImg,
  },
  {
    title: "ClassRoom Island",
    description:
      "Aplicación web para enfocar la educación de una manera diferente. Permite crear un espacio virtual para aprender y jugar.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    imageUrl: classRoomIslandImg,
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
    "Vercel",
    "Selenium",
  ],
};
