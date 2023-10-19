import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import API from '../../../api';
import { StudentAction } from '../../../store/studentSlice';
import { Footer } from '../../globalCompanents/Footer';
import { FormButton, HeadingSecondary } from '../../globalCompanents/Global';
import { Model } from '../../globalCompanents/Model';
import { MyAppBar } from '../../globalCompanents/MyAppBar';
import { MyInput } from '../../globalCompanents/MyInput';
import { StudentWeeks } from '../weeks/StudentWeeks';
import { StudentProfile } from './StudentProfile';

export const StudentHome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.student);
  const [weeks, setWeeks] = useState([]);
  const [length, setLength] = useState(0);
  const [weekName, setWeekName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getWeeks();
    setWeekName(parseInt(length) + 1);
  }, [length]);

  const getWeeks = () => {
    Axios.get(`${API}/students/weeks/${user._id}`)
      .then((response) => {
        const data = response.data;
        setWeeks(data.data.weeks);
        setLength(data.noOfWeeks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addWeek = () => {
    dispatch(StudentAction.model());
  };

  const createWeek = () => {
    Axios.post(`${API}/students/createWeek`, {
      name: weekName,
      weekId: user._id,
    })
      .then(() => getWeeks())
      .catch((e) => {
        console.log(e);
      });
    dispatch(StudentAction.model());
  };

  const deleteWeek = (id) => {
    Axios.delete(`${API}/students/weeks/${id}`)
      .then(() => getWeeks())
      .catch((e) => console.log(e));
  };
  const style = {
    card: {
      padding: ' 2rem',
      mt: 2,
      height: '70vh',
      background: '#eee',
      mb: 1,
    },
  };

  const navigateToProfile = () => {
    navigate('/studentProfile');
  };
  return (
    <Box>
      <MyAppBar
        active="home"
        navigateToProfile={navigateToProfile}
        text={user.name}
        admin="create new week"
        navigateToAdmin={addWeek}
      />
      <Card sx={style.card}>
        <Box display="flex" flexWrap="wrap">
          <Box flex={3}>
            {length !== 0 ? (
              weeks.map((w) => {
                return (
                  <StudentWeeks
                    key={w._id}
                    name={w.name}
                    onClick={() => {
                      navigate(`/studentWeek/${w._id}`);
                    }}
                    deleteAction={() => {
                      deleteWeek(w._id);
                    }}
                  />
                );
              })
            ) : (
              <Box
                sx={{
                  textAlign: 'center',
                  marginTop: '15%',
                }}
              >
                <HeadingSecondary text={'no weeks'} />
                <Button
                  onClick={addWeek}
                  variant="contained"
                  style={{ background: 'green', fontSize: '1rem' }}
                >
                  add a week
                </Button>
              </Box>
            )}
          </Box>
          <Box flex={1}>
            <Card sx={{ height: 500, width: '30rem' }}>
              <StudentProfile />
            </Card>
          </Box>
        </Box>
      </Card>
      <Model>
        <HeadingSecondary text={'Week number'} />
        <form style={{ marginTop: '4rem' }} onSubmit={createWeek}>
          <MyInput
            text={'week number'}
            type="text"
            required
            value={weekName}
            onChange={(e) => setWeekName(e.target.value)}
          />
          <FormButton text={'create'} />
        </form>
      </Model>
      {length !== 0 && <Footer />}
    </Box>
  );
};
