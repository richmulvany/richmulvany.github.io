import { useMemo } from 'react';

export default function useProjectCardVariants(titleHeight) {
  return useMemo(() => {
    return {
      container: {
        collapsed: {
          y: 0,
          transition: {
            staggerChildren: 0,
            delayChildren: 0,
          },
        },
        expanded: {
          y: -16,
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
          },
        },
      },

      title: {
        collapsed: {
          top: '45%',
          transform: 'translateY(-50%)',
        },
        expanded: {
          top: '2rem',
          transform: 'translateY(0)',
          transition: { duration: 0.25 },
        },
      },

      description: {
        collapsed: { opacity: 0, y: 10 },
        expanded: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.25 },
        },
      },

      techContainer: {
        collapsed: {},
        expanded: {},
      },

      techItem: {
        collapsed: {
          opacity: 1,
          y: 172,
        },
        expanded: {
          opacity: 1,
          y: 232,
          transition: { duration: 0.2 },
        },
      },

      link: {
        collapsed: {
          opacity: 0,
          y: 6,
        },
        expanded: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.2 },
        },
      },

      mobileCard: {
        collapsed: { y: 0 },
        expanded: {
          y: -16,
          transition: { type: 'spring', stiffness: 320, damping: 28 },
        },
      },

      descriptionPosition: {
        top: titleHeight + 40,
      },
    };
  }, [titleHeight]);
}