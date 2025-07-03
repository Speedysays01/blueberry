import Head from 'next/head';
import styles from '../styles/Blueberry.module.css';
import Image from 'next/image';

export default function Blueberry() {
  return (
    <>
      <Head>
        <title>Blueberry | BerryLand</title>
        <meta name="description" content="Explore our blueberry plant variety and specifications." />
      </Head>

      <main className={styles.container}>
        {/* Title with side images */}
        <div className={styles.titleWrap}>
          <Image src="/assets/blue.png" alt="blueberry left" width={50} height={50} />
          <h1 className={styles.title}>Blueberry</h1>
          <Image src="/assets/blue.png" alt="blueberry right" width={50} height={50} />
        </div>

        {/* Intro paragraph */}
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blueberries are rich in antioxidants, perfect for controlled environments and ideal for Indian climates with proper care and irrigation techniques.
        </p>


        {/* Stock image */}
        <div className={styles.varietyImageWrap}>
            <h3 className={styles.variety}>Berryland Blue</h3>
          <Image
            src={"/assets/blue2.png"}
            alt="Blueberry variety"
            width={400}
            height={250}
            className={styles.varietyImage}
          />
        </div>

        {/* Specification bullets */}
        <ul className={styles.bulletList}>
          <li>Fruit Size: Placeholder</li>
          <li>Optimal Temperature: Placeholder</li>
          <li>Soil Requirement: Placeholder</li>
          <li>Sunlight Needs: Placeholder</li>
          <li>Watering Frequency: Placeholder</li>
          <li>Fruit Yield: Placeholder</li>
          <li>Growth Duration: Placeholder</li>
          <li>Harvest Period: Placeholder</li>
        </ul>
      </main>
    </>
  );
}
