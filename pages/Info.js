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
      <h3 className={styles['info-title']}>zoro</h3>
      <div className={styles['info-container']}>
        <div>
          <div className={styles['circular_image']}>
            <Image
              src='/zoro.jpg'
              alt='photo of zoro'
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
              href='https://www.linkedin.com/in/zoro/'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <Linkedin className={styles['socials-linkedin']} />
              </span>
            </a>
            <a
              href='https://www.instagram.com/zoro/'
              target='_blank'
              rel='noreferrer'
            >
              <span>
                <Instagram className={styles['socials-instagram']} />
              </span>
            </a>
            <a
              href='https://www.behance.net/Zoro'
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
          Zoro is a muscular man of average height with lightly tanned skin. He
          always carries his three swords along with him, bundled up with a
          green haramaki over his right hip, allowing him to easily draw them
          with his left hand.
        </div>
      </div>
    </section>
  );
}

export default Info;
