'use client';

import Image from 'next/image';

interface ContentfulImageProps {
  src: string;
  quality?: number;
  [key: string]: any; // For other props that might be passed
}

const contentfulLoader = ({ src, quality }: ContentfulImageProps) => {
  return `${src}?&q=${quality || 75}&fm=webp`;
};

export default function ContentfulImage(props: ContentfulImageProps) {
  return <Image alt={props.alt} loader={contentfulLoader} {...props} />;
}
