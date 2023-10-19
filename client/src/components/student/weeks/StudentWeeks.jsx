import { Typography, IconButton, Card } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shadow, Shadow2 } from '../../globalCompanents/Global';
import { Delete } from '@mui/icons-material';

export const StudentWeeks = ({ name, deleteAction, onClick }) => {
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
    right: '2rem',
    top: '1rem',
  };
  return (
    <Card sx={style} onClick={onClick}>
      <IconButton onClick={deleteAction} sx={buttonStyle}>
        <Delete sx={{ fontSize: '4rem' }} />
      </IconButton>
      <Box sx={box}>
        <Typography
          variant="h3"
          color={'brown'}
          fontWeight="800"
          textTransform="capitalize"
        >
          Week {name}
        </Typography>
      </Box>
      <div style={{ flex: 1 }}></div>
    </Card>
  );
};
