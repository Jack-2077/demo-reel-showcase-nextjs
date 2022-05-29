import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { REEL_IMAGES } from '../../assests_imports';

export default function reel() {
  const [reelInfo, setReelInfo] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { reel } = router.query;

      const reelName = reel.replaceAll(' ', '');
      const demoReel = REEL_IMAGES[reelName];

      setReelInfo(demoReel);
    }
  }, [router.isReady]);

  return (
    <div className='flex-container'>
      {reelInfo?.set.main?.map((item, i) => (
        <div key={i}>
          <Image src={item} layout='responsive' priority={i < 2} />
        </div>
      ))}
      {reelInfo?.set.grey?.map((item, i) => (
        <div key={i}>
          <Image src={item} layout='responsive' priority={i < 2} />
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
            />
          ) : (
            <video autoPlay muted>
              <source src={reelInfo.set.video} type='video/mp4' />
            </video>
          )}
        </div>
      )}
    </div>

    // <Grid container spacing={0}>
    //   {reelInfo?.set.main?.map((item, i) => (
    //     <Grid item xs={12} key={i}>
    //       <Image src={item} layout='responsive' priority />
    //     </Grid>
    //   ))}
    //   {reelInfo?.set.grey?.map((item, i) => (
    //     <Grid item xs={12} key={i}>
    //       <Image src={item} layout='responsive' priority />
    //     </Grid>
    //   ))}

    //   {reelInfo?.set.video && (
    //     <Grid item xs={12}>
    //       {reelInfo.set.video.slice(-3) === 'gif' ? (
    //         <img src={reelInfo.set.video} />
    //       ) : (
    //         <video autoPlay muted>
    //           <source src={reelInfo.set.video} type='video/mp4' />
    //         </video>
    //       )}
    //     </Grid>
    //   )}
    // </Grid>
  );
}
