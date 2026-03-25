import { motion } from "framer-motion";

export default function ProjectCard({ project, bgColor, borderColor, pillColor }) {

  const actionMap = {
    "blog": "Read Blog →",
    "proj": "View Project →",
  };

  const Action = actionMap[project.type];

  if (!Action) return null;

  return (
    
    <motion.div
      className="rounded-4xl shadow-lg  p-8 max-w-3xl h-96 mx-auto hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative"
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
      <p className="text-gray-600 mb-6 mt-4">{project.description}</p>

      <div className="absolute left-8 bottom-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-5 py-3 rounded-full text-gray-700"
              style={{ backgroundColor: pillColor }}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          className="text-sm text-orange-600 hover:text-orange-400 ml-1"
        >
          {Action}
        </a>
      </div>
    </motion.div>
  );
}