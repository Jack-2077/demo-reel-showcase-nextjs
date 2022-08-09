import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const resp = await fetch(
    'https://d3mn3tcv16754k.cloudfront.net/demo_reels.json'
  );

  return {
    props: {
      reel_images: await resp.json(),
    },
  };
}

const Home = ({ reel_images }) => {
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
        {reel_images.map((item, i) => (
          <Link href={`/Work/${item.title}`} key={item.id}>
            <a>
              <div className={styles['image-container']} key={item.id}>
                <Image
                  src={`https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${item.name}`}
                  alt={item.title}
                  className={styles['image-img']}
                  layout='fill'
                  priority={i < 2}
                />
                <span className={styles['img-background']}></span>
                <span className={styles['img-title']}>
                  {item.title.replace('-', ' ')}
                </span>
              </div>
            </a>
          </Link>
        ))}
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

export default Home;
