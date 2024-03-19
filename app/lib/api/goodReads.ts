import { XMLParser } from 'fast-xml-parser';
import { goodReadsRecentProps } from '../types';

export const getGoodReadsData = async () => {
  const response = await fetch(
    'https://www.goodreads.com/review/list_rss/176596026?shelf=currently-reading',
    {
      method: 'GET',
      next: {
        revalidate: 86400,
      },
    },
  );

  const xmlResponse = await response.text();
  const parser = new XMLParser();
  return parser.parse(xmlResponse);
};

export async function getRecentlyRead(): Promise<goodReadsRecentProps> {
  let channelData = await getGoodReadsData();
  let recentlyRead = channelData.rss.channel.item[0];

  const title = recentlyRead['title'];
  const author = recentlyRead['author_name'];
  const imageUrl = recentlyRead['book_medium_image_url'];
  const goodReadsLink = recentlyRead['link'];

  return {
    title,
    author,
    goodReadsLink,
    imageUrl,
  };
}
