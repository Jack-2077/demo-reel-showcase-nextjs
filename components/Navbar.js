import React from 'react';

import styles from '../styles/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src='/logo.png'
          alt='Kallikada logo'
          layout='responsive'
          width={80}
          height={80}
        />
      </div>

      <nav className={styles.navlinks}>
        <ul>
          <li>
            <Link href='/Info'>Info</Link>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a className={styles.dropbtn}>
                Photo <i className={styles.arrow}></i>
              </a>
              <div className={styles['dropdown-content']}>
                <Link href='/Photo/2021'>2021</Link>
                <Link href='/Photo/2022'>2022</Link>
              </div>
            </div>
          </li>
          <li>
            <Link href='/'>Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
