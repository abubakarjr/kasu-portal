// import { NavLink } from "react-router-dom";
// import Logo from "./Logo";
// import styles from "./PageNav.module.css";

// function PageNav() {
//   return (
//     <nav className={styles.nav}>
//       <Logo />
//       <ul className={styles.menu}>
//         <li>
//           <NavLink to="/profile" activeClassName={styles.active}>
//             Profile
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/courses" activeClassName={styles.active}>
//             Courses
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/tuition" activeClassName={styles.active}>
//             Tuition
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/examination" activeClassName={styles.active}>
//             Examination
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/result" activeClassName={styles.active}>
//             Result
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/accommodation" activeClassName={styles.active}>
//             Accommodation
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" className={styles.ctaLink}>
//             Login
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default PageNav;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName={styles.active}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/tuition" activeClassName={styles.active}>
            Tuition
          </NavLink>
        </li>
        <li>
          <NavLink to="/examination" activeClassName={styles.active}>
            Examination
          </NavLink>
        </li>
        <li>
          <NavLink to="/result" activeClassName={styles.active}>
            Result
          </NavLink>
        </li>
        <li>
          <NavLink to="/accommodation" activeClassName={styles.active}>
            Accommodation
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
