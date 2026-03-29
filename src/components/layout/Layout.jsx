import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function Layout({ sidebar, children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <DesktopLayout sidebar={sidebar}>{children}</DesktopLayout>;
  }

  return <MobileLayout>{children}</MobileLayout>;
}