import { useState } from 'react';

/**
 * State hook for project card interactions.
 * Handles hover and lock states to determine expansion.
 */
export default function useProjectCardState() {
  const [locked, setLocked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const expanded = hovered || locked;

  return {
    expanded,
    locked,
    hovered,
    setLocked,
    setHovered,
  };
}