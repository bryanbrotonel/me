import { Metadata } from 'next';
import { Markdown } from 'app/ui/markdown';
import Currently from 'app/ui/home/currently';
import Work from 'app/ui/home/work';
import { Suspense } from 'react';
import { CurrentlySkeleton } from './ui/skeletons';
import { getBlurb } from './lib/api/contentfulData';
import { loadWorkData } from './lib/homeData';

export const metadata: Metadata = {
  title: {
    absolute: 'Bryan Brotonel',
  },
  description: 'Home page for Bryan Brotonel.',
};

export default async function Page() {
  const aboutBlurb = await getBlurb('About');
  const workData = await loadWorkData();

  return (
    <div>
      <section className='flex flex-col space-y-14'>
        {/* About */}
        <Markdown content={aboutBlurb.content} />
        {/* Currently */}
        <Suspense fallback={<CurrentlySkeleton />}>
          <Currently />
        </Suspense>
        {/* Work */}
        <Work data={workData} />
      </section>
    </div>
  );
}
