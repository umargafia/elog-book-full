import { Card, Typography } from '@mui/material';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatDate from '../../../constants/formatDate';

export const StaffWeeks = ({ name, date, id }) => {
  const navigate = useNavigate();
  const style = {
    background: '#fefefe',
    width: '100%',
    p: 2,
    margin: '0 0rem 2rem 0rem',
    borderRadius: '.5rem',
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover': {
      background: 'green',
      '> *': {
        color: 'white',
      },
    },
  };

  return (
    <Card
      sx={style}
      onClick={() => {
        navigate(`/studentNote/${id}`);
      }}
    >
      <Typography
        variant="h4"
        textTransform="capitalize"
        fontWeight="bold"
        color="green"
      >
        week {name}
      </Typography>
      <Typography variant="h5" textTransform="capitalize" color="gray">
        {formatDate(date)}
      </Typography>
    </Card>
  );
};
