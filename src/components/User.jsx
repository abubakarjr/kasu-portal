import styles from "./User.module.css";

const FAKE_STUDENT = {
  name: "Amina Yusuf",
  studentId: "KASU12345",
  email: "amina.yusuf@kasu.edu.ng",
  password: "securepassword",
  avatar: "https://i.pravatar.cc/100?u=kasu_student",
};

function StudentUser() {
  const student = FAKE_STUDENT;

  function handleLogout() {
    // Add logout functionality here
  }

  return (
    <div className={styles.user}>
      <img src={student.avatar} alt={student.name} />
      <span>
        Welcome, {student.name} (ID: {student.studentId})
      </span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default StudentUser;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
