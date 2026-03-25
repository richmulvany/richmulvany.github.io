import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectStack() {
  const containerRef = useRef(null);

  const scrollY = useMotionValue(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      scrollY.set(container.scrollTop * 0.3);
      setScrollTop(container.scrollTop * 0.3);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Header animation
  const opacity = useTransform(scrollY, [0, 120], [1, 0]);
  const y = useTransform(scrollY, [0, 120], [0, -20]);

  // 🎨 Colour palette 
  const colorPalette = [
    // Neutral first card
    {
      bg: "rgba(245, 245, 244)",
      border: "rgba(249, 250, 251)",
      pill: "rgba(231, 229, 228, 0.6)",
    },

    // Going up in intensity
    {
      bg: "hsl(32, 70%, 94%)",
      border: "hsl(32, 75%, 86%)",
      pill: "hsl(32, 80%, 91%)",
    },
    {
      bg: "hsl(32, 80%, 88%)",
      border: "hsl(32, 85%, 78%)",
      pill: "hsl(32, 90%, 85%)",
    },
    {
      bg: "hsl(32, 90%, 82%)",
      border: "hsl(32, 95%, 70%)",
      pill: "hsl(32, 100%, 79%)",
    },

    // Coming back down (mirror)
    {
      bg: "hsl(32, 80%, 88%)",
      border: "hsl(32, 85%, 78%)",
      pill: "hsl(32, 90%, 85%)",
    },
    {
      bg: "hsl(32, 70%, 94%)",
      border: "hsl(32, 75%, 86%)",
      pill: "hsl(32, 80%, 91%)",
    },
  ];

  return (
    <section ref={containerRef} className="relative pt-16 flex justify-center">
      <div className="relative w-full max-w-4xl">

        {/* BACKGROUND LAYER */}
        <div
          className="absolute inset-0 rounded-3xl"
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
            backdropFilter: "blur(10px)",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 p-6">
          <motion.h2
            style={{ opacity, y }}
            className="text-5xl text-center mb-36 mt-30"
          >
            My Projects
          </motion.h2>

          <div className="relative">
            {projects.toReversed().map((project, index) => {
              // If it's the first card visually
              const isTopCard = index === 0;

              const colors = isTopCard
                ? {
                    bg: "rgba(245, 245, 244)", // neutral top card color
                    border: "rgba(249, 250, 251)",
                    pill: "rgba(231, 229, 228, 0.6)",
                  }
                : colorPalette[index % colorPalette.length];

              return (
                <motion.div
                  key={project.title}
                  className="sticky mt-8"
                  style={{
                    top: `${index * 44}px`,
                    zIndex: index + 1,
                  }}
                >
                  <ProjectCard
                    project={project}
                    bgColor={colors.bg}
                    borderColor={colors.border}
                    pillColor={colors.pill}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="h-[14.4vh]" />
      </div>
    </section>
  );
}