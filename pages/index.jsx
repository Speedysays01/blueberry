import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
// import SplashScreen from "@/components/SplashScreen"; // Optional splash
// import { useState } from "react";

export default function Home() {
  // Uncomment below for splash logic
  // const [showSplash, setShowSplash] = useState(true);
  // if (showSplash) {
  //   return <SplashScreen onFinish={() => setShowSplash(false)} />;
  // }

  const berryImages = [
    "/assets/blue.png", "/assets/black.png", "/assets/rasp.png",
    "/assets/blue.png", "/assets/black.png", "/assets/rasp.png",
    "/assets/blue.png", "/assets/black.png", "/assets/rasp.png",
    "/assets/blue.png", "/assets/black.png", "/assets/rasp.png",
    "/assets/blue.png", "/assets/black.png", "/assets/rasp.png"
  ];

  const repeatedImages = [...berryImages, ...berryImages, ...berryImages, ...berryImages, ...berryImages];

  return (
    <>
      <Head>
        <title>BerryLand</title>
        <meta name="description" content="Welcome to BerryLand — where science and berries grow together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/blueberry.png" />
      </Head>

      <Navbar />

      {/* ===== Hero Section ===== */}
      <main className={styles.centerHero}>
        
        <div className={styles.logoWrap}>
  
         <Image
            src="/assets/middle.png"
            alt="Berry circle wreath"
            width={500}
            height={500}
            className={styles.top}
          />
          


<div className={styles.text}>
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          > */}
            <Image
              src="/assets/logo.png"
              alt="BerryLand Logo"
              width={200}
              height={200}
              className={styles.logoImage}
            />
          {/* </motion.div> */}

          <h2 className={styles.tagline}>Growing Legacy, One Berry at a Time.</h2>
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className={styles.contact}
        >
          <a href="/contact" className={styles.contactBtn}>Contact Us</a>
        </motion.div>


         <Image
            src="/assets/middle.png"
            alt="Berry circle wreath"
            width={500}
            height={500}
            className={styles.middle}
          />


        {/* ===== Infinite Scroll Row ===== */}
        {/* <div className={styles.scroller}>
          <div className={styles.scrollContent}>
            {repeatedImages.map((src, index) => (
              <div className={styles.scrollItem} key={index}>
                <img src={src} alt={`berry-${index}`} />
              </div>
            ))}
          </div>
        </div> */}
      </main>

      {/* ===== About Section ===== */}
      <motion.section
        id="about"
        className={styles.aboutSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.aboutContent}>
          <h2>About BerryLand</h2>
          <p>
            BerryLand is a premium tissue culture nursery focused on high-quality
            blueberry, raspberry, and blackberry plant production. We combine the
            precision of science with a love for nature to bring farmers the best.
          </p>
          <p>
            Backed by a state-of-the-art lab and experienced management, we empower
            cultivators across India with reliable berry saplings and guidance.
          </p>
        </div>
      </motion.section>
    </>
  );
}
