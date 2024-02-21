import { Metadata } from 'next';
import Home from 'app/home-page';
import { draftMode } from 'next/headers';
import {
  currentlyDataProps,
  letterboxdRecentProps,
  spotifyListeningProps,
} from 'lib/types';
import { getRecentlyWatched } from 'lib/api/letterboxd';
import { getListeningStatus } from 'lib/api/spotify';
import { getAllWork, getBlurb } from 'lib/api/contentfulData';

export const metadta: Metadata = {
  title: "Bryan's Page Title",
};

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

async function getData() {
  const pageData = await loadHomeData();

  return pageData;
}

export default async function Page() {
  const pageData = await getData();
  const { aboutBlurb, workData, currentlyData } = pageData;
  return (
    <Home
      aboutBlurb={aboutBlurb}
      workData={workData}
      currentlyData={currentlyData}
    />
  );
}
