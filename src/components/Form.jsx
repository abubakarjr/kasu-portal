import { useState } from "react";
import styles from "./Form.module.css";

function CourseForm() {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [semester, setSemester] = useState("Fall");
  const [action, setAction] = useState("Add");
  const [reason, setReason] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="courseName">Course Name</label>
        <input
          id="courseName"
          onChange={(e) => setCourseName(e.target.value)}
          value={courseName}
          placeholder="e.g., Introduction to Computer Science"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="courseCode">Course Code</label>
        <input
          id="courseCode"
          onChange={(e) => setCourseCode(e.target.value)}
          value={courseCode}
          placeholder="e.g., CSC101"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="semester">Semester</label>
        <select
          id="semester"
          onChange={(e) => setSemester(e.target.value)}
          value={semester}
        >
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
      </div>

      <div className={styles.row}>
        <label htmlFor="action">Action</label>
        <select
          id="action"
          onChange={(e) => setAction(e.target.value)}
          value={action}
        >
          <option value="Add">Add Course</option>
          <option value="Drop">Drop Course</option>
        </select>
      </div>

      <div className={styles.row}>
        <label htmlFor="reason">Reason (optional)</label>
        <textarea
          id="reason"
          onChange={(e) => setReason(e.target.value)}
          value={reason}
          placeholder="Provide a reason if you're dropping the course"
        />
      </div>

      <div className={styles.buttons}>
        <button type="submit">{action} Course</button>
        <button
          type="button"
          onClick={() => {
            /* Handle back navigation */
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default CourseForm;
