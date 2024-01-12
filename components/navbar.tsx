import Link from 'next/link';
import { Envelope, GithubFill, LinkedinBoxFill } from 'akar-icons';
import ColouredButton from './colouredButton';

export default function Navbar() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">bryan brotonel</h1>
        <h2 className="font-sans text-black/50">Web Developer</h2>
      </div>
      <div className="flex gap-[0.5px] mt-2 -ml-[6px]">
        <Link
          href={'mailto:bryanbrotonel@gmail.com'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColouredButton colour={'gmail'}>
            <Envelope strokeWidth={2} size={20} />
          </ColouredButton>
        </Link>
        <Link
          href={'https://linkedin.com/in/bryanbrotonel'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColouredButton colour={'github'}>
            <GithubFill strokeWidth={2} size={20} />
          </ColouredButton>
        </Link>
        <Link
          href={'https://github.com/bryanbrotonel'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColouredButton colour={'linkedin'}>
            <LinkedinBoxFill strokeWidth={2} size={20} />
          </ColouredButton>
        </Link>
      </div>
    </div>
  );
}
