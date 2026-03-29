export default function DesktopLayout({ sidebar, children }) {
  return (
    <div className="flex bg-gray-50 text-gray-900">
      <aside className="w-1/3 flex-shrink-0 p-10 bg-stone-100 shadow-md">
        {sidebar}
      </aside>

      <main
        id="scroll-container"
        className="w-2/3 overflow-y-auto p-10 space-y-12"
        style={{ maxHeight: "100vh" }} // 👈 controlled ONLY here
      >
        {children}
      </main>
    </div>
  );
}