import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { StudentAction } from '../../store/studentSlice';
import { Model } from '../globalCompanents/Model';
import { FormButton, HeadingSecondary } from '../globalCompanents/Global';
import { MyInput } from '../globalCompanents/MyInput';
import { SignUpUser } from '../../api';

export default function AdminTabs({ header, body1, body2 }) {
  const [value, setValue] = useState('1');
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCreateUser = () => {
    dispatch(StudentAction.model());
  };

  const tabStyle = { fontSize: '3rem' };

  async function handleSubmit() {
    if (!name || !password || !email || !role || !phone) {
      return;
    }

    if (role !== 'admin' && role !== 'staff') {
      setError('role must be either staff or admin');
      return;
    }

    setError('');
    const data = {
      name,
      password,
      passwordConfirm: password,
      email,
      role,
      phone,
    };
    const response = await SignUpUser({ data });
    if (response.status !== 'success') {
      setError(response.message);
      return;
    }
    handleCreateUser();
  }

  return (
    <Box sx={{ width: '100%', marginTop: 1, pt: 2, background: '#eee' }}>
      <Typography
        variant="h3"
        textAlign={'center'}
        color="gray"
        margin={'2rem'}
        textTransform="capitalize"
      >
        Users
      </Typography>
      <Box
        sx={{
          width: '90%',
          margin: '0 auto',
          fontSize: '4rem',
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              position: 'relative',
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Students" value="1" sx={tabStyle} />
              <Tab label="Staffs" value="2" sx={tabStyle} />
            </TabList>
            <Button
              sx={{ fontSize: 20, position: 'absolute', top: 10, right: 10 }}
              onClick={handleCreateUser}
            >
              Create User
            </Button>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                width: '100%',
                backgroundColor: '#eee',
                margin: '-2.5rem',
                padding: '3rem',
                borderRadius: '5px',
              }}
            >
              {body1}
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'white',
                margin: '-2.5rem',
                padding: '3rem',
                borderRadius: '5px',
              }}
            >
              {body2}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
      <Model>
        <HeadingSecondary text={'Create User'} />
        <Box mt={4} />
        <MyInput
          text={'Name'}
          style={{ width: '100%' }}
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          hideLebel
        />
        <MyInput
          style={{ width: '100%' }}
          text={'email'}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hideLebel
        />
        <MyInput
          style={{ width: '100%' }}
          text={'password'}
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          hideLebel
        />
        <MyInput
          style={{ width: '100%' }}
          text={'Phone Number'}
          type="number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          hideLebel
        />
        <MyInput
          style={{ width: '100%' }}
          text={'Role (i.e staff/admin)'}
          type="text"
          required
          hideLebel
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        {error && (
          <Typography variant="h4" color="brown" margin={1}>
            {error}
          </Typography>
        )}
        <FormButton
          text={loading ? 'loading' : 'create'}
          onClick={handleSubmit}
        />
      </Model>
    </Box>
  );
}
