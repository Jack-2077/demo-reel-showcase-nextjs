import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

const Homepage = () => {
  return (
    <>
      <div className='flex-container'>
        {REEL_TITLES.map((item, i) => (
          <Link
            href={`/work/${REEL_IMAGES[item].title}`}
            key={REEL_IMAGES[item].title}
          >
            <div className='img__container'>
              <a>
                <Image
                  src={REEL_IMAGES[item].image}
                  layout='responsive'
                  priority={i < 3}
                  className='img__img'
                />
              </a>
              <span className='img__background'></span>
              <span className='img__title'>{REEL_IMAGES[item].title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Homepage;
