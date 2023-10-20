import { ArrowBack, ArrowBackIos } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API, { GetAllWeeks, GetUser } from '../../../api';
import {
  FormButton,
  HeadingSecondary,
  HeadingTertiary,
  MyInfo,
} from '../../globalCompanents/Global';
import { MyAppBar } from '../../globalCompanents/MyAppBar';

import { StaffWeeks } from './StaffWeeks';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import formatDate from '../../../constants/formatDate';
import { ListItem } from '../../student/home/StudentProfile';

export const StaffStudentWeeks = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const { token } = useSelector((state) => state.student);
  const [curStudent, setCurStudent] = useState({});

  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    getWeeks();
    getStudent();
  }, []);

  const getStudent = async () => {
    const response = await GetUser({ token, userId: studentId });
    const user = response.data.data;
    setCurStudent(user);
  };

  const getWeeks = async () => {
    const response = await GetAllWeeks({ userId: studentId, token });
    if (response.status === 'success') {
      const data = response.data;
      setWeeks(data.reverse());
    }
  };

  return (
    <Card sx={{ p: 2, bgcolor: '#eeeeee', height: '90vh', overflow: 'scroll' }}>
      <Grid container>
        <Grid xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
              color="blue"
              onClick={() => navigate('/')}
              sx={{ cursor: 'pointer' }}
            >
              <ArrowBackIos sx={{ fontSize: 30 }} />
              <Typography variant="h4" ml={-1}>
                Back
              </Typography>
            </Box>
            <Typography
              variant="h4"
              color="green"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {curStudent.name}
            </Typography>
            <Typography variant="h4" color="green">
              {weeks.length} weeks
            </Typography>
          </Box>
          <Divider />
        </Grid>
        <Grid xs={12} display="flex" mt={2}>
          <Box flex={2}>
            {weeks.map((e) => {
              return (
                <StaffWeeks
                  id={e._id}
                  name={e.name}
                  date={e.startDate}
                  key={e._id}
                />
              );
            })}
          </Box>
          <Card sx={{ flex: 1, ml: 7, height: 500 }}>
            <HeadingTertiary text="Student Information" />
            <Divider />
            <ListItem header="Name" title={curStudent?.name || 'N/A'} />
            <ListItem header="email" small title={curStudent?.email || 'N/A'} />
            <ListItem
              header="registration Number"
              title={curStudent?.regno || 'N/A'}
            />
            <ListItem
              header="Phone Number"
              title={curStudent?.phone || 'N/A'}
            />
            <ListItem
              header="course of study"
              title={curStudent?.course || 'N/A'}
            />
            <ListItem
              header="State of SIWES"
              title={curStudent?.state || 'N/A'}
            />
            <ListItem
              header="Local Government"
              title={curStudent?.localgov || 'N/A'}
            />
            <ListItem
              header="Siwes Organization"
              title={curStudent?.organization || 'N/A'}
            />
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

{
  /* <Box sx={style.main}>
  <Box sx={style.left}>
    <Box sx={style.roundedBox}>
      {weeks.map((e) => {
        return <StaffWeeks name={e.name} key={e._id} />;
      })}
    </Box>
  </Box>
  <Box sx={style.right}>
    <HeadingSecondary text={'Student Information'} />
    <Box sx={style.info}>
      <MyInfo text={'name'} value={student.name} />
      <MyInfo text={'registration number'} value={student.regno} />
      <MyInfo text={'Course of study'} value={student.course} />
      <MyInfo text={'Organization'} value={student.organization} />
    </Box>

    <Box sx={style.sign}>
      <FormButton text={'More'} onClick={() => navigate('/more')} />
    </Box>
  </Box>
</Box>; */
}

const style = {
  main: {
    height: 'calc(100vh - 13rem)',
    background: 'white',
    padding: ' 0 1rem',
    display: 'flex',
    marginTop: '13rem',
    alignItems: 'center',
  },
  left: {
    flex: '1',
    borderRight: '3px solid green',
    height: '97%',
  },
  right: {
    height: '100%',
    flex: '1',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  roundedBox: {
    border: '1px solid gray',
    padding: '2rem ',
    margin: '2rem',
    height: '90%',
    borderRadius: '.5rem',
    overflow: 'auto',
  },
  info: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
