import Sidebar from "./components/layout/Sidebar";
import ProjectStack from "./components/projects/ProjectStack";
import { useLayoutEffect, useEffect } from "react";

export default function App() {

  // disable browser scroll restoration
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); // instant snap
    }, 300); // let React render first
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="h-screen flex bg-taupe-200 text-gray-900 font-sans">
      {/* Left sidebar */}
      <aside className="hidden md:flex md:w-1/3 flex-shrink-0 p-10 bg-stone-100 shadow-md">
        <Sidebar />
      </aside>

      {/* Right scrollable project area */}
      <main className="w-full md:w-2/3 h-full overflow-y-auto p-4 space-y-12">
        <ProjectStack />
      </main>
    </div>
  );
}