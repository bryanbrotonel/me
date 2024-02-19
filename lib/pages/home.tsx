import { getAllWork, getBlurb } from 'lib/api/contentfulData';
import { getListeningStatus } from 'lib/api/spotify';
import { GetStaticPropsContext } from 'next';

export async function loadHomeData(context: GetStaticPropsContext) {
  const aboutBlurb = await getBlurb('About');
  const workData = await getAllWork(context.draftMode);
  const spotifyListening = await getListeningStatus();

  return {
    aboutBlurb,
    workData,
    spotifyListening,
  };
}
