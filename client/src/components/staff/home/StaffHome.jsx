import { Box, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { GetAllUsers } from '../../../api';
import { HeadingTertiary } from '../../globalCompanents/Global';
import { MyAppBar } from '../../globalCompanents/MyAppBar';
import { Names } from './Names';
import { StudentProfile } from '../../student/home/StudentProfile';

export const StaffHome = () => {
  const { token } = useSelector((state) => state.student);
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await GetAllUsers({ token });
    const data = response.data.data;
    const std = [];
    data.forEach((element) => {
      if (element.role === 'student') {
        std.push(element);
      }
    });
    setStudents(std.reverse());
  };

  return (
    <Box>
      <MyAppBar />
      <Card sx={{ mt: 3, p: 1, display: 'flex' }}>
        <Card flex={1} sx={{ mr: 2 }}>
          <StudentProfile staff />
        </Card>
        <Box flex={2} height={'80vh'} overflow="scroll">
          <HeadingTertiary text={'Students'} />
          {students.map((s) => {
            return (
              <Names
                key={s._id}
                name={s.name}
                RegNumber={s.regno}
                onclick={() => {
                  navigate(`/staff/studentWeeks/${s._id}`);
                }}
              />
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};
