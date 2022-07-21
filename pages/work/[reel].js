import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { REEL_IMAGES } from '../../assests_imports';

export default function Reel() {
  const [reelInfo, setReelInfo] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { reel } = router.query;

      const reelName = reel.replaceAll(' ', '');
      const demoReel = REEL_IMAGES[reelName];

      setReelInfo(demoReel);
    }
  }, [router.isReady, router.query]);

  return (
    <div className='flex-container'>
      {reelInfo?.set.main?.map((item, i) => (
        <div key={i}>
          <Image
            src={item}
            layout='responsive'
            priority={i < 2}
            alt={reelInfo.title}
          />
        </div>
      ))}
      {reelInfo?.set.grey?.map((item, i) => (
        <div key={i}>
          <Image
            src={item}
            layout='responsive'
            priority={i < 2}
            alt={reelInfo.title}
          />
        </div>
      ))}
      {reelInfo?.set.video && (
        <div>
          {reelInfo.set.video.slice(-3) === 'gif' ? (
            <Image
              src={reelInfo.set.video}
              layout='responsive'
              width={1920}
              height={1080}
              priority
              alt={reelInfo.title}
            />
          ) : (
            <video autoPlay muted>
              <source src={reelInfo.set.video} type='video/mp4' />
            </video>
          )}
        </div>
      )}
    </div>
  );
}
