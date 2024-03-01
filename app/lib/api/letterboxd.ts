import { XMLParser } from 'fast-xml-parser';
import { letterboxdRecentProps } from 'app/lib/types';

export const getLetterBoxdData = async () => {
  const response = await fetch('https://letterboxd.com/bryanbrotonel/rss/', {
    method: 'GET',
    next: {
      revalidate: 10800,
    },
  });

  const xmlResponse = await response.text();

  const parser = new XMLParser();
  return parser.parse(xmlResponse);
};

export async function getRecentlyWatched(): Promise<letterboxdRecentProps> {
  let channelData = await getLetterBoxdData();
  let recentlyWatched = channelData.rss.channel.item[0];

  const title = recentlyWatched['letterboxd:filmTitle'];
  const rating = formatFilmRating(recentlyWatched['letterboxd:memberRating']);
  const letterboxdUrl = recentlyWatched.link;
  const imageUrl = extractLetterboxdImage(recentlyWatched.description);

  return {
    title,
    rating,
    letterboxdUrl,
    imageUrl,
  };
}

const extractLetterboxdImage = (imageString: string): string => {
  const imgTagRegex = /<img[^>]+src="([^">]+)"/;
  const imgTagMatch = imageString.match(imgTagRegex);
  const imgSrc = imgTagMatch ? imgTagMatch[1] : null;

  return imgSrc;
};

const formatFilmRating = (rating: number): string => {
  let fullStars = Math.floor(rating);
  let halfStar = rating - fullStars >= 0.5 ? '½' : '';

  return '★'.repeat(fullStars) + halfStar;
};
