import { getAllWork, getBlurb } from 'app/lib/api/contentfulData';
import { getRecentlyWatched } from 'app/lib/api/letterboxd';
import { getListeningStatus } from 'app/lib/api/spotify';
import {
  currentlyDataProps,
  letterboxdRecentProps,
  spotifyListeningProps,
} from 'app/lib/types';
import { draftMode } from 'next/headers';

export async function loadHomeData() {
  const { isEnabled } = draftMode();

  const aboutBlurb = await getBlurb('About');
  const workData = await getAllWork(isEnabled);
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
      title: data.song.title,
      subtitle: data.song.artists,
      image: data.song.albumImageUrl ?? '/images/defaultMusic.png',
      source: data.song.spotifyUrl,
    };
  }

  return null;
}

function formatLetterboxdData(data: letterboxdRecentProps): currentlyDataProps {
  return {
    header: 'Recently Watched',
    title: data.title,
    subtitle: data.rating,
    image: data.imageUrl ?? '/images/defaultMovie.png',
    source: data.letterboxdUrl,
  };
}
