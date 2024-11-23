import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Links */}
        <div className={styles.links}>
          <a href="/about" className={styles.link}>
            About Us
          </a>
          <a href="/contact" className={styles.link}>
            Contact
          </a>
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.link}>
            Terms of Service
          </a>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <a
            href="https://facebook.com/abubakartanko99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </div>

        {/* Sidebar */}
        <aside1 className={styles.rightbar}></aside1>

        {/* Copyright */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} KASU Portal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
