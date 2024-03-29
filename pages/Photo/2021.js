import React from 'react';
import Image from 'next/image';

export async function getStaticProps() {
  const resp = await fetch(
    'https://d3mn3tcv16754k.cloudfront.net/2021-images.json'
  );

  const res = await resp.json();
  const keys = Object.keys(res);
  const images = [];
  keys.forEach((item) => {
    res[item].forEach((image) => {
      images.push(`${item}/${image}`);
    });
  });

  return {
    props: {
      images,
    },
  };
}

export default function Photo2021({ images }) {
  return (
    <div className='flex-container'>
      {images.map((image, i) => (
        <div className='image-container' key={`${image}-${i}`}>
          <Image
            src={`https://d3mn3tcv16754k.cloudfront.net/Photos/2020/${image}`}
            layout='fill'
            alt='Picture shot by Akshay Kalllikada'
            className='image-img'
            priority={i < 2}
          />
        </div>
      ))}
    </div>
  );
}
