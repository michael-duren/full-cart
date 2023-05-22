export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-8 text-gray-800 mx-6 mb-4 h-[80vh]">{children}</div>
    </>
  );
}
