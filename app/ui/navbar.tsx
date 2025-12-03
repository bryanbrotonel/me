import Link from 'next/link';

export default async function Navbar() {
  return (
    <nav aria-label='Primary' className='flex flex-row justify-between gap-4'>
      <div className='space-y-0.5 whitespace-nowrap'>
        <h1 className='font-bold'>Bryan Brotonel</h1>
        <h2 className='text-neutral-400'>Web Developer</h2>
      </div>

      <div>
        <ul className='inline-flex flex-wrap gap-3' role='list'>
          {[
            { href: 'mailto:mrbryanbrotonel@gmail.com', label: 'Email' },
            {
              href: 'https://linkedin.com/in/bryanbrotonel',
              label: 'LinkedIn',
            },
            { href: 'https://github.com/bryanbrotonel', label: 'GitHub' },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='inline-flex text-xs'
              >
                <span className='text-neutral-400 hover:text-neutral-50 hover:underline'>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
