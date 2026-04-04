import useMediaQuery from '../../hooks/useMediaQuery';
import DesktopProjectCard from './DesktopProjectCard';
import MobileProjectCard from './MobileProjectCard';
import { BREAKPOINTS } from '../../config/breakpoints';

/**
 * Responsive project card wrapper.
 * Selects desktop or mobile variant.
 */
export default function ProjectCard(props) {
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  return isDesktop ? (
    <DesktopProjectCard {...props} />
  ) : (
    <MobileProjectCard {...props} />
  );
}