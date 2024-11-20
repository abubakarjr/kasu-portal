import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logoContainer} aria-label="KASU Portal Home">
      <img src="/logo.png" alt="KASU Logo" className={styles.logo} />
      <span className={styles.logoText}>KASU Portal</span>
    </Link>
  );
}

export default Logo;
