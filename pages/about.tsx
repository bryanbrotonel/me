import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Socials from '@/components/socials';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="space-y-3">
          <p>
            Hey, my name is Bryan Brotonel and I am a Web Developer from
            Vancouver, BC. Vorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
            velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p>
            Praesent auctor purus luctus enim egestas. Scelerisque ante
            pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
            tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis
            diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
        <div className="mt-6">
          <Socials />
        </div>
      </section>
    </Layout>
  );
}
