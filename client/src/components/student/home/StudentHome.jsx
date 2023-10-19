import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CreateWeek, GetAllWeeks, deleteWeek } from '../../../api';
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
  const { user, token } = useSelector((state) => state.student);
  const [weeks, setWeeks] = useState([]);
  const [length, setLength] = useState(0);
  const [weekName, setWeekName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getWeeks = async () => {
    const response = await GetAllWeeks({ userId: user.id, token });
    if (response.status === 'success') {
      const data = response.data;
      setWeeks(data.reverse());
      setLength(data.length);
    }
  };

  useEffect(() => {
    getWeeks();
    setWeekName(parseInt(length) + 1);
  }, [user, token, length]);

  const addWeek = () => {
    dispatch(StudentAction.model());
  };

  const createWeek = async (e) => {
    e.preventDefault();
    if (!weekName || !startDate) {
      return;
    }
    setLoading(true);
    const data = {
      name: weekName,
      startDate,
    };

    await CreateWeek({ data, token });
    getWeeks();
    dispatch(StudentAction.model());
    setLoading(false);
  };

  const HandleDeleteWeek = async (id) => {
    await deleteWeek({ token, weekId: id });
    getWeeks();
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
          <Box flex={3} height="70vh" overflow="scroll" mr={2}>
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
                      HandleDeleteWeek(w._id);
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
            <Card sx={{ height: 500, width: '40rem' }}>
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
          <MyInput
            text={'Start Data'}
            type="date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <FormButton text={loading ? 'loading' : 'create'} />
        </form>
      </Model>
      {length !== 0 && <Footer />}
    </Box>
  );
};
