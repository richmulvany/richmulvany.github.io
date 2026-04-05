import { useEffect, useState } from 'react';

/**
 * Media query hook.
 * Tracks whether a CSS media query matches.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
