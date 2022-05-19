import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

const Homepage = () => {
  return (
    <Grid container spacing={0}>
      {REEL_TITLES.map((item) => (
        <Grid item xs={12} key={REEL_IMAGES[item].title}>
          <Link href={`/work/${REEL_IMAGES[item].title}`}>
            <a>
              <Image
                src={REEL_IMAGES[item].image}
                layout='responsive'
                priority
              />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;
