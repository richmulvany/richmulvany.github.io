import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Color from 'color';
import { PROJECT_ACTIONS } from '../../config/projectActions';
import useProjectCardVariants from '../../hooks/animations/useProjectCardVariants';
import { FADE_FAST } from '../../config/animations';

/**
 * Desktop project card.
 * Expands on hover or click.
 */
export default function DesktopProjectCard({ project, bgColor, pillColor, state }) {
  const { expanded, setHovered, setLocked } = state;
  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) setTitleHeight(titleRef.current.offsetHeight);
  }, [project.title, expanded]);

  const v = useProjectCardVariants(titleHeight);
  const mode = expanded ? 'expanded' : 'collapsed';
  const Action = PROJECT_ACTIONS[project.type];

  return (
    <motion.div
      onClick={() => setLocked((p) => !p)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-4xl shadow-lg p-8 mx-8 flex h-96 cursor-pointer overflow-hidden"
      style={{ backgroundColor: bgColor }}
      variants={v.container}
      animate={mode}
      initial="collapsed"
    >
      <motion.h2
        ref={titleRef}
        variants={v.title}
        className="tracking-tight leading-tight absolute left-0 right-0 px-10 text-3xl truncate"
      >
        {project.title}
      </motion.h2>

      <motion.p
        variants={v.description}
        style={{ top: v.descriptionPosition.top }}
        className="absolute left-10 right-10 text-md text-gray-600 text-justify md:line-clamp-5 lg:line-clamp-10"
      >
        {project.description}
      </motion.p>

      <motion.div
        variants={v.techContainer}
        className="flex flex-wrap gap-2 absolute left-0 right-0 px-8"
      >
        {project.tech.map((t) => (
          <motion.h1
            key={t}
            variants={v.techItem}
            className="px-5 py-3 rounded-full"
            style={{
              backgroundColor: pillColor,
              color: Color(pillColor).darken(0.55).hex(),
            }}
          >
            {t}
          </motion.h1>
        ))}
      </motion.div>

      <motion.a
        href={project.link}
        variants={v.link}
        className="absolute bottom-8 left-10 text-orange-600"
      >
        <h2>{Action}</h2>
      </motion.a>
    </motion.div>
  );
}
