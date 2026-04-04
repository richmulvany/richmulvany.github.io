export default function MainLayout({ sidebar, children }) {
  return (
    <div className="h-screen flex bg-taupe-200 text-gray-900">
      {/* Left column / sidebar */}
      <aside className="hidden md:flex md:w-1/3 flex-shrink-0 p-10 bg-stone-100">{sidebar}</aside>

      {/* Right column / main content */}
      <main className="flex md:w-2/3 h-full overflow-y-auto p-10 space-y-12">{children}</main>
    </div>
  );
}
