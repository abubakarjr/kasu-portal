import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import styles from "./Examination.module.css";

const courseOptions = [
  {
    code: "ENT402",
    title: "Venture Creation & Growth",
    type: "Core",
    units: 2,
  },
  { code: "MTH400", title: "Project", type: "Core", units: 6 },
  { code: "MTH420", title: "General Topology", type: "Core", units: 3 },
  { code: "MTH422", title: "Measure and Integration", type: "Core", units: 3 },
  { code: "MTH424", title: "Complex Analysis 2", type: "Core", units: 3 },
  {
    code: "MTH426",
    title: "Numerical Analysis II",
    type: "Elective",
    units: 3,
  },
];

const results = [
  { courseCode: "ENT402", score: 85, grade: "A", status: "Passed" },
  { courseCode: "MTH400", score: 72, grade: "B", status: "Passed" },
  { courseCode: "MTH420", score: 60, grade: "C", status: "Passed" },
  { courseCode: "MTH422", score: 48, grade: "D", status: "Failed" },
  { courseCode: "MTH424", score: 90, grade: "A", status: "Passed" },
  { courseCode: "MTH426", score: 77, grade: "B", status: "Passed" },
];

function Examination() {
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Examination Schedule</h3>
            <p>
              View your upcoming exams, dates, locations, and instructions. Make
              sure to check for any updates or changes to the schedule.
            </p>
            <div className={styles.tableWrapper}>
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
                  {courseOptions.map((course, index) => (
                    <tr key={index}>
                      <td>{course.code}</td>
                      <td>{course.title}</td>
                      <td>{`2024-08-${15 + index}`}</td> {/* Example date */}
                      <td>{`9:00 AM`}</td> {/* Example time */}
                      <td>{`Room ${index + 1}`}</td> {/* Example location */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results Table */}
          <div className={styles.card}>
            <h3>Examination Results</h3>
            <p>Check your exam results, grades, and status for each course.</p>
            <div className={styles.tableWrapper}>
              <table className={styles.examTable}>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Score</th>
                    <th>Grade</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td>{result.courseCode}</td>
                      <td>{result.score}</td>
                      <td>{result.grade}</td>
                      <td>{result.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Examination;
