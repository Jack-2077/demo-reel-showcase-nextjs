import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// export async function getStaticProps() {
//   const resp = await fetch(
//     'https://d3mn3tcv16754k.cloudfront.net/demo_reels.json'
//   );

//   return {
//     props: {
//       reel_images: await resp.json(),
//     },
//   };
// }

// const Home = ({ reel_images }) => {

const reel_images = [
  {
    id: 1,
    name: '01.GASSTATION/06.jpg',
    title: 'GASSTATION',
  },
];

const Home = () => {
  return (
    <>
      <section>
        <Image
          src='/assests/intro-video.gif'
          layout='responsive'
          width={1280}
          height={544}
          quality={100}
          priority
          alt='series of rendered images from Akshay Kalllikada'
        />
      </section>
      <section>
        <div className='flex-container'>
          {reel_images.map((item, i) => (
            <Link href={`/work/${item.title}`} key={item.id}>
              <a title={item.title}>
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
      </section>
    </>
  );
};

export default Home;
