import qs from 'querystring';
import { spotifyListeningProps } from '../types';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
).toString('base64');

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
    next: {
      revalidate: 3600,
    },
  });

  return response.json();
};

const getNowPlaying = async (access_token: string) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  });
};

const getRecentlyPlayed = async (access_token: string) => {
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  });
};

async function createSongObject(song: any) {
  const title = song.name;
  const album = song.album.name;
  const artists = song.artists.map((artist: any) => artist.name).join(', ');
  const spotifyUrl = song.external_urls.spotify ?? null;
  const albumImageUrl = song.album.images[0]?.url ?? null;

  return {
    title,
    album,
    albumImageUrl,
    artists,
    spotifyUrl,
  };
}

export async function getListeningStatus(): Promise<spotifyListeningProps> {
  const { access_token } = await getAccessToken();
  const nowPlaying = await getNowPlaying(access_token);

  if (nowPlaying.status < 204) {
    const song = await nowPlaying.json();
    return {
      song: await createSongObject(song.item),
      isPlaying: true,
    };
  }

  const recentlyPlayed = await getRecentlyPlayed(access_token);

  if (recentlyPlayed.status < 204) {
    const data = await recentlyPlayed.json();
    const recentSong = data.items[0];
    const timestamp = recentSong.played_at?.toString();

    return {
      timestamp,
      song: await createSongObject(recentSong.track),
      isPlaying: false,
    };
  }

  // Something possibly went wrong, log the errors
  console.log('getListeningStatus ~ nowPlaying status:', nowPlaying.status);
  console.log(
    'getListeningStatus ~ recentlyPlayed status:',
    recentlyPlayed.status,
  );

  return { isPlaying: false };
}
