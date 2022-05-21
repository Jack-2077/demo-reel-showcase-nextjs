import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

const Homepage = () => {
  return (
    <div className='flex-container'>
      {/* <Grid item xs={12}>
        <div className='grid'>
          <figure className='effect-sarah'>
            <Image src={REEL_IMAGES.GASSTATION.image} layout='responsive' />
            <figcaption>
              <h2>GASSTATION</h2>
            </figcaption>
          </figure>
        </div>
      </Grid> */}
      {REEL_TITLES.map((item) => (
        <div key={REEL_IMAGES[item].title}>
          <Link href={`/work/${REEL_IMAGES[item].title}`}>
            <a>
              <Image
                src={REEL_IMAGES[item].image}
                layout='responsive'
                priority
              />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
