import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Axios from 'axios';
import React, { useState } from 'react';
import API from '../../../api';

import { MyInput } from '../../globalCompanents/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { StudentAction } from '../../../store/studentSlice';

export const StudentProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.student);

  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name || '');
  const [regNo, setRegNo] = useState(user.regno || '');
  const [number, setNumber] = useState(user.phone || '');
  const [course, setCourse] = useState(user.course || '');
  const [state, setState] = useState(user.state || '');
  const [localgov, setLocalgov] = useState(user.localgov || '');
  const [organization, setOrganization] = useState(user.organization || '');

  const [error, setError] = useState(false);

  const updateUser = (e) => {
    e.preventDefault();

    if (!isUpdate) {
      setIsUpdate(true);
      return;
    }

    // if (!name || !number || !department || !course || !company) return;
    if (!name) {
      setError('company name cannot be empty');
      return;
    }

    setLoading(true);

    Axios.patch(`${API}/students/update/${user._id}`, {
      name,
      regNo,
      number,
      course,
    })
      .then((response) => {
        dispatch(StudentAction.login(response.data));
        setError('');
        setLoading(false);
        setIsUpdate(false);
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setError(message);
        setLoading(false);
      });
  };

  return (
    <Box p={2} overflow="auto" height={450}>
      <Typography textAlign="center" variant="h3" color="brown">
        {isUpdate ? 'Update' : 'Student'} Information
      </Typography>
      <Divider />
      {!isUpdate ? (
        <Box mt={3}>
          <ListItem header="name" title={user.name || 'N/A'} />
          <ListItem header="Matric No" title={user.regno || 'N/A'} />
          <ListItem header="email" title={user.email || 'N/A'} />
          <ListItem header="Phone Number" title={user.phone || 'N/A'} />
          <ListItem header="course of study" title={user.course || 'N/A'} />
          <ListItem header="State of SIWES" title={user.state || 'N/A'} />
          <ListItem header="Local Government" title={user.localgov || 'N/A'} />
          <ListItem
            header="Siwes Organization"
            title={user.organization || 'N/A'}
          />
        </Box>
      ) : (
        <Box mt={3}>
          <MyInput
            hideLebel
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            text="Student Name"
            required
          />

          <MyInput
            hideLebel
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            type="text"
            text="Registration number"
            required
          />
          <MyInput
            hideLebel
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            text="phone number"
            required
          />
          <MyInput
            hideLebel
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            type="text"
            text="Course of Study"
            required
          />
          <MyInput
            hideLebel
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            text="State of SIWES"
            required
          />

          <MyInput
            hideLebel
            value={localgov}
            onChange={(e) => setLocalgov(e.target.value)}
            type="text"
            text="Localgoverment of SIWES"
          />
          {error && (
            <Typography variant="h4" color="brown" textAlign="center">
              {error}
            </Typography>
          )}
        </Box>
      )}
      <Box>
        <Button
          variant="contained"
          onClick={updateUser}
          sx={{
            bgcolor: 'green',
            fontSize: 16,
            mt: 2,
            width: '91%',
            '&:hover': {
              opacity: 0.9,
              bgcolor: 'green',
            },
          }}
        >
          {loading ? 'Loading...' : isUpdate ? 'Save' : 'Update Infomation'}
        </Button>
        {isUpdate && (
          <Button
            variant="outlined"
            onClick={() => setIsUpdate(false)}
            sx={{
              fontSize: 16,
              mt: 2,
              width: '91%',
            }}
          >
            cancel
          </Button>
        )}
      </Box>
    </Box>
  );
};

const ListItem = ({ header, title }) => {
  return (
    <Box display="flex" m={1} flexWrap="wrap">
      <Typography variant="h4" textTransform="capitalize" color="gray" mr={1}>
        {header}:
      </Typography>
      <Typography variant="h4" fontWeight="bold" textTransform="capitalize">
        {title}
      </Typography>
    </Box>
  );
};
