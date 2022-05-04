import React, { memo } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { REEL_IMAGES } from '../pages/Assests_imports';

const Homepage = () => {
  return (
    <Grid container spacing={0}>
      {REEL_IMAGES.map((item) => (
        <Grid item xs={12} key={item.title}>
          <Image alt='ssass' src={item.image} layout='responsive' />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(Homepage);
