import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Not Found</h1>
      <p className='text-sm'>Oops! Couldn&#39;t find your page.</p>
      <div>
        <Link className="" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
