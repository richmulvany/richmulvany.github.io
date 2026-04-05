import useMediaQuery from '../../hooks/useMediaQuery';
import MobileLayout from './MobileLayout';
import { BREAKPOINTS } from '../../config/breakpoints';

/**
 * Root responsive layout switcher.
 * Chooses between mobile and desktop layouts.
 */
export default function Layout({ sidebar, children }) {
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  if (!isDesktop) {
    return <MobileLayout>{children}</MobileLayout>;
  }

  return (
    <div className="h-screen flex bg-taupe-200 text-gray-900">
      <aside className="w-1/3 flex-shrink-0 p-10 bg-stone-100">{sidebar}</aside>

      <main id="scroll-container" className="w-2/3 overflow-y-auto p-10 space-y-12">
        {children}
      </main>
    </div>
  );
}
