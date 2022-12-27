import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AddStaff } from "./components/admin/AddStaff";
import { Admin } from "./components/admin/Admin";
import { AdminProfile } from "./components/admin/AdminProfile";
import { HomePage } from "./components/homepage/HomePage";
import { StaffHome } from "./components/staff/home/StaffHome";
import { StaffProfile } from "./components/staff/home/StaffProfile";
import { StaffLogin } from "./components/staff/login/StaffLogin";
import { AboutStudent } from "./components/staff/studentSection/AboutStudent";
import { More } from "./components/staff/studentSection/More";
import { StudentNote } from "./components/staff/studentSection/StudentNote";
import { StaffStudentWeeks } from "./components/staff/studentSection/StudentWeeks";
import { StudentHome } from "./components/student/home/StudentHome";
import { StudentProfile } from "./components/student/home/StudentProfile";
import { StudentLogin } from "./components/student/login/StudentLogin";
import { StudentWeek } from "./components/student/weeks/StudentWeek";

function App() {

  const studentUser = JSON.parse(localStorage.getItem("user"));;
  const staffUser = JSON.parse(localStorage.getItem("staff"));;

  const StaffAuth = ({ children }) => {
    return staffUser ? children : <Navigate to="/staff" />;
  };

  const StudentAuth = ({ children }) => {
    return studentUser ? children : <Navigate to="/student" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/staff" element={<StaffLogin />} />

        {/* student section */}
        <Route
          path="/studentHome"
          element={
            <StudentAuth>
              <StudentHome />
            </StudentAuth>
          }
        />
        <Route
          path="/studentProfile"
          element={
            <StudentAuth>
              <StudentProfile />
            </StudentAuth>
          }
        />
        <Route
          path="/studentWeek"
          element={
            <StudentAuth>
              <StudentWeek />
            </StudentAuth>
          }
        />

        {/* staff section */}
        <Route
          path="/staffHome"
          element={
            <StaffAuth>
              <StaffHome />
            </StaffAuth>
          }
        />
        <Route
          path="/staffProfile"
          element={
            <StaffAuth>
              <StaffProfile />
            </StaffAuth>
          }
        />
        <Route
          path="/studentNote"
          element={
            <StaffAuth>
              <StudentNote />
            </StaffAuth>
          }
        />
        <Route
          path="/AboutStudent"
          element={
            <StaffAuth>
              <AboutStudent />
            </StaffAuth>
          }
        />
        <Route
          path="/staff/studentWeeks"
          element={
            <StaffAuth>
              <StaffStudentWeeks />
            </StaffAuth>
          }
        />
        <Route
          path="/more"
          element={
            <StaffAuth>
              <More />
            </StaffAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <Admin>
              <More />
            </Admin>
          }
        />
        <Route
          path="/adminProfile"
          element={
            <AdminProfile>
              <More />
            </AdminProfile>
          }
        />
        <Route
          path="/addStaff"
          element={
            <AddStaff>
              <More />
            </AddStaff>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
