import React from 'react';

const svgIcons = {
  GitHub: {
    viewBox: '0 0 496 512',
    path: 'M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z',
  },
  LinkedIn: {
    viewBox: '0 0 448 512',
    path: 'M100.28 448H7.4V148.9h92.88zm-46.44-341C24.06 107 0 82.94 0 53.58A53.58 53.58 0 0 1 53.58 0C82.94 0 107 24.06 107 53.58 107 82.94 82.94 107 53.84 107zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.28-79.2-48.28 0-55.68 37.7-55.68 76.7V448h-92.68V148.9h89.08v40.8h1.28c12.4-23.5 42.68-48.28 87.88-48.28 94 0 111.28 61.88 111.28 142.28V448z',
  },
};

export default function SocialIcon({ social, size = 20, className = '' }) {
  // Lucide
  if (social.type === 'lucide' && social.icon) {
    const Icon = social.icon;
    return <Icon size={size} className={className} />;
  }

  // Custom SVG
  if (social.type === 'svg') {
    const icon = svgIcons[social.title];
    if (!icon) return null;

    return (
      <svg
        viewBox={icon.viewBox}
        width={size}
        height={size}
        fill="currentColor"
        className={className}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  return null;
}
