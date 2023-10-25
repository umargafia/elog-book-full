import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';

export default function AdminTabs({ header, body1, body2 }) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = { fontSize: '3rem' };

  return (
    <Box sx={{ width: '100%', marginTop: '1rem', background: '#eee' }}>
      <Typography
        variant="h3"
        textAlign={'center'}
        color="gray"
        margin={'2rem'}
        textTransform="capitalize"
      >
        {header}
      </Typography>
      <Box
        sx={{
          width: '90%',
          margin: '0 auto',
          fontSize: '4rem',
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Students" value="1" sx={tabStyle} />
              <Tab label="Staffs" value="2" sx={tabStyle} />
            </TabList>
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
    </Box>
  );
}
