import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* <p className={styles.tagline}>Growing roots, one berry at a time.</p> */}
        <div className={styles.links}>
          <a href="/berries">Berries</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </div>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} BerryLand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
