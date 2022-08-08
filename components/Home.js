import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { REEL_TITLES, REEL_IMAGES } from '../assests_imports';

import styles from '../styles/Home.module.css';

// https://d3mn3tcv16754k.cloudfront.net/Photos/2020/NIGHT/NIGHT_01.jpg

const night_images = [
  'NIGHT/NIGHT_01.jpg',
  'NIGHT/NIGHT_02.jpg',
  'NIGHT/NIGHT_03.jpg',
  'NIGHT/NIGHT_04.jpg',
  'NIGHT/NIGHT_05.jpg',
  'NIGHT/NIGHT_06.jpg',
  'NIGHT/NIGHT_07.jpg',
  'NIGHT/NIGHT_08.jpg',
  'NIGHT/NIGHT_09.jpg',
  'NIGHT/NIGHT_10.jpg',
];

export function getStaticProps() {
  const home_images = [
    { name: '01.GASSTATION/06.jpg', title: 'GASSTATION' },
    { name: '03.917/917_01.jpg', title: '917' },
    { name: '11.CRITTER/01_001.JPG', title: 'CRITTER' },
    { name: '02.ATELIER/ATLR01.jpg', title: 'ATELIER' },
    {
      name: '06.HALLOWEEN/Vfx02_AkshayVenugopal_HalloweenContest_02_Colour.jpg',
      title: 'HALLOWEEN',
    },
    { name: '07.PORSCHE_SINGER/04.jpg', title: 'PORSCHESINGER' },
    {
      name: '09.RESTLESS/Vfx02AkshayVenugopal_VFXPreProdFinalModel_Class08.v001-01.jpg',
      title: 'RESTLESS',
    },
    { name: '04.VELAR/VLR_01.jpg', title: 'VELAR' },
    { name: '08.ECDYSIS721/fs_frontquarter.jpg', title: 'ROVER' },
    { name: '05.ROVER/SPACEROVER_03.jpg', title: 'SPACEROVER' },
    { name: '10.TOWNCAR/CAM_02.jpg', title: 'TOWNCAR' },
  ];
  const reel_images = [];
  home_images.map((item, i) => {
    const newReelObject = {
      source: `https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${item.name}`,
      title: item.title,
    };
    reel_images.push(newReelObject);
  });

  console.log(reel_images);

  return {
    props: {
      images: 'hey',
    },
  };
}

const Homepage = ({ images }) => {
  console.log(images);
  return (
    <>
      <Image
        src='/assests/Videos/GIF03.gif'
        layout='responsive'
        width={1280}
        height={544}
        quality={100}
        priority
        alt='series of rendered images'
      />

      <div className='flex-container'>
        {/* {reel_images.map((item, i) => (
          <div className={styles['image-container']} key={item.title}>
            <Image
              src={item.source}
              alt={item.title}
              className={styles['image-img']}
              layout='fill'
              priority={i < 2}
            />
            <span className={styles['img-background']}></span>
            <span className={styles['img-title']}>{item.title}</span>
          </div>
        ))} */}
      </div>
    </>
  );
};

{
  /* {REEL_TITLES.map((item, i) => {
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
                    alt={imageTitle}
                  />
                  <span className={styles['img-background']}></span>
                  <span className={styles['img-title']}>{imageTitle}</span>
                </div>
              </a>
            </Link>
          );
        })} */
}

export default Homepage;
