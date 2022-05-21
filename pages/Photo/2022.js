import React from 'react';
import Image from 'next/image';

import { images_21 } from '../../assests_imports';

export default function Photo2022() {
  return (
    <div className='flex-container'>
      {images_21.map((images) =>
        images.map((image, i) => (
          <div key={i}>
            <Image src={image} layout='responsive' priority={i < 5} />
          </div>
        ))
      )}
    </div>
  );
}
