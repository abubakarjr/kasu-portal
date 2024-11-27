import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import styles from "./Login.module.css";
import Footer from "../components/Footer";

export default function StudentLogin() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ studentId, password });

    // After successful login, navigate to the Dashboard page
    navigate("/dashboard"); // Redirect to dashboard page
  };

  return (
    <>
      <header className={styles.header}>
        <h1>KASU Portal</h1>
        <p>Welcome back! Please log in to access your dashboard.</p>
      </header>
      <main className={styles.login}>
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
            <button type="submit" className={(styles.btn, styles.btnPrimary)}>
              Login
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
