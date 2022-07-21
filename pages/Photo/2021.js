import React from 'react';
import Image from 'next/image';
import { images_20 } from '../../assests_imports';

export default function Photo2021() {
  return (
    <div className='flex-container'>
      {images_20.map((images) =>
        images.map((image, i) => (
          <div key={i}>
            <Image
              src={image}
              layout='responsive'
              priority={i < 5}
              alt='photographic image'
            />
          </div>
        ))
      )}
    </div>
  );
}
