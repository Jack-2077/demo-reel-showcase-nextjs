import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import { images_20 } from '../Assests_imports';

export default function Photo2021() {
  return (
    <Grid container spacing={0}>
      {images_20.map((images) =>
        images.map((image, i) => (
          <Grid item xs={12} key={i}>
            <Image src={image} layout='responsive' />
          </Grid>
        ))
      )}
    </Grid>
  );
}
