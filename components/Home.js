import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

import styles from '../styles/Home.module.css';

const Homepage = () => {
  return (
    <>
      <Image
        src='/assests/Videos/GIF03.gif'
        layout='responsive'
        width={1280}
        height={544}
        priority
      />
      <div className='flex-container'>
        {REEL_TITLES.map((item, i) => {
          const imageTitle = REEL_IMAGES[item].title;
          const image = REEL_IMAGES[item].image;

          return (
            <Link href={`/Work/${imageTitle}`} key={imageTitle}>
              <a>
                <div className={styles['img-container']}>
                  <Image
                    src={image}
                    layout='responsive'
                    priority={i < 2}
                    className={styles['img-img']}
                  />
                  <span className={styles['img-background']}></span>
                  <span className={styles['img-title']}>{imageTitle}</span>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
