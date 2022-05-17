import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { REEL_IMAGES } from '../pages/Assests_imports';

const Homepage = () => {
  return (
    <Grid container spacing={0}>
      {REEL_IMAGES.map((item) => (
        <Grid item xs={12} key={item.title}>
          <Link href={`/work/${item.title}`}>
            <a>
              <Image src={item.image} layout='responsive' priority />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;
