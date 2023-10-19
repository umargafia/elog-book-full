import { Button, Card, Divider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { updateDay, updateWeek } from '../../../api';
import { useSelector } from 'react-redux';
import formatDate from '../../../constants/formatDate';

export const Day = ({ day }) => {
  const [isUpdate, setUpdate] = useState(false);
  const { token } = useSelector((state) => state.student);
  const [note, setNote] = useState(day?.note);
  const [lastUpdate, setLastUpdate] = useState(day.updatedAt);

  const handleClick = async () => {
    if (isUpdate === false) {
      setUpdate(true);
    } else {
      const data = {
        id: day._id,
        note,
      };

      const response = await updateDay({ token, data });
      setLastUpdate(response?.data?.updatedAt);
      setUpdate(false);
    }
  };

  return (
    <Card sx={{ padding: 2, my: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          color="green"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {day?.day}
        </Typography>
        {day?.note && (
          <Typography
            variant="h5"
            color="gray"
            fontWeight="bold"
            textTransform="capitalize"
          >
            last updated: {formatDate(lastUpdate)}
          </Typography>
        )}
        <Button
          onClick={handleClick}
          sx={{
            fontSize: 20,
            background: 'green',
            '&:hover': {
              background: 'green',
              opacity: 0.9,
            },
          }}
          variant="contained"
        >
          {isUpdate ? 'Save note' : 'edit note'}
        </Button>
      </Box>
      <Divider
        sx={{
          width: '100%',
          my: 1,
        }}
      />

      {isUpdate ? (
        <TextField
          multiline
          fullWidth
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxRows={4}
          minRows={3}
          placeholder="Enter your work progress"
          size="20px"
          variant="outlined"
        />
      ) : (
        <Typography variant="h5">{note}</Typography>
      )}
    </Card>
  );
};
