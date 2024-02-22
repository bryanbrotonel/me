import { Metadata } from 'next';
import { Markdown } from 'app/ui/markdown';
import Currently from 'app/ui/home/currently';
import Work from 'app/ui/home/work';
import { Suspense } from 'react';
import { CurrentlySkeleton } from './ui/skeletons';
import { getBlurb } from './lib/api/contentfulData';

export const metadata: Metadata = {
  title: {
    absolute: 'bryan brotonel',
  },
  description: 'Home page for Bryan Brotonel.',
};

export default async function Page() {
  const aboutBlurb = await getBlurb('About');

  return (
    <div>
      <section className="flex flex-col space-y-14">
        <div>
          <h1 className="font-light text-xs text-white/50 mb-2">About</h1>
          <Markdown content={aboutBlurb.content} />
        </div>
        <div>
          <Suspense fallback={<CurrentlySkeleton />}>
            <Currently />
          </Suspense>
        </div>
        <div>
          <h1 className="font-light text-xs text-white/50 mb-4">Work</h1>
          <Work />
        </div>
      </section>
    </div>
  );
}
