import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { REEL_IMAGES } from '../../assests_imports';
import { Grid } from '@mui/material';

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
    <Grid container spacing={0}>
      {reelInfo?.set.main?.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Image src={item} layout='responsive' priority />
        </Grid>
      ))}
      {reelInfo?.set.grey?.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Image src={item} layout='responsive' priority />
        </Grid>
      ))}
      {reelInfo?.set.video && (
        <Grid item xs={12}>
          {reelInfo.set.video.slice(-3) === 'gif' ? (
            <img src={reelInfo.set.video} />
          ) : (
            <video autoPlay muted>
              <source src={reelInfo.set.video} type='video/mp4' />
            </video>
          )}
        </Grid>
      )}
    </Grid>
  );
}
