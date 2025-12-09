import ContentfulImage from 'app/ui/contentful-image';
type MediaItem = {
  contentType: string;
  url: string;
  title: string;
  sys?: { id: string };
};

type Props = {
  media: MediaItem;
};

function renderMedia(mediaItem: MediaItem) {
  const mediaType = mediaItem.contentType.split('/')[0];
  const mediaClassName =
    'h-full rounded-md object-cover';

  if (mediaType === 'image') {
    return (
      <ContentfulImage
        src={mediaItem.url}
        alt={mediaItem.title}
        width={500}
        height={500}
        className={`${mediaClassName} h-52 md:h-96`}
      />
    );
  }

  if (mediaType === 'video') {
    return (
      <div className='h-80'>
        <video className={mediaClassName} autoPlay muted loop playsInline>
          <source src={mediaItem.url} type={mediaItem.contentType} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return null;
}

export default function WorkMediaPreview({ media }: Props) {
  return (
    <div className='flex justify-center bg-neutral-900 rounded-md md:p-4'>
      <div className='flex justify-center'>
        {renderMedia(media)}
      </div>
    </div>
  );
}
