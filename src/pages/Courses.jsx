import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Courses.module.css";
import Footer from "../components/Footer";

function Courses() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState("");

  const courseOptions = [
    { code: "CS101", title: "Introduction to Programming" },
    { code: "MTH101", title: "Calculus I" },
    { code: "PHY201", title: "Physics for Engineers" },
    { code: "BIO101", title: "Biology Fundamentals" },
  ];

  const handleAddCourse = () => {
    const course = courseOptions.find((c) => c.code === currentCourse);
    if (course && !selectedCourses.some((c) => c.code === course.code)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleRegister = () => {
    alert("Courses registered successfully!");
    setSelectedCourses([]);
  };

  return (
    <div className={styles.coursesContainer}>
      <PageNav />
      <div className={styles.coursesContent}>
        <div className={styles.card}>
          <h3>Select a Course</h3>
          <select
            className={styles.dropdown}
            value={currentCourse}
            onChange={(e) => setCurrentCourse(e.target.value)}
          >
            <option value="" disabled>
              Choose a course
            </option>
            {courseOptions.map((course) => (
              <option key={course.code} value={course.code}>
                {course.title} ({course.code})
              </option>
            ))}
          </select>
          <button className={styles.actionButton} onClick={handleAddCourse}>
            Add Course
          </button>
        </div>

        <div className={styles.card}>
          <h3>Selected Courses</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.courseTable}>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourses.map((course, index) => (
                  <tr key={course.code}>
                    <td>{index + 1}</td>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                  </tr>
                ))}
                {selectedCourses.length === 0 && (
                  <tr>
                    <td colSpan="3" className={styles.noData}>
                      No courses selected
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <button
            className={styles.registerButton}
            onClick={handleRegister}
            disabled={selectedCourses.length === 0}
          >
            Register Courses
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
