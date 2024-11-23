// import PageNav from "../components/PageNav";
// import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./Examination.module.css";
import Result from "./Result";

function Examination() {
  return (
    <div className={styles.examContainer}>
      {/* <PageNav /> */}
      <Result />
      {/* <Outlet /> */}
      <div className={styles.examContent}>
        <h2>Examination Schedule</h2>
        <p>
          View your upcoming exams, dates, locations, and instructions. Make
          sure to check for any updates or changes to the schedule.
        </p>
        <table className={styles.examTable}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MAT101</td>
              <td>Calculus I</td>
              <td>2024-08-15</td>
              <td>9:00 AM</td>
              <td>Main Hall</td>
            </tr>
            <tr>
              <td>PHY101</td>
              <td>Physics I</td>
              <td>2024-08-17</td>
              <td>11:00 AM</td>
              <td>Science Lab</td>
            </tr>
            {/* Additional rows as needed */}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Examination;
