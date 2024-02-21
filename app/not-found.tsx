import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-2">
      <h1 className="font-light text-xs text-white/50 mb-2">Not Found</h1>
      <p>Oops! Couldn&#39;t find your page.</p>
      <div>
        <Link className="hover:text-white/80" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
