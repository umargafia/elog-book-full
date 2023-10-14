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
import API from '../../../api';
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

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post(`${API}/students/login`, {
      email: userName,
      password: password,
    })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        dispatch(StudentAction.login());
        setLoading(false);
        navigate('/studentHome');
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
      });
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

      <FormButton text={loading ? 'loading...' : 'Login'} />
      {error && (
        <Typography variant="h3" textAlign={'center'} color="red">
          {error}
        </Typography>
      )}
    </form>
  );
};

function Signup() {
  return <SignUp />;
}
