import { useState, useRef } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import useScrollSource from '../../hooks/useScrollSource';
import useInView from '../../hooks/useInView';
import useMediaQuery from '../../hooks/useMediaQuery';
import SocialsFab from '../socials/SocialsFab';

export default function ProjectStack() {
  const scrollY = useMotionValue(0);
  const [scrollTop, setScrollTop] = useState(0);

  // section tracking
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.2);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // unified scroll handling
  useScrollSource((value) => {
    scrollY.set(value * 0.3);
    setScrollTop(value * 0.3);
  });

  const opacity = useTransform(scrollY, [0, 120], [1, 0]);
  const y = useTransform(scrollY, [0, 120], [0, -20]);

  const colorPalette = [
    {
      bg: 'rgba(245, 245, 244)',
      border: 'rgba(249, 250, 251)',
      pill: 'rgba(231, 229, 228, 0.6)',
    },
    {
      bg: 'hsl(32, 70%, 94%)',
      border: 'hsl(32, 75%, 86%)',
      pill: 'hsl(32, 80%, 91%)',
    },
    {
      bg: 'hsl(32, 80%, 88%)',
      border: 'hsl(32, 85%, 78%)',
      pill: 'hsl(32, 90%, 85%)',
    },
    {
      bg: 'hsl(32, 90%, 82%)',
      border: 'hsl(32, 95%, 70%)',
      pill: 'hsl(32, 100%, 79%)',
    },
  ];

  return (
    <>
      {/* Floating socials (mobile only) */}
      <SocialsFab show={!isDesktop && inView} scrollY={scrollY} />

      <div
        ref={sectionRef} // Triggers the button
        className="relative w-full md:max-w-4xl mx-auto"
      >
        {/* Background */}
        <div
          className="absolute inset-0 mb-4 rounded-3xl"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(245, 245, 244,1.0) 0%,
                rgba(245, 245, 244,0.1) 10%,
                rgba(245, 245, 244,0.0) 50%,
                rgba(245, 245, 244,0.1) 90%,
                rgba(245, 245, 244,1.0) 100%
              )
            `,
          }}
        />

        {/* Content */}
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
                const colors = colorPalette[index % colorPalette.length];

                return (
                  <motion.div
                    key={project.title}
                    className="sticky mt-6 md:mt-8"
                    style={{
                      top: `${index * 57}px`,
                      zIndex: index + 1,
                    }}
                  >
                    <ProjectCard project={project} bgColor={colors.bg} pillColor={colors.pill} />
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
