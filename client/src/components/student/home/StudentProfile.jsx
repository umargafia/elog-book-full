import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { UpdateUser } from '../../../api';
import { MyInput } from '../../globalCompanents/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { StudentAction } from '../../../store/studentSlice';

export const StudentProfile = ({ staff }) => {
  const [loading, setLoading] = useState(false);
  const { user, token } = useSelector((state) => state.student);

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

  const updateUser = async (e) => {
    e.preventDefault();

    if (!isUpdate) {
      setIsUpdate(true);
      return;
    }

    if (!name || !regNo || !number) {
      setError('name, registration number or phone number  cannot be empty');
      return;
    }

    setLoading(true);

    const data = {
      name,
      regno: regNo,
      phone: number,
      course,
      state,
      localgov,
      organization,
    };

    const response = await UpdateUser({ data, token });

    console.log(response);

    if (response.status !== 'success') {
      setError(response.message);
      setLoading(false);
      return;
    }

    dispatch(StudentAction.login(response));
    setError('');
    setLoading(false);
    setIsUpdate(false);
  };

  return (
    <Box p={2} overflow="auto" height={450}>
      <Typography textAlign="center" variant="h3" color="brown">
        {isUpdate ? 'Update' : !staff ? 'Student' : 'Staff'} Information
      </Typography>
      <Divider />
      {!isUpdate ? (
        <Box mt={3}>
          <ListItem header="name" title={user.name || 'N/A'} />
          {!staff && (
            <ListItem header="Matric No" title={user.regno || 'N/A'} />
          )}
          <ListItem header="email" small title={user.email || 'N/A'} />
          <ListItem header="Phone Number" title={user.phone || 'N/A'} />

          {!staff && (
            <>
              <ListItem header="course of study" title={user.course || 'N/A'} />
              <ListItem header="State of SIWES" title={user.state || 'N/A'} />
              <ListItem
                header="Local Government"
                title={user.localgov || 'N/A'}
              />
              <ListItem
                header="Siwes Organization"
                title={user.organization || 'N/A'}
              />
            </>
          )}
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

          {!staff && (
            <MyInput
              hideLebel
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              type="text"
              text="Registration number"
              required
            />
          )}
          <MyInput
            hideLebel
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            text="phone number"
            required
          />
          {!staff && (
            <>
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
              <MyInput
                hideLebel
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                type="text"
                text="Organization"
              />
            </>
          )}
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

export const ListItem = ({ header, title, small }) => {
  return (
    <Box display="flex" m={1} flexWrap="wrap">
      <Typography variant="h4" textTransform={'capitalize'} color="gray" mr={1}>
        {header}:
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        textTransform={small ? 'lowercase' : 'capitalize'}
      >
        {title}
      </Typography>
    </Box>
  );
};
