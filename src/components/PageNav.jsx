import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaBook,
  FaMoneyBillWave,
  FaFileAlt,
  FaBuilding,
  FaSignInAlt,
  FaBars,
  FaSearch,
  FaBell,
} from "react-icons/fa"; // Icon imports
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false); // Sidebar is open by default

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      {/* Top Navbar */}
      <header className={styles.topNav}>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FaBars />
        </button>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.userProfile}>
          <FaBell className={styles.notificationIcon} />
          <img
            src="/profile.jpg"
            alt="User Profile"
            className={styles.profileImage}
          />
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          menuOpen ? styles.open : styles.closed
        }`}
      >
        <ul className={styles.menu}>
          <li>
            <NavLink to="/profile" activeClassName={styles.active}>
              <FaUser className={styles.icon} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeClassName={styles.active}>
              <FaBook className={styles.icon} />
              <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tuition" activeClassName={styles.active}>
              <FaMoneyBillWave className={styles.icon} />
              <span>Tuition</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/examination" activeClassName={styles.active}>
              <FaFileAlt className={styles.icon} />
              <span>Examination</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/accommodation" activeClassName={styles.active}>
              <FaBuilding className={styles.icon} />
              <span>Accommodation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              <FaSignInAlt className={styles.icon} />
              <span>Login</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default PageNav;
