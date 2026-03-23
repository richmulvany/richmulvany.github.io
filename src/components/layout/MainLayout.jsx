export default function MainLayout({ sidebar, children }) {
  return (
    <div className="h-screen flex bg-gray-50 text-gray-900 font-sans">
      {/* Left column / sidebar */}
      <aside className="w-1/3 flex-shrink-0 p-10 bg-gray-50">
        {sidebar}
      </aside>

      {/* Right column / main content */}
      <main className="w-2/3 h-full overflow-y-auto p-10 space-y-12">
        {children}
      </main>
    </div>
  );
}