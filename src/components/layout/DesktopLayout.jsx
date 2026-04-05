/**
 * Desktop layout.
 * Sidebar is fixed on the left.
 * Main content scrolls independently on the right.
 */
export default function DesktopLayout({ sidebar, children }) {
  return (
    <div className="flex h-dvh bg-taupe-200 text-gray-900">
      <aside className="w-1/3 flex-shrink-0 px-10 bg-stone-100 shadow-md h-full overflow-hidden">
        {sidebar}
      </aside>

      <main
        id="scroll-container"
        className="w-2/3 h-full overflow-y-auto p-10 space-y-12"
      >
        {children}
      </main>
    </div>
  );
}