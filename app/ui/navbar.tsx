import { getAsset } from 'app/lib/api/contentfulData';
import { Suspense } from 'react';
import { ProfileImageSkeleton } from './skeletons';
import ContentfulImage from './contentful-image';

export default async function Navbar() {
  const profilePicture = await getAsset('Profile Picture');

  return (
    <div className='flex flex-col md:flex-row justify-between gap-4'>
      <div className='flex row gap-4'>
        <div>
          <Suspense fallback={ProfileImageSkeleton()}>
            <ContentfulImage
              src={profilePicture.url}
              alt={profilePicture.description}
              width={56}
              height={56}
              className='rounded-full grayscale'
            />
          </Suspense>
        </div>
        <div>
          <h1 className='text-xl font-bold'>Bryan Brotonel</h1>
          <h2 className='font-darkGray text-sm'> Web Developer</h2>
        </div>
      </div>
    </div>
  );
}
