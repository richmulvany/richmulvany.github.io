import { useMemo } from 'react';
import { FADE_FAST, LAYOUT_SPRING, DURATION_MEDIUM, EASE_OUT } from '../../config/animations';

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
            staggerChildren: 0.03,
            delayChildren: 0.06,
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
          transition: { duration: DURATION_MEDIUM, ease: EASE_OUT },
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
          transition: FADE_FAST,
        },
      },

      description: {
        collapsed: { opacity: 0, y: 10 },
        expanded: {
          opacity: 1,
          y: 0,
          transition: FADE_FAST,
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
          transition: FADE_FAST,
        },
      },

      mobileCard: {
        collapsed: { y: 0 },
        expanded: {
          y: -16,
          transition: LAYOUT_SPRING,
        },
      },

      descriptionPosition: {
        top: titleHeight + 40,
      },
    };
  }, [titleHeight]);
}