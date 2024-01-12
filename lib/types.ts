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

export type blurbProps = {
  title: string;
  content: any;
};
