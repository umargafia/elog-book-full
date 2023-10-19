import { Card, Divider, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import API, { CreateDay, getAllDays } from '../../../api';

import { Day } from './Day';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ArrowBackIos } from '@mui/icons-material';
import formatDaysFunction from '../../../constants/FromatDaysFunction';

export const StudentWeek = () => {
  // Destructure variables directly in the function signature
  const { id } = useParams();
  const { token } = useSelector((state) => state.student);
  const [days, setDays] = useState([]);

  // Use async/await in useEffect for better readability
  useEffect(() => {
    async function fetchData() {
      await handleGetWeekDetails();
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
    await handleGetWeekDetails();
  };

  // Handle fetching week details and creating days
  const handleGetWeekDetails = async () => {
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
    <Card sx={{ minHeight: '99vh', width: '100%' }}>
      <Grid container p={2}>
        <Grid xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" color="blue">
              <ArrowBackIos sx={{ fontSize: 30 }} />
              <Typography variant="h4" ml={-1}>
                Back
              </Typography>
            </Box>
            <Typography variant="h4" color="green" fontWeight="bold">
              Week 2
            </Typography>
            <Typography variant="h4" color="green">
              13 May 2023
            </Typography>
          </Box>
          <Divider />
        </Grid>
      </Grid>
    </Card>
  );
};
