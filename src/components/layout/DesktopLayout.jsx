export default function DesktopLayout({ sidebar, children }) {
  return (
    <div className="flex bg-taupe-200 text-gray-900">
      <aside className="w-1/3 flex-shrink-0 px-10 py-4 bg-stone-100 shadow-md">{sidebar}</aside>

      <main
        id="scroll-container"
        className="w-2/3 overflow-y-auto p-10 space-y-12"
        style={{ maxHeight: '100vh' }}
      >
        {children}
      </main>
    </div>
  );
}
