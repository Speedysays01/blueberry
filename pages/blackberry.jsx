import styles from "../styles/Blackberry.module.css";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

const Blackberry = () => {
  const varietyRef = useRef(null);
  const router = useRouter();

  const scrollToVarieties = () => {
    varietyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.blackberryPage}>
      <div className={styles.header}>
        <Image src="/assets/black.png" alt="Left berry deco" width={60} height={60} />
        <h1>Blackberry</h1>
        <Image src="/assets/black.png" alt="Right berry deco" width={60} height={60} />
      </div>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna ut nisi tincidunt
        tristique in sit amet diam. Pellentesque habitant morbi tristique senectus et netus.
      </p>

      <div ref={varietyRef} className={styles.varietyCards}>
        <div className={styles.card}>
          <Image src="/assets/black1.png" alt="Variety 1" width={300} height={200} />
          <h3>Blackberry A</h3>
          <p>Early fruiting, deep color, and exceptional yield.</p>
          <button onClick={() => router.push("/blackwonder")}>Know More</button>
        </div>
        <div className={styles.card}>
          <Image src="/assets/black2.png" alt="Variety 2" width={300} height={200} />
          <h3>Blackberry B</h3>
          <p>Robust growth, sweet taste, great shelf life.</p>
          <button onClick={() => router.push("/shadowpearl")}>Know More</button>
        </div>
      </div>

      <div className={styles.chooseSection}>
        <h2>How to choose the right variety?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt lectus.
        </p>
        <p>
          Climate, soil, altitude, and irrigation setup all affect your yield. Different varieties
          suit different regions.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quas qui. Excepturi nesciunt labore soluta repudiandae quos officiis animi ipsa ab, inventore rerum ipsam quia?
        </p>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas ullam ducimus nostrum error eaque iusto dolorum, temporibus quibusdam dignissimos?
        </p>
        <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, molestiae minima. Exercitationem eveniet fugiat debitis asperiores numquam expedita.
        </p>

        <button className={styles.scrollBtn} onClick={scrollToVarieties}>
          Scroll to Varieties
        </button>
      </div>
    </div>
  );
};

export default Blackberry;
