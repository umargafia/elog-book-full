import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AlqalamHeader, HeadingSecondary, MyBackArrow } from "./Global";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function Tabs({ header, body1, body2 }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = { fontSize: "3rem" };

  return (
    <Box sx={{ width: "100%", marginBottom: "3rem" }}>
      <MyBackArrow link="/" />
      <AlqalamHeader />
      <Typography
        variant="h3"
        textAlign={"center"}
        color="gray"
        margin={"2rem"}
        textTransform="capitalize"
      >
        {header}
      </Typography>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          fontSize: "4rem",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Login" value="1" sx={tabStyle} />
              <Tab label="Sign up" value="2" sx={tabStyle} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white",
                margin: "-2.5rem",
                padding: "3rem",
                borderRadius: "5px",
              }}
            >
              {body1}
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white",
                margin: "-2.5rem",
                padding: "3rem",
                borderRadius: "5px",
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
