import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";

export default function StudentLogin() {
  // PRE-FILL FOR DEV PURPOSES
  const [studentId, setStudentId] = useState("KASU12345");
  const [password, setPassword] = useState("securepassword");

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <h2>Student Login</h2>

        <div className={styles.row}>
          <label htmlFor="studentId">Student ID</label>
          <input
            type="text"
            id="studentId"
            placeholder="Enter your student ID"
            onChange={(e) => setStudentId(e.target.value)}
            value={studentId}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
