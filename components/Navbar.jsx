import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logo from "../public/assets/logo.png"; // Make sure this exists

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} alt="BerryLand logo" className={styles.logo} width={40} height={40} />
        </Link>
      </div>

      <div className={styles.menuIcon} onClick={toggleSidebar}>
        &#9776;
      </div>

      <ul className={`${styles.navLinks} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.closeIcon} onClick={closeSidebar}>&times;</div>

        <li><Link href="/" className={styles.navLink} onClick={closeSidebar}>Home</Link></li>
        <li><Link href="/berries" className={styles.navLink} onClick={closeSidebar}>Berries</Link></li>
        <li><Link href="/gallery" className={styles.navLink} onClick={closeSidebar}>Gallery</Link></li>
        <li><Link href="/blog" className={styles.navLink} onClick={closeSidebar}>Blog</Link></li>
        <li><Link href="/team" className={styles.navLink} onClick={closeSidebar}>Management</Link></li>
        <li><Link href="/contact" className={styles.navLink} onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
