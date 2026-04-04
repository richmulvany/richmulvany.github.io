import useMediaQuery from '../../hooks/useMediaQuery';
import DesktopProjectCard from './DesktopProjectCard';
import MobileProjectCard from './MobileProjectCard';

/**
 * Responsive project card wrapper.
 * Selects desktop or mobile variant.
 */
export default function ProjectCard(props) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? (
    <DesktopProjectCard {...props} />
  ) : (
    <MobileProjectCard {...props} />
  );
}