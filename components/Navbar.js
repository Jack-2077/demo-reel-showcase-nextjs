import React from 'react';

import styles from '../styles/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src='/logo.png'
        alt='Kallikada logo'
        width={80}
        height={80}
      />
      <nav className={styles.navlinks}>
        <ul>
          <li>
            <Link href='/Info'>Info</Link>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a className={styles.dropbtn}>Photo</a>
              <div className={styles['dropdown-content']}>
                <Link href='/Photos/2021'>2021</Link>
                <Link href='/Photos/2022'>2022</Link>
              </div>
            </div>
          </li>
          {/* <li className={styles.dropdown}>
            <a>Photo</a>
            <ul className={styles['nav-dropdown']}>
              <li>
                <Link href='/Photos/2021'>2021</Link>
              </li>
              <li>
                <Link href='/Photos/2022'>2022</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link href='/'>Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
