import SocialsBar from '../socials/SocialsBar';
import ProfilePic from '../../assets/profile_pic.png';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../config/breakpoints';
import { FADE_FAST } from '../../config/animations';

/**
 * Profile header component.
 * Handles scroll-based animation for desktop view.
 */
export default function ProfileHeader({ compact = false }) {
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;
    const container = document.getElementById('scroll-container');
    const handleScroll = () => {
      if (!container) return;
      setScrolled(container.scrollTop > 40);
    };
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const shouldAnimate = isDesktop && scrolled;

  return (
    <div className="flex flex-col items-center text-left md:text-center">
      <div className={compact ? 'flex flex-inline' : 'text-center'}>
        {isDesktop && <h1 className="text-4xl mb-5">Richard Mulvany</h1>}

        <img
          src={ProfilePic}
          className={`object-cover ${compact ? 'w-32 h-32 rounded-3xl' : 'w-full rounded-2xl'}`}
        />

        <div className="flex flex-col gap-2">
          {!isDesktop && <h1 className="text-3xl ml-6 mb-2 mt-1">Richard Mulvany</h1>}

          {/* Shared animation container */}
          <div className={`relative min-h-[80px] flex items-start ${compact ? 'mt-0' : 'mt-4'}`}>
            {/* Description */}
            <motion.div
              className={`absolute w-full ${compact ? 'left-6' : 'left-0 top-2'}`}
              animate={{
                opacity: shouldAnimate ? 0 : 1,
                y: shouldAnimate ? -6 : 0,
              }}
              transition={FADE_FAST}
            >
              <p className="text-[#f98555] text-sm">Grayce Group for NEO NEXT+</p>
              <p className="text-gray-500 text-sm mb-6">
                Data Governance Engineer
                <br />
                MSc Data Science
              </p>
            </motion.div>

            {/* Desktop socials pill */}
            {isDesktop && (
              <motion.div
                className="absolute left-0 w-full"
                animate={{
                  opacity: shouldAnimate ? 1 : 0,
                  y: shouldAnimate ? 0 : 6,
                }}
                transition={FADE_FAST}
              >
                <div className="w-fit px-7 mt-2 mx-auto bg-taupe-200 rounded-full py-[1px] pb-4">
                  <SocialsBar iconColor="#666" hoverColor="#f98555" iconSize="26px" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile socials */}
      {!isDesktop && (
        <div className="w-fit px-4 py-[1px] mx-auto bg-taupe-300/36 rounded-full mt-4 z-20 pb-4">
          <SocialsBar iconColor="#666" hoverColor="#f98555" iconSize="30px" />
        </div>
      )}
    </div>
  );
}
