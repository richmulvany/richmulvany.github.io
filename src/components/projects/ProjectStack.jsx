import { useRef } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import ProjectCardContainer from './ProjectCardContainer';
import { projects } from '../../data/projects';
import useScrollSource from '../../hooks/useScrollSource';
import useInView from '../../hooks/useInView';
import useMediaQuery from '../../hooks/useMediaQuery';
import SocialsFab from '../socials/SocialsFab';
import { PROJECT_COLORS } from '../../config/projectColors';
import { BREAKPOINTS } from '../../config/breakpoints';

/**
 * Project stack section.
 * Handles scroll animation and sticky card stacking.
 */
export default function ProjectStack() {
  const scrollY = useMotionValue(0);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.2);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  useScrollSource((value) => {
    scrollY.set(value * 0.3);
  });

  const opacity = useTransform(scrollY, [0, 120], [1, 0]);
  const y = useTransform(scrollY, [0, 120], [0, -20]);

  return (
    <>
      <SocialsFab show={!isDesktop && inView} />

      <div ref={sectionRef} className="relative w-full md:max-w-4xl mx-auto">
        {/* Background gradient */}
        <div
          className="absolute inset-0 mb-4 rounded-3xl"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(245,245,244,1) 0%,
                rgba(245,245,244,0.1) 10%,
                rgba(245,245,244,0) 50%,
                rgba(245,245,244,0.1) 90%,
                rgba(245,245,244,1) 100%
              )
            `,
          }}
        />

        <section className="relative pt-16 md:pt-38">
          <div className="relative z-10">
            <motion.p
              style={{ opacity, y }}
              className="text-4xl md:text-5xl text-center mb-20 md:mb-36"
            >
              My Projects
            </motion.p>

            <div className="relative">
              {projects.toReversed().map((project, index) => {
                const colors = PROJECT_COLORS[index % PROJECT_COLORS.length];

                return (
                  <motion.div
                    key={project.title}
                    className="sticky mt-6 md:mt-8"
                    style={{
                      top: `${index * 57}px`,
                      zIndex: index + 1,
                    }}
                  >
                    <ProjectCardContainer
                      project={project}
                      bgColor={colors.bg}
                      pillColor={colors.pill}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="h-24 md:h-[12.2vh]" />
        </section>
      </div>
    </>
  );
}