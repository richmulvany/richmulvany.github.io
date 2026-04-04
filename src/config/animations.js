/**
 * Shared animation configurations.
 */

export const FADE_FAST = {
  duration: 0.25,
};

export const LAYOUT_SPRING = {
  layout: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

export const SPRING_EXPAND = {
  type: 'spring',
  stiffness: 320,
  damping: 28,
  default: {
    duration: 0.25,
    ease: 'easeInOut',
  },
};