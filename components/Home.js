import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { REEL_IMAGES } from '../assests_imports';

const Homepage = () => {
  return (
    <Grid container spacing={0}>
      {Object.entries(REEL_IMAGES).map((item) => (
        <Grid item xs={12} key={item[1].title}>
          <Link href={`/work/${item[1].title}`}>
            <a>
              <Image src={item[1].image} layout='responsive' priority />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;
