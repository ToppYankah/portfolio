export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            key={`comp-${i}`}
            className="flex min-h-screen flex-col items-center justify-center"
          >
            <h1 className="font-serif text-4xl font-bold">
              Welcome to My Portfolio
            </h1>
          </div>
        ))}
    </main>
  );
}
