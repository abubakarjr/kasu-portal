import styles from "./Profile.module.css";
import PageNav from "../components/PageNav";

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

      <div className={styles.studentProfile}>
        <div className={styles.row}>
          <h6>Name</h6>
          <h3>{name}</h3>
        </div>

        <div className={styles.row}>
          <h6>Student ID</h6>
          <p>{id}</p>
        </div>

        <div className={styles.row}>
          <h6>Email</h6>
          <p>{email}</p>
        </div>

        <div className={styles.row}>
          <h6>Enrollment Date</h6>
          <p>{formatDate(enrollmentDate)}</p>
        </div>

        <div className={styles.row}>
          <h6>Major</h6>
          <p>{major}</p>
        </div>

        {notes && (
          <div className={styles.row}>
            <h6>Notes</h6>
            <p>{notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
