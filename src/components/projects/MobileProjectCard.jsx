import { motion } from 'framer-motion';
import Color from 'color';
import { PROJECT_ACTIONS } from '../../config/projectActions';
import { LAYOUT_SPRING, FADE_FAST } from '../../config/animations';
import useProjectCardVariants from '../../hooks/animations/useProjectCardVariants';

/**
 * Mobile project card.
 * Expands on tap.
 */
export default function MobileProjectCard({ project, bgColor, pillColor, state }) {
  const { expanded, setLocked } = state;
  const v = useProjectCardVariants(0);
  const mode = expanded ? 'expanded' : 'collapsed';
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
      variants={v.mobileCard}
      animate={mode}
      initial="collapsed"
    >
      <div className="h-[30rem] px-6 py-6 flex flex-col justify-between">
        <motion.div
          className={`flex flex-col items-center text-center ${expanded ? 'mt-2' : 'justify-center flex-1'}`}
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
              {project.tech.map((t) => (
                <h1
                  key={t}
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

        {expanded && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={FADE_FAST}
            className="text-gray-700 text-sm leading-relaxed text-justify flex-1 flex items-center"
          >
            {project.description}
          </motion.p>
        )}

        {expanded && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={FADE_FAST}
            className="tracking-tight leading-tight mt-4 text-left text-orange-600 font-medium"
          >
            <h2>{Action}</h2>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
