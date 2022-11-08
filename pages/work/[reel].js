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

const test = {
  id: 1,
  name: '01.GASSTATION/06.jpg',
  year: '2020',
  role: 'Concept, Modelling, Layout, Texturing, Shading, Lighting, Compositing & color grading.',
  brief:
    'This is a personal project I did during my time at school and the objective here was to create a night scene from a reference image.',
  title: 'GASSTATION',
};

export default function Reel({ reel }) {
  const BASE_URL = `https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${reel.name}/`;
  return (
    <div className='flex-container'>
      <section>
        <div>
          <div className={styles['test']}>
            {['title', 'year', 'role', 'brief'].map((item) => (
              <div key={item} className={styles['description']}>
                <p className={styles['title']}>{item}</p>
                <p className='brief'>{test[item]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* {reel.main.map((item, i) => (
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
      )} */}
    </div>
  );
}
