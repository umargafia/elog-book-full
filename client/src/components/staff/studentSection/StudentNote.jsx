import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { StudentWeek } from '../../student/weeks/StudentWeek';

export const StudentNote = () => {
  const { weekId } = useParams();

  return <StudentWeek staffData={{ week: weekId }} />;
};
