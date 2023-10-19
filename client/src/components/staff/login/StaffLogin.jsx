import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API, { LoginUser } from '../../../api';
import { useDispatch } from 'react-redux';

import {
  AlqalamHeader,
  HeadingTertiary,
  MyBackArrow,
  FormButton,
} from '../../globalCompanents/Global';
import { MyInput } from '../../globalCompanents/MyInput';
import { StaffAction } from '../../../store/staffSlice';
import { StudentAction } from '../../../store/studentSlice';

export const StaffLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      password,
    };

    const response = await LoginUser({ data });

    if (response?.status !== 'success') {
      setLoading(false);
      setError(response?.message);
      return;
    }

    dispatch(StudentAction.login(response));

    const role = response.data.role;
    if (role === 'student') {
      setError('incorrect username or password ');
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate(role === 'staff' ? '/staffHome' : '/admin');
  };

  const formStyle = {
    margin: '5rem auto',
    width: '50%',
    background: 'white',
    border: '1px solid green',
    padding: '3rem',
    borderRadius: '10px',
  };
  return (
    <Box>
      <MyBackArrow link={'/'} />
      <AlqalamHeader />
      <HeadingTertiary text={'Staff login'} />
      <form style={formStyle} onSubmit={handleLogin}>
        <MyInput
          type="text"
          text="Staff ID"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          type="password"
          text="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography
            fontSize={'2rem'}
            mb={1}
            color={'brown'}
            textAlign="center"
            fontStyle={'italic'}
          >
            {error}
          </Typography>
        )}
        <FormButton text={loading ? 'loading...' : 'Login'} />
      </form>
    </Box>
  );
};
