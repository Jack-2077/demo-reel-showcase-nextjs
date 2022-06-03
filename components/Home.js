import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

import styles from '../styles/Home.module.css';
import Info from './Info';

const Homepage = () => {
  return (
    <>
      <Image
        className='test1'
        src='/assests/Videos/GIF03.gif'
        layout='responsive'
        width={1280}
        height={544}
        priority
      />
      <div className='flex-container'>
        {REEL_TITLES.map((item, i) => (
          <Link
            href={`/work/${REEL_IMAGES[item].title}`}
            key={REEL_IMAGES[item].title}
          >
            <a>
              <div className={styles['img-container']}>
                <Image
                  src={REEL_IMAGES[item].image}
                  layout='responsive'
                  priority={i < 3}
                  className={styles['img-img']}
                />

                <span className={styles['img-background']}></span>
                <span className={styles['img-title']}>
                  {REEL_IMAGES[item].title}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <Info />
    </>
  );
};

export default Homepage;
