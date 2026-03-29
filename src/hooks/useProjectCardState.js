import { useState } from "react";

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