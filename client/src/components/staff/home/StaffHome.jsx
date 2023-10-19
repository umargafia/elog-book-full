import { Box, Card } from '@mui/material';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API, { GetAllUsers } from '../../../api';
import {
  HeadingTertiary,
  MyCardStyle,
  RoundedBox,
} from '../../globalCompanents/Global';
import { MyAppBar } from '../../globalCompanents/MyAppBar';
import { Names } from './Names';
import { useSelector } from 'react-redux';
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

  const navigateToProfile = () => {
    navigate('/staffProfile');
  };
  return (
    <Box>
      <MyAppBar active={'home'} navigateToProfile={navigateToProfile} />
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
                  localStorage.setItem('id', JSON.stringify(s));
                  navigate('/staff/studentWeeks');
                }}
              />
            );
          })}
        </Box>
      </Card>
    </Box>
  );
};
