import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Courses.module.css";
import Footer from "../components/Footer";

function Courses() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState("");

  // Array containing the course options (with code, title, and unit details)
  const courseOptions = [
    {
      code: "ENT402",
      title: "Venture Creation & Growth",
      type: "Core",
      units: 2,
    },
    { code: "MTH400", title: "Project", type: "Core", units: 6 },
    { code: "MTH420", title: "General Topology", type: "Core", units: 3 },
    {
      code: "MTH422",
      title: "Measure and Integration",
      type: "Core",
      units: 3,
    },
    { code: "MTH424", title: "Complex Analysis 2", type: "Core", units: 3 },
    {
      code: "MTH426",
      title: "Numerical Analysis II",
      type: "Elective",
      units: 3,
    },
  ];

  // Add the selected course to the selectedCourses state
  const handleAddCourse = () => {
    const course = courseOptions.find((c) => c.code === currentCourse);
    if (course && !selectedCourses.some((c) => c.code === course.code)) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // Handle course registration
  const handleRegister = () => {
    alert("Courses registered successfully!");
    setSelectedCourses([]);
  };

  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <div className={styles.content}>
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
                  {course.title} ({course.code}) - {course.type} ({course.units}{" "}
                  Units)
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
                    <th>Type</th>
                    <th>Units</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCourses.map((course, index) => (
                    <tr key={course.code}>
                      <td>{index + 1}</td>
                      <td>{course.code}</td>
                      <td>{course.title}</td>
                      <td>{course.type}</td>
                      <td>{course.units}</td>
                    </tr>
                  ))}
                  {selectedCourses.length === 0 && (
                    <tr>
                      <td colSpan="5" className={styles.noData}>
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
      </div>
      <Footer />
    </>
  );
}

export default Courses;
