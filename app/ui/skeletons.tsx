// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent';

export function CurrentlySkeleton() {
  return (
    <div className={`flex flex-col md:flex-row gap-7`}>
      <div className='basis-1/3'>
        <CurrentlyItemSkeleton />
      </div>
      <div className='basis-1/3'>
        <CurrentlyItemSkeleton />
      </div>
      <div className='basis-1/3'>
        <CurrentlyItemSkeleton />
      </div>
    </div>
  );
}

function CurrentlyItemSkeleton() {
  return (
    <div className='md:max-w-xs'>
      <div>
        <div
          className={`${shimmer} relative overflow-hidden bg-white/10 rounded-md mb-4 w-24 h-3`}
        />
      </div>
      <div className='flex flex-row align-top gap-3'>
        <div
          className={`${shimmer} relative overflow-hidden w-16 rounded-md group-hover:scale-[1.03] transition ease-linear tran`}
        >
          <div className='bg-white/10 rounded-md w-16 h-16' />
        </div>
        <div className='ml-3 space-y-3 overflow-hidden'>
          <div
            className={`${shimmer} relative overflow-hidden bg-white/10 rounded-md w-36 h-3`}
          />
          <div
            className={`${shimmer} relative overflow-hidden bg-white/10 rounded-md w-24 h-3`}
          />
        </div>
      </div>
    </div>
  );
}

export function ProfileImageSkeleton() {
  return <div className={`w-14 h-14 ${shimmer} rounded-full`} />;
}
