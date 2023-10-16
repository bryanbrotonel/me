import { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';
import { getPreviewWorkBySlug } from '../../lib/api';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    response.status(401).json({ message: 'Invalid method' });
  }

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    response.status(401).json({ message: 'Invalid token' });
  }

  const work = await getPreviewWorkBySlug(slug);

  if (!work) {
    response.status(401).json({ message: 'Invalid slug' });
  }

  response.setDraftMode({ enable: true });
  redirect(`/works/${work.slug}`);
}
