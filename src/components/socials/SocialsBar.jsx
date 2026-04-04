import { useState } from 'react';
import { socials } from '../../data/socials';
import useMediaQuery from '../../hooks/useMediaQuery';
import SocialIcon from './SocialIcon';
import { BREAKPOINTS } from '../../config/breakpoints';

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
          <a
            key={i}
            href={s.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredText(s.description)}
            onMouseLeave={() => setHoveredText('')}
            className="transition-colors"
          >
            <div
              style={{ color: iconColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = iconColor;
              }}
            >
              <SocialIcon social={s} size={parseInt(iconSize)} />
            </div>
          </a>
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