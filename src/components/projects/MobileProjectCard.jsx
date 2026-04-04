import { motion } from 'framer-motion';
import useProjectCardState from '../../hooks/useProjectCardState';
import Color from 'color';
import { PROJECT_ACTIONS } from '../../config/projectActions';
import { LAYOUT_SPRING, FADE_FAST } from '../../config/animations';

/**
 * Mobile project card.
 * Expands on tap.
 */
export default function MobileProjectCard({ project, bgColor, pillColor }) {
  const { expanded, setLocked } = useProjectCardState();

  const Action = PROJECT_ACTIONS[project.type];

  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
        setLocked((p) => !p);
      }}
      className="relative rounded-3xl ml-4 mr-4 shadow-lg cursor-pointer overflow-hidden"
      style={{ backgroundColor: bgColor }}
      layout
      transition={LAYOUT_SPRING}
      animate={{ y: expanded ? -16 : 0 }}
    >
      <div className="h-[30rem] px-6 py-6 flex flex-col justify-between">
        {/* Top section */}
        <motion.div
          className={`flex flex-col items-center text-center ${
            expanded ? 'mt-2' : 'justify-center flex-1'
          }`}
          layout
          transition={LAYOUT_SPRING}
        >
          <motion.h2 className="tracking-tight leading-tight text-3xl" layout>
            {project.title}
          </motion.h2>

          {!expanded && (
            <motion.div
              className="flex flex-wrap justify-center px-8 mt-6 gap-3"
              layout
              transition={LAYOUT_SPRING}
            >
              {project.tech.map((t, i) => (
                <h1
                  key={i}
                  className="text-md px-5 py-2 rounded-full font-medium"
                  style={{
                    backgroundColor: pillColor,
                    color: Color(pillColor).darken(0.55).hex(),
                  }}
                >
                  {t}
                </h1>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Description */}
        {expanded && (
          <motion.p
            className="text-gray-700 text-sm leading-relaxed text-justify flex-1 flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={FADE_FAST}
          >
            {project.description}
          </motion.p>
        )}

        {/* Link */}
        {expanded && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-tight leading-tight mt-4 text-left text-orange-600 font-medium"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={FADE_FAST}
          >
            <h2>{Action}</h2>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}