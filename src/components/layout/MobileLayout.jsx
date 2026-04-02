import MobileHeader from "../profile/MobileHeader";

export default function MobileLayout({ children }) {
  return (
    <div className="flex flex-col gap-0 bg-taupe-200 text-gray-900">
        {/* Background */}
        <div
          className="absolute inset-4 rounded-3xl"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(245, 245, 244,1.0) 0%,
                rgba(245, 245, 244,0.1) 50%,
                rgba(245, 245, 244,0.0) 70%,
                rgba(245, 245, 244,0.1) 90%,
                rgba(245, 245, 244,1.0) 100%
              )
            `,
            backdropFilter: "blur(10px)",
          }}
        />
        <main className="px-10 py-11 space-y-8 mb-4">
            <MobileHeader />      
        </main>
        <div className="px-4">
            {children}
        </div>

    </div>
  );
}