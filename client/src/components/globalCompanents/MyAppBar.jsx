import { AppBar, Button, List, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../images/Alqalam_university_Logo-removebg-preview.png';
import { useDispatch } from 'react-redux';
import { StudentAction } from '../../store/studentSlice';
const useStyle = makeStyles({
  appBar: {
    background: 'green',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  logo: {
    width: '7rem',
  },
  list: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    display: 'flex',
  },
});

export const MyAppBar = ({
  active,
  navigateToHome,
  navigateToProfile,
  admin,
  navigateToAdmin,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const style = useStyle();

  const listItem = {
    color: 'white',
    fontSize: '1.5rem',
    marginRight: '2rem',
    transition: 'all .2s',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  };

  const activeClass = {
    display: 'none',
  };

  const handleLogout = () => {
    dispatch(StudentAction.logout());
    navigate('/');
  };

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{ borderRadius: '3px', overflow: 'hidden' }}
      >
        <Toolbar className={style.appBar}>
          <img src={logo} alt="auk logo" className={style.logo} />
          <List className={style.list}>
            <Button
              sx={active === 'home' ? activeClass : listItem}
              onClick={navigateToHome}
            >
              Home
            </Button>
            {admin && (
              <Button
                sx={active === 'admin' ? activeClass : listItem}
                onClick={navigateToAdmin}
              >
                {admin}
              </Button>
            )}

            <Button
              sx={{ ...listItem, border: '1px solid white' }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
