import qs from 'querystring';
import { spotifyListeningProps } from '../types';

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
};

const getNowPlaying = async (access_token: string) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async (access_token: string) => {
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function getListeningStatus(): Promise<spotifyListeningProps> {
  const { access_token } = await getAccessToken();
  const nowPlaying = await getNowPlaying(access_token);

  if (nowPlaying.status > 204) {
    return { isPlaying: false };
  }

  if (nowPlaying.status === 204) {
    const recentlyPlayed = await getRecentlyPlayed(access_token);
    const data = await recentlyPlayed.json();
    const recentSong = data.items[0];

    const timestamp = recentSong.played_at?.toString();
    const title = recentSong.track.name;
    const album = recentSong.track.album.name;
    const artists = recentSong.track.artists
      .map((_artist: any) => _artist.name)
      .join(', ');

    let spotifyUrl = '';
    if (
      recentSong.track.external_urls &&
      recentSong.track.external_urls.length > 0
    ) {
      spotifyUrl = recentSong.track.external_urls.spotify;
    }

    let albumImageUrl = '';
    if (
      recentSong.track.album.images &&
      recentSong.track.album.images.length > 0
    ) {
      albumImageUrl = recentSong.track.album.images[0].url;
    }

    return {
      timestamp,
      song: {
        title,
        album,
        albumImageUrl,
        artists,
        spotifyUrl,
      },
      isPlaying: false,
    };
  }

  const song = await nowPlaying.json();

  const title = song.item.name;
  const album = song.item.album.name;
  const artists = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(', ');

  let spotifyUrl = '';
  if (song.item.external_urls && song.item.external_urls.length > 0) {
    spotifyUrl = song.item.external_urls.spotify;
  }

  let albumImageUrl = '';
  if (song.item.album.images && song.item.album.images.length > 0) {
    albumImageUrl = song.item.album.images[0].url;
  }

  return {
    song: {
      title,
      album,
      albumImageUrl,
      artists,
      spotifyUrl,
    },
    isPlaying: true,
  };
}
