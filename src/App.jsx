import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Tuition from "./pages/Tuition";
import Examination from "./pages/Examination";
import Accommodation from "./pages/Accommodation";
import Login from "./pages/Login"; // Import Login
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Set Login as the default page */}
          <Route path="/" element={<Login />} />{" "}
          <Route path="dashboard" element={<Dashboard />} />
          {/* Make Login the default page */}
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="tuition" element={<Tuition />} />
          <Route path="examination" element={<Examination />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
