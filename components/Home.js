import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

const Homepage = () => {
  return (
    <>
      <div className='flex-container'>
        {REEL_TITLES.map((item) => (
          <div key={REEL_IMAGES[item].title} className='img__container'>
            <Link href={`/work/${REEL_IMAGES[item].title}`}>
              <a>
                <Image
                  src={REEL_IMAGES[item].image}
                  layout='responsive'
                  priority
                  className='img__img'
                />
              </a>
            </Link>
            <span className='img__background'></span>
            <span className='img__title'>{REEL_IMAGES[item].title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
