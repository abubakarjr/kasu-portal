import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Dashboard.module.css";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <PageNav />
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.description}>
            Welcome to your student dashboard! Manage your profile, track course
            progress, and explore more features.
          </p>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Student Profile</h3>
              <p>View and update your personal details.</p>
              <Link to="/profile" className={styles.cardLink}>
                Go to Profile
              </Link>
            </div>

            <div className={styles.card}>
              <h3>Courses Registered</h3>
              <p>Review your registered courses.</p>
              <Link to="/courses" className={styles.cardLink}>
                View Courses
              </Link>
            </div>

            <div className={styles.card}>
              <h3>Current Result</h3>
              <p>Check your latest academic results.</p>
              <Link to="/results" className={styles.cardLink}>
                View Results
              </Link>
            </div>

            <div className={styles.card}>
              <h3>Examination</h3>
              <p>Access exam schedules and details.</p>
              <Link to="/examination" className={styles.cardLink}>
                View Examination
              </Link>
            </div>

            <div className={styles.card}>
              <h3>Accommodation</h3>
              <p>Manage your on-campus accommodation.</p>
              <Link to="/accommodation" className={styles.cardLink}>
                Manage Accommodation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
