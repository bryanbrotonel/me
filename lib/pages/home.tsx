import { getAllWork, getBlurb } from 'lib/api/contentfulData';
import { getRecentlyWatched } from 'lib/api/letterboxd';
import { getListeningStatus } from 'lib/api/spotify';
import {
  currentlyDataProps,
  letterboxdRecentProps,
  spotifyListeningProps,
} from 'lib/types';
import { GetStaticPropsContext } from 'next';

export async function loadHomeData(context: GetStaticPropsContext) {
  const aboutBlurb = await getBlurb('About');
  const workData = await getAllWork(context.draftMode);
  let currentlyData = [];

  const spotifyListeningData = await getListeningStatus();
  let spotifyData = formatSpotifyData(spotifyListeningData);
  if (spotifyData) {
    currentlyData.push(spotifyData);
  }

  const letterboxdWatchedData = await getRecentlyWatched();
  let letterboxdData = formatLetterboxdData(letterboxdWatchedData);
  if (letterboxdData) {
    currentlyData.push(letterboxdData);
  }

  return {
    aboutBlurb,
    workData,
    currentlyData,
  };
}

function formatSpotifyData(data: spotifyListeningProps): currentlyDataProps {
  if (data.song) {
    return {
      header: data.isPlaying ? 'Currently Playing' : 'Recently Played',
      content: {
        title: data.song.title,
        author: data.song.artists,
        image: data.song.albumImageUrl ?? '/images/defaultMusic.png',
        source: data.song.spotifyUrl,
      },
    };
  }

  return null;
}

function formatLetterboxdData(data: letterboxdRecentProps): currentlyDataProps {
  return {
    header: 'Recently Watched',
    content: {
      title: data.title,
      author: data.rating,
      image: data.imageUrl ?? '/images/defaultMovie.png',
      source: data.letterboxdUrl,
    },
  };
}
