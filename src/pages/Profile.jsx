import styles from "./Profile.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

function Profile() {
  return (
    <div className={(styles.profilePage, styles.scrollable)}>
      <PageNav />
      <main className={styles.profileContainer}>
        {/* Header */}
        <header className={styles.profileHeader}>
          <div className={styles.headerContent}>
            <img
              src="/profile.jpg" // Replace with your actual photo path
              alt="Abubakar Tanko"
              className={styles.profilePhoto}
            />
            <div>
              <h1>Abubakar Tanko</h1>
              <p>Matric No: KASU/18/MTH/1079</p>
              <p>Department: Mathematics</p>
              <p>Faculty: Science</p>
            </div>
          </div>
          <button className={`${styles.cta} ${styles.editProfileButton}`}>
            Edit Profile
          </button>
        </header>

        {/* Main Content */}
        <div className={styles.dashboard}>
          {/* Academic History Section */}
          <section className={styles.section}>
            <h2>Academic History</h2>
            <table className={styles.historyTable}>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Session</th>
                  <th>Programme</th>
                  <th>Level</th>
                  <th>School Fees</th>
                  <th>Course Registration</th>
                  <th>Grad. Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2023/2024</td>
                  <td>B.Sc Mathematics</td>
                  <td>400 Level</td>
                  <td>Paid</td>
                  <td>Registered</td>
                  <td>Not Graduated</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2022/2023</td>
                  <td>B.Sc Mathematics</td>
                  <td>300 Level</td>
                  <td>Paid</td>
                  <td>Registered</td>
                  <td>Not Graduated</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2021/2022</td>
                  <td>B.Sc Mathematics</td>
                  <td>200 Level</td>
                  <td>Paid</td>
                  <td>Registered</td>
                  <td>Not Graduated</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Action Section */}
          {/* <section className={styles.actionSection}>
            <h2>Quick Actions</h2>
            <div className={styles.actions}>
              <button className={`${styles.cta} ${styles.actionButton}`}>
                View Transcript
              </button>
              <button className={`${styles.cta} ${styles.actionButton}`}>
                Print Admission Letter
              </button>
              <button className={`${styles.cta} ${styles.actionButton}`}>
                Update Contact Info
              </button>
            </div>
          </section> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
