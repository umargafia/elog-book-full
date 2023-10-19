import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyInput } from '../../globalCompanents/MyInput';
import Tabs from '../../globalCompanents/Tabs';
import {
  HeadingSecondary,
  FormStyle,
  FormButton,
  MyBackArrow,
} from '../../globalCompanents/Global';
import { SignUp } from './SignUp';
import API, { LoginUser } from '../../../api';
import { useDispatch } from 'react-redux';
import { StudentAction } from '../../../store/studentSlice';
import Axios from 'axios';

export const StudentLogin = () => {
  return (
    <Box>
      <MyBackArrow link={'/'} />
      <Tabs header={'Student'} body1={<Login />} body2={<Signup />} />
    </Box>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: userName,
      password,
    };

    const response = await LoginUser({ data });

    if (response?.status !== 'success') {
      setLoading(false);
      setError(response?.message);
      return;
    }

    dispatch(StudentAction.login(response));
    setLoading(false);
    navigate('/studentHome');
  };

  return (
    <form style={FormStyle} onSubmit={handleLogin} autoCapitalize="off">
      <HeadingSecondary
        text="Login as a Student"
        style={{ marginBottom: '2rem', textTransform: 'unset' }}
      />

      <MyInput
        text={'Login'}
        type="text"
        required={true}
        onChange={(e) => setUsername(e.target.value)}
      />
      <MyInput
        text={'password'}
        type="password"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Typography variant="h4" mb={1} textAlign={'center'} color="red">
          {error}
        </Typography>
      )}
      <FormButton text={loading ? 'loading...' : 'Login'} />
    </form>
  );
};

function Signup() {
  return <SignUp />;
}
