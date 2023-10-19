import { Typography, IconButton, Card } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shadow, Shadow2 } from '../../globalCompanents/Global';
import { Delete } from '@mui/icons-material';
import formatDate from '../../../constants/formatDate';

export const StudentWeeks = ({ name, deleteAction, onClick, date }) => {
  const navigate = useNavigate();
  const style = {
    background: 'white',
    margin: '0 0rem 2rem 0rem',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: 'all .3s',
    padding: '3rem',
    display: 'flex',
    position: 'relative',
    overFlow: 'hidden',
    '&:hover': {
      background: 'green',
      '> *': {
        color: 'white',
      },
    },
  };

  const box = {
    flex: '10',
    transition: 'all 1s',

    '&:hover': {
      background: 'transparent',
      '> *': {
        color: 'white',
      },
    },
  };

  const buttonStyle = {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
  };
  return (
    <Box position="relative">
      <IconButton onClick={deleteAction} sx={buttonStyle}>
        <Delete sx={{ fontSize: '4rem' }} />
      </IconButton>
      <Card sx={style} onClick={onClick}>
        <Box sx={box}>
          <Typography
            variant="h3"
            color={'brown'}
            fontWeight="800"
            textTransform="capitalize"
          >
            Week {name}
          </Typography>
          <Typography variant="h5" color={'gray'} fontStyle="italic">
            {formatDate(date.startDate)}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
