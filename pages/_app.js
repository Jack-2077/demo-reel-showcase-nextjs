import { Navbar } from '../components';
import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <motion.main
        key={router.asPath}
        variants={variants} // Pass the variant object into Framer Motion
        initial='hidden' // Set the initial state to variants.hidden
        animate='enter' // Animated state to variants.enter
        exit='exit' // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
      >
        <Component {...pageProps} />
      </motion.main>
    </>
  );
}

export default MyApp;
