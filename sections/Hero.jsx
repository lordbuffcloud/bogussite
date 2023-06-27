'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={'${styles.ypaddings} sm:pl-16 pl-6'}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      WhileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={'${styles.innerWidth} mx-auto flex flex-col'}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)}
        className={styles.heroHeading}>
        Bogus Photography
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
        <h1 className={styles.heroHeading}>Bogus</h1>
        <h1 className={styles.heroHeading}>Photography</h1> 
       </motion.div>
      </div> 
    </motion.div>
  </section>
);

export default Hero;
