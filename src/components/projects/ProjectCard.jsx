import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ project, bgColor, borderColor, pillColor }) {
  const [locked, setLocked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const expanded = hovered || locked;

  const actionMap = {
    blog: "Read Blog →",
    proj: "View Project →",
  };

  const Action = actionMap[project.type];
  if (!Action) return null;

  return (
    <motion.div
      onClick={() => setLocked(!locked)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-4xl shadow-lg p-8 max-w-3xl h-96 mx-auto cursor-pointer overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      <motion.h2
        className="text-2xl font-semibold left-10 right-8 absolute"
        initial={{ top: "50%", transform: "translateY(-50%)" }}
        animate={{
          top: expanded ? "2rem" : "45%",
          transform: expanded ? "translateY(0) translateX(0)" : "translateY(-50%) translateX(0%)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
      >
        {project.title}
      </motion.h2>

      {/* Description */}

      <motion.p
        className="text-gray-600 absolute mt-10 left-10 right-10 overflow-hidden line-clamp-7"
        initial={{ opacity: 0, x: -30 }}       // start slightly left
        animate={{
          opacity: expanded ? 1 : 0,
          x: expanded ? 0 : -30, 
      // slide to original position on hover/lock
        }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      >
        {project.description}
      </motion.p>

      {/* Pills */}
      <motion.div
        className="flex flex-wrap gap-2 absolute left-8"
        initial={{ top: "55%" }}
        animate={{
          top: expanded ? "auto" : "55%",
          bottom: expanded ? "4.5rem" : "auto%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
      >
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-5 py-3 rounded-full text-gray-700"
            style={{ backgroundColor: pillColor }}
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Link */}
      <motion.a
        href={project.link}
        target="_blank"
        className="text-sm text-orange-600 hover:text-orange-400 absolute bottom-[2rem] left-10 right-0"
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: expanded ? 1 : 0,
          y: expanded ? 0 : 8,
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {Action}
      </motion.a>
    </motion.div>
  );
}