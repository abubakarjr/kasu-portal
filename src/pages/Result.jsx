import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Result.module.css";

function Result() {
  return (
    <div className={styles.resultContainer}>
      <PageNav />
      <div className={styles.resultContent}>
        <h2>Exam Results</h2>
        <p>
          Access your exam results and view your academic progress. Keep track
          of each semester’s grades and overall GPA.
        </p>
        <table className={styles.resultTable}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MAT101</td>
              <td>Calculus I</td>
              <td>A</td>
              <td>3</td>
            </tr>
            <tr>
              <td>PHY101</td>
              <td>Physics I</td>
              <td>B+</td>
              <td>4</td>
            </tr>
            {/* Additional rows as needed */}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Result;
