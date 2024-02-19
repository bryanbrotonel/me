import { getAllWork, getBlurb } from 'lib/api/contentfulData';
import { getListeningStatus } from 'lib/api/spotify';
import { currentlyDataProps } from 'lib/types';
import { GetStaticPropsContext } from 'next';

export async function loadHomeData(context: GetStaticPropsContext) {
  const aboutBlurb = await getBlurb('About');
  const workData = await getAllWork(context.draftMode);
  const spotifyListening = await getListeningStatus();
  let currentlyData = [];

  if (spotifyListening.song) {
    let spotifyCurrentlyData: currentlyDataProps = {
      header: spotifyListening.isPlaying
        ? 'Currently Playing'
        : 'Recently Played',
      content: {
        title: spotifyListening.song.title,
        author: spotifyListening.song.artists,
        image:
          spotifyListening.song.albumImageUrl ?? '/images/defaultMusic.png',
        source: spotifyListening.song.spotifyUrl,
      },
    };

    currentlyData.push(spotifyCurrentlyData);
  }

  return {
    aboutBlurb,
    workData,
    currentlyData,
  };
}
