import { Typography } from '@mui/material';
import Axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import API, { LoginUser, SignUpUser } from '../../../api';
import { StudentAction } from '../../../store/studentSlice';
import {
  FormButton,
  FormStyle,
  HeadingSecondary,
} from '../../globalCompanents/Global';
import { MyInput } from '../../globalCompanents/MyInput';

export const SignUp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate('');
  const dispatch = useDispatch('');

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  //signup student
  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      name,
      email,
      password,
      passwordConfirm,
      phone: number,
      regno: regNumber,
    };

    const response = await SignUpUser({ data });

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
    <form style={FormStyle} onSubmit={handleSignup}>
      <HeadingSecondary
        text="Create an Account"
        style={{ marginBottom: '2rem', textTransform: 'unset' }}
      />
      <MyInput
        onChange={(e) => {
          setName(e.target.value);
        }}
        type={'text'}
        text="student Name"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type={'email'}
        text="Email"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type={'password'}
        text="create password"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
        }}
        type={'password'}
        text="confirm password"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type={'text'}
        text="Phone number"
        required={true}
      />
      <MyInput
        onChange={(e) => {
          setRegNumber(e.target.value);
        }}
        type={'text'}
        text="registration number"
        required={true}
      />
      {error && (
        <Typography variant="h4" textAlign={'center'} color="red" mb={1}>
          {error}
        </Typography>
      )}
      <FormButton
        text={loading ? 'loading...' : 'Create Account'}
        onClick={handleSignup}
      />
    </form>
  );
};
