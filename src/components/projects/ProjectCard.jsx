import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopProjectCard from "./DesktopProjectCard";
import MobileProjectCard from "./MobileProjectCard";

export default function ProjectCard(props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <DesktopProjectCard {...props} />;
  }

  return <MobileProjectCard {...props} />;
}