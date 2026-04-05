import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import SocialIcon from './SocialIcon';
import { socials } from '../../data/socials';
import { BREAKPOINTS } from '../../config/breakpoints';
import { motion } from 'framer-motion';
import { FADE_FAST } from '../../config/animations';

/**
 * Social icons bar.
 * Displays icons with hover interaction and optional tooltip text (desktop only).
 */
export default function SocialsBar({ iconColor, hoverColor, iconSize }) {
  const [hoveredText, setHoveredText] = useState('');
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  return (
    <div className="relative items-center mt-4">
      {/* Icon row */}
      <div className="flex justify-center gap-12 md:gap-10">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredText(s.description)}
            onMouseLeave={() => setHoveredText('')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...FADE_FAST, delay: i * 0.05 }}
            className="transition-colors"
          >
            <motion.div
              style={{ color: iconColor }}
              whileHover={{ color: hoverColor }}
            >
              <SocialIcon social={s} size={parseInt(iconSize)} />
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Hover text (desktop only) */}
      {isDesktop && (
        <div
          className="absolute top-full mt-5 left-1/2 -translate-x-1/2 h-6 text-sm whitespace-nowrap"
          style={{ color: hoverColor }}
        >
          {hoveredText}
        </div>
      )}
    </div>
  );
}