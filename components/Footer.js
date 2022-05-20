import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="/about">Learn More</Link>
      </p>
    </footer>
  );
}
