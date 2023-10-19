import { Card, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import API, { CreateDay, GetWeek, getAllDays } from '../../../api';
import { Day } from './Day';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ArrowBackIos } from '@mui/icons-material';
import formatDaysFunction from '../../../constants/FromatDaysFunction';
import formatDate from '../../../constants/formatDate';
import { HeadingTertiary } from '../../globalCompanents/Global';

export const StudentWeek = () => {
  // Destructure variables directly in the function signature
  const { id } = useParams();
  const { token } = useSelector((state) => state.student);
  const [days, setDays] = useState([]);
  const [weekInfo, setWeekInfo] = useState({ weekName: '', WeekDate: '' });
  const navigate = useNavigate();

  // Use async/await in useEffect for better readability
  useEffect(() => {
    async function fetchData() {
      await handleGetWeek();
      await handleGetWeekDays();
    }
    fetchData();
  }, []);

  const daysArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Create multiple days using Promise.all for parallel execution
  const handleCreateDays = async () => {
    await Promise.all(daysArray.map((day) => handleCreateDay(day)));
    await handleGetWeekDays();
  };

  //get week details

  const handleGetWeek = async () => {
    const response = await GetWeek({ token, weekId: id });

    setWeekInfo({
      weekName: response.data.name,
      WeekDate: response.data.startDate,
    });
  };

  // Handle fetching week details and creating days
  const handleGetWeekDays = async () => {
    try {
      const response = await getAllDays({ token, weekId: id });
      if (response.status === 'success') {
        const currentWeeks = response.data;
        if (currentWeeks.length !== 0) {
          const days = formatDaysFunction(currentWeeks);
          setDays(days);
        } else {
          await handleCreateDays();
        }
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  // Handle creating a single day
  const handleCreateDay = async (day) => {
    try {
      await CreateDay({ token, data: { day, week: id } });
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <Card sx={{ minHeight: '99vh', width: '100%', background: '#eee' }}>
      <Grid container p={2}>
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
            <Typography variant="h4" color="green" fontWeight="bold">
              Week {weekInfo.weekName}
            </Typography>
            <Typography variant="h4" color="green">
              {formatDate(weekInfo.WeekDate)}
            </Typography>
          </Box>
          <Divider />
        </Grid>
        <Grid xs={12}>
          <HeadingTertiary text="Days" />
        </Grid>

        <Grid xs={12} display="flex">
          <Box flex={2}>
            {days.map((day) => (
              <Day day={day} key={day._id} weekId={id} />
            ))}
          </Box>
          <Box flex={1}>
            <Card sx={{ width: '100%', height: '50vh', mt: 1, ml: 1 }}>
              <HeadingTertiary text="Supervisor review" />
              <Divider></Divider>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={'80%'}
              >
                <Typography variant="h5" color="gray">
                  No Massage at the moment
                </Typography>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
