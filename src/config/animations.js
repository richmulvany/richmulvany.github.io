/**
 * Shared animation configurations.
 */

// Duration constants
export const DURATION_FAST = 0.2;
export const DURATION_MEDIUM = 0.25;
export const DURATION_SLOW = 0.4;

// Easing curves
export const EASE_OUT = [0.22, 1, 0.36, 1]; // smooth ease-out
export const EASE_IN_OUT = [0.4, 0, 0.2, 1];
export const EASE_IN = [0.42, 0, 1, 1];

// Standard transitions
export const FADE_FAST = { duration: DURATION_FAST, ease: EASE_OUT };
export const FADE_MEDIUM = { duration: DURATION_MEDIUM, ease: EASE_OUT };
export const FADE_SLOW = { duration: DURATION_SLOW, ease: EASE_OUT };
export const LAYOUT_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 28,
};
