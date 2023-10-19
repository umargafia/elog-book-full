import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Shadow2 } from '../../globalCompanents/Global';

export const Names = ({ name, RegNumber, onclick }) => {
  const style = {
    main: {
      padding: 1,
      marginBottom: '2rem',
      background: 'rgba(118, 116, 116, 0.1)',
      borderRadius: '.3rem',
      transition: '1s',
      cursor: 'pointer',
      '&:hover': {
        background: 'green',
        '> *': {
          color: 'white',
        },
      },
    },
    text: {
      textTransform: 'capitalize',
    },
  };
  return (
    <Card sx={style.main} onClick={onclick}>
      <Typography variant="h3" sx={style.text} color="green" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="h4" sx={style.text} color="gray">
        {RegNumber}
      </Typography>
    </Card>
  );
};
