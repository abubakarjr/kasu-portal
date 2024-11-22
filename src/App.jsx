import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Tuition from "./pages/Tuition";
import Examination from "./pages/Examination";
import Result from "./pages/Result";
import Accommondation from "./pages/Accommodation";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
// import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="tuition" element={<Tuition />} />
          <Route path="examination" element={<Examination />}>
            <Route path="result" element={<Result />} />
          </Route>
          {/* <Route path="result" element={<Result />} /> */}
          <Route path="accommodation" element={<Accommondation />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
