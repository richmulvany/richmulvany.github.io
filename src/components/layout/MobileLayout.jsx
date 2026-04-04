import MobileHeader from '../profile/MobileHeader';

/**
 * Mobile layout.
 * Stacked layout with header and scrollable content.
 */
export default function MobileLayout({ children }) {
  return (
    <div className="flex flex-col bg-taupe-200 text-gray-900">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-4 rounded-3xl pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(245,245,244,1) 0%, rgba(245,245,244,0.1) 40%, rgba(245,245,244,0) 100%)',
        }}
      />

      <main className="px-10 py-11 space-y-8 mb-4">
        <MobileHeader />
      </main>

      <div className="px-4">{children}</div>
    </div>
  );
}