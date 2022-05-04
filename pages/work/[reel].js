import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { REEL_IMAGES2 } from '../Assests_imports';

export default function reel() {
  const {
    query: { reel },
  } = useRouter();

  const reelName = reel.replaceAll(' ', '');
  const reelInfo = REEL_IMAGES2[reelName];

  return (
    <>
      {reelInfo.set.main.map((item, i) => (
        <Image src={item} key={i} />
      ))}
      {reelInfo.set.grey?.map((item, i) => (
        <Image src={item} key={i} />
      ))}
    </>
  );
}
