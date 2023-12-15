import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    response.status(401).json({ message: 'Invalid method' });
  }

  const { secret } = request.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    response.status(401).json({ message: 'Invalid token' });
  }

  response.setDraftMode({ enable: true });
  response.end('Draft mode is enabled');
}
