import { Button, Card, Divider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { CreateDay, GetWeek, getAllDays, updateWeek } from '../../../api';
import { Day } from './Day';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ArrowBackIos } from '@mui/icons-material';
import formatDaysFunction from '../../../constants/FromatDaysFunction';
import formatDate from '../../../constants/formatDate';
import { FormButton, HeadingTertiary } from '../../globalCompanents/Global';

export const StudentWeek = ({ staffData = '' }) => {
  // Destructure variables directly in the function signature
  const { id: WeekId } = useParams();
  const { week } = staffData;
  let id;
  if (week) {
    id = week;
  } else {
    id = WeekId;
  }
  const { token } = useSelector((state) => state.student);
  const [days, setDays] = useState([]);
  const [weekInfo, setWeekInfo] = useState({ weekName: '', WeekDate: '' });
  const navigate = useNavigate();
  const [isReviewEdit, setReviewEdit] = useState(false);
  const [review, setReview] = useState('');

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
    setReview(response.data.review);
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

  const handleSubmitReview = async () => {
    const response = await updateWeek({ token, weekId: id, data: { review } });
    if (response.status === 'success') {
      setReview(response.data.review);
      setReviewEdit(false);
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
              onClick={() => navigate(-1)}
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
              <Day
                day={day}
                key={day._id}
                weekId={id}
                staffData={week ? true : false}
              />
            ))}
          </Box>
          <Box flex={1}>
            <Card sx={{ width: '100%', height: '50vh', mt: 1, ml: 1 }}>
              <HeadingTertiary text="Supervisor review" />
              <Divider></Divider>

              {!isReviewEdit ? (
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  sx={{
                    justifyContent: review ? 'space-between' : 'center',
                    alignItems: review ? 'flex-start' : 'center',
                    p: 1,
                  }}
                  height={review ? '65%' : '80%'}
                >
                  <Typography variant="h5" color="gray">
                    {review ? review : 'No Massage at the moment'}
                  </Typography>
                  {staffData && (
                    <Button
                      sx={{ fontSize: 13, alignSelf: 'center' }}
                      variant="outlined"
                      onClick={() => setReviewEdit(true)}
                    >
                      Edit review
                    </Button>
                  )}
                </Box>
              ) : (
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  height={'80%'}
                  mx={3}
                >
                  <TextField
                    multiline
                    rows={4}
                    sx={{ mb: 1, fontSize: 20 }}
                    placeholder="Write your Review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <Button
                    sx={{
                      fontSize: 13,
                      background: 'green',
                      '&:hover': {
                        background: 'green',
                        opacity: 0.9,
                      },
                    }}
                    variant="contained"
                    onClick={handleSubmitReview}
                  >
                    Save
                  </Button>
                  <Button
                    sx={{ fontSize: 13, mt: 2 }}
                    variant="outlined"
                    onClick={() => setReviewEdit(false)}
                  >
                    cancel
                  </Button>
                </Box>
              )}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
