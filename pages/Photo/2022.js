import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import { images_21 } from '../Assests_imports';

export default function Photo2022() {
  return (
    <Grid container spacing={0}>
      {images_21.map((images) =>
        images.map((image, i) => (
          <Grid item xs={12} key={i}>
            <Image src={image} layout='responsive' />
          </Grid>
        ))
      )}
    </Grid>
  );
}
