import { motion } from "framer-motion";
import useProjectCardState from "../../hooks/useProjectCardState";

export default function DesktopProjectCard({ project, bgColor, pillColor }) {
  const { expanded, setHovered, setLocked } = useProjectCardState();

  const actionMap = {
    blog: "Read Blog →",
    proj: "View Project →",
  };

  const Action = actionMap[project.type];

  return (
    <motion.div
      onClick={() => setLocked((p) => !p)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-4xl shadow-lg p-8 ml-8 mr-8 flex h-96 mx-auto cursor-pointer overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <motion.h2
        className="tracking-tight leading-tight absolute left-0 right-0 px-10 text-3xl"
        initial={{ top: "50%", transform: "translateY(-50%)" }}
        animate={{
          top: expanded ? "2rem" : "45%",
          transform: expanded ? "translateY(0)" : "translateY(-50%)",
        }}
      >
        {project.title}
      </motion.h2>

      <motion.p
        className="absolute mt-10 left-10 right-10 text-md text-gray-600"
        animate={{ opacity: expanded ? 1 : 0 }}
      >
        {project.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2 absolute left-0 right-0 px-8 justify-start"
        animate={{
          bottom: expanded ? "4.5rem" : "auto",
          top: expanded ? "auto" : "55%",
        }}
      >
        {project.tech.map((t, i) => (
          <h1 key={i} className="px-5 py-3 rounded-full"
            style={{ backgroundColor: pillColor }}>
            {t}
          </h1>
        ))}
      </motion.div>

      <motion.a
        href={project.link}
        className="tracking-tight leading-tight absolute bottom-8 left-10 text-orange-600"
        animate={{ opacity: expanded ? 1 : 0 }}
      >
        <h2>
            {Action}
        </h2>
      </motion.a>
    </motion.div>
  );
}