import {
  Gmail,
  Linkedin,
  Instagram,
  Behance,
} from '@icons-pack/react-simple-icons';
import Image from 'next/image';

import React from 'react';
import styles from '../styles/Info.module.css';
function Info() {
  return (
    <section className={styles['info-section']}>
      <h3 className={styles['info-title']}>Akshay Kallikada</h3>
      <div className={styles['info-container']}>
        <div>
          <div className={styles['circular_image']}>
            <Image
              src='/profile.jpg'
              alt='photo of Akshay Kallikada'
              quality={100}
              priority
              height={250}
              width={250}
            />
          </div>
          <div className={styles['socials-container']}>
            <a target='_blank'>
              <span>
                <Gmail className={styles['socials-gmail']} />
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/akshaykalllikadavenugopal/'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <Linkedin className={styles['socials-linkedin']} />
              </span>
            </a>
            <a
              href='https://www.instagram.com/_akshaykalllikada_/'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <Instagram className={styles['socials-instagram']} />
              </span>
            </a>
            <a
              href='https://www.behance.net/AkshayVenugopal'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <Behance className={styles['socials-behance']} />
              </span>
            </a>
          </div>
        </div>

        <div className={styles['info-text']}>
          I am a Los Angeles based 3D generalist working in visual effects for
          film and commercials. For the most part I am using 3ds max and Vray.
          On the past productions my positions were modeling lead, lighting lead
          and CG model supervisor.
        </div>
      </div>
    </section>
  );
}

export default Info;
