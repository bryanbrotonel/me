import { Metadata } from 'next';
import { Markdown } from 'app/ui/markdown';
import { loadHomeData } from './lib/homeData';
import Currently from 'app/ui/home/currently';
import Work from 'app/ui/home/work';

export const metadta: Metadata = {
  title: "Bryan's Page Title",
};

export default async function Page() {
  const pageData = await loadHomeData();
  const { aboutBlurb, workData, currentlyData } = pageData;

  return (
    <div>
      <section className="flex flex-col space-y-14">
        <div>
          <h1 className="font-light text-xs text-white/50 mb-2">About</h1>
          <Markdown content={aboutBlurb.content} />
        </div>
        <div>
          <Currently currentlyData={currentlyData} />
        </div>
        <div>
          <h1 className="font-light text-xs text-white/50 mb-4">Work</h1>
          <Work workData={workData} />
        </div>
      </section>
    </div>
  );
}
