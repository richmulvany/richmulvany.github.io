import { motion } from "framer-motion";
import useProjectCardState from "../../hooks/useProjectCardState";

export default function MobileProjectCard({ project, bgColor, pillColor }) {
  const { expanded, setLocked } = useProjectCardState();

  const actionMap = {
    blog: "Read Blog →",
    proj: "View Project →",
  };
  const Action = actionMap[project.type];

  return (
    <motion.div
        onClick={(e) => {
            e.stopPropagation();
            setLocked((p) => !p);
        }}
        className="relative rounded-3xl ml-4 mr-4 shadow-lg cursor-pointer overflow-hidden"
        style={{ backgroundColor: bgColor }}
        layout
        transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
        animate={{ y: expanded ? -16 : 0 }}
        >
        <div className="h-[30rem] px-6 py-6 flex flex-col justify-between">
            {/* Top */}
            <motion.div
            className={`flex flex-col items-center text-center ${
                expanded ? "mt-2" : "justify-center flex-1"
            }`}
            layout
            transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
            >
            <motion.h2 className="tracking-tight leading-tight text-2xl font-semibold" layout>
                {project.title}
            </motion.h2>

            {!expanded && (
                <motion.div
                className="flex flex-wrap justify-center mt-6 gap-3"
                layout
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                >
                {project.tech.map((t, i) => (
                    <p
                    key={i}
                    className="text-sm px-5 py-2 rounded-full font-medium"
                    style={{ backgroundColor: pillColor }}
                    >
                        {t}
                    </p>
                ))}
                </motion.div>
            )}
            </motion.div>

            {/* Middle */}
            {expanded && (
            <motion.p
                className="text-gray-700 text-sm leading-relaxed text-justify flex-1 flex items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
            >
                {project.description}
            </motion.p>
            )}

            {/* Bottom */}
            {expanded && (
            <motion.a
                href={project.link}
                target="_blank"
                className="tracking-tight leading-tight mt-4 text-left text-orange-600 font-medium"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
            >
                <h2>
                    {Action}
                </h2>
            </motion.a>
            )}
        </div>
        </motion.div>
  )
};