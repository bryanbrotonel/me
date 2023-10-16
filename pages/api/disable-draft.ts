import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.setDraftMode({ enable: false });
  response.end('Draft mode is disabled');
}
