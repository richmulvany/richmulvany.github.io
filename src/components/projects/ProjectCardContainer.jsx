import useProjectCardState from '../../hooks/useProjectCardState';
import useMediaQuery from '../../hooks/useMediaQuery';
import DesktopProjectCard from './DesktopProjectCard';
import MobileProjectCard from './MobileProjectCard';
import { BREAKPOINTS } from '../../config/breakpoints';

/**
 * Container component for project cards.
 * Owns interaction state (hover/lock) and decides layout.
 */
export default function ProjectCardContainer(props) {
  const state = useProjectCardState();
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  if (isDesktop) {
    return <DesktopProjectCard {...props} state={state} />;
  }

  return <MobileProjectCard {...props} state={state} />;
}