import { XMLParser } from 'fast-xml-parser';
import { letterboxdRecentProps } from 'app/lib/types';
import { timeUntilMidnight } from './helper';

export const getLetterBoxdData = async () => {
  const response = await fetch('https://letterboxd.com/bryanbrotonel/rss/', {
    method: 'GET',
    next: {
      revalidate: timeUntilMidnight(),
    },
  });

  const xmlResponse = await response.text();

  const parser = new XMLParser();
  return parser.parse(xmlResponse);
};

export async function getRecentlyWatched(): Promise<letterboxdRecentProps> {
  let channelData = await getLetterBoxdData();

  let recentlyWatched = channelData.rss.channel.item[0];

  // Split the title field into title, year, and rating parts
  const parts = recentlyWatched.title.split(' - ');

  // Extract title and year
  const titleYear = parts[0].trim();

  // Extract title (excluding the year)
  const title = titleYear.substring(0, titleYear.lastIndexOf(','));

  // Extract rating
  const ratingMatch = parts[1].match(/★+/); // Match one or more star characters (rating)
  const rating = ratingMatch ? ratingMatch[0] : ''; // If rating is found, use it, otherwise use an empty string

  const imageUrl = extractLetterboxdImage(recentlyWatched.description);

  // Create and return the movie object
  return {
    title,
    rating,
    letterboxdUrl: recentlyWatched.link,
    imageUrl,
  };
}

const extractLetterboxdImage = (imageString: string): string => {
  // Extract img tag from the HTML string
  const imgTagRegex = /<img[^>]+src="([^">]+)"/;
  const imgTagMatch = imageString.match(imgTagRegex);
  const imgSrc = imgTagMatch ? imgTagMatch[1] : null;

  return imgSrc;
};
