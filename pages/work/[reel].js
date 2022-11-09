import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Reel.module.css';

export async function getStaticPaths() {
  const resp = await fetch(
    'https://d3mn3tcv16754k.cloudfront.net/demo_reels.json'
  );
  const reels = await resp.json();

  return {
    paths: reels.map((item) => ({
      params: { reel: item.title },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `https://d3mn3tcv16754k.cloudfront.net/REELS/${params.reel}.json`
  );

  return {
    props: {
      reel: await resp.json(),
    },
  };
}

export default function Reel({ reel }) {
  const BASE_URL = `https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${reel.name}/`;
  return (
    <div className='flex-container'>
      <section className={styles['reel-info']}>
        <div className={styles['reel-info-container']}>
          {['title', 'year', 'role', 'brief'].map((item) => (
            <div key={item} className={styles['reel-description']}>
              <p className={styles['reel-title']}>{item}</p>
              <p className={styles['reel-brief']}>{reel[item] || '-'}</p>
            </div>
          ))}
        </div>
      </section>
      {reel.main.map((item, i) => (
        <div className='image-container' key={`${item.title}-main-${i}`}>
          <Image
            src={`${BASE_URL}${item}`}
            alt={item.title}
            layout='fill'
            priority={i < 4}
            className='image-img'
          />
        </div>
      ))}
      {reel.video && (
        <div className='image-container'>
          <video autoPlay muted>
            <source src={`${BASE_URL}${reel.video}`} type='video/mp4' />
          </video>
        </div>
      )}
    </div>
  );
}
