import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AddStaff } from './components/admin/AddStaff';
import { Admin } from './components/admin/Admin';
import { AdminProfile } from './components/admin/AdminProfile';
import { HomePage } from './components/homepage/HomePage';
import { StaffHome } from './components/staff/home/StaffHome';
import { StaffProfile } from './components/staff/home/StaffProfile';
import { StaffLogin } from './components/staff/login/StaffLogin';
import { AboutStudent } from './components/staff/studentSection/AboutStudent';
import { More } from './components/staff/studentSection/More';
import { StudentNote } from './components/staff/studentSection/StudentNote';
import { StaffStudentWeeks } from './components/staff/studentSection/StudentWeeks';
import { StudentHome } from './components/student/home/StudentHome';
import { StudentProfile } from './components/student/home/StudentProfile';
import { StudentLogin } from './components/student/login/StudentLogin';
import { StudentWeek } from './components/student/weeks/StudentWeek';
import { Box } from '@mui/material';

function App() {
  const { user } = useSelector((state) => state.student);

  return (
    <Box m={2} mx={10}>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={user?.role === 'student' ? <StudentHome /> : <HomePage />}
          />
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/staff" element={<StaffLogin />} />

          {/* student section */}
          <Route path="/studentHome" element={<StudentHome />} />
          <Route path="/studentProfile" element={<StudentProfile />} />
          <Route path="/studentWeek/:id" element={<StudentWeek />} />

          {/* staff section */}
          <Route path="/staffHome" element={<StaffHome />} />
          <Route path="/staffProfile" element={<StaffProfile />} />
          <Route path="/studentNote" element={<StudentNote />} />
          <Route path="/AboutStudent" element={<AboutStudent />} />
          <Route path="/staff/studentWeeks" element={<StaffStudentWeeks />} />
          <Route path="/more" element={<More />} />
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
    </Box>
  );
}

export default App;
