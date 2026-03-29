export default function MobileLayout({ children }) {
  return (
    <div className="bg-gray-50 text-gray-900">
      <main className="p-4 space-y-8">
        {children}
      </main>
    </div>
  );
}