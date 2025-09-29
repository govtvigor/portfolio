import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-20 text-center space-y-4">
      <h1 className="text-3xl font-semibold">Сторінку не знайдено</h1>
      <p className="opacity-80">Ми не змогли знайти те, що ви шукали.</p>
      <Link href="/" className="inline-block px-4 py-2 rounded-md border border-black/10 hover:bg-black/5">
        На головну
      </Link>
    </div>
  );
}


