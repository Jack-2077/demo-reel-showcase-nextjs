import React from 'react';
import Image from 'next/image';

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
  const cloudfrontlink = `https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${reel.name}/`;
  return (
    <div className='flex-container'>
      {reel.main.map((item, i) => (
        <div className='image-container' key={`${item.title}-main-${i}`}>
          <Image
            src={`${cloudfrontlink}${item}`}
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
            <source src={`${cloudfrontlink}${reel.video}`} type='video/mp4' />
          </video>
        </div>
      )}
    </div>
  );
}
