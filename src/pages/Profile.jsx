import styles from "./Profile.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function Profile() {
  // TEMP DATA
  const student = {
    name: "Jane Doe",
    id: "KASU20240123",
    email: "jane.doe@example.com",
    enrollmentDate: "2022-09-01T00:00:00.000Z",
    major: "Computer Science",
    notes: "Active member of the coding club and sports team.",
  };

  const { name, id, email, enrollmentDate, major, notes } = student;

  return (
    <div className={styles.profile}>
      <PageNav />

      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            src="/path/to/kasu-logo.png"
            alt="KASU Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.headerText}>
          <h1>Kaduna State University</h1>
          <h2>ICT Directorate</h2>
          <h3>Management Information System Unit</h3>
          <h4>Student Profile</h4>
        </div>
        <div className={styles.studentPhotoWrapper}>
          <img
            src="/path/to/student-photo.jpg"
            alt="Student"
            className={styles.studentPhoto}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className={styles.tableContainer}>
        <table className={styles.studentTable}>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Student ID</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a href={`mailto:${email}`} className={styles.emailLink}>
                  {email}
                </a>
              </td>
            </tr>
            <tr>
              <th>Enrollment Date</th>
              <td>{formatDate(enrollmentDate)}</td>
            </tr>
            <tr>
              <th>Major</th>
              <td>{major}</td>
            </tr>
            {notes && (
              <tr>
                <th>Notes</th>
                <td>{notes}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
