import styles from '../styles/Raspberry.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Raspberry = () => {
  return (
    <div className={styles.raspberryPage}>
      <div className={styles.header}>
        <Image src="/assets/rasp.png" alt="left deco" width={60} height={60} />
        <h1>Raspberry</h1>
        <Image src="/assets/rasp.png" alt="right deco" width={60} height={60} />
      </div>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla nibh eu arcu condimentum, at malesuada velit vestibulum.
      </p>

      {/* === Variety Cards === */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/assets/rasp1.png" alt="Raspberry Variety 1" width={300} height={200} />
          <h3>Variety A</h3>
          <p>A short description about Variety A. High yield and flavorful.</p>
          <Link href="/varietyA"><button className={styles.btn}>Know More</button></Link>
        </div>

        <div className={styles.card}>
          <Image src="/assets/rasp2.png" alt="Raspberry Variety 2" width={300} height={200} />
          <h3>Variety B</h3>
          <p>A short description about Variety B. Better in warmer climates.</p>
          <Link href="/varietyB"><button className={styles.btn}>Know More</button></Link>
        </div>
      </div>

      {/* === How to Choose Section === */}
      <div className={styles.guideSection} id="guide">
        <h2>How to Choose Which Variety is Best for You</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis ligula et dolor dignissim tincidunt.</p>
        <p>Curabitur sit amet turpis nec justo commodo convallis. Integer in turpis nec nunc pulvinar aliquam.</p>
        <p>Pellentesque in lacus non ligula mattis porttitor. Suspendisse imperdiet risus non sapien vehicula lacinia.</p>
        <p>Nam sed diam justo. Vivamus bibendum orci sed pulvinar pulvinar.</p>

        <button className={styles.scrollBtn} onClick={() => {
          document.querySelector(`.${styles.cards}`)?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Back to Varieties
        </button>
      </div>
    </div>
  );
};

export default Raspberry;
