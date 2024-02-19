export type workDataProps = {
  title: string;
  blurb: string;
  date: string;
  slug: string;
  stack: string[];
  websiteLink: string;
  sourceLink: string;
  coverImage: {
    title: string;
    url: string;
  };
};

export type currentlyDataProps = {
  header: string;
  content: {
    title: string;
    author: string;
    image: string;
    source: string;
  };
};

export type blurbProps = {
  title: string;
  content: any;
};

export type spotifyListeningProps = {
  isPlaying: boolean;
  timestamp?: string;
  song?: {
    title: string;
    album: string;
    albumImageUrl: string;
    artists: string;
    spotifyUrl: string;
  };
};
