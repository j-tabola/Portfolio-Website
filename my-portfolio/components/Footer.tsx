import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-2">
        <Link
          href="/contactpage"
          className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Contact
        </Link>
        <p className="text-sm text-gray-600">&copy; 2025 Jan&apos;s Portfolio™</p>
      </div>
    </footer>
  );
}
