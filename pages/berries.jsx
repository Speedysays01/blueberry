import Head from 'next/head';
import styles from '../styles/Berries.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Berries() {
  return (
    <>
      <Head>
        <title>Berries | BerryLand</title>
        <meta name="description" content="Explore our range of berries at BerryLand." />
      </Head>

      <main className={styles.berriesPage}>
        <div className={styles.titleWrap}>
          <Image src="/assets/four.png" alt="left berry" width={40} height={40} className={styles.sideBerry} />
          <h1 className={styles.title}>Berries</h1>
          <Image src="/assets/four.png" alt="right berry" width={40} height={40} className={styles.sideBerry} />
        </div>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae volutpat tortor. Quisque interdum felis ut orci dictum tincidunt.
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <Image src="/assets/blue.png" alt="Blueberry" width={80} height={80} />
            <h2>Blueberry</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link href="/blueberry" className={styles.button}>Know More</Link>
          </div>

          <div className={styles.card}>
            <Image src="/assets/rasp.png" alt="Raspberry" width={80} height={80} />
            <h2>Raspberry</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link href="/raspberry" className={styles.button}>Know More</Link>
          </div>

          <div className={styles.card}>
            <Image src="/assets/black.png" alt="Blackberry" width={80} height={80} />
            <h2>Blackberry</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link href="/blackberry" className={styles.button}>Know More</Link>
          </div>
        </div>
      </main>
    </>
  );
}
