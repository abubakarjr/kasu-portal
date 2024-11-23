import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import ButtonStyles from "../components/Button.Module.css"; // Importing Button styles
import PageNav from "../components/PageNav";
// import Footer from "../components/Footer";

export default function StudentLogin() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ studentId, password });
  };

  return (
    <main className={styles.login}>
      <PageNav />
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="KASU Portal Logo" />
        </div>
        <h2 className={styles.title}>Sign in</h2>
        <p className={styles.subtitle}>to continue to KASU Portal</p>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button
            type="submit"
            className={`${ButtonStyles.btn} ${ButtonStyles.primary}`}
          >
            <Link
              to="/dashboard"
              className={`${ButtonStyles.btn} ${ButtonStyles.primary}`}
            >
              Login
            </Link>
          </button>
        </form>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
