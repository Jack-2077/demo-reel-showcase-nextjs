import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const url = router.asPath;

  useEffect(() => {
    if (url === '/') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
          setShow(true);
        } else setShow(false);
      });
    }

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  const headerStyles = url !== '/' ? styles.addBgColor : '';

  return (
    <header
      className={`${styles.header} ${headerStyles} ${
        !show ? styles.removeBgColor : ''
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <a title='Akshay Kalllikada'>
              <Image
                src='/logo.png'
                alt='logo'
                layout='responsive'
                priority
                width={80}
                height={80}
              />
            </a>
          </Link>
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
      </div>
    </header>
  );
}

export default Navbar;
