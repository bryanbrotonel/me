import Link from 'next/link';

export default async function Navbar() {
  return (
    <nav aria-label='Primary' className='space-y-0.5 whitespace-nowrap'>
      <h1 className='font-bold'>Bryan Brotonel</h1>
      <h2 className='text-neutral-400'>Web Developer</h2>
    </nav>
  );
}
