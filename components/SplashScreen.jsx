// components/SplashScreen.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../styles/SplashScreen.module.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent after animation
    }, 2000); // Duration matches total animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.splash}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
      
          <Image
            src="/assets/herocircle.png"
            alt="Berry circle wreath"
            width={500}
            height={500}
            className={styles.circleImage}
          />
         
            <Image
              src="/assets/logo.png"
              alt="BerryLand Logo"
              width={200}
              height={200}
              className={styles.logoImage}
            />
         
      </motion.div>
    </AnimatePresence>
  );
}
