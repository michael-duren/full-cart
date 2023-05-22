export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-full relative w-full text-gray-800 min-h-screen">
        {children}
      </div>
    </>
  );
}
