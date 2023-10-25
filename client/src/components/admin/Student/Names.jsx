import { Delete } from '@mui/icons-material';
import { Button, Card, Collapse, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Shadow2 } from '../../globalCompanents/Global';
import { StudentInfoCard } from '../../staff/studentSection/StudentWeeks';

export const Names = ({ name, RegNumber, onclick, student }) => {
  const [expanded, setExpanded] = useState(false);
  const style = {
    main: {
      padding: 2,
      marginBottom: '2rem',
      background: '#fefefe',
      transition: '1s',
      overFlow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
    },
    text: {
      textTransform: 'uppercase',
    },
    iconButton: {
      position: 'absolute',
      top: 2,
      right: 2,
      zIndex: 30,
    },
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={style.main}>
      <Typography variant="h3" sx={style.text} color="green" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="h4" color="gray">
        {RegNumber}
      </Typography>

      <IconButton onClick={onclick} sx={style.iconButton}>
        <Delete style={{ fontSize: '4rem' }} />
      </IconButton>
      <Button variant="outlined" fullWidth onClick={handleExpandClick}>
        {expanded ? 'Hide' : 'Show more'}
      </Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <StudentInfoCard curStudent={student} staff />
      </Collapse>
    </Card>
  );
};
